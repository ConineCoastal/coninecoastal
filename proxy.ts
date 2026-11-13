import { NextResponse, type NextRequest } from "next/server"
import { cardsGate } from "@/lib/cards-gate"

// Only the private Cards switcher is gated; the rest of the site never runs
// through here.
export async function proxy(request: NextRequest) {
  return (await cardsGate(request)) ?? NextResponse.next()
}

export const config = { matcher: ["/cards", "/cards/:path*"] }
