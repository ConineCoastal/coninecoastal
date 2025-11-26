"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Phone,
  Mail,
  Wrench,
  Home,
  Droplets,
  Layers,
  Plus,
  AlertTriangle,
  Star,
  ArrowRight,
} from "lucide-react"

export default function ConstructionServicesPage() {
  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen with designs that blend functionality, style, and maximum resale value.",
      icon: <Home className="h-12 w-12 text-[#F16622]" />,
      href: "/renovations/kitchen",
      features: [
        "70-85% ROI potential",
        "Value-driven design choices",
        "Buyer-preferred features",
        "Coastal-inspired designs",
      ],
      color: "border-[#F16622]/20 hover:border-[#F16622]",
      roi: "75-85%",
    },
    {
      title: "Bathroom Renovations",
      description: "Create spa-like retreats that enhance daily living and boost property value.",
      icon: <Droplets className="h-12 w-12 text-[#229FD9]" />,
      href: "/renovations/bathroom",
      features: [
        "Master suite transformations",
        "Accessibility modifications",
        "Luxury finishes",
        "Space optimization",
      ],
      color: "border-[#229FD9]/20 hover:border-[#229FD9]",
      roi: "60-70%",
    },
    {
      title: "Home Repairs & Maintenance",
      description: "Professional repair services that keep your coastal home in perfect condition.",
      icon: <Wrench className="h-12 w-12 text-[#18457C]" />,
      href: "/renovations/repairs",
      features: ["24/7 emergency service", "Preventive maintenance", "Licensed & insured", "Value-focused repairs"],
      color: "border-[#18457C]/20 hover:border-[#18457C]",
      roi: "Varies",
    },
    {
      title: "Flooring Services",
      description: "Premium flooring installation that enhances beauty, comfort, and market value.",
      icon: <Layers className="h-12 w-12 text-[#FFCA05]" />,
      href: "/renovations/flooring",
      features: ["Hardwood installation", "Luxury vinyl plank", "Tile & stone work", "Refinishing services"],
      color: "border-[#FFCA05]/20 hover:border-[#FFCA05]",
      roi: "50-75%",
    },
    {
      title: "Whole Home Renovations",
      description: "Complete home transformations that reimagine your living space.",
      icon: <Plus className="h-12 w-12 text-[#707070]" />,
      href: "/renovations/whole-home",
      features: ["Structural modifications", "Systems upgrades", "Interior design", "Value engineering"],
      color: "border-[#707070]/20 hover:border-[#707070]",
      roi: "Varies",
    },
    {
      title: "Emergency Repairs",
      description: "24/7 emergency repair services for urgent home repair needs.",
      icon: <AlertTriangle className="h-12 w-12 text-red-600" />,
      href: "/renovations/emergency",
      features: ["24/7 availability", "Storm damage repair", "Plumbing emergencies", "Electrical failures"],
      color: "border-red-600/20 hover:border-red-600",
      roi: "Critical",
    },
  ]

  const beforeAfter = [
    {
      title: "Historic Kitchen Restoration",
      before: "/placeholder.svg?height=300&width=400&text=Before+Historic+Kitchen",
      after: "/placeholder.svg?height=300&width=400&text=After+Historic+Kitchen",
      investment: "$45,000",
      valueAdded: "$75,000",
      description: "Complete kitchen renovation preserving historic character while adding modern functionality.",
    },
    {
      title: "Coastal Bathroom Transformation",
      before: "/placeholder.svg?height=300&width=400&text=Before+Coastal+Bathroom",
      after: "/placeholder.svg?height=300&width=400&text=After+Coastal+Bathroom",
      investment: "$28,000",
      valueAdded: "$42,000",
      description: "Master bathroom renovation with luxury finishes and spa-like amenities.",
    },
    {
      title: "Whole Home Renovation",
      before: "/placeholder.svg?height=300&width=400&text=Before+Whole+Home",
      after: "/placeholder.svg?height=300&width=400&text=After+Whole+Home",
      investment: "$125,000",
      valueAdded: "$200,000",
      description: "Complete home transformation including structural changes and luxury upgrades.",
    },
  ]

  const testimonials = [
    {
      name: "Maria & Carlos Rodriguez",
      location: "St. Augustine",
      text: "David's construction expertise and real estate knowledge helped us make smart renovation choices. Our kitchen remodel added $40K in value for a $25K investment.",
      rating: 5,
    },
    {
      name: "Jennifer Thompson",
      location: "Ponte Vedra Beach",
      text: "The quality of work exceeded our expectations. David understood exactly which improvements would give us the best return on investment.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618832515490-e181c4794a45?auto=format&fit=crop&w=2000&q=80"
          alt="Construction team transforming a home interior"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Badge className="mb-6 bg-[#F16622] text-white px-6 py-3 text-lg">Construction Excellence</Badge>
          <h1 className="text-5xl lg:text-7xl font-bold text-[#18457C] mb-8" style={{ fontFamily: "serif" }}>
            Construction Services
          </h1>
          <p className="text-2xl lg:text-3xl text-[#707070] mb-8 leading-relaxed">
            Where 20 Years of Construction Expertise Meets Real Estate Market Knowledge
          </p>
          <p className="text-xl text-[#707070] mb-12 max-w-4xl mx-auto leading-relaxed">
            The only construction service in Northeast Florida that combines professional construction experience with
            deep real estate market analysis, ensuring every improvement maximizes your home's value.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-10 py-4 text-xl">
              <Wrench className="mr-2 h-6 w-6" />
              Start Your Project
            </Button>
            <Button size="lg" className="bg-[#229FD9] hover:bg-[#229FD9]/90 text-white px-10 py-4 text-xl">
              <Phone className="mr-2 h-6 w-6" />
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* The Construction Advantage */}
      <section className="py-20 bg-gradient-to-r from-[#F16622]/5 to-[#229FD9]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              The Conine Coastal Construction Advantage
            </h2>
            <p className="text-2xl text-[#707070] max-w-4xl mx-auto leading-relaxed">
              What happens when you combine master construction skills with deep real estate market knowledge?
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <Card className="text-center border-2 border-[#F16622]/20 hover:border-[#F16622] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-[#F16622]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-[#F16622]" />
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                  Value-Driven Construction
                </h3>
                <p className="text-[#707070] leading-relaxed">
                  Every construction decision is informed by market data. We know which improvements add real value and
                  which ones don't, ensuring maximum return on your investment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-[#229FD9]/20 hover:border-[#229FD9] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-[#229FD9]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="h-10 w-10 text-[#229FD9]" />
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                  Coastal Climate Expertise
                </h3>
                <p className="text-[#707070] leading-relaxed">
                  Specialized knowledge of Northeast Florida's unique climate challenges, from humidity and salt air to
                  severe weather conditions. Built to last in coastal environments.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-[#FFCA05]/20 hover:border-[#FFCA05] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-[#FFCA05]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-10 w-10 text-[#FFCA05]" />
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                  Master Craftsmanship
                </h3>
                <p className="text-[#707070] leading-relaxed">
                  Two decades of construction experience ensures every project meets the highest standards of quality,
                  safety, and durability. Licensed, insured, and guaranteed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              Complete Construction Services
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              From kitchen remodels to whole-home transformations, we provide expert construction services that enhance
              your lifestyle and maximize your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${service.color}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <Badge variant="outline" className="text-xs font-semibold">
                      ROI: {service.roi}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-[#18457C] mb-3" style={{ fontFamily: "serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-[#707070] leading-relaxed mb-6 text-sm">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-[#707070] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={service.href}>
                    <Button className="w-full bg-[#18457C] hover:bg-[#18457C]/90 text-white py-2 text-sm">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              Transformation Gallery
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              See how our construction projects have transformed homes throughout Northeast Florida, creating stunning
              results and lasting value.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {beforeAfter.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={project.before || "/placeholder.svg"}
                      alt="Before renovation"
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-gray-600 text-white text-xs">Before</Badge>
                  </div>
                  <div className="relative">
                    <img
                      src={project.after || "/placeholder.svg"}
                      alt="After renovation"
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-[#229FD9] text-white text-xs">After</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#18457C] mb-3" style={{ fontFamily: "serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-[#707070] mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="text-lg font-bold text-[#F16622]">{project.investment}</div>
                      <div className="text-xs text-gray-600">Investment</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="text-lg font-bold text-[#229FD9]">{project.valueAdded}</div>
                      <div className="text-xs text-gray-600">Value Added</div>
                    </div>
                  </div>
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
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Real results from real clients who experienced the Conine Coastal construction difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#FFCA05] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#707070] mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-[#18457C]">{testimonial.name}</p>
                    <p className="text-sm text-[#707070]">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Callout */}
      <section className="py-16 bg-red-50 border-t-4 border-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="h-12 w-12 text-red-600 mr-4" />
            <h2 className="text-3xl font-bold text-red-900" style={{ fontFamily: "serif" }}>
              24/7 Emergency Repairs
            </h2>
          </div>
          <p className="text-xl text-red-800 mb-8">
            When disaster strikes, we're here to help. Storm damage, plumbing emergencies, electrical failures - we
            respond fast.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
          >
            <Link href="/contact" className="flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Emergency Support
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#18457C] to-[#229FD9]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "serif" }}>
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Let our unique combination of construction expertise and real estate knowledge create the perfect renovation
            plan for your home and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Talk with Our Team
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#18457C] hover:bg-white/90 px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
