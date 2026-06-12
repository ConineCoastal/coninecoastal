import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Breadcrumb from "@/components/breadcrumb"
import FadeIn from "@/components/fade-in"
import JsonLd from "@/components/json-ld"
import { markets, subMarkets } from "@/lib/markets-data"
import { placeSchema, SITE_URL } from "@/lib/schema"
import { MapPin, ArrowRight, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Markets We Serve",
  description:
    "The Northeast Florida markets Conine Coastal works in: St. Augustine, Amelia Island, Fernandina Beach, and Nassau County (Callahan, Hilliard).",
  alternates: { canonical: "/markets" },
  openGraph: {
    title: "Markets We Serve | Conine Coastal — Real Estate & Construction, Northeast Florida",
    description:
      "The Northeast Florida markets Conine Coastal works in: St. Augustine, Amelia Island, Fernandina Beach, and Nassau County (Callahan, Hilliard).",
    url: `${SITE_URL}/markets`,
    type: "website",
  },
}

// Place schema for every named market + the brief's sub-markets (Callahan, Hilliard).
const placeNodes = [
  ...markets.map((m) =>
    placeSchema({
      name: m.displayName,
      description: `${m.tagline} Conine Coastal focuses on ${m.propertyTypes[0].toLowerCase()} and construction-informed evaluation in ${m.name}.`,
      url: `${SITE_URL}/markets/${m.slug}`,
      containedIn: m.isCounty ? "Florida" : m.county,
      latitude: m.latitude,
      longitude: m.longitude,
    }),
  ),
  ...subMarkets.map((s) =>
    placeSchema({
      name: s.name,
      description: `${s.name} is a Nassau County mainland market where Conine Coastal focuses on value-add and renovate-to-value investment property.`,
      url: `${SITE_URL}/markets/nassau-county`,
      containedIn: s.county,
    }),
  ),
]

export default function MarketsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80"
          alt="Northeast Florida markets served by Conine Coastal"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-coastal-navy text-white px-6 py-2 text-base">Markets We Serve</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Where We Work on the First Coast
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            From the historic core of St. Augustine to the Amelia Island coast and the Nassau County
            mainland, we focus on the markets we know building by building.
          </p>
        </div>
      </section>

      {/* Intro — direct declarative answer */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg sm:text-xl text-coastal-grey leading-relaxed">
            Conine Coastal works across <strong className="text-coastal-navy">Northeast Florida</strong> — the
            First Coast — with focused activity in{" "}
            <strong className="text-coastal-navy">St. Augustine</strong> (St. Johns County),{" "}
            <strong className="text-coastal-navy">Amelia Island</strong> and{" "}
            <strong className="text-coastal-navy">Fernandina Beach</strong> (Nassau County), and the broader{" "}
            <strong className="text-coastal-navy">Nassau County</strong> mainland including Callahan and Hilliard.
            Each market is different; the common thread is buying and building decisions evaluated by a
            dual-licensed real estate and construction professional.
          </p>
        </div>
      </section>

      {/* Market Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {markets.map((market, index) => (
              <FadeIn key={market.slug} delay={index * 75}>
                <Link href={`/markets/${market.slug}`} className="block h-full group">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full border border-gray-200">
                    <div className="relative h-48">
                      <Image
                        src={market.heroImage}
                        alt={`${market.displayName} real estate market`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex items-center text-white">
                        <MapPin className="h-4 w-4 mr-1.5" />
                        <span className="text-sm font-medium">{market.county}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold text-coastal-navy font-serif mb-2 group-hover:text-coastal-blue transition-colors">
                        {market.name}
                      </h2>
                      <p className="text-coastal-grey mb-4">{market.tagline}</p>
                      <span className="inline-flex items-center text-coastal-blue font-medium text-sm">
                        Explore the {market.name} market
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-coastal-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">
            Buying or Building in One of These Markets?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Tell us the market and the goal, and we&apos;ll tell you what the numbers and the building really
            look like.
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

      <JsonLd data={placeNodes} />
    </div>
  )
}
