import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Breadcrumb from "@/components/breadcrumb"
import FadeIn from "@/components/fade-in"
import { Mail, Home, Wrench, TrendingUp, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about real estate, home renovations, investment properties, and construction services in Northeast Florida.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Conine Coastal",
    description:
      "Find answers to common questions about real estate, home renovations, investment properties, and construction services in Northeast Florida.",
  },
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  icon: React.ReactNode
  color: string
  faqs: FAQItem[]
}

// NOTE FOR DAVID — the four local-data answers below were tightened against
// public sources (June 2026) and now carry a date stamp where they cite figures.
// Residual items still worth a periodic refresh (all currently hedged honestly):
//   • "St. Augustine market" — VERIFIED dir. via Redfin/Zillow (St. Johns County
//     median ~$450K vs. FL ~$400K, early 2026). Swap in exact MLS figures if/when
//     you have them; numbers are volatile, so the "as of early 2026" stamp stays.
//   • "Amelia Island" — City of Fernandina Beach RRDP/zoning/state-license detail
//     VERIFIED via fbfl.us. Unincorporated Nassau specifics still left to "verify
//     with the county" (not cleanly published online — do not fabricate).
//   • "Construction costs per square foot" — ranges VERIFIED for the First Coast
//     (Jacksonville production ~$150–250, custom/coastal $350+), 2026-stamped.
//   • "Permits for new construction in Nassau County" — submittal flow, wind-zone,
//     and interdepartmental sign-off VERIFIED via county/PermitFlow. Exact impact-
//     fee dollar amounts not published cleanly — "verify current checklist" hedge
//     intentionally retained. Refresh figures periodically; market data moves.

