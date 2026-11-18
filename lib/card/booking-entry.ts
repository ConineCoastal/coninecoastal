import type { SendMailOptions } from "nodemailer"
import { z } from "zod"
import { card } from "@/config/card"
import { CardMailConfigError, cardInput, cardMailConfig, gmailTransport, type MakeTransport } from "@/lib/card/entry"

/**
 * Card bookings, v1 (marketing-os docs/card-entries.md "Bookings"). Cal.com's "Redirect on
 * booking" lands on /card/booked with the booking's params; the page POSTs them once to
 * recordCardBooking, which emails one record through the SAME transport, sender and recipient as
 * the card entries, with card-booking.json attached for the PC pull.
 *
 * Step 9b adds the Cal.com webhook (app/api/card/booking-event): the same record, plus `status`,
 * `previous_uid` and `reason`, so a cancellation or a reschedule reaches the CRM too. The redirect
 * path always records `status: "booked"`.
 */

export type CardBookingStatus = "booked" | "cancelled" | "rescheduled"

export interface CardBooking {
  v: 1
  brand: string
  crm_company: string
  booking_uid: string
  email: string
  name: string | null
  start: string
  end: string | null
  received_at: string
  status: CardBookingStatus
  /** On a reschedule, the old booking's uid; otherwise null. */
  previous_uid: string | null
  /** The visitor's cancellation reason, trimmed and capped at 300 characters; otherwise null. */
  reason: string | null
}

export const UID_RE = /^[A-Za-z0-9_-]{6,64}$/
// ISO 8601 date-time with an explicit zone, as Cal.com forwards it.
const ISO_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d{1,9})?)?(Z|[+-]\d{2}:?\d{2})$/
const DAY_MS = 24 * 60 * 60 * 1000

const isoDate = (v: string | undefined): Date | null => {
  if (!v || !ISO_RE.test(v)) return null
  const d = new Date(v)
  return Number.isNaN(d.getTime()) ? null : d
}

/** First value of a search param; anything that is not a string becomes undefined. */
const first = (v: unknown): string | undefined => {
  const x = Array.isArray(v) ? v[0] : v
  return typeof x === "string" ? x.trim() : undefined
}

const bookingRaw = z.object({
  uid: z.string().regex(UID_RE),
  email: cardInput.shape.email,
  attendeeName: z
    .string()
    .trim()
    .max(120)
    .optional()
    .transform((v) => (v ? v : null)),
  startTime: z.string(),
  endTime: z.string().optional(),
})

export interface CardBookingParams {
  uid: string
  startTime: string
  endTime?: string
  email: string
  attendeeName?: string
}

/**
 * Validates what Cal.com forwarded. Null when anything is off: a bad uid or email, a start that is
 * not an ISO date between now minus 1 day and now plus 120 days, or an end that is not after it.
 * `startWindow: false` (a cancellation) drops the window: the start need only be a valid date.
 */
export function parseCardBooking(
  raw: Record<string, unknown> | null | undefined,
  now: Date = new Date(),
  { startWindow = true }: { startWindow?: boolean } = {},
): {
  params: CardBookingParams
  booking: Omit<CardBooking, "received_at" | "status" | "previous_uid" | "reason">
} | null {
  if (!raw || typeof raw !== "object") return null
  const endRaw = first(raw.endTime)
  const parsed = bookingRaw.safeParse({
    uid: first(raw.uid),
    email: first(raw.email),
    attendeeName: first(raw.attendeeName),
    startTime: first(raw.startTime),
    endTime: endRaw ? endRaw : undefined,
  })
  if (!parsed.success) return null
  const start = isoDate(parsed.data.startTime)
  if (!start) return null
  const t = start.getTime()
  if (startWindow && (t < now.getTime() - DAY_MS || t > now.getTime() + 120 * DAY_MS)) return null
  let end: Date | null = null
  if (parsed.data.endTime !== undefined) {
    end = isoDate(parsed.data.endTime)
    if (!end || end.getTime() <= t) return null
  }
  return {
    params: {
      uid: parsed.data.uid,
      startTime: parsed.data.startTime,
      ...(parsed.data.endTime !== undefined ? { endTime: parsed.data.endTime } : {}),
      email: parsed.data.email,
      ...(parsed.data.attendeeName ? { attendeeName: parsed.data.attendeeName } : {}),
    },
    booking: {
      v: 1,
      brand: card.brand,
      crm_company: card.crmCompany,
      booking_uid: parsed.data.uid,
      email: parsed.data.email,
      name: parsed.data.attendeeName,
      start: start.toISOString(),
      end: end ? end.toISOString() : null,
    },
  }
}

export function buildCardBooking(raw: Record<string, unknown> | null | undefined, now: Date = new Date()): CardBooking | null {
  const parsed = parseCardBooking(raw, now)
  return parsed ? { ...parsed.booking, received_at: now.toISOString(), status: "booked", previous_uid: null, reason: null } : null
}

const oneLine = (s: string) => s.replace(/[\r\n\t]+/g, " ")

const SUBJECT_PREFIX: Record<CardBookingStatus, string> = {
  booked: "Card booking",
  cancelled: "Card booking cancelled",
  rescheduled: "Card booking moved",
}

/** On a reschedule `start` is the new start. */
export function cardBookingSubject(b: CardBooking): string {
  return `${SUBJECT_PREFIX[b.status]}: ${oneLine(b.name ?? b.email)} (${card.organization}) ${b.start}`
}

const TEXT_LEAD: Record<CardBookingStatus, string> = {
  booked: "New 20-minute booking",
  cancelled: "Cancelled 20-minute booking",
  rescheduled: "Moved 20-minute booking",
}

export function cardBookingText(b: CardBooking): string {
  const row = (label: string, v: string | null) => `${label}: ${v ?? "(not given)"}`
  return [
    `${TEXT_LEAD[b.status]} from the ${card.organization} conference card (${card.domain}/card).`,
    "",
    row("Name", b.name),
    row("Email", b.email),
    row("Start", b.start),
    row("End", b.end),
    row("Booking", b.booking_uid),
    row("Status", b.status),
    ...(b.previous_uid ? [row("Replaces booking", b.previous_uid)] : []),
    ...(b.reason ? [row("Reason", oneLine(b.reason))] : []),
    row("Received", b.received_at),
    "",
    "The attached card-booking.json is the record the CRM ingest reads.",
    "",
  ].join("\n")
}

/** Reply-To is the sending account, never the visitor, so a Reply never emails them. */
export function composeCardBookingMail(b: CardBooking, from: string, to: string): SendMailOptions {
  return {
    from: `"${card.organization} Website" <${from}>`,
    to,
    replyTo: from,
    subject: cardBookingSubject(b),
    text: cardBookingText(b),
    headers: { "X-Hub-Card-Booking": "v1" },
    attachments: [
      {
        filename: "card-booking.json",
        contentType: "application/json",
        content: JSON.stringify(b, null, 2),
      },
    ],
  }
}

/** Sends one booking. Throws when unconfigured or the send fails; the caller logs it and shows nothing. */
export async function sendCardBooking(
  b: CardBooking,
  env: Record<string, string | undefined> = process.env,
  makeTransport: MakeTransport = gmailTransport,
): Promise<void> {
  const cfg = cardMailConfig(env)
  if (!cfg) throw new CardMailConfigError()
  await makeTransport({ user: cfg.user, pass: cfg.pass }).sendMail(composeCardBookingMail(b, cfg.user, cfg.to))
}
