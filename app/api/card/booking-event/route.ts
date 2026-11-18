import { handleBookingEvent } from "@/lib/card/booking-event"

// Cal.com's booking webhook (step 9b). No auth or cookies: the HMAC signature is the check, and the
// route answers 404 until CARD_BOOKING_WEBHOOK_SECRET is set. proxy.ts matches /cards only.
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(req: Request): Promise<Response> {
  return handleBookingEvent(req)
}
