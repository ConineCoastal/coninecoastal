"use client"

import { useEffect } from "react"
import { recordCardBooking } from "@/app/actions/card-booking"
import type { CardBookingParams } from "@/lib/card/booking-entry"

// Guards a second effect run (React Strict Mode) when sessionStorage is unavailable.
const sentThisLoad = new Set<string>()

/**
 * Posts the booking once per browser session (sessionStorage `card-booked:<uid>`), after load.
 * Never on the GET or the render, so a link-preview bot sends nothing. Renders nothing.
 */
export function RecordBooking({ booking }: { booking: CardBookingParams }) {
  useEffect(() => {
    const key = `card-booked:${booking.uid}`
    if (sentThisLoad.has(key)) return
    sentThisLoad.add(key)
    try {
      if (window.sessionStorage.getItem(key)) return
      window.sessionStorage.setItem(key, "1")
    } catch {
      // Storage blocked: the in-memory guard still holds for this page load.
    }
    recordCardBooking(booking).catch(() => undefined)
  }, [booking])
  return null
}
