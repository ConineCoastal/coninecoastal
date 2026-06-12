import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Breadcrumb from "@/components/breadcrumb"
import FadeIn from "@/components/fade-in"
import JsonLd from "@/components/json-ld"
import { serviceSchema, SITE_URL } from "@/lib/schema"
import { Home, HardHat, TrendingUp, Wrench, Phone, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Services & Specialties",
  description:
    "Real estate acquisition, construction management, investment-property renovation, and owner-builder consulting across Northeast Florida — one dual-licensed team.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & Specialties | Conine Coastal — Real Estate & Construction, Northeast Florida",
    description:
      "Real estate acquisition, construction management, investment-property renovation, and owner-builder consulting across Northeast Florida — one dual-licensed team.",
    url: `${SITE_URL}/services`,
    type: "website",
  },
}

interface ServiceEntry {
  slugId: string
  icon: React.ReactNode
  name: string
  serviceType: string
  lede: string
  description: string
  includes: string[]
  whoFor: string
}

const services: ServiceEntry[] = [
  {
    slugId: "real-estate-acquisition",
    icon: <Home className="h-8 w-8" />,
    name: "Real Estate Acquisition",
    serviceType: "Real estate acquisition",
    lede: "We help buyers and investors identify, evaluate, and acquire property across Northeast Florida.",
    description:
      "Real estate acquisition is the search, analysis, negotiation, and purchase of a property. Because every acquisition is led by someone holding both a Florida real estate license and a Florida general contractor license, the evaluation goes beyond comparable sales — it includes a building-condition read and a realistic renovation-cost estimate before you make an offer. That matters most on dated, distressed, or investment properties, where the gap between asking price and true cost of ownership is where buyers win or lose.",
    includes: [
      "Buyer representation and on- and off-market property sourcing",
      "Comparative market analysis and pricing strategy",
      "Construction-informed condition assessment during showings",
      "Offer structuring and negotiation",
      "Coordination through inspection, appraisal, and closing",
    ],
    whoFor: "First-time buyers, relocating families, and investors acquiring rental or flip properties.",
  },
  {
    slugId: "construction-management",
    icon: <HardHat className="h-8 w-8" />,
    name: "Construction Management",
    serviceType: "Construction management",
    lede: "We plan, schedule, budget, and oversee residential construction and renovation projects.",
    description:
      "Construction management is the professional coordination of a building project from pre-construction planning through closeout — scope definition, budgeting, scheduling, permitting, subcontractor selection, quality control, and inspections. With a Construction Management degree and 20+ years in the field, the work is run by someone who understands both the build and the numbers, which keeps scope creep, change orders, and schedule slippage under control. For Northeast Florida specifically, that includes specifying coastal-appropriate materials and navigating county building departments in St. Johns, Nassau, and Duval.",
    includes: [
      "Pre-construction planning, budgeting, and value engineering",
      "Permitting and inspection coordination",
      "Subcontractor selection and scheduling",
      "On-site quality control and progress oversight",
      "Change-order and cost management",
    ],
    whoFor: "Homeowners renovating, investors rehabbing, and owners building new on the First Coast.",
  },
  {
    slugId: "investment-property-renovation",
    icon: <TrendingUp className="h-8 w-8" />,
    name: "Investment Property Renovation",
    serviceType: "Investment property renovation",
    lede: "We renovate rental and resale properties to maximize return, not just appearance.",
    description:
      "Investment-property renovation is renovation scoped to a financial outcome — after-repair value (ARV), rental yield, or flip margin — rather than personal taste. The decisive skill is accurate rehab-cost estimating, which is exactly where inexperienced investors lose money. Pairing real-estate market analysis with hands-on construction estimating means the renovation budget is set against the numbers that drive return: purchase price, ARV, holding cost, and the specific improvements that move value in a given submarket and price point. A $50K kitchen makes sense in a $500K home, not a $200K one.",
    includes: [
      "Scope-to-ARV and scope-to-yield renovation planning",
      "Accurate rehab cost estimating before purchase",
      "Improvement selection by ROI for the submarket",
      "Renovation project management and execution",
      "Coastal-durable material specification",
    ],
    whoFor: "Buy-and-hold investors, BRRRR investors, and fix-and-flip buyers in Northeast Florida.",
  },
  {
    slugId: "owner-builder-consulting",
    icon: <Wrench className="h-8 w-8" />,
    name: "Owner-Builder Consulting",
    serviceType: "Owner-builder consulting",
    lede: "We advise owners acting as their own general contractor on how to do it without costly mistakes.",
    description:
      "Owner-builder consulting supports a property owner who pulls a permit as their own contractor and manages their own project. Florida allows owner-builders on their own property within limits, but the owner takes on the general contractor's responsibilities — permitting, code compliance, subcontractor coordination, liability, and the liability disclosures the building department requires. Consulting gives an owner-builder a licensed contractor's guidance on scope, sequencing, bidding subs, and the risks to avoid, without the owner having to learn it the hard way mid-project.",
    includes: [
      "Owner-builder feasibility and risk review",
      "Permitting and code-compliance guidance",
      "Scope, sequencing, and schedule planning",
      "Subcontractor scoping and bid review",
      "On-call advisory through construction",
    ],
    whoFor: "Owners who want to self-manage a build or major renovation to save on GC overhead.",
  },
]

