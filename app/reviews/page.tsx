import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Breadcrumb from "@/components/breadcrumb"
import FadeIn from "@/components/fade-in"
import { Star, Phone, MapPin, Calendar } from "lucide-react"
import { testimonials, aggregateRating } from "@/lib/testimonials-data"

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials",
  description:
    "Read what our clients say about Conine Coastal. Real reviews from real homeowners, investors, and renovation clients across Northeast Florida.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Client Reviews & Testimonials | Conine Coastal",
    description:
      "Read what our clients say about Conine Coastal. Real reviews from homeowners, investors, and renovation clients across Northeast Florida.",
  },
}

function sourceLabel(source: string) {
  switch (source) {
    case "Google":
      return "bg-blue-50 text-blue-700"
    case "Zillow":
      return "bg-green-50 text-green-700"
    default:
      return "bg-gray-100 text-coastal-grey"
  }
}

export default function ReviewsPage() {
  const serviceGroups = Array.from(new Set(testimonials.map((t) => t.service)))

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=2000&q=80"
          alt="Happy homeowners reviewing their renovation with Conine Coastal"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-coastal-orange text-white px-6 py-2 text-base">Client Reviews</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-serif">
            What Our Clients Say
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Real feedback from homeowners, investors, and renovation clients across Northeast Florida.
          </p>

          {/* Aggregate Rating */}
          <div className="inline-flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-coastal-yellow fill-current" />
              ))}
            </div>
            <div className="text-4xl font-bold text-white mb-1">{aggregateRating.averageRating}</div>
            <div className="text-white/80 text-sm">
              Based on {aggregateRating.totalReviews} reviews
            </div>
            <div className="flex gap-3 mt-3 text-xs text-white/70">
              <span>{aggregateRating.platforms.google} Google</span>
              <span>·</span>
              <span>{aggregateRating.platforms.zillow} Zillow</span>
              <span>·</span>
              <span>{aggregateRating.platforms.direct} Direct</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-coastal-navy">{aggregateRating.averageRating}</div>
              <div className="text-sm text-coastal-grey">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coastal-navy">{aggregateRating.totalReviews}</div>
              <div className="text-sm text-coastal-grey">Total Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coastal-navy">{aggregateRating.fiveStarCount}</div>
              <div className="text-sm text-coastal-grey">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coastal-navy">{serviceGroups.length}</div>
              <div className="text-sm text-coastal-grey">Service Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-coastal-navy mb-8 font-serif text-center">
              All Reviews
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 80}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-coastal-yellow fill-current" />
                        ))}
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded ${sourceLabel(testimonial.source)}`}>
                        {testimonial.source}
                      </span>
                    </div>

                    <p className="text-coastal-grey italic leading-relaxed mb-4">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    <div className="border-t pt-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-coastal-navy">{testimonial.name}</p>
                          <div className="flex items-center gap-3 text-xs text-coastal-grey mt-0.5">
                            <span className="flex items-center">
                              <MapPin className="h-3 w-3 mr-0.5" />
                              {testimonial.location}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-0.5" />
                              {testimonial.date}
                            </span>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">{testimonial.service}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-coastal-navy to-coastal-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our growing list of satisfied clients across Northeast Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/schedule" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-coastal-navy hover:bg-white/90 px-8 py-4 text-lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Conine Coastal",
            url: "https://www.coninecoastal.com",
            telephone: "+1-904-624-1722",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: aggregateRating.averageRating,
              reviewCount: aggregateRating.totalReviews,
              bestRating: 5,
            },
            review: testimonials.map((t) => ({
              "@type": "Review",
              author: { "@type": "Person", name: t.name },
              reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
              reviewBody: t.text,
              datePublished: t.date,
              itemReviewed: { "@type": "RealEstateAgent", name: "Conine Coastal" },
            })),
          }),
        }}
      />
    </div>
  )
}
