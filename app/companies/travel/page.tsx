import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FadeIn from "@/components/fade-in"
import { Palmtree, ArrowRight, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conine Coastal Travel - Vacation Rentals & Experiences",
  description: "Vacation rental management, local experiences, equipment rentals, concierge services, and custom travel itineraries in Northeast Florida.",
  alternates: { canonical: "/companies/travel" },
}

const services = [
  {
    category: "Rental Management",
    items: ["Vacation property management", "Booking services", "Guest relations"],
  },
  {
    category: "Local Experiences",
    items: ["Water activities", "Fishing charters", "Eco-tours"],
  },
  {
    category: "Equipment Rentals",
    items: ["Beach equipment", "Boats & watercraft", "Recreation gear"],
  },
  {
    category: "Guest Services",
    items: ["Concierge services", "Airport transportation", "Event planning"],
  },
  {
    category: "Additional Services",
    items: ["Corporate travel coordination", "Luxury travel experiences", "Custom itineraries", "24/7 support"],
  },
]

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 sm:py-24 bg-gradient-to-b from-coastal-blue/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <Palmtree className="h-16 w-16 text-coastal-blue mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-coastal-navy mb-4 font-serif">
              Conine Coastal Travel
            </h1>
            <p className="text-lg sm:text-xl text-coastal-grey max-w-3xl mx-auto leading-relaxed">
              Vacation rental management, local experiences, equipment rentals, concierge services, and custom travel itineraries for visitors and property owners alike.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((group, index) => (
              <FadeIn key={group.category} delay={index * 100}>
                <Card className="h-full border-2 border-coastal-blue/10 hover:border-coastal-blue/30 transition-colors">
                  <CardContent className="p-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-coastal-navy mb-4 font-serif">{group.category}</h2>
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start space-x-3">
                          <ArrowRight className="h-4 w-4 text-coastal-blue mt-1 flex-shrink-0" />
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif">Planning a Visit?</h2>
          <p className="text-lg text-white/90 mb-8">Contact us for vacation rentals, local experiences, or property management services.</p>
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
