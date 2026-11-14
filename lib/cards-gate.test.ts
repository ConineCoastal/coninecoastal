import { describe, expect, it } from "vitest"
import { CARDS_HASHES, COOKIE, cardsGate, cookieFor, hashesFor } from "./cards-gate"

const PP = "test-passphrase-not-real"
const opts = async () => ({ hashes: await hashesFor(PP), delay: () => Promise.resolve() })
const req = (path: string, init: RequestInit = {}) => new Request("https://www.coninecoastal.com" + path, init)
const nav = { "sec-fetch-mode": "navigate" }

describe("cards gate", () => {
  it("sends a page load without the cookie to /cards/unlock", async () => {
    const r = (await cardsGate(req("/cards", { headers: nav }), await opts()))!
    expect(r.status).toBe(303)
    expect(new URL(r.headers.get("location")!).pathname).toBe("/cards/unlock")
  })

  it("answers asset fetches without the cookie with 401, never a redirect", async () => {
    for (const p of ["/cards/app.js", "/cards/brands.js", "/cards/sw.js", "/cards/vendor/uqr.mjs", "/cards/index.html"]) {
      const r = (await cardsGate(req(p, { headers: { "sec-fetch-mode": "no-cors" } }), await opts()))!
      expect(r.status, p).toBe(401)
    }
  })

  it("leaves the unlock page and install-time files public", async () => {
    for (const p of ["/cards/unlock", "/cards/manifest.webmanifest", "/cards/icons/icon-192.png", "/cards/apple-touch-icon.png"]) {
      expect(await cardsGate(req(p, { headers: nav }), await opts()), p).toBeNull()
    }
  })

  it("sets a 400-day HttpOnly cookie on the right passphrase, and the cookie opens the app", async () => {
    const r = (await cardsGate(req("/cards/unlock", { method: "POST", body: new URLSearchParams({ passphrase: PP }) }), await opts()))!
    // A normal page (not a redirect) carries the cookie, then moves on to /cards.
    expect(r.status).toBe(200)
    expect(await r.text()).toContain('url=/cards"')
    const sc = r.headers.get("set-cookie")!
    expect(sc).toMatch(/HttpOnly/)
    expect(sc).toMatch(/Secure/)
    expect(sc).toMatch(/Path=\/;/)
    expect(sc).toMatch(/Max-Age=34560000/)
    const cookie = sc.split(";")[0]
    expect(await cardsGate(req("/cards", { headers: { ...nav, cookie } }), await opts())).toBeNull()
    expect(await cardsGate(req("/cards/app.js", { headers: { cookie: "a=1; " + cookie } }), await opts())).toBeNull()
  })

  it("refuses a wrong passphrase and sets nothing", async () => {
    for (const pp of ["", "nope", PP.slice(0, -1), PP.toUpperCase()]) {
      const r = (await cardsGate(req("/cards/unlock", { method: "POST", body: new URLSearchParams({ passphrase: pp }) }), await opts()))!
      expect(new URL(r.headers.get("location")!).search, pp).toBe("?wrong=1")
      expect(r.headers.get("set-cookie")).toBeNull()
    }
  })

  it("refuses a forged cookie or one from an old passphrase", async () => {
    for (const v of ["", "abc", await cookieFor("old-passphrase")]) {
      const r = (await cardsGate(req("/cards", { headers: { ...nav, cookie: `${COOKIE}=${v}` } }), await opts()))!
      expect(r.status).toBe(303)
    }
  })

  it("/cards/status reports missing, invalid or valid without revealing the cookie", async () => {
    const st = async (cookie?: string) =>
      JSON.parse(await (await cardsGate(req("/cards/status", { headers: cookie ? { cookie } : {} }), await opts()))!.text()).cookie
    expect(await st()).toBe("missing")
    expect(await st(`${COOKIE}=nope`)).toBe("invalid")
    expect(await st(`${COOKIE}=${await cookieFor(PP)}`)).toBe("valid")
  })

  it("commits only digests: 64 hex characters each", () => {
    expect(CARDS_HASHES.passphrase).toMatch(/^[0-9a-f]{64}$/)
    expect(CARDS_HASHES.cookie).toMatch(/^[0-9a-f]{64}$/)
  })
})
