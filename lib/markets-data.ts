// Market (location) data for the /markets routes.
//
// Content is intentionally QUALITATIVE and evergreen — geography, economy,
// housing-stock character, and Conine Coastal's strategic focus. No invented
// statistics (median price, days-on-market, transaction counts). Anything
// requiring live local data is surfaced on the page as a clearly labeled
// "Market data — to be supplied" block for David to populate, rather than
// fabricated here.

export interface MarketStat {
  /** Month/year the figures reflect, e.g. "March 2026". */
  asOf: string
  /** Public source — never proprietary MLS, e.g. "Redfin (public listing data)". */
  source: string
  medianSalePrice?: string
  medianPricePerSqFt?: string
  daysOnMarket?: string
  rentNote?: string
  trendNote?: string
}

export interface Market {
  slug: string
  name: string
  /** Display name used in schema / titles, e.g. "St. Augustine, FL". */
  displayName: string
  county: string
  /** True for the county-level page; false for a specific city. */
  isCounty?: boolean
  latitude: number
  longitude: number
  heroImage: string
  tagline: string
  /** One-paragraph, fact-grounded overview. */
  overview: string
  /** Property types Conine Coastal focuses on in this market. */
  propertyTypes: string[]
  /** Qualitative investment thesis — no fabricated numbers. */
  thesis: string
  /** Short schema/meta description (<155 chars where used as meta). */
  metaDescription: string
  /**
   * Live market statistics — public listing-portal data (not proprietary MLS),
   * refreshed periodically and shown with an "as of / source" stamp. Omit any
   * field that can't be cleanly sourced; the card falls back to the labeled
   * "to be supplied" placeholder when marketData is absent.
   */
  marketData?: MarketStat
}

