/**
 * The Conine Coastal conference contact card served at /card. One object: the page, the vCard
 * and the card-entry email all read from here, so a change to a fact is made once.
 *
 * Email contract for the entries: docs/card-entries.md in the marketing-os repo (v1, with the
 * Conine Coastal-only `interest` field).
 */

export const CARD_INTERESTS = [
  { value: "development", label: "Conine Coastal Development" },
  { value: "estates", label: "Conine Coastal Estates" },
  { value: "home-services", label: "Conine Coastal Home Services" },
  { value: "travel", label: "Conine Coastal Travel" },
  { value: "not-sure", label: "Not sure yet" },
] as const
// Conine Coastal Real Estate is deliberately absent: its licence status is unsettled and
// Florida's brokerage-advertising rule applies to anything that markets it.

export type CardInterest = (typeof CARD_INTERESTS)[number]["value"]

export const card = {
  /** The contract's `brand`: this site's slug. */
  brand: "conine-coastal",
  /** The contract's `crm_company`: the marketing-os companies.slug. */
  crmCompany: "conine-coastal",
  organization: "Conine Coastal",
  descriptor: "A Family of Companies",
  domain: "coninecoastal.com",
  url: "https://coninecoastal.com",
  logo: { src: "/conine-coastal-logo.png", width: 432, height: 204 },
  person: {
    name: "David Conine",
    title: "Project Executive",
    /** The group's public inbox; no personal Conine Coastal address exists. */
    email: "info@coninecoastal.com",
  },
  /** David's public LinkedIn profile, linked from the card's contact block. */
  linkedin: "https://www.linkedin.com/in/davidaconine/",
  copy: {
    headline: "Let's stay in touch.",
    // From the home page's positioning; Real Estate stays unnamed for the reason above.
    intro:
      "Conine Coastal is a family of companies building, developing and serving Northeast Florida, from construction and land development to home services and luxury travel. Leave your email and I'll follow up personally.",
    saveLabel: "Save my contact",
    formHeading: "Where should I follow up?",
    connectLabel: "Connect with me",
    interestLabel: "Interested in",
    submitLabel: "Send",
    thanksHeading: "Thank you",
    thanksBody: "I have your details and I'll follow up shortly.",
  },
} as const

export type CardConfig = typeof card

export const VCARD_PATH = "/card/contact.vcf"
