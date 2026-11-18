import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import { BookCallLink } from "@/components/card/book-call-link"
import { buildCardBooking, composeCardBookingMail, parseCardBooking, sendCardBooking } from "./card/booking-entry"
import { cardBookingHref, parseBookingUrl } from "./card/booking"
import { isBarePath } from "./bare-paths"

const NOW = new Date("2026-11-17T15:00:00.000Z")
const BOOKING_URL = "https://cal.com/example/coastal-20"
const RAW = {
  uid: "bk_9fQ2xZ7mLp",
  startTime: "2026-11-20T14:00:00.000Z",
  endTime: "2026-11-20T14:20:00.000Z",
  email: " Pat@Example.ORG ",
  attendeeName: "Pat Doe",
  title: "20 min between Pat Doe and David",
}

describe("Conine Coastal card booking record (marketing-os docs/card-entries.md Bookings)", () => {
  it("builds the v1 booking JSON from Cal.com's forwarded params", () => {
    expect(buildCardBooking(RAW, NOW)).toEqual({
      v: 1,
      brand: "conine-coastal",
      crm_company: "conine-coastal",
      booking_uid: "bk_9fQ2xZ7mLp",
      email: "pat@example.org",
      name: "Pat Doe",
      start: "2026-11-20T14:00:00.000Z",
      end: "2026-11-20T14:20:00.000Z",
      received_at: "2026-11-17T15:00:00.000Z",
    })
  })

  it("emails it with the booking header, subject and attachment, and no Reply-To to the visitor", () => {
    const b = buildCardBooking(RAW, NOW)!
    const mail = composeCardBookingMail(b, "sender@example.test", "desk@example.test")
    expect(mail.headers).toEqual({ "X-Hub-Card-Booking": "v1" })
    expect(mail.subject).toBe("Card booking: Pat Doe (Conine Coastal) 2026-11-20T14:00:00.000Z")
    expect(mail.from).toBe('"Conine Coastal Website" <sender@example.test>')
    expect(mail.to).toBe("desk@example.test")
    expect(mail.replyTo).toBe("sender@example.test")
    expect(mail.text).toContain("Email: pat@example.org")
    const att = (mail.attachments as { filename: string; contentType: string; content: string }[])[0]
    expect(att.filename).toBe("card-booking.json")
    expect(att.contentType).toBe("application/json")
    expect(JSON.parse(att.content)).toEqual(b)
  })

  it("uses the email in the subject without a name, and a null end without one", () => {
    const b = buildCardBooking({ ...RAW, attendeeName: "", endTime: undefined }, NOW)!
    expect(b.name).toBeNull()
    expect(b.end).toBeNull()
    expect(composeCardBookingMail(b, "s@x.co", "d@x.co").subject).toBe("Card booking: pat@example.org (Conine Coastal) 2026-11-20T14:00:00.000Z")
  })

  it("rejects a bad uid", () => {
    for (const uid of ["", "abc", "bad uid!", "a".repeat(65), "<script>x</script>", undefined]) {
      expect(parseCardBooking({ ...RAW, uid }, NOW), String(uid)).toBeNull()
    }
  })

  it("rejects a bad email with the card's rule", () => {
    for (const email of ["", "not-an-email", "a@b", `${"a".repeat(250)}@b.co`, undefined]) {
      expect(parseCardBooking({ ...RAW, email }, NOW), String(email)).toBeNull()
    }
  })

  it("rejects a start that is not an ISO date inside now-1 day .. now+120 days, or an end not after it", () => {
    for (const startTime of ["", "tomorrow", "2026-11-20", "2026-13-40T99:00:00Z", "2026-11-15T14:00:00Z", "2027-03-18T15:00:01Z"]) {
      expect(parseCardBooking({ ...RAW, startTime, endTime: undefined }, NOW), startTime).toBeNull()
    }
    expect(parseCardBooking({ ...RAW, startTime: "2026-11-16T15:00:01Z", endTime: undefined }, NOW)).not.toBeNull()
    expect(parseCardBooking({ ...RAW, endTime: "2026-11-20T13:59:00.000Z" }, NOW)).toBeNull()
    expect(parseCardBooking({ ...RAW, endTime: RAW.startTime }, NOW)).toBeNull()
    expect(parseCardBooking({ ...RAW, endTime: "soon" }, NOW)).toBeNull()
    expect(parseCardBooking(null, NOW)).toBeNull()
    expect(parseCardBooking({}, NOW)).toBeNull()
  })

  it("refuses to send unconfigured, and sends one mail through the card transport when configured", async () => {
    const b = buildCardBooking(RAW, NOW)!
    await expect(sendCardBooking(b, {}, () => ({ sendMail: async () => ({}) as never }))).rejects.toThrow(/not configured/)
    const sent: { headers?: unknown }[] = []
    await sendCardBooking(b, { GMAIL_EMAIL: "s@x.co", GMAIL_APP_PASSWORD: "p" }, () => ({
      sendMail: async (m) => {
        sent.push(m as { headers?: unknown })
        return {} as never
      },
    }))
    expect(sent).toHaveLength(1)
    expect(sent[0].headers).toEqual({ "X-Hub-Card-Booking": "v1" })
  })
})

describe("Conine Coastal card booking button", () => {
  it("accepts only an https Cal.com booking URL", () => {
    expect(parseBookingUrl(BOOKING_URL)).toBe(BOOKING_URL)
    expect(parseBookingUrl(" https://app.cal.com/example/coastal-20 ")).toBe("https://app.cal.com/example/coastal-20")
    for (const bad of [undefined, null, "", "  ", "http://cal.com/x", "https://cal.com.evil.test/x", "https://evil.test/cal.com", "javascript:alert(1)", "https://u:p@cal.com/x", "cal.com/x"]) {
      expect(parseBookingUrl(bad), String(bad)).toBeNull()
    }
  })

  it("prefills name (when given) and email, URLSearchParams-encoded", () => {
    expect(cardBookingHref(BOOKING_URL, { email: "pat+cc@example.org", name: "Pat O'Doe & Co" })).toBe(
      `${BOOKING_URL}?${new URLSearchParams({ name: "Pat O'Doe & Co", email: "pat+cc@example.org" })}`,
    )
    expect(cardBookingHref(BOOKING_URL, { email: "pat@example.org", name: null })).toBe(`${BOOKING_URL}?email=pat%40example.org`)
    expect(cardBookingHref(BOOKING_URL)).toBe(BOOKING_URL)
  })

  it("is hidden without a booking URL and present, same tab, with one", () => {
    expect(renderToStaticMarkup(createElement(BookCallLink, { bookingUrl: null, email: "pat@example.org" }))).toBe("")
    expect(renderToStaticMarkup(createElement(BookCallLink, { bookingUrl: "https://evil.test/x", email: "pat@example.org" }))).toBe("")
    const html = renderToStaticMarkup(createElement(BookCallLink, { bookingUrl: BOOKING_URL, email: "pat@example.org", name: "Pat Doe" }))
    expect(html).toContain("Book 20 minutes with David")
    expect(html).toContain(`href="${BOOKING_URL}?name=Pat+Doe&amp;email=pat%40example.org"`)
    expect(html).not.toContain("target=")
  })

  it("keeps /card/booked bare", () => {
    expect(isBarePath("/card/booked")).toBe(true)
  })
})
