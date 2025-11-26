"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Users, Award, Home, Sun, Droplets, Wind, Plus, Maximize, TrendingUp } from "lucide-react"

export default function AdditionsExtensions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1685425481910-71c174ad7341?auto=format&fit=crop&w=2000&q=80"
          alt="Home addition and extension construction"
          className="absolute inset-0 object-cover"
          loading="lazy"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-amber-600 hover:bg-amber-700 text-white">Home Additions & Extensions</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Expand Your Living Space, Maximize Your Investment
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Expert home additions and extensions that seamlessly blend with your existing home while delivering
            exceptional value and functionality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              View Addition Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete Addition & Extension Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From single-room additions to multi-story extensions, we create beautiful, functional spaces that feel
              like they've always been part of your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Plus className="h-8 w-8 text-amber-600" />,
                title: "Room Additions",
                description: "Single-room expansions for bedrooms, offices, or family rooms",
                features: [
                  "Master suite additions",
                  "Home office spaces",
                  "Family room extensions",
                  "Guest bedroom additions",
                ],
              },
              {
                icon: <Maximize className="h-8 w-8 text-amber-600" />,
                title: "Second Story Additions",
                description: "Vertical expansions that double your living space",
                features: ["Full second story", "Partial second level", "Dormer additions", "Structural reinforcement"],
              },
              {
                icon: <Home className="h-8 w-8 text-amber-600" />,
                title: "Kitchen Extensions",
                description: "Expand your kitchen for better functionality and entertaining",
                features: ["Kitchen islands", "Breakfast nooks", "Pantry additions", "Open-concept integration"],
              },
              {
                icon: <Users className="h-8 w-8 text-amber-600" />,
                title: "In-Law Suites",
                description: "Self-contained living spaces for extended family",
                features: ["Private entrances", "Full bathrooms", "Kitchenettes", "Accessibility features"],
              },
              {
                icon: <Award className="h-8 w-8 text-amber-600" />,
                title: "Sunrooms & Conservatories",
                description: "Light-filled spaces that connect indoor and outdoor living",
                features: ["Three-season rooms", "Four-season additions", "Glass conservatories", "Screen porches"],
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
                title: "Garage Conversions",
                description: "Transform existing garage space into functional living areas",
                features: ["ADU conversions", "Home gyms", "Workshop spaces", "Storage solutions"],
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
                Built to Withstand Northeast Florida's Climate
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our exterior renovations are specifically designed for the Northeast Florida area's unique climate
                challenges, including humidity, salt air, and severe weather conditions.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: <Droplets className="h-6 w-6 text-amber-600" />,
                    title: "Moisture Protection",
                    description: "Advanced moisture barriers and ventilation systems prevent water damage and mold",
                    features: [
                      "Advanced moisture barriers",
                      "Proper ventilation systems",
                      "Water-resistant materials",
                      "Mold-resistant treatments",
                    ],
                  },
                  {
                    icon: <Wind className="h-6 w-6 text-amber-600" />,
                    title: "Hurricane Resistance",
                    description: "Impact-resistant materials and reinforced construction for storm protection",
                    features: ["Impact-resistant windows", "Reinforced roofing", "Hurricane straps", "Storm shutters"],
                  },
                  {
                    icon: <Sun className="h-6 w-6 text-amber-600" />,
                    title: "UV Protection",
                    description: "Fade-resistant materials and finishes that maintain beauty in intense sunlight",
                    features: ["UV-resistant siding", "Fade-resistant paints", "Window films", "Protective coatings"],
                  },
                  {
                    icon: <Home className="h-6 w-6 text-amber-600" />,
                    title: "Salt Air Resistance",
                    description: "Corrosion-resistant materials designed for coastal environments",
                    features: [
                      "Corrosion-resistant metals",
                      "Salt-resistant coatings",
                      "Marine-grade materials",
                      "Protective sealants",
                    ],
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
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
              <img
                src="https://picsum.photos/500/600"
                alt="Weather-resistant exterior renovation"
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

      {/* Contact CTA Section */}
      <section className="py-20 bg-[#18457C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "serif" }}>
            Ready to Expand Your Living Space?
          </h2>
          <p className="text-xl text-white/90">
            Schedule a comprehensive consultation to discuss your whole-home renovation vision. Let's create the home of
            your dreams while maximizing your investment.
          </p>
          <Button size="lg" className="bg-[#229FD9] hover:bg-[#229FD9]/90 text-white px-8 py-4 text-lg">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  )
}
