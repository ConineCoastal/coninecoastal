import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Breadcrumb from "@/components/breadcrumb"
import FadeIn from "@/components/fade-in"
import JsonLd from "@/components/json-ld"
import { getMarketBySlug, getAllMarketSlugs } from "@/lib/markets-data"
import { placeSchema, SITE_URL } from "@/lib/schema"
import { MapPin, Home, TrendingUp, Phone, ArrowLeft, CheckCircle, Info } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllMarketSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const market = getMarketBySlug(slug)
  if (!market) return { title: "Market Not Found" }

  return {
    title: `${market.displayName} Real Estate & Construction`,
    description: market.metaDescription,
    alternates: { canonical: `/markets/${market.slug}` },
    openGraph: {
      title: `${market.displayName} | Conine Coastal — Real Estate & Construction, Northeast Florida`,
      description: market.metaDescription,
      url: `${SITE_URL}/markets/${market.slug}`,
      type: "website",
      images: [{ url: market.heroImage, width: 1200, height: 630, alt: `${market.displayName} market` }],
    },
  }
}

export default async function MarketDetailPage({ params }: PageProps) {
  const { slug } = await params
  const market = getMarketBySlug(slug)

  if (!market) {
    notFound()
  }

  const placeNode = placeSchema({
    name: market.displayName,
    description: `${market.overview} ${market.thesis}`,
    url: `${SITE_URL}/markets/${market.slug}`,
    containedIn: market.isCounty ? "Florida" : market.county,
    latitude: market.latitude,
    longitude: market.longitude,
  })

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <Image
          src={market.heroImage}
          alt={`${market.displayName} real estate and construction market`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-coastal-navy text-white px-6 py-2 text-base flex items-center w-fit mx-auto">
            <MapPin className="h-4 w-4 mr-1.5" />
            {market.county}
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-serif">{market.name}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{market.tagline}</p>
        </div>
      </section>

      {/* Market Overview — direct declarative answer */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-coastal-navy font-serif mb-6">
            The {market.name} Market at a Glance
          </h2>
          <p className="text-lg text-coastal-grey leading-relaxed">{market.overview}</p>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Home className="h-7 w-7 text-coastal-blue" />
            <h2 className="text-2xl sm:text-3xl font-bold text-coastal-navy font-serif">
              What We Focus On in {market.name}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {market.propertyTypes.map((type) => (
              <div key={type} className="flex items-start gap-2 text-coastal-grey">
                <CheckCircle className="h-5 w-5 text-coastal-blue flex-shrink-0 mt-0.5" />
                <span>{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-7 w-7 text-coastal-blue" />
            <h2 className="text-2xl sm:text-3xl font-bold text-coastal-navy font-serif">
              Why We Invest and Build in {market.name}
            </h2>
          </div>
          <p className="text-lg text-coastal-grey leading-relaxed">{market.thesis}</p>
        </div>
      </section>

      {/* Market data placeholder — to be supplied by David (no fabricated stats) */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-dashed border-coastal-blue/40 bg-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-coastal-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xl font-bold text-coastal-navy font-serif mb-2">
                    {market.name} Market Data
                  </h2>
                  <p className="text-coastal-grey leading-relaxed mb-3">
                    Current {market.name} market statistics will be published here. To keep this page accurate,
                    live figures are sourced rather than estimated.
                  </p>
                  {/*
                    PLACEHOLDER — David to supply. Do not fabricate. Suggested fields:
                      • Median sale price & 12-month trend
                      • Active inventory & average days on market
                      • Median price per square foot
                      • Typical rent / short-term-rental performance (where relevant)
                      • Conine Coastal active or recent projects in this market
                  */}
                  <ul className="text-sm text-coastal-grey/80 space-y-1">
                    <li>• Median sale price and recent trend</li>
                    <li>• Active inventory and average days on market</li>
                    <li>• Median price per square foot</li>
                    <li>• Typical rental / short-term-rental performance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related links */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-coastal-grey">
            See the{" "}
            <Link href="/services" className="text-coastal-blue font-medium hover:underline">
              services we offer in {market.county}
            </Link>{" "}
            or read{" "}
            <Link href="/faq" className="text-coastal-blue font-medium hover:underline">
              answers to Northeast Florida investing and building questions
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-coastal-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">
            Thinking About {market.name}?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you&apos;re buying, building, or renovating in {market.name}, we&apos;ll evaluate the deal
            and the building together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              <Link href="/markets" className="flex items-center justify-center">
                <ArrowLeft className="mr-2 h-5 w-5" />
                All Markets
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <JsonLd data={placeNode} />
    </div>
  )
}
