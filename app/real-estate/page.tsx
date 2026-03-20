"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Mail, Home, TrendingUp, Calculator, MapPin, Star, ArrowRight } from "lucide-react"

export default function RealEstateServicesPage() {
  const services = [
    {
      title: "For Buyers",
      description: "Expert guidance through every step of the home buying process with construction insights.",
      icon: <Home className="h-12 w-12 text-coastal-blue" />,
      href: "/real-estate/buyers",
      features: [
        "Construction-informed property evaluation",
        "Hidden problem detection",
        "True value assessment",
        "First-time buyer guidance",
      ],
      color: "border-coastal-blue/20 hover:border-coastal-blue",
    },
    {
      title: "For Sellers",
      description: "Maximize your home's value with strategic improvements and expert market positioning.",
      icon: <TrendingUp className="h-12 w-12 text-coastal-orange" />,
      href: "/real-estate/sellers",
      features: [
        "Strategic improvement recommendations",
        "ROI-focused renovations",
        "Market value optimization",
        "Professional staging consultation",
      ],
      color: "border-coastal-orange/20 hover:border-coastal-orange",
    },
    {
      title: "Investment Services",
      description: "Smart investment strategies backed by accurate renovation cost analysis.",
      icon: <Calculator className="h-12 w-12 text-coastal-yellow" />,
      href: "/investor-services/investment",
      features: [
        "Fix & flip opportunities",
        "Rental property evaluation",
        "Accurate rehab cost estimates",
        "Market trend analysis",
      ],
      color: "border-coastal-yellow/20 hover:border-coastal-yellow",
    },
    {
      title: "Current Listings",
      description: "Browse our handpicked selection of coastal properties with renovation potential.",
      icon: <MapPin className="h-12 w-12 text-coastal-navy" />,
      href: "/real-estate/listings",
      features: ["Move-in ready homes", "Construction opportunities", "Waterfront properties", "Investment properties"],
      color: "border-coastal-navy/20 hover:border-coastal-navy",
    },
  ]

  const testimonials = [
    {
      name: "Sarah & Mike Johnson",
      location: "St. Augustine",
      text: "David's construction knowledge saved us from buying a money pit. He spotted foundation issues that other agents missed and helped us find our dream home instead.",
      rating: 5,
    },
    {
      name: "Jennifer Rodriguez",
      location: "Ponte Vedra Beach",
      text: "His dual expertise in real estate and construction is unmatched. We got accurate renovation estimates before making our offer, which gave us confidence in our investment.",
      rating: 5,
    },
    {
      name: "Robert Chen",
      location: "Fernandina Beach",
      text: "David helped us sell our home for $40K more than expected by recommending strategic improvements that cost only $8K. Best ROI we've ever seen!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
          }}
        ></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Badge className="mb-6 bg-coastal-blue text-white px-6 py-3 text-lg shadow-lg">Real Estate Excellence</Badge>
          <h1
            className="text-5xl lg:text-7xl font-bold text-white mb-8 drop-shadow-2xl font-serif"
          >
            Real Estate Services
          </h1>
          <p className="text-2xl lg:text-3xl text-white/95 mb-8 leading-relaxed drop-shadow-lg">
            Where 20 Years of Construction Expertise Meets Deep Market Knowledge
          </p>
          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            The only real estate service in Northeast Florida that combines professional construction experience with
            expert market analysis, giving you insights others simply can't provide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coastal-blue hover:bg-coastal-blue/90 text-white px-10 py-4 text-xl shadow-2xl"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Home className="mr-2 h-6 w-6" />
                Find Your Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-10 py-4 text-xl shadow-2xl"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <TrendingUp className="mr-2 h-6 w-6" />
                Sell Your Home
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Conine Coastal Advantage */}
      <section className="py-16 bg-gradient-to-r from-coastal-navy/5 to-coastal-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coastal-navy mb-6 font-serif">
              The Conine Coastal Advantage
            </h2>
            <p className="text-2xl text-coastal-grey max-w-4xl mx-auto leading-relaxed">
              What happens when you combine a licensed real estate professional with 20 years of construction management
              experience?
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <Card className="text-center border-2 border-coastal-blue/20 hover:border-coastal-blue transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-coastal-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="h-10 w-10 text-coastal-blue" />
                </div>
                <h3 className="text-2xl font-bold text-coastal-navy mb-4 font-serif">
                  For Buyers
                </h3>
                <p className="text-coastal-grey leading-relaxed">
                  Walk through properties with an agent who can instantly tell you the real cost to renovate that
                  outdated kitchen—not a guess, but an accurate estimate based on decades of experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-coastal-orange/20 hover:border-coastal-orange transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-coastal-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-coastal-orange" />
                </div>
                <h3 className="text-2xl font-bold text-coastal-navy mb-4 font-serif">
                  For Sellers
                </h3>
                <p className="text-coastal-grey leading-relaxed">
                  Get the insider advantage of knowing exactly which improvements will maximize your home's value and
                  which ones won't. Make strategic investments that actually pay off.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-coastal-yellow/20 hover:border-coastal-yellow transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-coastal-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calculator className="h-10 w-10 text-coastal-yellow" />
                </div>
                <h3 className="text-2xl font-bold text-coastal-navy mb-4 font-serif">
                  For Investors
                </h3>
                <p className="text-coastal-grey leading-relaxed">
                  Evaluate properties with confidence knowing you have both market analysis AND construction expertise
                  in one consultant. Calculate accurate profit potential before you make an offer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coastal-navy mb-6 font-serif">
              Comprehensive Real Estate Services
            </h2>
            <p className="text-xl text-coastal-grey max-w-3xl mx-auto">
              From first-time buyers to seasoned investors, we provide expert guidance backed by construction knowledge
              and market expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${service.color}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-coastal-navy mb-3 font-serif">
                        {service.title}
                      </h3>
                      <p className="text-coastal-grey leading-relaxed mb-6">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-coastal-grey">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-coastal-navy hover:bg-coastal-navy/90 text-white py-3 text-lg">
                    <Link href={service.href} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Reports & Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-coastal-navy mb-6 font-serif">
                Stay Informed with Market Intelligence
              </h2>
              <p className="text-xl text-coastal-grey mb-8 leading-relaxed">
                Access our comprehensive market reports and analysis, backed by real construction cost data and local
                market expertise.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-coastal-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coastal-navy mb-2">Monthly Market Reports</h3>
                    <p className="text-coastal-grey">
                      Detailed analysis of price trends, inventory levels, and market conditions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-coastal-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coastal-navy mb-2">Construction Cost Analysis</h3>
                    <p className="text-coastal-grey">
                      Real construction costs for popular home improvements and renovations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-coastal-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coastal-navy mb-2">Investment Opportunities</h3>
                    <p className="text-coastal-grey">
                      Curated list of properties with the best potential for profitable improvements
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-coastal-blue hover:bg-coastal-blue/90 text-white px-8 py-4 text-lg">
                <Link href="/real-estate/market-reports">View Market Reports</Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Market analysis dashboard"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-2xl font-bold text-coastal-blue mb-1">+8.4%</div>
                <div className="text-sm text-gray-600">Average price appreciation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-coastal-navy mb-6 font-serif">
              What Our Clients Say
            </h2>
            <p className="text-xl text-coastal-grey">
              Real results from real clients who experienced the Conine Coastal difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-coastal-yellow fill-current" />
                    ))}
                  </div>
                  <p className="text-coastal-grey mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-coastal-navy">{testimonial.name}</p>
                    <p className="text-sm text-coastal-grey">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-coastal-navy to-coastal-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Whether you're buying, selling, or investing, let our unique combination of real estate and construction
            expertise work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Talk with Our Team
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-coastal-navy hover:bg-white/90 px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
