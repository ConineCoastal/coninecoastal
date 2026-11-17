import { describe, expect, it, vi, beforeEach } from "vitest"

import { POST } from "@/app/cards/api/badge/route"
import { CardMailConfigError } from "@/lib/card/entry"

const { sendBadge } = vi.hoisted(() => ({ sendBadge: vi.fn() }))
vi.mock("@/lib/cards-badge", async (orig) => ({ ...(await orig<typeof import("@/lib/cards-badge")>()), sendBadge }))

const ID = "6f1c2d4e-0a9b-4c3d-8e7f-1a2b3c4d5e6f"
function req(over: Record<string, string | Blob> = {}) {
  const fd = new FormData()
  const fields: Record<string, string | Blob> = {
    id: ID,
    tile: "landmark",
    event: "heff-2026",
    captured_at: "2026-11-17T20:00:00Z",
    image: new Blob([new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 1, 2, 3])], { type: "image/jpeg" }),
    ...over,
  }
  for (const [k, v] of Object.entries(fields)) fd.append(k, v)
  return new Request("https://coninecoastal.com/cards/api/badge", { method: "POST", body: fd })
}

describe("POST /cards/api/badge", () => {
  beforeEach(() => sendBadge.mockReset())

  it("sends a valid badge once and answers ok", async () => {
    sendBadge.mockResolvedValue(undefined)
    const res = await POST(req())
    expect(res.status).toBe(200)
    expect(sendBadge).toHaveBeenCalledOnce()
    expect(sendBadge.mock.calls[0][0]).toMatchObject({ id: ID, brand: "landmark-logix", event: "heff-2026" })
  })

  it("400 on a bad upload, and nothing is sent", async () => {
    const res = await POST(req({ tile: "personal" }))
    expect(res.status).toBe(400)
    expect(sendBadge).not.toHaveBeenCalled()
  })

  it("503 when mail is not configured, 502 when the send fails (the phone keeps it queued)", async () => {
    sendBadge.mockRejectedValueOnce(new CardMailConfigError())
    expect((await POST(req())).status).toBe(503)
    sendBadge.mockRejectedValueOnce(new Error("smtp down"))
    expect((await POST(req())).status).toBe(502)
  })
})
