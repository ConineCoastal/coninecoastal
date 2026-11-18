import { CalendarClock } from "lucide-react"
import { cardBookingHref } from "@/lib/card/booking"

// The page's primary button (the "Send" style).
const primaryButtonClass =
  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#BF4E17] px-6 text-base font-semibold text-white transition-colors hover:bg-[#A3410F] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-coastal-blue/50 focus-visible:ring-offset-2"

/**
 * "Book 20 minutes with David": the Cal.com booking page, prefilled with what the visitor just
 * submitted, opened in the same tab. Renders nothing without a valid booking URL.
 */
export function BookCallLink({
  bookingUrl,
  email,
  name,
  className = "",
}: {
  bookingUrl: string | null | undefined
  email?: string | null
  name?: string | null
  className?: string
}) {
  const href = bookingUrl ? cardBookingHref(bookingUrl, { email, name }) : null
  if (!href) return null
  return (
    <a href={href} className={`${primaryButtonClass} ${className}`.trim()}>
      <CalendarClock aria-hidden="true" className="size-5" />
      Book 20 minutes with David
    </a>
  )
}
