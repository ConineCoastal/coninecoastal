import { card } from "@/config/card"

/**
 * The thank-you screen's "Send this card to a colleague" link (contract: marketing-os
 * docs/card-entries.md, `ref`). Client-safe: no server imports. The site sends nothing; the
 * visitor's own share sheet or mail app does.
 */

export const CARD_URL = `${card.url}/card`

/** `https://coninecoastal.com/card?e=<event>&ref=<entry id>`, with `e` omitted when there is no event. */
export function cardShareUrl(entryId: string, event: string | null): string {
  const params = [event ? `e=${encodeURIComponent(event)}` : null, `ref=${encodeURIComponent(entryId)}`]
  return `${CARD_URL}?${params.filter(Boolean).join("&")}`
}

/** The `navigator.share` title. */
export const cardShareTitle = `${card.organization} · ${card.person.name}`

/** The no-share-sheet fallback: a mailto with no recipient, so the visitor picks the colleague. */
export function cardShareMailto(url: string): string {
  const subject = `${card.organization}: ${card.person.name}'s contact card`
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(url)}`
}