const faqCategories: FAQCategory[] = [
  {
    title: "Northeast Florida Investing and Building",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "text-coastal-blue",
    faqs: [
      {
        question: "What is the real estate market like in St. Augustine, Florida?",
        answer:
          "St. Augustine, in St. Johns County, is a tourism-anchored market with strong underlying fundamentals. St. Johns County is consistently one of Florida's fastest-growing and highest-income counties, with top-rated public schools that drive steady relocation demand. The historic downtown and nearby beaches support year-round vacation-rental activity, and limited inventory in the historic core keeps well-located homes competitive. As of early 2026, the St. Johns County median sale price (roughly $450,000) runs well above the Florida statewide median (roughly $400,000) — a premium that reflects the county's top-rated schools and coastal access. The market favors buyers who can read a property's true condition and renovation cost — especially among the area's many older and historic homes — rather than price alone.",
      },
      {
        question: "Is Amelia Island a good place to invest in rental property?",
        answer:
          "Amelia Island, in Nassau County, is a resort and tourism destination centered on historic Fernandina Beach, which makes it one of the stronger short-term vacation-rental markets in Northeast Florida. Demand is seasonal but consistent, supported by beaches, golf, and heritage tourism. Entry prices are higher than the Nassau County mainland, so cash-on-cash returns depend heavily on nightly rate, occupancy, and expense control — including Florida's elevated property-insurance costs near the coast. Before buying, confirm the current short-term-rental rules for your specific parcel, since they differ between the City of Fernandina Beach and unincorporated Nassau County. Inside Fernandina Beach, short-term (resort) rentals require a city-issued Resort Rental Dwelling Permit (RRDP) — generally limited to R-3-zoned properties or grandfathered R-1/R-2 ones — on top of a state DBPR public-lodging license and Nassau County tourist-development-tax registration; outside the city limits, verify the current rules directly with Nassau County. For investors who underwrite conservatively it can be a strong rental market; for those who overpay or underestimate operating costs, it is unforgiving.",
      },
      {
        question: "What is the BRRRR strategy and does it work in Northeast Florida?",
        answer:
          "BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. You buy a property below market value, renovate it to force appreciation and command market rent, rent it to a qualified tenant, then refinance based on the higher after-repair value (ARV) to recover most or all of your invested capital — and repeat with the same funds. It works in Northeast Florida where you can still buy below market and add value: parts of Duval County and the Nassau County mainland (Callahan, Hilliard, Yulee) tend to fit better than high-priced coastal areas like Amelia Island or Ponte Vedra, where buying below market is harder. The strategy lives or dies on two numbers — accurate rehab cost and a realistic ARV — plus current interest rates, which determine how much capital you can actually pull out at refinance. Accurate construction estimating is the single biggest risk control.",
      },
      {
        question: "How do I find off-market properties in Nassau County, Florida?",
        answer:
          "Off-market properties in Nassau County are found through direct outreach and local relationships rather than the MLS. The most reliable methods are: direct mail and calls to absentee, distressed, or long-tenured owners; building lists from public records such as tax-delinquent, code-violation, pre-foreclosure, and probate filings; 'driving for dollars' through Callahan, Hilliard, Yulee, and Fernandina to spot neglected properties; and networking with local agents, wholesalers, contractors, and attorneys who hear about sales before they list. The Nassau County Property Appraiser's records let you identify and contact owners directly. Consistency matters more than any single tactic — off-market deals come from steady, repeated outreach.",
      },
      {
        question: "What is an owner-builder and what are the risks?",
        answer:
          "An owner-builder is a property owner who pulls the building permit in their own name and acts as their own general contractor instead of hiring a licensed one. Florida allows this on property you own, within limits — generally for your own use, with a signed owner-builder disclosure acknowledging your responsibilities, and with restrictions on building to sell within a year. The risks are real: you assume full liability for safety and code compliance, you lose the protections and warranty a licensed contractor carries, financing and insurance can be harder to obtain, and you are responsible for permitting, scheduling, and supervising every subcontractor. Errors in sequencing, code, or subcontractor selection can cost far more than the contractor fee you saved. Owner-building can work for an organized owner with the right guidance, but it is not a shortcut.",
      },
      {
        question: "How do I evaluate a duplex investment in Northeast Florida?",
        answer:
          "Evaluate a Northeast Florida duplex on its numbers, not its appearance. Start with the combined rent from both units, then subtract realistic operating expenses — property taxes, insurance (notably high in Florida, especially near the coast), maintenance, vacancy, and management — to get net operating income (NOI). From there, calculate cap rate (NOI ÷ price), cash-on-cash return (annual cash flow ÷ cash invested), and debt-service coverage. Screen quickly with the 1% rule (monthly rent near 1% of price), then verify against real local rent comps. Physically, check whether the units are separately metered, the roof and HVAC age, and the structural condition. Locally, weigh flood zone and insurability — both materially affect Florida returns. A duplex that looks fine but doesn't cover its true expenses is not an investment.",
      },
      {
        question: "What are construction costs per square foot in Northeast Florida?",
        answer:
          "Construction cost per square foot in Northeast Florida varies widely by quality, site, and finish level, so treat any single number with caution. As a general planning range in 2026, standard new residential construction on the First Coast has run roughly $150–$250 per square foot (production and semi-custom homes at the lower end), with custom, coastal, and luxury builds reaching $350 per square foot and above. Renovation costs are even more variable — a cosmetic refresh costs a fraction of a gut remodel with layout changes. Coastal requirements (impact-rated windows, elevated foundations, salt-resistant materials) and county-specific impact fees push First Coast costs above inland Florida. Because material and labor pricing moves with the market, confirm current per-square-foot numbers for your specific scope and location before you budget.",
      },
      {
        question: "What permits are required for new construction in Nassau County?",
        answer:
          "New construction in Nassau County requires a building permit from the authority having jurisdiction — the Nassau County Building Department for unincorporated areas, or the City of Fernandina Beach (or the town offices of Callahan or Hilliard) for property inside those municipalities. A typical new home also needs separate trade permits for electrical, plumbing, mechanical/HVAC, and roofing, plus site-related approvals such as driveway/right-of-way, stormwater, and either a septic permit (through the health department) or a sewer connection, and a well permit or utility connection for water. In unincorporated Nassau County, plan review begins only after the application clears interdepartmental sign-off — Planning/Development Services, stormwater, and Fire Rescue — and plans must be signed and sealed by a registered design professional and engineered to the Florida Building Code's wind-load requirements for the county's coastal wind zone. Impact fees and a final certificate of occupancy apply. Exact submittal requirements, fees, and setbacks differ by jurisdiction and parcel, so verify the current checklist directly with the governing building department before designing or budgeting.",
      },
      {
        question: "How does a construction background help in real estate investing?",
        answer:
          "A construction background is one of the biggest edges an investor can have, because the most common way investors lose money is underestimating renovation cost. Someone who has built and managed projects can estimate rehab budgets accurately, spot expensive structural, roof, electrical, or plumbing problems during due diligence that others miss, and identify value-add opportunities that don't show up in the comps. It also means running renovations on realistic schedules with trusted subcontractors, and projecting after-repair value more reliably. In short, it lets you underwrite both sides of a deal — the market value and the true cost to create it — instead of guessing on the cost side and hoping.",
      },
      {
        question: "What should I look for when buying a distressed property in Florida?",
        answer:
          "When buying a distressed property in Florida, inspect for the issues that are both common and expensive here. Structurally, check the foundation, roof age and condition, and any signs of water intrusion or mold — Florida's heat and humidity make moisture damage and wood-destroying organisms (termites) a top concern. Verify the HVAC, electrical panel (older or recalled panels are costly), and plumbing (cast-iron or polybutylene lines are red flags). Confirm whether past work was permitted, and check title for liens or code violations. Critically, evaluate the flood zone and whether the property is insurable at a reasonable cost — Florida's property-insurance market is tight, and an uninsurable house is hard to finance or resell. Order a 4-point inspection and wind-mitigation report, which insurers typically require. Distressed pricing only makes sense once you know the full cost to make the property safe, financeable, and rentable or resalable.",
      },
    ],
  },
  {
    title: "Real Estate",
    icon: <Home className="h-6 w-6" />,
    color: "text-coastal-blue",
    faqs: [
      {
        question: "What areas of Northeast Florida do you serve?",
        answer:
          "We serve the entire First Coast region including Jacksonville and its beaches (Jacksonville Beach, Neptune Beach, Atlantic Beach), Ponte Vedra Beach, Nocatee, St. Augustine, St. Augustine Beach, Amelia Island, Fernandina Beach, and surrounding areas in Duval, St. Johns, and Nassau counties.",
      },
      {
        question: "What makes Conine Coastal different from other real estate agents?",
        answer:
          "Our unique advantage is the combination of 20+ years of construction expertise with professional real estate services. When you tour a home with us, you're getting a realtor who can immediately identify structural issues, estimate renovation costs, and evaluate which improvements will maximize value. Most agents can tell you the price — we can tell you the true cost of ownership.",
      },
      {
        question: "Do I need to be pre-approved for a mortgage before working with you?",
        answer:
          "While you don't need pre-approval to start the conversation, we strongly recommend getting pre-approved before seriously touring homes. Pre-approval gives you a clear budget, makes your offers stronger in competitive situations, and helps us target the right properties for your financial situation. We can recommend trusted local lenders if you need one.",
      },
      {
        question: "How long does it typically take to buy a home on the First Coast?",
        answer:
          "From the start of your search to closing, the process typically takes 60-90 days. This includes 2-4 weeks of active searching, 1-2 weeks for offer negotiation, and 30-45 days from contract to closing for inspections, appraisal, and financing. Cash purchases can close in as little as 2-3 weeks. We'll keep you informed at every step.",
      },
      {
        question: "What should I do to prepare my home for sale?",
        answer:
          "Start with a pre-listing consultation with us. We'll walk your property and identify the specific improvements that will maximize your sale price — and just as importantly, which ones to skip. Generally, focus on curb appeal, decluttering, deep cleaning, and strategic cosmetic updates. Our construction background means we can give you accurate cost estimates for any recommended improvements.",
      },
    ],
  },
  {
    title: "Renovations & Construction",
    icon: <Wrench className="h-6 w-6" />,
    color: "text-coastal-navy",
    faqs: [
      {
        question: "How long does a typical kitchen renovation take?",
        answer:
          "A typical kitchen renovation takes 6-10 weeks depending on the scope. Simple cosmetic updates like cabinet refacing and new countertops can be completed in 3-4 weeks, while a full gut renovation with layout changes takes 8-12 weeks. We provide a detailed timeline during your consultation so you know exactly what to expect.",
      },
      {
        question: "Do I need to move out during a renovation?",
        answer:
          "For most projects, you can stay in your home. We carefully plan work phases to minimize disruption. For whole-home renovations, we may recommend temporary relocation for 2-4 weeks during the most intensive phases. For kitchen renovations, we'll set up a temporary kitchen area so you can still prepare meals. We'll discuss this during planning and help you prepare.",
      },
      {
        question: "How do you handle permits and inspections?",
        answer:
          "We handle all permitting and inspections as part of our service. With 20+ years of construction experience in Northeast Florida, we know the local building codes and requirements in Duval, St. Johns, and Nassau counties. Permit costs are included in your project estimate, and we coordinate all required inspections so you don't have to.",
      },
      {
        question: "What's included in your renovation estimate?",
        answer:
          "Our detailed estimates include all materials, labor, permits, inspections, and project management. We itemize everything so you can see exactly where your money is going. There are no hidden fees. If unexpected issues arise during construction (which can happen, especially in older homes), we discuss them with you before proceeding and get written approval for any changes.",
      },
      {
        question: "Do you provide warranties on your work?",
        answer:
          "Yes. All our renovation work comes with a workmanship warranty, and manufacturer warranties apply to all materials and fixtures we install. We stand behind the quality of our work and are always available if any issues arise after project completion. Specific warranty terms are outlined in your project contract.",
      },
      {
        question: "How do I know which renovations will add the most value?",
        answer:
          "This is exactly where our dual expertise shines. As both a licensed contractor and realtor, David can evaluate your home's current market position and recommend the specific improvements that will deliver the highest ROI for your property, neighborhood, and price point. Not all renovations are created equal — a $50K kitchen remodel makes sense in a $500K home but not in a $200K home.",
      },
      {
        question: "Do you work with coastal-specific materials?",
        answer:
          "Absolutely. Northeast Florida's coastal climate demands special attention to materials. We specify salt-air resistant fixtures, moisture-resistant underlayments, impact-rated windows, and finishes that withstand humidity. We've seen too many renovations fail prematurely because inland-appropriate materials were used in a coastal environment.",
      },
    ],
  },
  {
    title: "Investment Properties",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "text-coastal-navy",
    faqs: [
      {
        question: "Is Northeast Florida a good market for real estate investment?",
        answer:
          "Northeast Florida offers strong fundamentals for real estate investment: consistent population growth driven by corporate relocations and lifestyle migration, no state income tax, a diverse economy anchored by logistics, healthcare, finance, and military, and year-round tourism in destinations like St. Augustine and Amelia Island. Rental demand remains strong across most submarkets.",
      },
      {
        question: "What's the typical ROI on a fix-and-flip in this area?",
        answer:
          "Well-executed fix-and-flip projects on the First Coast typically yield 15-25% returns after all costs. The key variables are purchase price, renovation scope and accuracy of cost estimates, holding time, and market conditions at sale. Our construction expertise gives us a significant edge in estimating renovation costs accurately, which is often where inexperienced flippers lose money.",
      },
      {
        question: "Can you help me analyze a potential investment property?",
        answer:
          "Yes — property analysis is one of our core services. We evaluate investment opportunities from both a real estate and construction perspective, providing detailed analysis of purchase price vs. market value, estimated renovation costs, projected after-repair value (ARV), expected rental income, cap rate, and cash-on-cash return. Use our online ROI calculator for quick estimates, or schedule a consultation for a detailed analysis.",
      },
      {
        question: "Do you manage rental properties?",
        answer:
          "Yes, we offer property management services for investment properties in Northeast Florida. Our management approach leverages our construction background — we handle maintenance proactively and cost-effectively because we understand buildings, not just leases. Services include tenant screening, rent collection, maintenance coordination, financial reporting, and regular property inspections.",
      },
    ],
  },
  {
    title: "Working with Us",
    icon: <HelpCircle className="h-6 w-6" />,
    color: "text-coastal-grey",
    faqs: [
      {
        question: "How much does a consultation cost?",
        answer:
          "Initial consultations are completely free with no obligation. Whether you're exploring buying, selling, renovating, or investing, we're happy to sit down (in person, by phone, or video) and discuss your goals. We believe in building relationships first and earning your business through expertise and trust.",
      },
      {
        question: "What credentials and licenses do you hold?",
        answer:
          "David Conine holds an active Florida Real Estate license and a Florida General Contractor license, backed by a Construction Management degree from the University of North Florida and a Real Estate Certificate from Harvard University. He carries full general liability and workers' compensation insurance. All licenses can be verified at myfloridalicense.com.",
      },
      {
        question: "Can you handle both the real estate transaction and the renovation?",
        answer:
          "Yes — this is our specialty. We can help you find the right property, negotiate the purchase, plan and execute the renovation, and even list and sell it if you're flipping. Having one team manage the entire process eliminates coordination headaches, reduces costs, and ensures every decision is made with both construction quality and market value in mind.",
      },
      {
        question: "How do I get started?",
        answer:
          "The easiest way is to schedule a free consultation through our website or call us directly at (904) 624-1722. Tell us about your goals — whether that's buying your first home, selling for maximum value, planning a renovation, or building an investment portfolio. We'll take it from there.",
      },
    ],
  },
]

