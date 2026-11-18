/**
 * The thank-you screen's "Book 20 minutes with David" link (step 9, marketing-os
 * docs/card-entries.md "Bookings"). Client-safe: no server imports. The booking URL comes from
 * the server-only env var CARD_BOOKING_URL, read in app/card/page.tsx and passed down as a prop.
 */

const BOOKING_HOSTS = new Set(["cal.com", "app.cal.com"])

/** The booking URL when it is an https Cal.com link; otherwise null, and no button renders. */
export function parseBookingUrl(raw: string | null | undefined): string | null {
  const v = raw?.trim()
  if (!v) return null
  let url: URL
  try {
    url = new URL(v)
  } catch {
    return null
  }
  if (url.protocol !== "https:" || !BOOKING_HOSTS.has(url.hostname) || url.username || url.password || url.port) return null
  return url.toString()
}

/** The booking URL with Cal.com's `name` (when given) and `email` prefill, encoded by URLSearchParams. */
export function cardBookingHref(bookingUrl: string, prefill: { email?: string | null; name?: string | null } = {}): string | null {
  const base = parseBookingUrl(bookingUrl)
  if (!base) return null
  const url = new URL(base)
  const name = prefill.name?.trim()
  const email = prefill.email?.trim()
  if (name) url.searchParams.set("name", name)
  if (email) url.searchParams.set("email", email)
  return url.toString()
}
