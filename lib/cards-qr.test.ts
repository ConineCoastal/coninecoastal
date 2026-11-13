import { describe, expect, it } from "vitest"
import jsQR from "jsqr"
import { encode } from "../public/cards/vendor/uqr.mjs"
import { BRANDS, EVENT_RE, cardUrl, slugifyEvent } from "../public/cards/brands.js"

// Rasterise the module matrix the way the app draws it (black on white,
// 4-module quiet zone) and read it back with an independent decoder.
function decode(text: string): string | undefined {
  const { data, size } = encode(text, { ecc: "M", border: 4 }) as { data: boolean[][]; size: number }
  const scale = 6
  const w = size * scale
  const px = new Uint8ClampedArray(w * w * 4)
  for (let y = 0; y < w; y++)
    for (let x = 0; x < w; x++) {
      const v = data[Math.floor(y / scale)][Math.floor(x / scale)] ? 0 : 255
      px.set([v, v, v, 255], (y * w + x) * 4)
    }
  return jsQR(px, w, w)?.data
}

const EXPECTED: Record<string, string> = {
  personal: "https://coninecoastal.com/david",
  landmark: "https://landmarklogix.com/card",
  "niner-advisors": "https://nineradvisors.com/card",
  "niner-health": "https://ninerhealth.com/card",
  ownerlogix: "https://www.ownerlogix.com/card",
}
interface Brand { id: string; url: string }

describe("cards QR codes", () => {
  it("has five brands, each pointing at its own card", () => {
    expect(Object.fromEntries((BRANDS as Brand[]).map((b) => [b.id, b.url]))).toEqual(EXPECTED)
  })

  it("decodes every brand's QR to its URL with the event tag", () => {
    for (const b of BRANDS as Brand[]) {
      for (const tag of ["heff-2026", "a", "x".repeat(64)]) {
        const want = `${EXPECTED[b.id]}?e=${tag}`
        expect(cardUrl(b, tag)).toBe(want)
        expect(decode(cardUrl(b, tag)), `${b.id} ${tag}`).toBe(want)
      }
      expect(decode(cardUrl(b, ""))).toBe(EXPECTED[b.id])
      expect(decode(cardUrl(b, null))).toBe(EXPECTED[b.id])
    }
  })

  it("turns event names into tags the venture pages accept", () => {
    const cases: Record<string, string> = {
      "HEFF 2026": "heff-2026",
      "  SCUP Mid-Atlantic  ": "scup-mid-atlantic",
      "AIA Conference on Architecture & Design": "aia-conference-on-architecture-and-design",
      "Café Expo": "cafe-expo",
      "---": "",
      "": "",
      "!!!": "",
    }
    for (const [name, tag] of Object.entries(cases)) expect(slugifyEvent(name), name).toBe(tag)
    const long = slugifyEvent("a".repeat(70) + " b")
    expect(EVENT_RE.test(long) && long.length <= 64).toBe(true)
    expect(slugifyEvent("a".repeat(63) + " b")).not.toMatch(/-$/)
  })

  it("never puts a tag the pages would reject into a QR", () => {
    expect(cardUrl(BRANDS[1], "Bad Tag")).toBe(EXPECTED.landmark)
    expect(cardUrl(BRANDS[1], "-x")).toBe(EXPECTED.landmark)
  })
})
