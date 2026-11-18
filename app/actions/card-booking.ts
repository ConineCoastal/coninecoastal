"use server"

import { buildCardBooking, sendCardBooking } from "@/lib/card/booking-entry"
import { describeError } from "@/lib/card/entry"

/**
 * Records one Cal.com booking from /card/booked (marketing-os docs/card-entries.md "Bookings").
 * Called once from the client after the page has loaded, never on the GET, so a link-preview bot
 * sends nothing. Anything invalid, unconfigured or failed sends nothing and shows nothing.
 */
export async function recordCardBooking(input: {
  uid?: unknown
  startTime?: unknown
  endTime?: unknown
  email?: unknown
  attendeeName?: unknown
}): Promise<void> {
  const booking = buildCardBooking(input && typeof input === "object" ? { ...input } : null)
  if (!booking) return
  try {
    await sendCardBooking(booking)
  } catch (error) {
    console.error(`[card] booking ${booking.booking_uid} not sent:`, describeError(error))
  }
}
