import { createHmac } from "node:crypto"
import { describe, expect, it, vi } from "vitest"
import { POST, dynamic, runtime } from "@/app/api/card/booking-event/route"
import { config as proxyConfig } from "@/proxy"
import { composeCardBookingMail } from "./card/booking-entry"
import { MAX_BODY_BYTES, buildCardBookingEvent, handleBookingEvent, parseReason, verifyCalSignature } from "./card/booking-event"
import type { MakeTransport } from "./card/entry"

const NOW = new Date("2026-11-17T15:00:00.000Z")
const SECRET = "test-webhook-secret"
const MAIL_ENV = { GMAIL_EMAIL: "sender@example.test", GMAIL_APP_PASSWORD: "p", CONTACT_FORWARD_TO: "desk@example.test" }
const ROUTE_URL = "https://coninecoastal.com/api/card/booking-event"

type Mail = ReturnType<typeof composeCardBookingMail>

const payload = (over: Record<string, unknown> = {}) => ({
  uid: "bk_9fQ2xZ7mLp",
  startTime: "2026-11-20T14:00:00Z",
  endTime: "2026-11-20T14:20:00Z",
  attendees: [{ email: " Pat@Example.ORG ", name: "Pat Doe", timeZone: "America/New_York" }],
  title: "20 min between Pat Doe and David",
  ...over,
})
const envelope = (triggerEvent: string, over: Record<string, unknown> = {}) => ({
  triggerEvent,
  createdAt: "2026-11-17T14:59:00.000Z",
  payload: payload(over),
})

const sign = (body: string, secret = SECRET) => createHmac("sha256", secret).update(body).digest("hex")

function req(body: string, signature: string | null = sign(body)) {
  const headers: Record<string, string> = { "content-type": "application/json" }
  if (signature !== null) headers["x-cal-signature-256"] = signature
  return new Request(ROUTE_URL, { method: "POST", body, headers })
}

function run(body: string, opts: { signature?: string | null; env?: Record<string, string | undefined> } = {}) {
  const sent: Mail[] = []
  const makeTransport: MakeTransport = () => ({
    sendMail: async (m) => {
      sent.push(m as Mail)
      return {} as never
    },
  })
  const res = handleBookingEvent(req(body, opts.signature === undefined ? sign(body) : opts.signature), {
    env: opts.env ?? { CARD_BOOKING_WEBHOOK_SECRET: SECRET, ...MAIL_ENV },
    makeTransport,
    now: () => NOW,
  })
  return { res, sent }
}

const attached = (mail: Mail) => JSON.parse((mail.attachments as { content: string }[])[0].content)

describe("POST /api/card/booking-event: secret, signature, size", () => {
  const body = JSON.stringify(envelope("BOOKING_CANCELLED"))

  it("404s and sends nothing when the secret is unset or blank", async () => {
    for (const env of [MAIL_ENV, { ...MAIL_ENV, CARD_BOOKING_WEBHOOK_SECRET: "" }, { ...MAIL_ENV, CARD_BOOKING_WEBHOOK_SECRET: "  " }]) {
      const { res, sent } = run(body, { env })
      expect((await res).status).toBe(404)
      expect(sent).toHaveLength(0)
    }
  })

  it("accepts a good signature and answers ok", async () => {
    const { res, sent } = run(body)
    const r = await res
    expect(r.status).toBe(200)
    expect(await r.json()).toEqual({ ok: true })
    expect(sent).toHaveLength(1)
  })

  it("401s a missing, empty, wrong or wrong-key signature, and sends nothing", async () => {
    for (const signature of [null, "", "deadbeef", sign(body, "other-secret"), sign(`${body} `), `${sign(body)}00`]) {
      const { res, sent } = run(body, { signature })
      expect((await res).status, String(signature)).toBe(401)
      expect(sent).toHaveLength(0)
    }
  })

  it("verifies against the raw body, byte for byte", () => {
    const raw = '{"triggerEvent":"PING",  "payload":{}}'
    expect(verifyCalSignature(raw, sign(raw), SECRET)).toBe(true)
    expect(verifyCalSignature(JSON.stringify(JSON.parse(raw)), sign(raw), SECRET)).toBe(false)
    expect(verifyCalSignature(raw, null, SECRET)).toBe(false)
  })

  it("413s a body over 64 KB", async () => {
    const big = JSON.stringify({ ...envelope("BOOKING_CREATED"), pad: "x".repeat(MAX_BODY_BYTES) })
    const { res, sent } = run(big)
    expect((await res).status).toBe(413)
    expect(sent).toHaveLength(0)
  })

  it("500s, logged, when the send is unconfigured", async () => {
    const err = vi.spyOn(console, "error").mockImplementation(() => undefined)
    const { res, sent } = run(body, { env: { CARD_BOOKING_WEBHOOK_SECRET: SECRET } })
    expect((await res).status).toBe(500)
    expect(sent).toHaveLength(0)
    expect(err).toHaveBeenCalledOnce()
    expect(String(err.mock.calls[0][1])).toMatch(/not configured/)
    err.mockRestore()
  })

  it("500s when the transport throws, so Cal.com retries", async () => {
    const err = vi.spyOn(console, "error").mockImplementation(() => undefined)
    const res = await handleBookingEvent(req(body), {
      env: { CARD_BOOKING_WEBHOOK_SECRET: SECRET, ...MAIL_ENV },
      makeTransport: () => ({ sendMail: async () => Promise.reject(new Error("smtp down")) }),
      now: () => NOW,
    })
    expect(res.status).toBe(500)
    err.mockRestore()
  })
})

