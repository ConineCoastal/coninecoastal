import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Shield, Hammer, Target, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About David Conine",
  description: "Meet David Conine — licensed Realtor with 20+ years of construction experience serving Northeast Florida. Expert guidance for buyers, sellers, and investors on the First Coast.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About David Conine",
    description: "Meet David Conine — licensed Realtor with 20+ years of construction experience serving Northeast Florida. Expert guidance for buyers, sellers, and investors on the First Coast.",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="David Conine - licensed realtor and construction expert serving Northeast Florida"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg font-serif"
            >
              Meet David Conine
            </h1>
            <p className="text-2xl lg:text-3xl text-white mb-8 leading-relaxed drop-shadow-md">
              20 Years of Construction Excellence Meets Real Estate Expertise
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-coastal-blue text-white px-4 py-2 text-sm">UNF Construction Management</Badge>
              <Badge className="bg-coastal-orange text-white px-4 py-2 text-sm">Harvard Real Estate Certificate</Badge>
              <Badge className="bg-coastal-navy text-white px-4 py-2 text-sm">FL Licensed Realtor & Contractor</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Stats */}
      <section className="py-10 bg-coastal-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-coastal-blue mb-1">20+</div>
              <div className="text-sm sm:text-base text-white/80">Years in Construction</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-coastal-orange mb-1">UNF</div>
              <div className="text-sm sm:text-base text-white/80">Construction Management</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-coastal-blue mb-1">Harvard</div>
              <div className="text-sm sm:text-base text-white/80">Real Estate Certificate</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-coastal-orange mb-1">FL</div>
              <div className="text-sm sm:text-base text-white/80">Licensed Realtor & Contractor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-coastal-navy mb-12 text-center font-serif">
              Our Story
            </h2>

            <div className="space-y-8 text-lg text-coastal-grey leading-relaxed">
              <p>
                Combining a lifelong love of coastal living with two decades of construction and project management
                experience, David Conine founded Conine Coastal to bridge the gap between real estate and renovation.
              </p>

              <p>
                Growing up in a Navy family and spending half his life in the Jacksonville area, David understands the
                First Coast like few others.
              </p>

              <p>
                After earning his Bachelor's degree in Construction Management from the University of North Florida and
                a Master's Certificate in Real Estate Investing from Harvard University, David obtained both his Florida
                Real Estate License and Florida General Contractor's License.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-coastal-navy via-coastal-blue to-coastal-navy rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Conine Coastal Advantage Section */}
      <section className="py-16 bg-gradient-to-r from-coastal-navy/5 to-coastal-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coastal-navy mb-4 font-serif">
              Why Our Dual Expertise Changes Everything
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-2 border-coastal-blue/20 hover:border-coastal-blue transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-coastal-blue mr-4" />
                  <h3 className="text-2xl font-bold text-coastal-navy font-serif">
                    For Buyers
                  </h3>
                </div>
                <p className="text-coastal-grey leading-relaxed">
                  Imagine walking through a potential home with an agent who can instantly tell you the real cost to
                  renovate that outdated kitchen—not a guess, but an accurate estimate based on 20 years of construction
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-coastal-orange/20 hover:border-coastal-orange transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="h-12 w-12 text-coastal-orange mr-4" />
                  <h3 className="text-2xl font-bold text-coastal-navy font-serif">
                    For Sellers
                  </h3>
                </div>
                <p className="text-coastal-grey leading-relaxed">
                  Get the insider advantage of knowing exactly which improvements will maximize your home's value and
                  which ones won't. David's construction background means he can recommend cost-effective updates.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-coastal-yellow/20 hover:border-coastal-yellow transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Hammer className="h-12 w-12 text-coastal-yellow mr-4" />
                  <h3 className="text-2xl font-bold text-coastal-navy font-serif">
                    For Investors
                  </h3>
                </div>
                <p className="text-coastal-grey leading-relaxed">
                  Evaluate properties with confidence knowing you have both market analysis AND renovation expertise in
                  one consultant. Calculate accurate rehab costs and profit potential before you make an offer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coastal-navy mb-8 font-serif">
              Our Values
            </h2>
            <p className="text-xl text-coastal-grey max-w-4xl mx-auto leading-relaxed">
              Our mission is simple: help families find great homes to raise their children, provide beautiful spaces
              for retirees to enjoy their golden years, and identify profitable investment opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-coastal-blue/10 rounded-full flex items-center justify-center">
                  <Shield className="h-10 w-10 text-coastal-blue" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-coastal-navy mb-4 font-serif">
                Honesty
              </h3>
              <p className="text-coastal-grey leading-relaxed">
                Transparent communication and honest assessments in every interaction. No surprises, no hidden agendas.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-coastal-orange/10 rounded-full flex items-center justify-center">
                  <Hammer className="h-10 w-10 text-coastal-orange" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-coastal-navy mb-4 font-serif">
                Quality Craftsmanship
              </h3>
              <p className="text-coastal-grey leading-relaxed">
                Two decades of construction experience ensures every project meets the highest standards of excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-coastal-yellow/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-coastal-yellow" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-coastal-navy mb-4 font-serif">
                Attention to Detail
              </h3>
              <p className="text-coastal-grey leading-relaxed">
                From market analysis to finish carpentry, every detail matters in delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-16 bg-coastal-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-coastal-yellow fill-current" />
            ))}
          </div>

          <blockquote
            className="text-2xl lg:text-3xl text-white mb-8 italic leading-relaxed font-serif"
          >
            "David's unique combination of real estate knowledge and construction expertise saved us thousands. He
            spotted issues other agents missed and helped us negotiate a fair price."
          </blockquote>

          <div className="text-white/80">
            <p className="font-semibold text-lg">Jennifer & Mark Thompson</p>
            <p>First-time Homebuyers, Neptune Beach</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-coastal-navy to-coastal-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Experience the Conine Coastal Difference?
          </h2>

          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Let's discuss how David's unique combination of real estate and construction expertise can benefit your next
            project.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-coastal-navy hover:bg-white/90 px-8 py-4 text-lg"
            >
              <Link href="/renovations">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
