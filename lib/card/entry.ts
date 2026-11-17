import { randomUUID } from "node:crypto"
import nodemailer from "nodemailer"
import type { SendMailOptions, Transporter } from "nodemailer"
import { z } from "zod"
import { card, CARD_INTERESTS, type CardInterest } from "@/config/card"

/**
 * Card entries, v1 (marketing-os docs/card-entries.md). The site emails one entry per
 * submission from its own sending account, with the JSON attached; a scheduled job on David's
 * PC pulls it from that account's All Mail into the CRM. The attachment is the record; the
 * text body is only for people. Same contract as the four venture sites, plus `interest`.
 */

export interface CardEntry {
  v: 1
  id: string
  brand: string
  crm_company: string
  event: string | null
  email: string
  name: string | null
  organization: string | null
  title: string | null
  interest: CardInterest | null
  /** The entry whose thank-you screen this visitor's link came from. Present only when valid. */
  ref?: string
  submitted_at: string
}

const EVENT_RE = /^[a-z0-9][a-z0-9-]{0,63}$/

/** The `?e=` tag: trimmed and lower-cased; anything that is not a slug becomes null. */
export function parseEvent(raw: string | string[] | null | undefined): string | null {
  const v = (Array.isArray(raw) ? raw[0] : raw)?.trim().toLowerCase()
  return v && EVENT_RE.test(v) ? v : null
}

const REF_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/

/** The `?ref=` entry id: trimmed and lower-cased; anything that is not a UUID becomes null. */
export function parseRef(raw: string | string[] | null | undefined): string | null {
  const v = (Array.isArray(raw) ? raw[0] : raw)?.trim().toLowerCase()
  return v && REF_RE.test(v) ? v : null
}

/** The event badge on the card: `heff-2026` -> `HEFF 2026`. Null when there is no event. */
export function formatEventBadge(event: string | null): string | null {
  return event ? event.replace(/-+/g, " ").trim().toUpperCase() || null : null
}

const optionalText = (max: number, label: string) =>
  z
    .string()
    .trim()
    .max(max, `${label} must be ${max} characters or fewer.`)
    .nullable()
    .optional()
    .transform((v) => (v ? v : null))

const interestValues = CARD_INTERESTS.map((i) => i.value) as [CardInterest, ...CardInterest[]]

export const cardInput = z.object({
  email: z.string().trim().toLowerCase().max(254).email("Enter a valid email address."),
  name: optionalText(120, "Name"),
  organization: optionalText(160, "Organization"),
  title: optionalText(120, "Title"),
  interest: z
    .union([z.enum(interestValues), z.literal("")])
    .nullable()
    .optional()
    .transform((v) => (v ? v : null)),
})
export type CardInput = z.infer<typeof cardInput>

export function buildCardEntry(
  input: CardInput,
  event: string | null,
  now: Date = new Date(),
  id: string = randomUUID(),
  ref: string | null = null,
): CardEntry {
  // The key is omitted, not null, unless it names another entry.
  const referrer = parseRef(ref)
  return {
    v: 1,
    id,
    brand: card.brand,
    crm_company: card.crmCompany,
    event: parseEvent(event),
    email: input.email,
    name: input.name,
    organization: input.organization,
    title: input.title,
    interest: input.interest,
    ...(referrer && referrer !== id.toLowerCase() ? { ref: referrer } : {}),
    submitted_at: now.toISOString(),
  }
}

const oneLine = (s: string) => s.replace(/[\r\n\t]+/g, " ")
const interestLabel = (v: CardInterest | null) => CARD_INTERESTS.find((i) => i.value === v)?.label ?? null

export function cardEntrySubject(entry: CardEntry): string {
  const who = oneLine(entry.name ?? entry.email)
  return `Card entry: ${who} (${card.organization})${entry.event ? ` at ${entry.event}` : ""}`
}

/**
 * David's note links (contract: marketing-os docs/card-entries.md, "Card notes"). Each is a
 * mailto addressed to the site's own SENDING account (the transport's auth user, the account the
 * PC pull reads). Never the visitor: the entry email's Reply-To is the visitor, so a plain Reply
 * would email them.
 */
export const CARD_NOTE_TAGS = ["hot", "partner", "peer"] as const

export function cardNoteLinks(entry: CardEntry, sendingAccount: string): { label: string; href: string }[] {
  const link = (label: string, tag: string | null) => ({
    label,
    href: `mailto:${sendingAccount}?subject=${encodeURIComponent(`Card note ${entry.id}${tag ? ` [${tag}]` : ""}`)}`,
  })
  return [...CARD_NOTE_TAGS.map((t) => link(t[0].toUpperCase() + t.slice(1), t)), link("Note", null)]
}

