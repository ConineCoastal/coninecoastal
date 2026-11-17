import { NextResponse } from "next/server"
import { CardMailConfigError } from "@/lib/card/entry"
import { parseBadgeUpload, sendBadge } from "@/lib/cards-badge"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/**
 * POST /cards/api/badge (multipart: id, tile, event, captured_at, image). Gated: proxy.ts runs
 * the Cards gate on every /cards path, so only the unlocked switcher reaches this. The photo
 * is emailed to the Conine Coastal sending account and kept nowhere else (lib/cards-badge.ts).
 * Idempotency is the PC's: a retried upload carries the same id.
 */
export async function POST(request: Request) {
  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return NextResponse.json({ error: "Expected multipart form data" }, { status: 400 })
  }
  const file = form.get("image")
  const image = file instanceof Blob ? Buffer.from(await file.arrayBuffer()) : null
  const parsed = parseBadgeUpload({
    id: form.get("id"),
    tile: form.get("tile"),
    event: form.get("event"),
    capturedAt: form.get("captured_at"),
    image,
  })
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 })

  try {
    await sendBadge(parsed.badge, parsed.image)
  } catch (err) {
    // Server-side only. Never log the image.
    console.error(`[cards] badge ${parsed.badge.id} send failed:`, err instanceof Error ? err.message : err)
    const status = err instanceof CardMailConfigError ? 503 : 502
    return NextResponse.json({ error: "Could not send; it stays queued on the phone" }, { status })
  }
  return NextResponse.json({ ok: true, id: parsed.badge.id }, { headers: { "cache-control": "no-store" } })
}
