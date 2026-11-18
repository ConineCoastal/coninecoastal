import { describe, expect, it } from "vitest"
import { CALENDAR, CALENDAR_PATH } from "./card/giveaway"
import { isBarePath } from "./bare-paths"
import sitemap from "@/app/sitemap"

// The card give-away stays unlisted and makes no claim the ventures have not cleared.
describe("card give-away: the coastal home care calendar", () => {
  const text = JSON.stringify(CALENDAR)

  it("is at the path the marketing-os day-0 draft links, rendered bare", () => {
    expect(CALENDAR_PATH).toBe("/guides/coastal-home-care-calendar")
    expect(isBarePath(CALENDAR_PATH)).toBe(true)
  })

  it("is not in the sitemap", async () => {
    const entries = await sitemap()
    expect(entries.some((e) => e.url.endsWith(CALENDAR_PATH))).toBe(false)
  })

  it("makes no stats, pricing, licence or outcome-verb claims, and has no em dashes", () => {
    expect(text).not.toMatch(/—/)
    expect(text).not.toMatch(/\b(ensure|guarantee|certify)\w*/i)
    expect(text).not.toMatch(/\d+\s*%|\$\d/)
    expect(text).not.toMatch(/licensed\s*&|licensed and insured|since \d{4}/i)
  })

  it("has every month and a list for every month", () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    for (const m of months) expect(CALENDAR.sections.some((s) => s.heading.startsWith(m))).toBe(true)
    for (const s of CALENDAR.sections) expect(s.items.length).toBeGreaterThan(0)
  })
})