const escapeHtml = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

function cardEntryHtml(entry: CardEntry, sendingAccount: string): string {
  const buttons = cardNoteLinks(entry, sendingAccount)
    .map(
      (l) =>
        `<a href="${escapeHtml(l.href)}" style="display:inline-block;margin:0 8px 8px 0;padding:10px 16px;border-radius:6px;background:#18457c;color:#ffffff;text-decoration:none;font-weight:600">${l.label}</a>`,
    )
    .join("")
  return [
    `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1a1a1a">`,
    `<p style="margin:0 0 8px">Tag or add a note (it goes to you, not to them):</p>`,
    `<p style="margin:0 0 16px">${buttons}</p>`,
    `<pre style="font-family:inherit;white-space:pre-wrap;margin:0">${escapeHtml(cardEntryText(entry, sendingAccount))}</pre>`,
    `</div>`,
  ].join("")
}

export function cardEntryText(entry: CardEntry, sendingAccount?: string): string {
  const row = (label: string, v: string | null) => `${label}: ${v ?? "(not given)"}`
  return [
    `New card entry from the ${card.organization} conference card (${card.domain}/card).`,
    "",
    row("Name", entry.name),
    row("Email", entry.email),
    row("Organization", entry.organization),
    row("Title", entry.title),
    row("Interested in", interestLabel(entry.interest)),
    row("Event", entry.event),
    ...(entry.ref ? [`Forwarded from: ${entry.ref}`] : []),
    row("Time", entry.submitted_at),
    "",
    ...(sendingAccount
      ? [
          "Tag or add a note (goes to you, not to them):",
          ...cardNoteLinks(entry, sendingAccount).map((l) => `${l.label}: ${l.href}`),
          "",
        ]
      : []),
    "The attached card-entry.json is the record the CRM ingest reads.",
    "",
  ].join("\n")
}

/** `from` is the sending account: the transport's auth user (cardMailConfig().user), which the note links also target. */
export function composeCardEntryMail(entry: CardEntry, from: string, to: string): SendMailOptions {
  return {
    from: `"${card.organization} Website" <${from}>`,
    to,
    replyTo: entry.email,
    subject: cardEntrySubject(entry),
    text: cardEntryText(entry, from),
    html: cardEntryHtml(entry, from),
    headers: { "X-Hub-Card-Entry": "v1" },
    attachments: [
      {
        filename: "card-entry.json",
        contentType: "application/json",
        content: JSON.stringify(entry, null, 2),
      },
    ],
  }
}

export class CardMailConfigError extends Error {
  constructor() {
    super("card entry email not configured: no Gmail SMTP account (GMAIL_SMTP_USER / GMAIL_EMAIL / SMTP_USER and its app password)")
    this.name = "CardMailConfigError"
  }
}

export type MakeTransport = (auth: { user: string; pass: string }) => Pick<Transporter, "sendMail">

export const gmailTransport: MakeTransport = (auth) => nodemailer.createTransport({ service: "gmail", auth })

const firstAddress = (v: string | undefined) => {
  const first = (v ?? "").split(/[\n,;]+/).map((s) => s.trim()).find(Boolean) ?? ""
  return (first.match(/<([^<>]+)>/)?.[1] ?? first).trim()
}

/**
 * Resolves the same Gmail account and recipient as the site's contact form
 * (app/api/contact/route.ts). The card must send through Gmail, not Resend: the pull reads the
 * sending account's All Mail, and a Resend send leaves no copy there.
 */
export function cardMailConfig(env: Record<string, string | undefined>) {
  const user = firstAddress(env.GMAIL_SMTP_USER ?? env.GMAIL_EMAIL ?? env.SMTP_USER)
  const pass = (env.GMAIL_SMTP_APP_PASSWORD ?? env.GMAIL_APP_PASSWORD ?? env.SMTP_PASS)?.replace(/\s+/g, "")
  const to = firstAddress(env.CONTACT_FORWARD_TO ?? env.CONTACT_TO_EMAIL) || user || "info@coninecoastal.com"
  return user && pass ? { user, pass, to } : null
}

/** Sends one entry. Throws when unconfigured or the send fails; the caller then shows an error. */
export async function sendCardEntry(
  entry: CardEntry,
  env: Record<string, string | undefined> = process.env,
  makeTransport: MakeTransport = gmailTransport,
): Promise<void> {
  const cfg = cardMailConfig(env)
  if (!cfg) throw new CardMailConfigError()
  await makeTransport({ user: cfg.user, pass: cfg.pass }).sendMail(composeCardEntryMail(entry, cfg.user, cfg.to))
}
