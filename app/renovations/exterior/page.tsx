import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Mail, MapPin, Users, Award, Home, Sun, Droplets, Wind } from "lucide-react"

export default function ExteriorRenovations() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Exterior home renovation"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-amber-600 hover:bg-amber-700 text-white">Exterior Renovation Specialists</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Enhance Your Home's Curb Appeal & Protection
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Complete exterior renovations that protect your investment while creating stunning curb appeal that
            maximizes your home's market value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Assessment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              View Transformations
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete Exterior Renovation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From roofing and siding to windows and outdoor living spaces, we provide comprehensive exterior solutions
              that protect and beautify your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="h-8 w-8 text-amber-600" />,
                title: "Roofing Services",
                description: "Complete roof replacement and repair with premium materials",
                features: [
                  "Asphalt shingle installation",
                  "Metal roofing systems",
                  "Roof repairs & maintenance",
                  "Gutter installation",
                ],
              },
              {
                icon: <Sun className="h-8 w-8 text-amber-600" />,
                title: "Siding & Exterior Walls",
                description: "Beautiful, durable siding that protects and enhances your home",
                features: [
                  "Vinyl siding installation",
                  "Fiber cement siding",
                  "Wood siding restoration",
                  "Exterior painting",
                ],
              },
              {
                icon: <Droplets className="h-8 w-8 text-amber-600" />,
                title: "Windows & Doors",
                description: "Energy-efficient windows and doors for comfort and security",
                features: [
                  "Window replacement",
                  "Entry door installation",
                  "Patio door systems",
                  "Storm door installation",
                ],
              },
              {
                icon: <Wind className="h-8 w-8 text-amber-600" />,
                title: "Outdoor Living Spaces",
                description: "Decks, patios, and porches that extend your living space outdoors",
                features: ["Deck construction", "Patio installation", "Porch additions", "Outdoor kitchens"],
              },
              {
                icon: <Users className="h-8 w-8 text-amber-600" />,
                title: "Landscaping & Hardscaping",
                description: "Professional landscaping that complements your home's architecture",
                features: ["Landscape design", "Hardscape installation", "Irrigation systems", "Outdoor lighting"],
              },
              {
                icon: <Award className="h-8 w-8 text-amber-600" />,
                title: "Specialty Services",
                description: "Unique exterior features that set your home apart",
                features: ["Chimney restoration", "Exterior stonework", "Fence installation", "Driveway renovation"],
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Protection Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-slate-100 text-slate-900 hover:bg-slate-200">Coastal Climate Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Built to Withstand Charleston's Climate
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our exterior renovations are specifically designed for the Charleston area's unique climate challenges,
                including humidity, salt air, and severe weather conditions.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: <Droplets className="h-6 w-6 text-amber-600" />,
                    title: "Moisture Protection",
                    description: "Advanced moisture barriers and ventilation systems prevent water damage and mold",
                  },
                  {
                    icon: <Wind className="h-6 w-6 text-amber-600" />,
                    title: "Hurricane Resistance",
                    description: "Impact-resistant materials and reinforced construction for storm protection",
                  },
                  {
                    icon: <Sun className="h-6 w-6 text-amber-600" />,
                    title: "UV Protection",
                    description: "Fade-resistant materials and finishes that maintain beauty in intense sunlight",
                  },
                  {
                    icon: <Home className="h-6 w-6 text-amber-600" />,
                    title: "Salt Air Resistance",
                    description: "Corrosion-resistant materials designed for coastal environments",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Assessment
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Weather-resistant exterior renovation"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-2xl font-bold text-amber-600 mb-1">25+ Years</div>
                <div className="text-sm text-gray-600">Material warranty coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dramatic Exterior Transformations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our exterior renovations have transformed homes throughout the Charleston area, creating stunning
              curb appeal and lasting value.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Historic District Restoration</h3>
              <p className="text-lg text-gray-600 mb-6">
                Complete exterior restoration of a 1890s Victorian home, preserving historic character while adding
                modern protection and efficiency.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-xl font-bold text-amber-600 mb-1">$125K</div>
                  <div className="text-sm text-gray-600">Renovation Investment</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-xl font-bold text-amber-600 mb-1">$200K</div>
                  <div className="text-sm text-gray-600">Value Added</div>
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "Historic paint color restoration",
                  "Original window restoration",
                  "Period-appropriate roofing materials",
                  "Foundation and structural repairs",
                  "Landscaping and hardscaping",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Historic home restoration"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Modern coastal renovation"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Contemporary Coastal Makeover</h3>
              <p className="text-lg text-gray-600 mb-6">
                Modern transformation of a 1970s ranch home with new siding, roofing, and outdoor living spaces designed
                for coastal living.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-xl font-bold text-amber-600 mb-1">$95K</div>
                  <div className="text-sm text-gray-600">Renovation Investment</div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="text-xl font-bold text-amber-600 mb-1">$175K</div>
                  <div className="text-sm text-gray-600">Value Added</div>
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "Fiber cement siding installation",
                  "Metal roof with hurricane straps",
                  "Impact-resistant windows",
                  "Composite deck with outdoor kitchen",
                  "Professional landscape design",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Value Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-slate-100 text-slate-900 hover:bg-slate-200">Maximum Return on Investment</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Exterior Improvements That Pay</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic exterior renovations that deliver the highest return on investment while enhancing your home's
              beauty and protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                improvement: "Roof Replacement",
                roi: "85-95%",
                description: "New roofing provides excellent ROI and essential protection",
                icon: "🏠",
              },
              {
                improvement: "Siding Replacement",
                roi: "75-85%",
                description: "Fresh siding dramatically improves curb appeal and value",
                icon: "🎨",
              },
              {
                improvement: "Window Replacement",
                roi: "70-80%",
                description: "Energy-efficient windows offer comfort and buyer appeal",
                icon: "🪟",
              },
              {
                improvement: "Deck Addition",
                roi: "65-75%",
                description: "Outdoor living spaces are highly desired by buyers",
                icon: "🌿",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.improvement}</h3>
                  <div className="text-2xl font-bold text-amber-600 mb-3">{item.roi}</div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Home's Exterior?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a comprehensive exterior assessment to explore renovation possibilities. Let's enhance your home's
            curb appeal, protection, and value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Request Assessment
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center text-gray-400">
            <MapPin className="h-4 w-4 mr-2" />
            <span>Serving the Greater Charleston Area</span>
          </div>
        </div>
      </section>
    </div>
  )
}
