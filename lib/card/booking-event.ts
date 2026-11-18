import { createHmac, timingSafeEqual } from "node:crypto"
import { describeError, gmailTransport, type MakeTransport } from "@/lib/card/entry"
import { UID_RE, parseCardBooking, sendCardBooking, type CardBooking, type CardBookingStatus } from "@/lib/card/booking-entry"

/**
 * Cal.com booking webhooks (step 9b, marketing-os docs/card-entries.md "Bookings"). One webhook per
 * booking type points at POST /api/card/booking-event. A verified BOOKING_CREATED, _CANCELLED or
 * _RESCHEDULED is emailed as card-booking.json through step 9's booking send; anything else is
 * acknowledged and dropped. Inert (404) until CARD_BOOKING_WEBHOOK_SECRET is set.
 */

export const MAX_BODY_BYTES = 64 * 1024
export const SIGNATURE_HEADER = "x-cal-signature-256"

const TRIGGER_STATUS: Record<string, CardBookingStatus> = {
  BOOKING_CREATED: "booked",
  BOOKING_CANCELLED: "cancelled",
  BOOKING_RESCHEDULED: "rescheduled",
}

/** True when `signature` is the lowercase hex HMAC-SHA256 of `body` keyed by `secret`. */
export function verifyCalSignature(body: string, signature: string | null | undefined, secret: string): boolean {
  if (!signature) return false
  const enc = new TextEncoder()
  const expected = enc.encode(createHmac("sha256", secret).update(body, "utf8").digest("hex"))
  const given = enc.encode(signature.trim())
  return given.length === expected.length && timingSafeEqual(given, expected)
}

const obj = (v: unknown): Record<string, unknown> | null =>
  v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : null

const str = (v: unknown): string | undefined => (typeof v === "string" ? v : undefined)

/** Trimmed and capped at 300 characters; null when absent or blank. */
export function parseReason(v: unknown): string | null {
  const s = typeof v === "string" ? v.trim() : ""
  return s ? s.slice(0, 300) : null
}

/**
 * The booking record for one Cal.com webhook envelope `{ triggerEvent, createdAt, payload }`, or
 * null when it is a trigger we do not handle (ping, test, anything else) or fails step 9's rules.
 */
export function buildCardBookingEvent(envelope: unknown, now: Date = new Date()): CardBooking | null {
  const env = obj(envelope)
  const status = env ? TRIGGER_STATUS[str(env.triggerEvent) ?? ""] : undefined
  const payload = obj(env?.payload)
  if (!status || !payload) return null
  const attendee = Array.isArray(payload.attendees) ? obj(payload.attendees[0]) : null
  const parsed = parseCardBooking(
    {
      uid: str(payload.uid),
      startTime: str(payload.startTime),
      endTime: str(payload.endTime),
      email: str(attendee?.email),
      attendeeName: str(attendee?.name),
    },
    now,
    { startWindow: status !== "cancelled" },
  )
  if (!parsed) return null
  const old = str(payload.rescheduleUid)?.trim()
  const previous_uid = status === "rescheduled" && old && UID_RE.test(old) && old !== parsed.booking.booking_uid ? old : null
  return {
    ...parsed.booking,
    received_at: now.toISOString(),
    status,
    previous_uid,
    reason: status === "booked" ? null : parseReason(payload.cancellationReason),
  }
}

export interface BookingEventDeps {
  env?: Record<string, string | undefined>
  makeTransport?: MakeTransport
  now?: () => Date
}

const json = (body: unknown, status = 200) => Response.json(body, { status })

/** The route's whole behaviour, with the env and transport injectable for tests. */
export async function handleBookingEvent(req: Request, deps: BookingEventDeps = {}): Promise<Response> {
  const env = deps.env ?? process.env
  const secret = env.CARD_BOOKING_WEBHOOK_SECRET?.trim()
  if (!secret) return new Response(null, { status: 404 })

  const declared = Number(req.headers.get("content-length") ?? "0")
  if (declared > MAX_BODY_BYTES) return json({ error: "too large" }, 413)
  const body = await req.text()
  if (Buffer.byteLength(body, "utf8") > MAX_BODY_BYTES) return json({ error: "too large" }, 413)

  if (!verifyCalSignature(body, req.headers.get(SIGNATURE_HEADER), secret)) return json({ error: "bad signature" }, 401)

  let envelope: unknown
  try {
    envelope = JSON.parse(body)
  } catch {
    return json({ ignored: true })
  }
  const booking = buildCardBookingEvent(envelope, deps.now?.() ?? new Date())
  if (!booking) return json({ ignored: true })

  try {
    await sendCardBooking(booking, env, deps.makeTransport ?? gmailTransport)
  } catch (error) {
    console.error(`[card] booking event ${booking.status} ${booking.booking_uid} not sent:`, describeError(error))
    return json({ error: "not sent" }, 500)
  }
  return json({ ok: true })
}