// Flatten all FAQs for schema
const allFaqs = faqCategories.flatMap((cat) => cat.faqs)

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2000&q=80"
          alt="Frequently asked questions about real estate and construction"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-coastal-navy text-white px-6 py-2 text-base">FAQ</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Answers to common questions about real estate, renovations, and investing on the First Coast.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {faqCategories.map((cat) => (
              <a
                key={cat.title}
                href={`#${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-coastal-navy hover:shadow border border-gray-200 transition-all"
              >
                <span className={cat.color}>{cat.icon}</span>
                {cat.title}
                <span className="text-xs text-coastal-grey">({cat.faqs.length})</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, catIndex) => (
            <FadeIn key={category.title} delay={catIndex * 100}>
              <div
                id={category.title.toLowerCase().replace(/\s+/g, "-")}
                className="mb-12 scroll-mt-24"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={category.color}>{category.icon}</div>
                  <h2 className="text-2xl font-bold text-coastal-navy font-serif">
                    {category.title}
                  </h2>
                  <Badge variant="outline" className="text-xs">
                    {category.faqs.length} questions
                  </Badge>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${category.title}-${faqIndex}`}
                    >
                      <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-coastal-navy">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-coastal-grey leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-coastal-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to help. Reach out and we'll get back to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* /schedule CTA removed per ai-infra SYS-011 Q3-R1 Flag #3 follow-up (2026-05-25):
                scheduling backend (CRM) not yet selected; restore once wired. */}
            <Button
              asChild
              size="lg"
              className="bg-white text-coastal-navy hover:bg-white/90 px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
