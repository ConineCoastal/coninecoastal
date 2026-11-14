import { describe, expect, it } from "vitest"
import { card, CARD_INTERESTS } from "@/config/card"
import { buildCardEntry, cardInput, cardMailConfig, composeCardEntryMail, formatEventBadge, parseEvent, sendCardEntry } from "./card/entry"
import { isBarePath } from "./bare-paths"
import { buildVCard, checkVCard3, unfold } from "./vcard"

const NOW = new Date("2026-11-13T15:37:07.862Z")
const ID = "6f1c2d4e-0a9b-4c3d-8e7f-1a2b3c4d5e6f"

describe("Conine Coastal card entry (marketing-os docs/card-entries.md v1)", () => {
  it("builds a contract entry with the interest", () => {
    const input = cardInput.parse({ email: " Pat@Example.ORG ", name: " Pat ", organization: "", title: "", interest: "travel" })
    expect(buildCardEntry(input, "HEFF-2026", NOW, ID)).toEqual({
      v: 1,
      id: ID,
      brand: "conine-coastal",
      crm_company: "conine-coastal",
      event: "heff-2026",
      email: "pat@example.org",
      name: "Pat",
      organization: null,
      title: null,
      interest: "travel",
      submitted_at: "2026-11-13T15:37:07.862Z",
    })
  })

  it("treats a blank interest as none and refuses one off the list", () => {
    expect(cardInput.parse({ email: "a@b.co", interest: "" }).interest).toBeNull()
    expect(cardInput.safeParse({ email: "a@b.co", interest: "real-estate" }).success).toBe(false)
  })

  it("offers the four group companies and no Real Estate", () => {
    expect(CARD_INTERESTS.map((i) => i.value)).toEqual(["development", "estates", "home-services", "travel", "not-sure"])
    expect(JSON.stringify(CARD_INTERESTS)).not.toMatch(/real/i)
  })

  it("drops an event tag that is not a slug", () => {
    expect(parseEvent("<script>")).toBeNull()
    expect(parseEvent(["a-1", "b"])).toBe("a-1")
  })

  it("formats the event badge from the tag, and shows none without one", () => {
    expect(formatEventBadge("heff-2026")).toBe("HEFF 2026")
    expect(formatEventBadge(parseEvent(" ULI-Fall-2026 "))).toBe("ULI FALL 2026")
    expect(formatEventBadge(null)).toBeNull()
    expect(formatEventBadge(parseEvent("<script>"))).toBeNull()
  })

  it("emails the JSON attachment with the contract header", () => {
    const entry = buildCardEntry(cardInput.parse({ email: "a@b.co", interest: "estates" }), null, NOW, ID)
    const mail = composeCardEntryMail(entry, "sender@coninecoastal.com", "info@coninecoastal.com")
    expect(mail.headers).toEqual({ "X-Hub-Card-Entry": "v1" })
    expect(mail.subject).toBe("Card entry: a@b.co (Conine Coastal)")
    expect(mail.text).toContain("Interested in: Conine Coastal Estates")
    const att = (mail.attachments as { filename: string; content: string }[])[0]
    expect(att.filename).toBe("card-entry.json")
    expect(JSON.parse(att.content).interest).toBe("estates")
  })

  it("uses the contact form's Gmail account and recipient", () => {
    expect(cardMailConfig({})).toBeNull()
    expect(cardMailConfig({ GMAIL_EMAIL: "s@x.co", GMAIL_APP_PASSWORD: "ab cd" })).toEqual({ user: "s@x.co", pass: "abcd", to: "s@x.co" })
    expect(
      cardMailConfig({ SMTP_USER: "u@x.co", SMTP_PASS: "p", CONTACT_FORWARD_TO: '"Desk" <desk@x.co>, other@x.co' }),
    ).toEqual({ user: "u@x.co", pass: "p", to: "desk@x.co" })
  })

  it("refuses to send unconfigured, so the page shows an error, not the thank-you", async () => {
    const entry = buildCardEntry(cardInput.parse({ email: "a@b.co" }), null, NOW, ID)
    await expect(sendCardEntry(entry, {}, () => ({ sendMail: async () => ({}) as never }))).rejects.toThrow(/not configured/)
    const sent: unknown[] = []
    await sendCardEntry(entry, { GMAIL_EMAIL: "s@x.co", GMAIL_APP_PASSWORD: "p" }, () => ({
      sendMail: async (m) => {
        sent.push(m)
        return {} as never
      },
    }))
    expect(sent).toHaveLength(1)
  })
})

describe("Conine Coastal card vCard", () => {
  it("is valid 3.0 with organisation, title, work email and website, and no phone", () => {
    const vcf = buildVCard({
      name: card.person.name,
      email: card.person.email,
      phone: null,
      linkedin: null,
      photo: null,
      org: card.organization,
      title: card.person.title,
      url: card.url,
    })
    expect(checkVCard3(vcf)).toEqual([])
    const lines = unfold(vcf)
    expect(lines).toContain("ORG:Conine Coastal")
    expect(lines).toContain("TITLE:Project Executive")
    expect(lines).toContain("EMAIL;TYPE=INTERNET,WORK,PREF:info@coninecoastal.com")
    expect(lines).toContain("URL;TYPE=WORK:https://coninecoastal.com")
    expect(lines.some((l) => l.startsWith("TEL"))).toBe(false)
  })
})

describe("bare card paths", () => {
  it("strips the site chrome on /card and /david only", () => {
    for (const p of ["/card", "/card/contact.vcf", "/david", "/david/contact.vcf"]) expect(isBarePath(p), p).toBe(true)
    for (const p of ["/", "/cards", "/cardinal", "/davidson", "/about", null]) expect(isBarePath(p), String(p)).toBe(false)
  })
})
