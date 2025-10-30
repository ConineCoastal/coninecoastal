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
          <Badge className="mb-4 bg-[#229FD9] text-white px-6 py-3 text-lg shadow-lg">
            Real Estate & Construction Excellence
          </Badge>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl"
            style={{ fontFamily: "serif" }}
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
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#229FD9] hover:bg-[#229FD9]/90 text-white px-8 sm:px-10 py-4 text-lg sm:text-xl shadow-2xl min-h-[56px] touch-manipulation"
              >
                <Home className="mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <span className="whitespace-nowrap">Talk Real Estate</span>
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#F16622] hover:bg-[#F16622]/90 text-white px-8 sm:px-10 py-4 text-lg sm:text-xl shadow-2xl min-h-[56px] touch-manipulation"
              >
                <Hammer className="mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <span className="whitespace-nowrap">Plan Your Project</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Coastal Advantage Section */}
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#18457C] mb-3" style={{ fontFamily: "serif" }}>
              The Coastal Advantage
            </h2>
            <p className="text-lg sm:text-xl text-[#707070] max-w-3xl mx-auto px-2">
              Unique expertise combining real estate knowledge with construction skills - we don't just sell homes, we
              transform them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Beautiful coastal home renovation with modern design"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div className="space-y-4 sm:space-y-5 order-1 md:order-2">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#18457C] mb-1">Real Estate Expertise</h3>
                  <p className="text-[#707070] text-sm sm:text-base">
                    Deep market knowledge helps you buy smart and sell for maximum value
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#18457C] mb-1">Construction Knowledge</h3>
                  <p className="text-[#707070] text-sm sm:text-base">
                    Spot potential issues and opportunities that other agents miss
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#18457C] mb-1">End-to-End Service</h3>
                  <p className="text-[#707070] text-sm sm:text-base">
                    From finding your home to making it perfect - we handle it all
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#18457C]/5 to-[#229FD9]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Comprehensive Services
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#707070] max-w-4xl mx-auto leading-relaxed px-2">
              From finding your perfect home to transforming it into your dream property, we handle every aspect with
              expert precision.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Real Estate Services */}
            <Card className="border-2 border-[#229FD9]/20 hover:border-[#229FD9] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3">
                  <Home className="h-10 w-10 sm:h-12 sm:w-12 text-[#229FD9] flex-shrink-0" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
                    Real Estate Services
                  </h3>
                </div>
                <p className="text-[#707070] mb-4 text-base sm:text-lg leading-relaxed">
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
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#229FD9] mt-1 flex-shrink-0" />
                      <span className="text-[#707070] text-sm sm:text-base">{service}</span>
                    </div>
                  ))}
                </div>

                <Link href="/real-estate" className="block">
                  <Button className="w-full bg-[#229FD9] hover:bg-[#229FD9]/90 text-white py-3 text-base sm:text-lg min-h-[48px] touch-manipulation">
                    Explore Real Estate Services
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Construction Services */}
            <Card className="border-2 border-[#F16622]/20 hover:border-[#F16622] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3">
                  <Hammer className="h-10 w-10 sm:h-12 sm:w-12 text-[#F16622] flex-shrink-0" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
                    Construction Services
                  </h3>
                </div>
                <p className="text-[#707070] mb-4 text-base sm:text-lg leading-relaxed">
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
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#F16622] mt-1 flex-shrink-0" />
                      <span className="text-[#707070] text-sm sm:text-base">{service}</span>
                    </div>
                  ))}
                </div>

                <Link href="/renovations" className="block">
                  <Button className="w-full bg-[#F16622] hover:bg-[#F16622]/90 text-white py-3 text-base sm:text-lg min-h-[48px] touch-manipulation">
                    Explore Construction Services
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Why Choose Conine Coastal?
            </h2>
            <p className="text-lg sm:text-xl text-[#707070] max-w-3xl mx-auto px-2">
              The unique combination of real estate expertise and construction knowledge provides advantages you won't
              find anywhere else.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-[#229FD9]" />,
                title: "Accurate Cost Estimates",
                description:
                  "No more guessing at renovation costs. Get precise estimates based on 20 years of construction experience.",
              },
              {
                icon: <Users className="h-10 w-10 sm:h-12 sm:w-12 text-[#F16622]" />,
                title: "Market Value Optimization",
                description:
                  "Every renovation decision is made with resale value in mind, ensuring maximum return on investment.",
              },
              {
                icon: <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-[#FFCA05]" />,
                title: "Complete Project Management",
                description:
                  "From initial consultation to final walkthrough, we handle every detail with professional expertise.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1 last:sm:col-start-1 last:sm:col-end-3 last:lg:col-start-auto last:lg:col-end-auto"
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex justify-center mb-3 sm:mb-4">{benefit.icon}</div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#18457C] mb-2 sm:mb-3"
                    style={{ fontFamily: "serif" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-[#707070] leading-relaxed text-sm sm:text-base">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-[#707070] px-2">
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
              <Card
                key={index}
                className="bg-white sm:col-span-2 lg:col-span-1 last:sm:col-start-1 last:sm:col-end-3 last:lg:col-start-auto last:lg:col-end-auto"
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-[#FFCA05] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#707070] mb-3 italic leading-relaxed text-sm sm:text-base">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-[#18457C] text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-[#707070]">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#18457C] to-[#229FD9]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "serif" }}>
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
            Whether you're looking to buy, sell, or renovate, let our unique combination of real estate and construction
            expertise work for you.
          </p>
          <div className="flex flex-col gap-4 sm:gap-6 justify-center max-w-lg mx-auto sm:max-w-none sm:flex-row">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#F16622] hover:bg-[#F16622]/90 text-white px-6 sm:px-8 py-4 text-base sm:text-lg min-h-[56px] touch-manipulation"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Talk with Our Team</span>
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-[#18457C] hover:bg-white/90 px-6 sm:px-8 py-4 text-base sm:text-lg min-h-[56px] touch-manipulation"
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Schedule a Consultation</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
