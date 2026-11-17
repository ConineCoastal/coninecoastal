import type { SendMailOptions } from "nodemailer"
import { cardMailConfig, CardMailConfigError, gmailTransport, type MakeTransport } from "@/lib/card/entry"

/**
 * Badge photos from the Cards switcher (contact cards, step 5).
 *
 * At a booth David sometimes gets a badge, not a form. The switcher photographs it and posts
 * it here; this route emails it, as an attachment, to the Conine Coastal sending account (the
 * account the PC pull already reads). On the PC it becomes a badge waiting for David to type
 * the person in. The photo is NEVER stored by this site: no blob store, no public path, no
 * log of the image. The mailbox is the only copy.
 *
 * BINDING CONTRACT, mirrored in marketing-os docs/card-entries.md "Badge photos":
 *   header  X-Hub-Card-Badge: v1
 *   subject Card badge: <Brand name>[ at <event>]
 *   parts   badge.jpg (image/jpeg) + card-badge.json { v, id, brand, crm_company, event, captured_at }
 */

export const BADGE_HEADER = "X-Hub-Card-Badge"
export const BADGE_FILENAME = "badge.jpg"
export const BADGE_JSON = "card-badge.json"
/** The switcher downsizes to about 1600 px, roughly 300 KB; Vercel caps a body at 4.5 MB. */
export const MAX_BADGE_BYTES = 3_500_000

/** Switcher tile id -> the venture's card brand and CRM company (as on the /card pages). */
export const BADGE_BRANDS: Record<string, { brand: string; crm_company: string; name: string }> = {
  landmark: { brand: "landmark-logix", crm_company: "landmark-logix", name: "Landmark Logix" },
  "niner-advisors": { brand: "niner-advisors", crm_company: "niner-advisors", name: "Niner Advisors" },
  "niner-health": { brand: "niner-health", crm_company: "niner-health", name: "Niner Health" },
  ownerlogix: { brand: "ownerlogix", crm_company: "owner-logix", name: "OwnerLogix" },
  "conine-coastal": { brand: "conine-coastal", crm_company: "conine-coastal", name: "Conine Coastal" },
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const EVENT_RE = /^[a-z0-9][a-z0-9-]{0,63}$/

export interface CardBadge {
  v: 1
  id: string
  brand: string
  crm_company: string
  event: string | null
  captured_at: string
}

export type BadgeParse = { ok: true; badge: CardBadge; image: Buffer } | { ok: false; error: string }

const isJpeg = (b: Buffer) => b.length > 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff

/** Check one upload: id, tile, event and a real JPEG under the size cap. */
export function parseBadgeUpload(fields: {
  id: unknown
  tile: unknown
  event: unknown
  capturedAt: unknown
  image: Buffer | null
}): BadgeParse {
  const id = typeof fields.id === "string" ? fields.id.toLowerCase() : ""
  if (!UUID.test(id)) return { ok: false, error: "bad id" }
  const b = typeof fields.tile === "string" ? BADGE_BRANDS[fields.tile] : undefined
  if (!b) return { ok: false, error: "bad brand" }
  const ev = typeof fields.event === "string" ? fields.event.trim().toLowerCase() : ""
  const event = EVENT_RE.test(ev) ? ev : null
  const at = typeof fields.capturedAt === "string" && Number.isFinite(Date.parse(fields.capturedAt))
    ? new Date(fields.capturedAt).toISOString()
    : null
  if (!at) return { ok: false, error: "bad time" }
  if (!fields.image || !fields.image.length) return { ok: false, error: "no image" }
  if (fields.image.length > MAX_BADGE_BYTES) return { ok: false, error: "image too large" }
  if (!isJpeg(fields.image)) return { ok: false, error: "not a JPEG" }
  return {
    ok: true,
    badge: { v: 1, id, brand: b.brand, crm_company: b.crm_company, event, captured_at: at },
    image: fields.image,
  }
}

export function composeBadgeMail(badge: CardBadge, image: Buffer, sendingAccount: string): SendMailOptions {
  const name = Object.values(BADGE_BRANDS).find((b) => b.brand === badge.brand)?.name ?? badge.brand
  return {
    from: `"Cards switcher" <${sendingAccount}>`,
    to: sendingAccount,
    subject: `Card badge: ${name}${badge.event ? ` at ${badge.event}` : ""}`,
    text: [
      `Badge photo from the Cards switcher, for ${name}.`,
      `Event: ${badge.event ?? "(none)"}`,
      `Taken: ${badge.captured_at}`,
      "",
      `The PC pull turns this into a badge waiting for you to type the person in. Badge ${badge.id}.`,
    ].join("\n"),
    headers: { [BADGE_HEADER]: "v1" },
    attachments: [
      { filename: BADGE_FILENAME, contentType: "image/jpeg", content: image },
      { filename: BADGE_JSON, contentType: "application/json", content: JSON.stringify(badge, null, 2) },
    ],
  }
}

/** Sends one badge to the CC sending account. Throws when unconfigured or the send fails. */
export async function sendBadge(
  badge: CardBadge,
  image: Buffer,
  env: Record<string, string | undefined> = process.env,
  makeTransport: MakeTransport = gmailTransport,
): Promise<void> {
  const cfg = cardMailConfig(env)
  if (!cfg) throw new CardMailConfigError()
  await makeTransport({ user: cfg.user, pass: cfg.pass }).sendMail(composeBadgeMail(badge, image, cfg.user))
}
