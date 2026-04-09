import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FadeIn from "@/components/fade-in"
import { Hammer, ArrowRight, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conine Coastal Estates - Construction & Design-Build",
  description: "Custom home building, historic restorations, commercial construction, and design-build services throughout Northeast Florida.",
  alternates: { canonical: "/companies/estates" },
}

const services = [
  {
    category: "Residential Construction",
    items: ["New custom home building", "Historic restorations", "Major renovations & additions", "House lifting", "Hurricane-resistant building", "Energy-efficient construction"],
  },
  {
    category: "Commercial Construction",
    items: ["Office buildings (new & renovation)", "Retail space buildouts", "Restaurant construction", "Warehouse & storage facilities", "Corporate interiors"],
  },
  {
    category: "Institutional Construction",
    items: ["Higher education & K-12", "Municipal buildings", "Public works", "Sports & recreation facilities", "Cultural & performing arts centers"],
  },
  {
    category: "Design & Additional Services",
    items: ["Design-build services", "Architectural & interior design", "Preconstruction & project planning", "Disaster recovery & restoration", "Sustainable/green building", "Smart home integration"],
  },
]

export default function EstatesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 sm:py-24 bg-gradient-to-b from-coastal-orange/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <Hammer className="h-16 w-16 text-coastal-orange mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-coastal-navy mb-4 font-serif">
              Conine Coastal Estates
            </h1>
            <p className="text-lg sm:text-xl text-coastal-grey max-w-3xl mx-auto leading-relaxed">
              Custom home building, historic restorations, commercial construction, and design-build services — from concept through completion.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {services.map((group, index) => (
              <FadeIn key={group.category} delay={index * 100}>
                <Card className="h-full border-2 border-coastal-orange/10 hover:border-coastal-orange/30 transition-colors">
                  <CardContent className="p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-coastal-navy mb-4 font-serif">{group.category}</h2>
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start space-x-3">
                          <ArrowRight className="h-4 w-4 text-coastal-orange mt-1 flex-shrink-0" />
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif">Ready to Build?</h2>
          <p className="text-lg text-white/90 mb-8">Contact us to discuss your construction or design-build project.</p>
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