export const markets: Market[] = [
  {
    slug: "st-augustine",
    name: "St. Augustine",
    displayName: "St. Augustine, FL",
    county: "St. Johns County",
    latitude: 29.9012,
    longitude: -81.3124,
    heroImage:
      "https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?auto=format&fit=crop&w=2000&q=80",
    tagline: "The nation's oldest city, anchoring one of Florida's fastest-growing counties.",
    overview:
      "St. Augustine is the oldest continuously occupied European-founded city in the United States and the seat of St. Johns County — consistently one of Florida's fastest-growing and highest-income counties. Its economy blends heritage tourism, healthcare, education, and a steady inflow of relocating families drawn by top-rated public schools and the historic coastal lifestyle. The housing stock is unusually varied: protected historic-district homes and downtown bungalows, newer master-planned communities, and beachfront condos. For buyers and investors, the defining feature is age and variety — well-located historic and older homes reward those who can accurately read condition and renovation cost.",
    propertyTypes: [
      "Historic-district and downtown homes",
      "Beachfront and condo properties",
      "Single-family in master-planned communities",
      "Small multifamily and vacation rentals",
    ],
    thesis:
      "St. Johns County's sustained population and income growth supports long-run demand, while St. Augustine's tourism core sustains vacation-rental income. The edge here is construction-informed buying: older and historic inventory hides both risk and value that price alone won't reveal. Conine Coastal focuses on evaluating that inventory accurately — pairing market analysis with a contractor's read on true cost of ownership.",
    metaDescription:
      "St. Augustine, FL real estate market: a tourism-anchored, fast-growing St. Johns County market where construction-informed buying wins.",
    marketData: {
      asOf: "March 2026",
      source: "Redfin (public listing data)",
      medianSalePrice: "~$420,000",
      medianPricePerSqFt: "~$267",
      daysOnMarket: "~110 days",
      trendNote: "Median price down roughly 13% year-over-year — a softening from prior peaks.",
    },
  },
  {
    slug: "amelia-island",
    name: "Amelia Island",
    displayName: "Amelia Island, FL",
    county: "Nassau County",
    latitude: 30.6175,
    longitude: -81.4407,
    heroImage:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=2000&q=80",
    tagline: "A barrier-island resort market with some of the region's strongest rental demand.",
    overview:
      "Amelia Island is a barrier island at the northern tip of Florida's Atlantic coast in Nassau County, anchored by the historic seaport city of Fernandina Beach. It is a resort and heritage-tourism destination — beaches, golf resorts, and a walkable Victorian downtown — that supports one of Northeast Florida's strongest short-term-rental markets. Inventory skews toward beach homes, condos, resort-adjacent properties, and historic residences. Entry prices sit above the Nassau mainland, so returns depend on disciplined underwriting of nightly rate, occupancy, and coastal insurance and maintenance costs.",
    propertyTypes: [
      "Beachfront and ocean-view homes and condos",
      "Resort-adjacent properties",
      "Historic Fernandina residences",
      "Vacation and short-term rentals",
    ],
    thesis:
      "Amelia Island competes on tourism demand and scarce coastal supply. The investment case is strongest for conservatively underwritten short-term rentals where the operator controls expenses; the risk is overpaying for trophy coastal property and underestimating insurance and upkeep. Conine Coastal focuses on underwriting these properties on real operating numbers and coastal-durable renovation.",
    metaDescription:
      "Amelia Island, FL rental property investment: a Nassau County resort market with strong short-term-rental demand and coastal-cost discipline required.",
  },
  {
    slug: "fernandina-beach",
    name: "Fernandina Beach",
    displayName: "Fernandina Beach, FL",
    county: "Nassau County",
    latitude: 30.6697,
    longitude: -81.4526,
    heroImage:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=80",
    tagline: "Amelia Island's historic city — scarce coastal and Victorian inventory.",
    overview:
      "Fernandina Beach is the only incorporated city on Amelia Island and the historic heart of Nassau County's coast. Its 50-block Victorian historic district, working harbor, and beaches make it both a tourism magnet and a sought-after primary-home market. Housing ranges from protected historic homes downtown to beachside condos and newer single-family neighborhoods. As an incorporated city, Fernandina Beach administers its own permitting and short-term-rental rules, which differ from unincorporated Nassau County — an important distinction for investors and builders.",
    propertyTypes: [
      "Historic-district homes",
      "Beach condos and coastal single-family",
      "Newer single-family neighborhoods",
      "Downtown mixed-use and vacation rentals",
    ],
    thesis:
      "Fernandina Beach pairs scarce historic and coastal inventory with steady tourism. Value-add is concentrated in restoring older homes correctly under historic-district guidelines; the key constraints are city permitting and short-term-rental regulation. Conine Coastal focuses on renovation that respects historic guidelines while meeting coastal durability and insurability standards.",
    metaDescription:
      "Fernandina Beach, FL real estate: historic Amelia Island city with scarce coastal and Victorian inventory and its own permitting rules.",
    marketData: {
      asOf: "March 2026",
      source: "Redfin (public listing data)",
      medianSalePrice: "~$635,000",
      medianPricePerSqFt: "~$352",
      daysOnMarket: "~45 days",
      trendNote: "Median price down roughly 18% year-over-year as the coastal market cooled from its peak.",
    },
  },
  {
    slug: "nassau-county",
    name: "Nassau County",
    displayName: "Nassau County, FL",
    county: "Nassau County",
    isCounty: true,
    latitude: 30.6107,
    longitude: -81.7787,
    heroImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80",
    tagline: "From the Amelia coast to the Callahan and Hilliard mainland — the region's clearest pricing spread.",
    overview:
      "Nassau County spans Florida's northeastern corner, from the Amelia Island coast through the fast-growing Yulee corridor to the rural mainland towns of Callahan and Hilliard. It is one of the region's growth stories: relative affordability versus the coast, proximity to Jacksonville employment, and available land are drawing both residents and builders. The county contains very different submarkets — coastal resort property on Amelia Island, suburban growth around Yulee, and lower-cost mainland inventory in Callahan and Hilliard that can suit value-add and BRRRR strategies.",
    propertyTypes: [
      "Mainland single-family (Callahan, Hilliard, Yulee)",
      "Suburban new construction and land/lots",
      "Small multifamily and value-add properties",
      "Coastal property (Amelia Island, Fernandina Beach)",
    ],
    thesis:
      "Nassau County offers the region's clearest spread between coastal pricing and affordable mainland inventory. The mainland — Callahan, Hilliard, and Yulee — is where buy-below-market and renovate-to-value strategies are most achievable; the coast is a separate, tourism-driven market. Conine Coastal focuses on the mainland value-add opportunity and on construction-led evaluation across both submarkets.",
    metaDescription:
      "Nassau County, FL real estate: coastal Amelia Island plus affordable Callahan and Hilliard mainland inventory suited to value-add investing.",
    marketData: {
      asOf: "March 2026",
      source: "NEFAR & Redfin (public data)",
      medianSalePrice: "~$460,000",
      medianPricePerSqFt: "~$250",
      daysOnMarket: "~51 days",
      trendNote: "A strong seller's market in early 2026 — closed sales up roughly 20% year-over-year, with the affordable mainland (Callahan, Hilliard, Yulee) pulling the county median well below the Amelia coast.",
    },
  },
]

export function getMarketBySlug(slug: string): Market | undefined {
  return markets.find((m) => m.slug === slug)
}

export function getAllMarketSlugs(): string[] {
  return markets.map((m) => m.slug)
}

/**
 * Sub-markets named in the AEO brief that are covered within the Nassau County
 * page rather than getting their own routes. Emitted as Place schema on the
 * markets index so they remain entity-grounded for answer engines. Coordinates
 * are intentionally omitted (grounded by name + county) to avoid fabricating
 * precise geo.
 */
export const subMarkets = [
  { name: "Callahan, FL", county: "Nassau County" },
  { name: "Hilliard, FL", county: "Nassau County" },
]
