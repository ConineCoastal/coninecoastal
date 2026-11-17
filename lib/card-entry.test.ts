import { describe, expect, it } from "vitest"
import { card, CARD_INTERESTS } from "@/config/card"
import {
  buildCardEntry,
  cardInput,
  cardMailConfig,
  cardNoteLinks,
  composeCardEntryMail,
  formatEventBadge,
  parseEvent,
  parseRef,
  sendCardEntry,
} from "./card/entry"
import { cardShareMailto, cardShareTitle, cardShareUrl } from "./card/share"
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

  it("carries Hot / Partner / Peer / Note links to the sending account, never the visitor", () => {
    const entry = buildCardEntry(cardInput.parse({ email: "pat@example.org", name: "Pat" }), null, NOW, ID)
    const mail = composeCardEntryMail(entry, "sender@example.test", "desk@example.test")
    const links = cardNoteLinks(entry, "sender@example.test")
    expect(links.map((l) => l.label)).toEqual(["Hot", "Partner", "Peer", "Note"])
    expect(links[0].href).toBe(`mailto:sender@example.test?subject=${encodeURIComponent(`Card note ${ID} [hot]`)}`)
    expect(links[3].href).toBe(`mailto:sender@example.test?subject=${encodeURIComponent(`Card note ${ID}`)}`)
    for (const l of links) {
      expect(mail.text).toContain(l.href)
      expect(mail.html).toContain(l.href)
      expect(l.href).not.toContain("pat@example.org")
    }
    expect(mail.html).not.toContain("mailto:pat@example.org")
    expect(mail.replyTo).toBe("pat@example.org")
  })

  it("escapes visitor input in the HTML body", () => {
    const evil = buildCardEntry(cardInput.parse({ email: "x@example.org", name: "<b>Pat</b>", organization: "A&B" }), null, NOW, ID)
    const html = composeCardEntryMail(evil, "sender@example.test", "desk@example.test").html as string
    expect(html).toContain("&lt;b&gt;Pat&lt;/b&gt;")
    expect(html).toContain("A&amp;B")
    expect(html).not.toContain("<b>Pat</b>")
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

describe("Conine Coastal card forward link (marketing-os docs/card-entries.md `ref`)", () => {
  const REF = "0a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d"

  it("accepts a UUID ref, lower-cased, and drops anything else", () => {
    expect(parseRef(REF)).toBe(REF)
    expect(parseRef(` ${REF.toUpperCase()} `)).toBe(REF)
    expect(parseRef([REF, "x"])).toBe(REF)
    for (const bad of ["", "abc", "<script>", `${REF}0`, REF.replace(/-/g, ""), "0a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4g", null, undefined]) {
      expect(parseRef(bad), String(bad)).toBeNull()
    }
  })

  it("carries ref in the entry only when it is valid and not the entry's own id", () => {
    const input = cardInput.parse({ email: "a@b.co" })
    const withRef = buildCardEntry(input, "heff-2026", NOW, ID, REF.toUpperCase())
    expect(withRef.ref).toBe(REF)
    expect(Object.keys(withRef)).toEqual([
      "v", "id", "brand", "crm_company", "event", "email", "name", "organization", "title", "interest", "ref", "submitted_at",
    ])
    for (const r of [null, "not-a-uuid", ID, ID.toUpperCase()]) {
      const entry = buildCardEntry(input, null, NOW, ID, r)
      expect("ref" in entry, String(r)).toBe(false)
      expect(JSON.parse(JSON.stringify(entry))).not.toHaveProperty("ref")
    }
  })

  it("puts ref in the JSON and a Forwarded from line in the text, and changes nothing else", () => {
    const input = cardInput.parse({ email: "a@b.co", interest: "travel" })
    const plain = composeCardEntryMail(buildCardEntry(input, "heff-2026", NOW, ID), "s@x.co", "d@x.co")
    const fwd = composeCardEntryMail(buildCardEntry(input, "heff-2026", NOW, ID, REF), "s@x.co", "d@x.co")
    const json = (m: typeof fwd) => JSON.parse((m.attachments as { content: string }[])[0].content)
    expect(json(fwd)).toEqual({ ...json(plain), ref: REF })
    expect(fwd.subject).toBe(plain.subject)
    expect(fwd.headers).toEqual(plain.headers)
    expect(fwd.text).toContain(`Forwarded from: ${REF}`)
    expect(plain.text).not.toContain("Forwarded from")
    expect((fwd.text as string).replace(`Forwarded from: ${REF}
`, "")).toBe(plain.text)
  })

  it("builds the share URL with and without an event", () => {
    expect(cardShareUrl(ID, "heff-2026")).toBe(`https://coninecoastal.com/card?e=heff-2026&ref=${ID}`)
    expect(cardShareUrl(ID, null)).toBe(`https://coninecoastal.com/card?ref=${ID}`)
    const url = new URL(cardShareUrl(ID, "heff-2026"))
    expect(parseEvent(url.searchParams.get("e"))).toBe("heff-2026")
    expect(parseRef(url.searchParams.get("ref"))).toBe(ID)
  })

  it("shares with the brand title, or a mailto with no recipient", () => {
    expect(cardShareTitle).toBe("Conine Coastal · David Conine")
    const url = cardShareUrl(ID, null)
    expect(cardShareMailto(url)).toBe(
      `mailto:?subject=${encodeURIComponent("Conine Coastal: David Conine's contact card")}&body=${encodeURIComponent(url)}`,
    )
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
