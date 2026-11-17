import { describe, expect, it, vi } from "vitest"
import { readFileSync } from "node:fs"
import { cardsGate } from "@/lib/cards-gate"
import { composeBadgeMail, MAX_BADGE_BYTES, parseBadgeUpload, sendBadge } from "@/lib/cards-badge"

const ID = "6f1c2d4e-0a9b-4c3d-8e7f-1a2b3c4d5e6f"
const JPEG = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0, 0x10, 0x4a, 0x46, 0x49, 0x46])
const ok = (over: Partial<Parameters<typeof parseBadgeUpload>[0]> = {}) =>
  parseBadgeUpload({ id: ID, tile: "niner-health", event: "heff-2026", capturedAt: "2026-11-17T20:00:00Z", image: JPEG, ...over })

describe("parseBadgeUpload", () => {
  it("maps the tile to the venture's brand and CRM company", () => {
    const r = ok()
    expect(r.ok && r.badge).toEqual({
      v: 1,
      id: ID,
      brand: "niner-health",
      crm_company: "niner-health",
      event: "heff-2026",
      captured_at: "2026-11-17T20:00:00.000Z",
    })
    const ol = ok({ tile: "ownerlogix" })
    expect(ol.ok && [ol.badge.brand, ol.badge.crm_company]).toEqual(["ownerlogix", "owner-logix"])
  })

  it("a bad event becomes null; a bad id, tile or time is refused", () => {
    const r = ok({ event: "HEFF 2026!" })
    expect(r.ok && r.badge.event).toBeNull()
    expect(ok({ id: "nope" }).ok).toBe(false)
    expect(ok({ tile: "personal" }).ok).toBe(false)
    expect(ok({ capturedAt: "yesterday" }).ok).toBe(false)
  })

  it("only a JPEG under the cap", () => {
    expect(ok({ image: null }).ok).toBe(false)
    expect(ok({ image: Buffer.from("<svg/>") }).ok).toBe(false)
    const big = Buffer.alloc(MAX_BADGE_BYTES + 1)
    big.set([0xff, 0xd8, 0xff], 0)
    expect(ok({ image: big }).ok).toBe(false)
  })
})

describe("badge email", () => {
  const r = ok()
  if (!r.ok) throw new Error("fixture")

  it("goes to the sending account itself, with the header, photo and JSON record", () => {
    const m = composeBadgeMail(r.badge, r.image, "sender@example.test")
    expect(m.to).toBe("sender@example.test")
    expect(m.subject).toBe("Card badge: Niner Health at heff-2026")
    expect(m.headers).toEqual({ "X-Hub-Card-Badge": "v1" })
    const [img, json] = m.attachments!
    expect(img.filename).toBe("badge.jpg")
    expect(img.contentType).toBe("image/jpeg")
    expect(json.filename).toBe("card-badge.json")
    expect(JSON.parse(json.content as string)).toStrictEqual(r.badge)
  })

  it("sends through the injected transport, and refuses when mail is not configured", async () => {
    const sendMail = vi.fn().mockResolvedValue({})
    await sendBadge(r.badge, r.image, { GMAIL_SMTP_USER: "sender@example.test", GMAIL_SMTP_APP_PASSWORD: "x" }, () => ({ sendMail }))
    expect(sendMail).toHaveBeenCalledOnce()
    await expect(sendBadge(r.badge, r.image, {}, () => ({ sendMail }))).rejects.toThrow()
  })
})

describe("privacy", () => {
  it("the upload route is behind the Cards gate", async () => {
    const res = await cardsGate(new Request("https://coninecoastal.com/cards/api/badge", { method: "POST" }), {
      hashes: { passphrase: "0".repeat(64), cookie: "0".repeat(64) },
    })
    expect(res?.status).toBe(401)
  })

  it("the switcher may use the camera; the rest of the site may not", () => {
    const cfg = readFileSync("next.config.mjs", "utf8")
    // Only the two /cards header blocks grant it; the site-wide block keeps camera=().
    expect(cfg.match(/camera=\(self\)/g)?.length).toBe(2)
    expect(cfg).toContain('{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }')
  })
})
