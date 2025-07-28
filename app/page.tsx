"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Mail, Home, Hammer, TrendingUp, Star, ArrowRight, Users, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <Badge className="mb-6 bg-[#229FD9] text-white px-6 py-3 text-lg shadow-lg">
            Real Estate & Construction Excellence
          </Badge>
          <h1
            className="text-5xl lg:text-7xl font-bold text-white mb-8 drop-shadow-2xl"
            style={{ fontFamily: "serif" }}
          >
            Where Real Estate Meets Construction Expertise
          </h1>
          <p className="text-2xl lg:text-3xl text-white/95 mb-8 leading-relaxed drop-shadow-lg">
            The only service in Northeast Florida combining 20 years of construction experience with professional real
            estate expertise
          </p>
          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Whether you're buying, selling, or renovating, get the insider advantage that comes from understanding both
            markets and construction costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[#229FD9] hover:bg-[#229FD9]/90 text-white px-10 py-4 text-xl shadow-2xl">
              <Home className="mr-2 h-6 w-6" />
              Real Estate Services
            </Button>
            <Button size="lg" className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-10 py-4 text-xl shadow-2xl">
              <Hammer className="mr-2 h-6 w-6" />
              Renovation Services
            </Button>
          </div>
        </div>
      </section>

      {/* The Coastal Advantage Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              The Coastal Advantage
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Unique expertise combining real estate knowledge with construction skills - we don't just sell homes, we
              transform them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Beautiful coastal home renovation with modern design"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Real Estate Expertise</h3>
                  <p className="text-[#707070]">Deep market knowledge helps you buy smart and sell for maximum value</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Construction Knowledge</h3>
                  <p className="text-[#707070]">Spot potential issues and opportunities that other agents miss</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">End-to-End Service</h3>
                  <p className="text-[#707070]">From finding your home to making it perfect - we handle it all</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-r from-[#18457C]/5 to-[#229FD9]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              Comprehensive Services
            </h2>
            <p className="text-2xl text-[#707070] max-w-4xl mx-auto leading-relaxed">
              From finding your perfect home to transforming it into your dream property, we handle every aspect with
              expert precision.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Real Estate Services */}
            <Card className="border-2 border-[#229FD9]/20 hover:border-[#229FD9] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Home className="h-12 w-12 text-[#229FD9] mr-4" />
                  <h3 className="text-3xl font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
                    Real Estate Services
                  </h3>
                </div>
                <p className="text-[#707070] mb-6 text-lg leading-relaxed">
                  Professional real estate services enhanced by construction expertise. Know the true cost of
                  improvements before you buy or sell.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Buyer representation with renovation cost analysis",
                    "Seller services with strategic improvement recommendations",
                    "Investment property evaluation and profit projections",
                    "Market analysis with construction cost insights",
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#229FD9] mt-1 flex-shrink-0" />
                      <span className="text-[#707070]">{service}</span>
                    </div>
                  ))}
                </div>

                <Link href="/real-estate">
                  <Button className="w-full bg-[#229FD9] hover:bg-[#229FD9]/90 text-white py-3 text-lg">
                    Explore Real Estate Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Renovation Services */}
            <Card className="border-2 border-[#F16622]/20 hover:border-[#F16622] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Hammer className="h-12 w-12 text-[#F16622] mr-4" />
                  <h3 className="text-3xl font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
                    Renovation Services
                  </h3>
                </div>
                <p className="text-[#707070] mb-6 text-lg leading-relaxed">
                  Complete renovation services designed to maximize both your enjoyment and your property's market
                  value.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Kitchen and bathroom renovations",
                    "Whole-home transformations",
                    "Exterior improvements and additions",
                    "Investment property renovations",
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#F16622] mt-1 flex-shrink-0" />
                      <span className="text-[#707070]">{service}</span>
                    </div>
                  ))}
                </div>

                <Link href="/renovations">
                  <Button className="w-full bg-[#F16622] hover:bg-[#F16622]/90 text-white py-3 text-lg">
                    Explore Renovation Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              Why Choose Conine Coastal?
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              The unique combination of real estate expertise and construction knowledge provides advantages you won't
              find anywhere else.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-12 w-12 text-[#229FD9]" />,
                title: "Accurate Cost Estimates",
                description:
                  "No more guessing at renovation costs. Get precise estimates based on 20 years of construction experience.",
              },
              {
                icon: <Users className="h-12 w-12 text-[#F16622]" />,
                title: "Market Value Optimization",
                description:
                  "Every renovation decision is made with resale value in mind, ensuring maximum return on investment.",
              },
              {
                icon: <Shield className="h-12 w-12 text-[#FFCA05]" />,
                title: "Complete Project Management",
                description:
                  "From initial consultation to final walkthrough, we handle every detail with professional expertise.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                    {benefit.title}
                  </h3>
                  <p className="text-[#707070] leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              What Our Clients Say
            </h2>
            <p className="text-xl text-[#707070]">
              Real results from real clients who experienced the Conine Coastal difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                service: "Real Estate & Renovation",
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
              <Card key={index} className="bg-white">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#FFCA05] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#707070] mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-[#18457C]">{testimonial.name}</p>
                    <p className="text-sm text-[#707070]">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#18457C] to-[#229FD9]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "serif" }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Whether you're looking to buy, sell, or renovate, let our unique combination of real estate and construction
            expertise work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
            <Button size="lg" className="bg-white text-[#18457C] hover:bg-white/90 px-8 py-4 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