const serviceNodes = services.map((s) =>
  serviceSchema({
    name: s.name,
    description: s.lede,
    serviceType: s.serviceType,
    url: `${SITE_URL}/services#${s.slugId}`,
  }),
)

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
          alt="Real estate and construction services in Northeast Florida"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-coastal-navy text-white px-6 py-2 text-base">Services & Specialties</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Real Estate and Construction, Under One Roof
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            One dual-licensed team handles acquisition, construction, renovation, and owner-builder
            guidance across the First Coast.
          </p>
        </div>
      </section>

      {/* Intro — direct declarative answer */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg sm:text-xl text-coastal-grey leading-relaxed">
            Conine Coastal provides four core services across Northeast Florida:{" "}
            <strong className="text-coastal-navy">real estate acquisition</strong>,{" "}
            <strong className="text-coastal-navy">construction management</strong>,{" "}
            <strong className="text-coastal-navy">investment-property renovation</strong>, and{" "}
            <strong className="text-coastal-navy">owner-builder consulting</strong>. Every engagement is led by
            David Conine, who holds both a Florida real estate license and a Florida general contractor license — so
            buying decisions and building decisions are evaluated by the same person, with the same set of facts.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <FadeIn key={service.slugId} delay={index * 75}>
              <div id={service.slugId} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-coastal-blue">{service.icon}</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-coastal-navy font-serif">
                    {service.name}
                  </h2>
                </div>
                <p className="text-lg text-coastal-navy font-medium mb-4">{service.lede}</p>
                <p className="text-coastal-grey leading-relaxed mb-6">{service.description}</p>

                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-base font-semibold text-coastal-navy mb-4">What it includes</h3>
                    <ul className="space-y-2 mb-6">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-coastal-grey">
                          <CheckCircle className="h-5 w-5 text-coastal-blue flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-coastal-grey">
                      <span className="font-semibold text-coastal-navy">Best for: </span>
                      {service.whoFor}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-coastal-grey">
            See where we work on the{" "}
            <Link href="/markets" className="text-coastal-blue font-medium hover:underline">
              Northeast Florida markets we serve
            </Link>
            , or read answers to common{" "}
            <Link href="/faq" className="text-coastal-blue font-medium hover:underline">
              real estate and construction investment questions
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-coastal-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">
            Have a Property or Project in Mind?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Tell us what you&apos;re buying, building, or renovating on the First Coast and we&apos;ll tell you
            what it really takes.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-coastal-navy hover:bg-white/90 px-8 py-4 text-lg"
          >
            <Link href="/contact" className="flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </Button>
        </div>
      </section>

      <JsonLd data={serviceNodes} />
    </div>
  )
}
