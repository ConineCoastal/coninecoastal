import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/fade-in"
import { Phone, Home, Hammer, HardHat, Wrench, Palmtree, ArrowRight, Building2, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conine Coastal Group - Northeast Florida's Premier Holding Company",
  description: "Conine Coastal Group is a family of companies serving Northeast Florida across real estate, construction, land development, home services, and travel & hospitality.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Conine Coastal Group - Northeast Florida's Premier Holding Company",
    description: "Conine Coastal Group is a family of companies serving Northeast Florida across real estate, construction, land development, home services, and travel & hospitality.",
  },
}

const companies = [
  {
    name: "Conine Coastal Real Estate",
    href: "https://coninecoastalrealestate.com",
    icon: <Home className="h-10 w-10 sm:h-12 sm:w-12 text-coastal-navy" />,
    description: "Full-service residential and commercial real estate — sales, leasing, property management, appraisals, and specialized services including waterfront properties and investment acquisitions.",
    highlights: [
      "Residential & commercial sales and leasing",
      "Property management and market analysis",
      "Appraisal services and valuations",
      "Waterfront and investment property specialists",
    ],
  },
  {
    name: "Conine Coastal Estates",
    href: "https://coninecoastalestates.com",
    icon: <Hammer className="h-10 w-10 sm:h-12 sm:w-12 text-coastal-navy" />,
    description: "Custom home building, historic restorations, major renovations, and commercial construction — from design through completion with sustainable building practices.",
    highlights: [
      "Custom homes and historic restorations",
      "Commercial and institutional construction",
      "Design-build and preconstruction services",
      "Disaster recovery and sustainable building",
    ],
  },
  {
    name: "Conine Coastal Development",
    href: "https://coninecoastaldevelopment.com",
    icon: <HardHat className="h-10 w-10 sm:h-12 sm:w-12 text-coastal-navy" />,
    description: "Land acquisition, master planning, entitlement and permitting, site development, and project management — turning raw land into thriving communities.",
    highlights: [
      "Land acquisition and due diligence",
      "Master planning and civil engineering",
      "Entitlement, zoning, and permitting",
      "Coastal resilience and stormwater management",
    ],
  },
  {
    name: "Conine Coastal Home Services",
    href: "https://coninecoastalhomeservices.com",
    icon: <Wrench className="h-10 w-10 sm:h-12 sm:w-12 text-coastal-navy" />,
    description: "Comprehensive property maintenance, HVAC, plumbing, electrical, landscaping, pool services, and seasonal maintenance programs to keep your property in top condition.",
    highlights: [
      "Property maintenance and inspections",
      "HVAC, plumbing, and electrical services",
      "Lawn care, landscaping, and pool maintenance",
      "Hurricane preparation and emergency repairs",
    ],
  },
  {
    name: "Conine Coastal Travel",
    href: "https://coninecoastaltravel.com",
    icon: <Palmtree className="h-10 w-10 sm:h-12 sm:w-12 text-coastal-navy" />,
    description: "Vacation rental management, local experiences, equipment rentals, concierge services, and custom travel itineraries for visitors and property owners alike.",
    highlights: [
      "Vacation property management and bookings",
      "Water activities, fishing charters, and eco-tours",
      "Beach and watercraft equipment rentals",
      "Concierge, event planning, and corporate travel",
    ],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Aerial view of Northeast Florida coastline - Conine Coastal Group family of companies"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <Badge className="mb-4 bg-coastal-navy text-white px-6 py-3 text-lg">
            A Family of Companies
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl font-serif">
            Conine Coastal Group
          </h1>
          <p className="text-lg sm:text-xl lg:text-3xl text-white/95 mb-4 sm:mb-6 leading-relaxed drop-shadow-lg px-2">
            Building, developing, and serving Northeast Florida through our integrated family of companies
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-2">
            From real estate and construction to land development, home services, and travel — one group, complete solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto sm:max-w-none sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/40 hover:bg-white/20 text-white px-8 sm:px-10 py-4 text-lg sm:text-xl min-h-[56px] touch-manipulation"
            >
              <Link href="/about" className="flex items-center justify-center">
                <Building2 className="mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <span className="whitespace-nowrap">About Our Group</span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-coastal-navy hover:bg-coastal-navy/90 text-white px-8 sm:px-10 py-4 text-lg sm:text-xl min-h-[56px] touch-manipulation"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <span className="whitespace-nowrap">Get in Touch</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lifecycle Statement Band */}
      <section className="py-12 sm:py-16 bg-coastal-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif leading-relaxed text-balance">
            One integrated group across the full lifecycle of property: land, building, brokerage, maintenance, and travel. Serving Northeast Florida from St. Augustine to Amelia Island.
          </p>
        </div>
      </section>

      {/* About the Group */}
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-coastal-navy mb-3 font-serif">
                The Coastal Advantage
              </h2>
              <p className="text-lg sm:text-xl text-coastal-grey max-w-3xl mx-auto px-2">
                Conine Coastal Group provides strategic leadership, shared services, and operational excellence across our family of companies — delivering integrated solutions throughout Northeast Florida.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <FadeIn className="order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Coastal property in Northeast Florida representing the Conine Coastal Group portfolio"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg shadow-lg w-full"
              />
            </FadeIn>

            <div className="space-y-4 sm:space-y-5 order-1 md:order-2">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-coastal-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-coastal-navy mb-1">Integrated Expertise</h3>
                  <p className="text-coastal-grey text-sm sm:text-base">
                    Our companies work together seamlessly — real estate, construction, development, maintenance, and hospitality under one roof.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-coastal-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-coastal-navy mb-1">Shared Services</h3>
                  <p className="text-coastal-grey text-sm sm:text-base">
                    Centralized financial, HR, IT, marketing, and legal services ensure consistency and efficiency across every subsidiary.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-coastal-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-coastal-navy mb-1">Local Knowledge</h3>
                  <p className="text-coastal-grey text-sm sm:text-base">
                    Deep roots in Northeast Florida — from Jacksonville to St. Augustine, Ponte Vedra to Amelia Island.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Companies */}
      <section id="our-companies" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-navy mb-4 font-serif">
              Our Companies
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-coastal-grey max-w-4xl mx-auto leading-relaxed px-2">
              Five specialized companies working together to serve every aspect of coastal property and lifestyle.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {companies.map((company, index) => (
              <FadeIn key={company.href} delay={index * 100}>
                <Card className="border border-gray-200 hover:border-coastal-navy transition-colors duration-300 h-full">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3">
                      {company.icon}
                      <h3 className="text-xl sm:text-2xl font-bold text-coastal-navy font-serif">
                        {company.name}
                      </h3>
                    </div>
                    <p className="text-coastal-grey mb-4 text-sm sm:text-base leading-relaxed">
                      {company.description}
                    </p>

                    <div className="space-y-2 sm:space-y-3 mb-5">
                      {company.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-coastal-blue mt-0.5 flex-shrink-0" />
                          <span className="text-coastal-grey text-sm sm:text-base">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full bg-coastal-navy hover:bg-coastal-navy/90 text-white py-3 text-sm sm:text-base min-h-[48px] touch-manipulation">
                      <Link href={company.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        Visit Site
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-coastal-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
            Whether you need real estate services, construction, development expertise, home maintenance, or travel planning — the Conine Coastal Group has you covered.
          </p>
          <div className="flex flex-col gap-4 sm:gap-6 justify-center max-w-lg mx-auto sm:max-w-none sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-coastal-navy hover:bg-white/90 px-6 sm:px-8 py-4 text-base sm:text-lg min-h-[56px] touch-manipulation"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Talk with Our Team</span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-transparent border border-white text-white hover:bg-white/10 px-6 sm:px-8 py-4 text-base sm:text-lg min-h-[56px] touch-manipulation"
            >
              <Link href="#our-companies" className="flex items-center justify-center">
                <Building2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Explore Our Companies</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
