import { describe, expect, it } from "vitest"
import { personalCard } from "@/lib/personal-card"
import { buildVCard, checkVCard3, unfold } from "@/lib/vcard"

const TINY_JPEG = Buffer.from(
  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAABAAEBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAD8AKp//2Q==",
  "base64",
)
// Test values only; the real ones live in the Vercel env.
const env = { PERSONAL_CARD_EMAIL: "person@example.test", PERSONAL_CARD_PHONE: "+1-555-0100" }

describe("personal vCard", () => {
  it("is valid vCard 3.0 with name, email, mobile and LinkedIn, and no title or org", () => {
    const text = buildVCard(personalCard(env))
    expect(checkVCard3(text)).toEqual([])
    const lines = unfold(text)
    expect(lines).toContain("N:Conine;David;;;")
    expect(lines).toContain("FN:David Conine")
    expect(lines).toContain("EMAIL;TYPE=INTERNET,HOME,PREF:person@example.test")
    expect(lines).toContain("TEL;TYPE=CELL,VOICE:+1-555-0100")
    expect(lines).toContain("URL:https://www.linkedin.com/in/davidaconine/")
    expect(lines.some((l) => l.startsWith("TITLE") || l.startsWith("ORG"))).toBe(false)
  })

  it("omits a missing email or phone instead of writing an empty line", () => {
    const lines = unfold(buildVCard(personalCard({})))
    expect(lines.some((l) => l.startsWith("EMAIL") || l.startsWith("TEL"))).toBe(false)
    expect(checkVCard3(buildVCard(personalCard({})))).toEqual([])
  })

  it("embeds a photo and folds it at 75 octets, byte for byte", () => {
    const text = buildVCard({ ...personalCard(env), photo: TINY_JPEG })
    expect(checkVCard3(text)).toEqual([])
    const photo = unfold(text).find((l) => l.startsWith("PHOTO"))!
    expect(Buffer.from(photo.split(":")[1], "base64").toString("base64")).toBe(TINY_JPEG.toString("base64"))
  })
})
