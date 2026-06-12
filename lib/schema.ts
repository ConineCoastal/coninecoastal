// Centralized JSON-LD (structured data) for Answer Engine Optimization (AEO).
//
// Single source of truth for NAP (name / address / phone), organization identity,
// and reusable schema builders so every page emits consistent, cross-linked
// structured data. Mirrors the inline-<script> JSON-LD pattern already used in
// app/layout.tsx, app/faq/page.tsx, and the blog routes — emit these objects via
// the <JsonLd /> component (components/json-ld.tsx).
//
// Honesty note: the Conine Coastal group's five subsidiary entities are still
// being formed. Schema here describes David Conine's verifiable licensed practice
// and the group's geographic focus — it does NOT assert that the subsidiaries are
// independently operating, holding revenue, or carrying reviews. No AggregateRating
// or Review nodes are emitted until real reviews exist.

export const SITE_URL = "https://www.coninecoastal.com"
export const ORG_NAME = "Conine Coastal"
export const ORG_LEGAL_NAME = "Conine Coastal Group"
export const TELEPHONE = "+1-904-624-1722"
export const EMAIL = "info@coninecoastal.com"
export const LOGO_URL = `${SITE_URL}/conine-coastal-logo.png`

// Stable @id anchors so nodes can reference one another across the graph.
export const ORG_ID = `${SITE_URL}/#organization`
export const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`
export const PERSON_ID = `${SITE_URL}/#david-conine`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const SAME_AS = [
  "https://www.instagram.com/coninecoastal",
  "https://www.facebook.com/coninecoastal",
  "https://x.com/coninecoastal",
  "https://www.linkedin.com/company/coninecoastal",
]

// Northeast Florida service footprint.
export const COUNTIES_SERVED = ["St. Johns County", "Nassau County", "Duval County"]

export const CITIES_SERVED = [
  "St. Augustine",
  "Amelia Island",
  "Fernandina Beach",
  "Callahan",
  "Hilliard",
  "Jacksonville",
  "Ponte Vedra Beach",
]

// Geographic centre of the Northeast Florida / First Coast service area.
const GEO_MIDPOINT = { latitude: 30.3322, longitude: -81.6557 }

/** schema.org Place objects for each county we serve — reused as areaServed. */
export const countyPlaces = COUNTIES_SERVED.map((county) => ({
  "@type": "AdministrativeArea",
  name: county,
  containedInPlace: { "@type": "State", name: "Florida" },
}))

/** Reusable Person node for David Conine, the licensed professional behind the brand. */
export const davidConinePerson = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "David Conine",
  jobTitle: "Licensed Florida Realtor & General Contractor",
  worksFor: { "@id": ORG_ID },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of North Florida" },
    { "@type": "CollegeOrUniversity", name: "Harvard University" },
  ],
  knowsAbout: [
    "Real estate investment",
    "Residential construction",
    "Construction management",
    "Investment property renovation",
    "Owner-builder consulting",
    "Northeast Florida real estate market",
    "Property valuation",
  ],
  url: `${SITE_URL}/about`,
}

/** Holding-company Organization node (umbrella over the five sub-brands). */
export const organizationNode = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: ORG_LEGAL_NAME,
  alternateName: ORG_NAME,
  description:
    "Real estate and construction firm specializing in investment properties and residential construction in Northeast Florida.",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: LOGO_URL },
  image: LOGO_URL,
  telephone: TELEPHONE,
  email: EMAIL,
  founder: { "@id": PERSON_ID },
  sameAs: SAME_AS,
  address: {
    "@type": "PostalAddress",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: countyPlaces,
  knowsAbout: [
    "Real Estate",
    "Construction",
    "Land Development",
    "Home Services",
    "Travel & Hospitality",
    "Property Management",
  ],
  subOrganization: [
    { "@type": "Organization", name: "Conine Coastal Real Estate", url: "https://coninecoastalrealestate.com" },
    { "@type": "Organization", name: "Conine Coastal Estates", url: "https://coninecoastalestates.com" },
    { "@type": "Organization", name: "Conine Coastal Development", url: "https://coninecoastaldevelopment.com" },
    { "@type": "Organization", name: "Conine Coastal Home Services", url: "https://coninecoastalhomeservices.com" },
    { "@type": "Organization", name: "Conine Coastal Travel", url: "https://coninecoastaltravel.com" },
  ],
}

/**
 * LocalBusiness node typed as BOTH a real-estate agency and a general
 * contractor — the dual practice is the brand's core differentiator and tells
 * answer engines this single entity covers both query classes.
 */
export const localBusinessNode = {
  "@type": ["LocalBusiness", "RealEstateAgent", "GeneralContractor"],
  "@id": LOCALBUSINESS_ID,
  name: ORG_NAME,
  description:
    "Real estate and construction firm specializing in investment properties and residential construction in Northeast Florida.",
  url: SITE_URL,
  telephone: TELEPHONE,
  email: EMAIL,
  logo: LOGO_URL,
  image: LOGO_URL,
  priceRange: "$$",
  parentOrganization: { "@id": ORG_ID },
  founder: { "@id": PERSON_ID },
  employee: { "@id": PERSON_ID },
  sameAs: SAME_AS,
  address: {
    "@type": "PostalAddress",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: countyPlaces,
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", ...GEO_MIDPOINT },
    geoRadius: "80000",
  },
}

/** WebSite node (enables sitelinks search-box eligibility & entity grounding). */
export const webSiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: ORG_LEGAL_NAME,
  publisher: { "@id": ORG_ID },
}

/**
 * Site-wide knowledge graph emitted from the root layout. Cross-linked @id
 * references let engines resolve Organization ↔ LocalBusiness ↔ Person ↔ WebSite
 * as one entity rather than four disconnected nodes.
 */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [webSiteNode, organizationNode, localBusinessNode, davidConinePerson],
}

/** Build a Service node bound to the provider entity and Northeast Florida. */
export function serviceSchema(params: {
  name: string
  description: string
  serviceType: string
  url?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    serviceType: params.serviceType,
    provider: { "@id": LOCALBUSINESS_ID },
    areaServed: countyPlaces,
    ...(params.url ? { url: params.url } : {}),
  }
}

/** Build a Place node for a market, scoped to Florida and the brand's activity. */
export function placeSchema(params: {
  name: string
  description: string
  url: string
  containedIn?: string
  latitude?: number
  longitude?: number
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: params.name,
    description: params.description,
    url: params.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: params.name.replace(/, FL$/, ""),
      addressRegion: "FL",
      addressCountry: "US",
    },
    ...(params.containedIn
      ? { containedInPlace: { "@type": "AdministrativeArea", name: params.containedIn } }
      : {}),
    ...(params.latitude && params.longitude
      ? { geo: { "@type": "GeoCoordinates", latitude: params.latitude, longitude: params.longitude } }
      : {}),
  }
}

/** Build an FAQPage node from a flat list of question/answer pairs. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}
