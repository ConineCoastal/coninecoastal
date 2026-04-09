import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FadeIn from "@/components/fade-in"
import { HardHat, ArrowRight, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conine Coastal Development - Land Development & Planning",
  description: "Land acquisition, master planning, entitlement and permitting, site development, and project management throughout Northeast Florida.",
  alternates: { canonical: "/companies/development" },
}

const services = [
  {
    category: "Land Acquisition & Due Diligence",
    items: ["Property scouting & identification", "Market analysis & feasibility studies", "Title searches & verification", "Environmental impact studies", "Zoning & permit research", "Project financing & investment structuring"],
  },
  {
    category: "Master Planning & Engineering",
    items: ["Conceptual site planning", "Surveying & topographical mapping", "Civil engineering", "Drainage & stormwater management", "Utility infrastructure planning", "Sustainable & coastal resilience planning"],
  },
  {
    category: "Entitlement & Development",
    items: ["Zoning changes & subdivision approvals", "Building & environmental permits", "Site preparation & grading", "Road construction", "Community planning & amenities", "Utility & stormwater installation"],
  },
  {
    category: "Project Management & Finance",
    items: ["Construction oversight & budget management", "Schedule coordination & quality control", "Development cost analysis & ROI projections", "Financing assistance & partnership structuring", "Wetland mitigation & flood zone management", "Hurricane-resistant & solar-ready infrastructure"],
  },
]

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 sm:py-24 bg-gradient-to-b from-coastal-navy/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <HardHat className="h-16 w-16 text-coastal-navy mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-coastal-navy mb-4 font-serif">
              Conine Coastal Development
            </h1>
            <p className="text-lg sm:text-xl text-coastal-grey max-w-3xl mx-auto leading-relaxed">
              Land acquisition, master planning, entitlement and permitting, site development, and project management — turning raw land into thriving communities.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((group, index) => (
              <FadeIn key={group.category} delay={index * 100}>
                <Card className="h-full border-2 border-coastal-navy/10 hover:border-coastal-navy/30 transition-colors">
                  <CardContent className="p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-coastal-navy mb-4 font-serif">{group.category}</h2>
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start space-x-3">
                          <ArrowRight className="h-4 w-4 text-coastal-navy mt-1 flex-shrink-0" />
                          <span className="text-coastal-grey text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-r from-coastal-navy to-coastal-blue">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif">Have a Development Project?</h2>
          <p className="text-lg text-white/90 mb-8">Contact us to discuss land acquisition, planning, or development opportunities.</p>
          <Button asChild size="lg" className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8 py-4 text-lg min-h-[56px]">
            <Link href="/contact" className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
