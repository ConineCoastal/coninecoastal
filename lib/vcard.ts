/**
 * vCard 3.0 (RFC 2426) for David's personal contact card at /david.
 *
 * 3.0 rather than 4.0: iOS Contacts and Android both import it without prompting, and it is
 * the version iOS reads an embedded PHOTO from. Lines end in CRLF and fold at 75 octets
 * (RFC 2425 5.8.1); text values escape backslash, comma, semicolon and newline.
 */

const CRLF = "\r\n"

export function escapeText(v: string): string {
  return v
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;")
}

/** Fold one logical line at 75 octets, never splitting a UTF-8 sequence. */
export function fold(line: string): string {
  const bytes = Buffer.from(line, "utf8")
  if (bytes.length <= 75) return line
  const parts: string[] = []
  let start = 0
  let limit = 75
  while (start < bytes.length) {
    let end = Math.min(start + limit, bytes.length)
    while (end < bytes.length && (bytes[end] & 0xc0) === 0x80) end--
    parts.push(bytes.subarray(start, end).toString("utf8"))
    start = end
    limit = 74 // continuation lines carry the leading space
  }
  return parts.join(CRLF + " ")
}

export interface PersonalCard {
  name: string
  email: string | null
  phone: string | null
  linkedin: string | null
  /** JPEG bytes, embedded inline. Null until a headshot is added. */
  photo: Buffer | null
  /** Company cards (/card) only: organisation, title and website; the email is then WORK. */
  org?: string
  title?: string
  url?: string
}

export function buildVCard(card: PersonalCard): string {
  const [given, ...rest] = card.name.trim().split(/\s+/)
  const family = rest.pop() ?? ""
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeText(family)};${escapeText(given)};${escapeText(rest.join(" "))};;`,
    `FN:${escapeText(card.name)}`,
  ]
  if (card.org) lines.push(`ORG:${escapeText(card.org)}`)
  if (card.title) lines.push(`TITLE:${escapeText(card.title)}`)
  if (card.email) lines.push(`EMAIL;TYPE=INTERNET,${card.org ? "WORK" : "HOME"},PREF:${card.email}`)
  if (card.phone) lines.push(`TEL;TYPE=CELL,VOICE:${card.phone}`)
  if (card.url) lines.push(`URL;TYPE=WORK:${card.url}`)
  if (card.linkedin) {
    lines.push(`URL:${card.linkedin}`)
    lines.push(`X-SOCIALPROFILE;TYPE=linkedin:${card.linkedin}`)
  }
  if (card.photo) lines.push(`PHOTO;ENCODING=b;TYPE=JPEG:${card.photo.toString("base64")}`)
  lines.push(`REV:${new Date().toISOString().replace(/\.\d{3}Z$/, "Z")}`)
  lines.push("END:VCARD")
  return lines.map(fold).join(CRLF) + CRLF
}

/** Structural vCard 3.0 check used by the tests. Returns problems; empty means valid. */
export function checkVCard3(text: string): string[] {
  const problems: string[] = []
  if (!text.endsWith(CRLF)) problems.push("does not end with CRLF")
  if (/[^\r]\n/.test(text)) problems.push("bare LF line ending")
  const physical = text.split(CRLF)
  if (physical[physical.length - 1] === "") physical.pop()
  physical.forEach((l, i) => {
    if (Buffer.byteLength(l, "utf8") > 75) problems.push(`physical line ${i + 1} longer than 75 octets`)
  })
  const logical = unfold(text)
  if (logical[0] !== "BEGIN:VCARD") problems.push("first line is not BEGIN:VCARD")
  if (logical[1] !== "VERSION:3.0") problems.push("second line is not VERSION:3.0")
  if (logical[logical.length - 1] !== "END:VCARD") problems.push("last line is not END:VCARD")
  for (const required of ["N:", "FN:"]) {
    if (!logical.some((l) => l.startsWith(required))) problems.push(`missing ${required.slice(0, -1)}`)
  }
  for (const l of logical) {
    if (!/^[A-Za-z0-9-]+(;[^:]*)?:/.test(l)) problems.push(`malformed line: ${l.slice(0, 40)}`)
  }
  return problems
}

export function unfold(text: string): string[] {
  return text.replace(/\r\n[ \t]/g, "").split(CRLF).filter((l) => l !== "")
}
