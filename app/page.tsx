import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/fade-in"
import { CheckCircle, Phone, Mail, Home, Hammer, TrendingUp, Star, ArrowRight, Users, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conine Coastal - Real Estate & Construction Expert | Northeast Florida",
  description: "Northeast Florida's premier real estate and construction company. 20+ years of construction expertise combined with professional real estate services for buyers, sellers, and investors.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Conine Coastal - Real Estate & Construction Expert | Northeast Florida",
    description: "Northeast Florida's premier real estate and construction company. 20+ years of construction expertise combined with professional real estate services for buyers, sellers, and investors.",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Luxury modern home with pool in Northeast Florida - Conine Coastal real estate and construction services"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <Badge className="mb-4 bg-coastal-blue text-white px-6 py-3 text-lg shadow-lg">
            Real Estate & Construction Excellence
          </Badge>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl font-serif"
          >
            Where Real Estate Meets Construction Expertise
          </h1>
          <p className="text-lg sm:text-xl lg:text-3xl text-white/95 mb-4 sm:mb-6 leading-relaxed drop-shadow-lg px-2">
            The only service in Northeast Florida combining 20 years of construction experience with professional real
            estate expertise
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-2">
            Whether you're buying, selling, or renovating, get the insider advantage that comes from understanding both
            markets and construction costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto sm:max-w-none sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-coastal-blue hover:bg-coastal-blue/90 text-white px-8 sm:px-10 py-4 text-lg sm:text-xl shadow-2xl min-h-[56px] touch-manipulation"
            >
              <Link href="/contact?service=buying" className="flex items-center justify-center">
                <Home className="mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <span className="whitespace-nowrap">Talk Real Estate</span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8 sm:px-10 py-4 text-lg sm:text-xl shadow-2xl min-h-[56px] touch-manipulation"
            >
              <Link href="/contact?service=whole-home-renovation" className="flex items-center justify-center">
                <Hammer className="mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <span className="whitespace-nowrap">Plan Your Project</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-coastal-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-coastal-blue mb-1">20+</div>
              <div className="text-sm sm:text-base text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-coastal-orange mb-1">500+</div>
              <div className="text-sm sm:text-base text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-coastal-blue mb-1">$50M+</div>
              <div className="text-sm sm:text-base text-white/80">Property Value Managed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-coastal-orange mb-1">100%</div>
              <div className="text-sm sm:text-base text-white/80">Client-Focused Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Coastal Advantage Section */}
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-coastal-navy mb-3 font-serif">
                The Coastal Advantage
              </h2>
              <p className="text-lg sm:text-xl text-coastal-grey max-w-3xl mx-auto px-2">
                Unique expertise combining real estate knowledge with construction skills - we don't just sell homes, we
                transform them.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <FadeIn className="order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Recently renovated coastal home exterior in Jacksonville, Florida"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg shadow-lg w-full"
              />
            </FadeIn>

            <div className="space-y-4 sm:space-y-5 order-1 md:order-2">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-coastal-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-coastal-navy mb-1">Real Estate Expertise</h3>
                  <p className="text-coastal-grey text-sm sm:text-base">
                    Deep market knowledge helps you buy smart and sell for maximum value
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-coastal-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-coastal-navy mb-1">Construction Knowledge</h3>
                  <p className="text-coastal-grey text-sm sm:text-base">
                    Spot potential issues and opportunities that other agents miss
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-coastal-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-coastal-navy mb-1">End-to-End Service</h3>
                  <p className="text-coastal-grey text-sm sm:text-base">
                    From finding your home to making it perfect - we handle it all
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-coastal-navy/5 to-coastal-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-navy mb-4 font-serif">
              Comprehensive Services
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-coastal-grey max-w-4xl mx-auto leading-relaxed px-2">
              From finding your perfect home to transforming it into your dream property, we handle every aspect with
              expert precision.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Real Estate Services */}
            <FadeIn>
            <Card className="border-2 border-coastal-blue/20 hover:border-coastal-blue transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3">
                  <Home className="h-10 w-10 sm:h-12 sm:w-12 text-coastal-blue flex-shrink-0" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-coastal-navy font-serif">
                    Real Estate Services
                  </h3>
                </div>
                <p className="text-coastal-grey mb-4 text-base sm:text-lg leading-relaxed">
                  Professional real estate services enhanced by construction expertise. Know the true cost of
                  improvements before you buy or sell.
                </p>

                <div className="space-y-2 sm:space-y-3 mb-5">
                  {[
                    "Buyer representation with renovation cost analysis",
                    "Seller services with strategic improvement recommendations",
                    "Investment property evaluation and profit projections",
                    "Market analysis with construction cost insights",
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-coastal-blue mt-1 flex-shrink-0" />
                      <span className="text-coastal-grey text-sm sm:text-base">{service}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-coastal-blue hover:bg-coastal-blue/90 text-white py-3 text-base sm:text-lg min-h-[48px] touch-manipulation">
                  <Link href="/real-estate" className="flex items-center justify-center">
                    Explore Real Estate Services
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            </FadeIn>

            {/* Construction Services */}
            <FadeIn delay={150}>
            <Card className="border-2 border-coastal-orange/20 hover:border-coastal-orange transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3">
                  <Hammer className="h-10 w-10 sm:h-12 sm:w-12 text-coastal-orange flex-shrink-0" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-coastal-navy font-serif">
                    Construction Services
                  </h3>
                </div>
                <p className="text-coastal-grey mb-4 text-base sm:text-lg leading-relaxed">
                  Complete construction services designed to maximize both your enjoyment and your property's market
                  value.
                </p>

                <div className="space-y-2 sm:space-y-3 mb-5">
                  {[
                    "Kitchen and bathroom renovations",
                    "Whole-home transformations",
                    "Exterior improvements and additions",
                    "Investment property renovations",
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-coastal-orange mt-1 flex-shrink-0" />
                      <span className="text-coastal-grey text-sm sm:text-base">{service}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-coastal-orange hover:bg-coastal-orange/90 text-white py-3 text-base sm:text-lg min-h-[48px] touch-manipulation">
                  <Link href="/renovations" className="flex items-center justify-center">
                    Explore Construction Services
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-navy mb-4 font-serif">
              Why Choose Conine Coastal?
            </h2>
            <p className="text-lg sm:text-xl text-coastal-grey max-w-3xl mx-auto px-2">
              The unique combination of real estate expertise and construction knowledge provides advantages you won't
              find anywhere else.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-coastal-blue" />,
                title: "Accurate Cost Estimates",
                description:
                  "No more guessing at renovation costs. Get precise estimates based on 20 years of construction experience.",
              },
              {
                icon: <Users className="h-10 w-10 sm:h-12 sm:w-12 text-coastal-orange" />,
                title: "Market Value Optimization",
                description:
                  "Every renovation decision is made with resale value in mind, ensuring maximum return on investment.",
              },
              {
                icon: <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-coastal-yellow" />,
                title: "Complete Project Management",
                description:
                  "From initial consultation to final walkthrough, we handle every detail with professional expertise.",
              },
            ].map((benefit, index) => (
              <FadeIn key={index} delay={index * 150}>
                <Card
                  className="text-center hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1 last:sm:col-start-1 last:sm:col-end-3 last:lg:col-start-auto last:lg:col-end-auto h-full"
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex justify-center mb-3 sm:mb-4">{benefit.icon}</div>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-coastal-navy mb-2 sm:mb-3 font-serif"
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-coastal-grey leading-relaxed text-sm sm:text-base">{benefit.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-navy mb-4 font-serif">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-coastal-grey max-w-3xl mx-auto px-2">
              A simple, proven process from first conversation to project completion
            </p>
          </div>

          <div className="relative">
            {/* Vertical line connector - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-coastal-blue/20 -translate-x-1/2" />

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  step: "01",
                  title: "Free Consultation",
                  desc: "Tell us your goals — buying, selling, renovating, or investing. We'll listen, assess your needs, and outline a clear path forward.",
                  color: "bg-coastal-blue",
                },
                {
                  step: "02",
                  title: "Expert Evaluation",
                  desc: "We assess properties with a construction professional's eye, providing accurate cost estimates and identifying opportunities others miss.",
                  color: "bg-coastal-orange",
                },
                {
                  step: "03",
                  title: "Strategic Plan",
                  desc: "Receive a detailed plan — whether it's a buying strategy, pre-sale improvements, or a renovation scope — tailored to maximize your results.",
                  color: "bg-coastal-navy",
                },
                {
                  step: "04",
                  title: "Execute & Deliver",
                  desc: "We handle every detail from negotiation to construction, keeping you informed at every step and delivering results on time and on budget.",
                  color: "bg-coastal-blue",
                },
              ].map((item, index) => (
                <FadeIn key={index} delay={index * 150}>
                <div className={`flex flex-col md:flex-row items-center gap-4 sm:gap-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1 text-center md:text-right md:pr-8">
                    {index % 2 === 0 && (
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-coastal-navy mb-2 font-serif">{item.title}</h3>
                        <p className="text-coastal-grey leading-relaxed text-sm sm:text-base">{item.desc}</p>
                      </div>
                    )}
                  </div>

                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${item.color} flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0 shadow-lg z-10`}>
                    {item.step}
                  </div>

                  <div className="flex-1 text-center md:text-left md:pl-8">
                    {index % 2 === 1 && (
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-coastal-navy mb-2 font-serif">{item.title}</h3>
                        <p className="text-coastal-grey leading-relaxed text-sm sm:text-base">{item.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-navy mb-4 font-serif">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-coastal-grey px-2">
              Real results from real clients who experienced the Conine Coastal difference
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                name: "Sarah Johnson",
                service: "Real Estate & Construction",
                text: "Conine Coastal helped us find the perfect fixer-upper and then transformed it into our dream home. Their dual expertise saved us time and money!",
                rating: 5,
              },
              {
                name: "Mike Rodriguez",
                service: "Investment Property",
                text: "Their construction knowledge helped me identify the best investment opportunities. They knew exactly what renovations would maximize my ROI.",
                rating: 5,
              },
              {
                name: "Emily Chen",
                service: "Kitchen Remodel",
                text: "Professional, reliable, and the results exceeded our expectations. Our coastal kitchen is now the heart of our home.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <FadeIn key={index} delay={index * 150}>
                <Card
                  className="bg-white sm:col-span-2 lg:col-span-1 last:sm:col-start-1 last:sm:col-end-3 last:lg:col-start-auto last:lg:col-end-auto h-full"
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-coastal-yellow fill-current" />
                      ))}
                    </div>
                    <p className="text-coastal-grey mb-3 italic leading-relaxed text-sm sm:text-base">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-coastal-navy text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-coastal-grey">{testimonial.service}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Review",
              author: { "@type": "Person", name: "Sarah Johnson" },
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
              reviewBody: "Conine Coastal helped us find the perfect fixer-upper and then transformed it into our dream home. Their dual expertise saved us time and money!",
              itemReviewed: { "@type": "RealEstateAgent", name: "Conine Coastal" },
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              author: { "@type": "Person", name: "Mike Rodriguez" },
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
              reviewBody: "Their construction knowledge helped me identify the best investment opportunities. They knew exactly what renovations would maximize my ROI.",
              itemReviewed: { "@type": "RealEstateAgent", name: "Conine Coastal" },
            },
            {
              "@context": "https://schema.org",
              "@type": "Review",
              author: { "@type": "Person", name: "Emily Chen" },
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
              reviewBody: "Professional, reliable, and the results exceeded our expectations. Our coastal kitchen is now the heart of our home.",
              itemReviewed: { "@type": "RealEstateAgent", name: "Conine Coastal" },
            },
          ]),
        }}
      />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-coastal-navy to-coastal-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
            Whether you're looking to buy, sell, or renovate, let our unique combination of real estate and construction
            expertise work for you.
          </p>
          <div className="flex flex-col gap-4 sm:gap-6 justify-center max-w-lg mx-auto sm:max-w-none sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-coastal-orange hover:bg-coastal-orange/90 text-white px-6 sm:px-8 py-4 text-base sm:text-lg min-h-[56px] touch-manipulation"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Talk with Our Team</span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-coastal-navy hover:bg-white/90 px-6 sm:px-8 py-4 text-base sm:text-lg min-h-[56px] touch-manipulation"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Schedule a Consultation</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