describe("POST /api/card/booking-event: triggers", () => {
  it("maps each trigger to its status and sends step 9's record plus status, previous_uid and reason", async () => {
    const cases = [
      ["BOOKING_CREATED", "booked", "Card booking: Pat Doe (Conine Coastal) 2026-11-20T14:00:00.000Z"],
      ["BOOKING_CANCELLED", "cancelled", "Card booking cancelled: Pat Doe (Conine Coastal) 2026-11-20T14:00:00.000Z"],
      ["BOOKING_RESCHEDULED", "rescheduled", "Card booking moved: Pat Doe (Conine Coastal) 2026-11-20T14:00:00.000Z"],
    ] as const
    for (const [trigger, status, subject] of cases) {
      const { res, sent } = run(JSON.stringify(envelope(trigger)))
      expect((await res).status).toBe(200)
      expect(sent).toHaveLength(1)
      expect(sent[0].subject).toBe(subject)
      expect(sent[0].headers).toEqual({ "X-Hub-Card-Booking": "v1" })
      expect(sent[0].from).toBe('"Conine Coastal Website" <sender@example.test>')
      expect(sent[0].to).toBe("desk@example.test")
      expect(sent[0].replyTo).toBe("sender@example.test")
      expect(attached(sent[0])).toEqual({
        v: 1,
        brand: "conine-coastal",
        crm_company: "conine-coastal",
        booking_uid: "bk_9fQ2xZ7mLp",
        email: "pat@example.org",
        name: "Pat Doe",
        start: "2026-11-20T14:00:00.000Z",
        end: "2026-11-20T14:20:00.000Z",
        received_at: "2026-11-17T15:00:00.000Z",
        status,
        previous_uid: null,
        reason: null,
      })
    }
  })

  it("uses the email in the subject when the attendee has no name", async () => {
    const { res, sent } = run(JSON.stringify(envelope("BOOKING_CANCELLED", { attendees: [{ email: "pat@example.org" }] })))
    expect((await res).status).toBe(200)
    expect(sent[0].subject).toBe("Card booking cancelled: pat@example.org (Conine Coastal) 2026-11-20T14:00:00.000Z")
  })

  it("ignores Cal.com's ping, any other trigger, and non-JSON, with nothing sent", async () => {
    const bodies = [
      JSON.stringify({ triggerEvent: "PING", createdAt: "2026-11-17T14:59:00Z", payload: { type: "Test" } }),
      JSON.stringify(envelope("MEETING_ENDED")),
      JSON.stringify(envelope("BOOKING_REQUESTED")),
      JSON.stringify({ payload: payload() }),
      "not json",
      "[]",
    ]
    for (const body of bodies) {
      const { res, sent } = run(body)
      const r = await res
      expect(r.status, body).toBe(200)
      expect(await r.json()).toEqual({ ignored: true })
      expect(sent).toHaveLength(0)
    }
  })

  it("ignores invalid bookings with nothing sent, so Cal.com does not retry junk", async () => {
    const bad: Record<string, unknown>[] = [
      { uid: "bad uid!" },
      { uid: undefined },
      { attendees: [] },
      { attendees: [{ email: "not-an-email" }] },
      { startTime: "tomorrow" },
      { endTime: "2026-11-20T13:00:00Z" },
      { startTime: "2027-06-01T14:00:00Z", endTime: "2027-06-01T14:20:00Z" },
    ]
    for (const over of bad) {
      for (const trigger of ["BOOKING_CREATED", "BOOKING_RESCHEDULED"]) {
        const { res, sent } = run(JSON.stringify(envelope(trigger, over)))
        const r = await res
        expect(r.status, JSON.stringify(over)).toBe(200)
        expect(await r.json()).toEqual({ ignored: true })
        expect(sent).toHaveLength(0)
      }
    }
  })

  it("applies the start window to booked and rescheduled only; a cancelled start need only be a valid date", () => {
    const past = { startTime: "2026-10-01T14:00:00Z", endTime: "2026-10-01T14:20:00Z" }
    expect(buildCardBookingEvent(envelope("BOOKING_CREATED", past), NOW)).toBeNull()
    expect(buildCardBookingEvent(envelope("BOOKING_RESCHEDULED", past), NOW)).toBeNull()
    expect(buildCardBookingEvent(envelope("BOOKING_CANCELLED", past), NOW)?.start).toBe("2026-10-01T14:00:00.000Z")
    expect(buildCardBookingEvent(envelope("BOOKING_CANCELLED", { startTime: "someday", endTime: undefined }), NOW)).toBeNull()
    expect(buildCardBookingEvent(envelope("BOOKING_CANCELLED", { endTime: "2026-11-20T13:00:00Z" }), NOW)).toBeNull()
  })

  it("sets previous_uid on a reschedule only when it is a valid uid different from uid", () => {
    const prev = (trigger: string, rescheduleUid: unknown) => buildCardBookingEvent(envelope(trigger, { rescheduleUid }), NOW)?.previous_uid
    expect(prev("BOOKING_RESCHEDULED", "bk_oldOld123")).toBe("bk_oldOld123")
    expect(prev("BOOKING_RESCHEDULED", " bk_oldOld123 ")).toBe("bk_oldOld123")
    for (const v of [undefined, null, "", "bk_9fQ2xZ7mLp", "bad uid!", "abc", 12345678, { uid: "bk_oldOld123" }]) {
      expect(prev("BOOKING_RESCHEDULED", v), String(v)).toBeNull()
    }
    expect(prev("BOOKING_CREATED", "bk_oldOld123")).toBeNull()
    expect(prev("BOOKING_CANCELLED", "bk_oldOld123")).toBeNull()
  })

  it("carries the cancellation reason trimmed and capped at 300 characters, null otherwise", async () => {
    expect(parseReason("  Conflict came up  ")).toBe("Conflict came up")
    expect(parseReason("x".repeat(400))).toBe("x".repeat(300))
    for (const v of [undefined, null, "", "   ", 42, ["no"]]) expect(parseReason(v), String(v)).toBeNull()
    const { res, sent } = run(JSON.stringify(envelope("BOOKING_CANCELLED", { cancellationReason: ` ${"r".repeat(350)} ` })))
    expect((await res).status).toBe(200)
    expect(attached(sent[0]).reason).toBe("r".repeat(300))
    expect(sent[0].text).toContain(`Reason: ${"r".repeat(300)}`)
    expect(buildCardBookingEvent(envelope("BOOKING_CREATED", { cancellationReason: "n/a" }), NOW)?.reason).toBeNull()
  })

  it("a reschedule carries the new start in the subject and the old uid in the record", async () => {
    const { res, sent } = run(
      JSON.stringify(
        envelope("BOOKING_RESCHEDULED", {
          uid: "bk_newNew456",
          rescheduleUid: "bk_9fQ2xZ7mLp",
          startTime: "2026-11-24T16:00:00Z",
          endTime: "2026-11-24T16:20:00Z",
        }),
      ),
    )
    expect((await res).status).toBe(200)
    expect(sent[0].subject).toBe("Card booking moved: Pat Doe (Conine Coastal) 2026-11-24T16:00:00.000Z")
    expect(attached(sent[0])).toMatchObject({ booking_uid: "bk_newNew456", previous_uid: "bk_9fQ2xZ7mLp", status: "rescheduled" })
    expect(sent[0].text).toContain("Replaces booking: bk_9fQ2xZ7mLp")
  })
})

describe("/api/card/booking-event wiring", () => {
  it("is a Node, force-dynamic route that answers 404 with no secret in the environment", async () => {
    expect(runtime).toBe("nodejs")
    expect(dynamic).toBe("force-dynamic")
    const prev = process.env.CARD_BOOKING_WEBHOOK_SECRET
    delete process.env.CARD_BOOKING_WEBHOOK_SECRET
    try {
      expect((await POST(req("{}"))).status).toBe(404)
    } finally {
      if (prev !== undefined) process.env.CARD_BOOKING_WEBHOOK_SECRET = prev
    }
  })

  it("is not caught by the /cards proxy gate", () => {
    expect(proxyConfig.matcher).toEqual(["/cards", "/cards/:path*"])
    const caught = (p: string) => p === "/cards" || p.startsWith("/cards/")
    expect(caught("/api/card/booking-event")).toBe(false)
  })
})
