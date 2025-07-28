"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Mail, MapPin, Users, Award, Home, Zap, Shield, TrendingUp } from "lucide-react"

export default function WholeHomeRenovations() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10" />
        <img
          src="/placeholder.svg?height=800&width=1200&text=Whole+Home+Renovation+Transformation"
          alt="Whole home renovation transformation"
          className="absolute inset-0 object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-amber-600 hover:bg-amber-700 text-white">Complete Home Transformation</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Entire Home Into Your Dream Property
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Comprehensive whole-home renovations that reimagine your living space while maximizing property value with
            our real estate market expertise.
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Home Renovation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From structural changes to finishing touches, we handle every aspect of your home transformation with
              precision and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="h-8 w-8 text-amber-600" />,
                title: "Structural Renovations",
                description: "Wall removal, room additions, and layout modifications to optimize your space",
                features: [
                  "Load-bearing wall removal",
                  "Room reconfigurations",
                  "Structural reinforcement",
                  "Foundation work",
                ],
              },
              {
                icon: <Zap className="h-8 w-8 text-amber-600" />,
                title: "Systems Upgrades",
                description: "Complete electrical, plumbing, and HVAC system modernization",
                features: [
                  "Electrical panel upgrades",
                  "Plumbing repiping",
                  "HVAC replacement",
                  "Smart home integration",
                ],
              },
              {
                icon: <Shield className="h-8 w-8 text-amber-600" />,
                title: "Exterior Renovations",
                description: "Roofing, siding, windows, and outdoor living space improvements",
                features: ["Roof replacement", "Siding installation", "Window upgrades", "Deck & patio construction"],
              },
              {
                icon: <Users className="h-8 w-8 text-amber-600" />,
                title: "Interior Design",
                description: "Complete interior transformation with custom finishes and fixtures",
                features: ["Custom cabinetry", "Flooring installation", "Paint & finishes", "Lighting design"],
              },
              {
                icon: <Award className="h-8 w-8 text-amber-600" />,
                title: "Luxury Upgrades",
                description: "High-end finishes and premium materials for exceptional results",
                features: ["Premium appliances", "Custom millwork", "Designer fixtures", "Luxury materials"],
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
                title: "Value Engineering",
                description: "Strategic improvements designed to maximize your return on investment",
                features: ["Market analysis", "ROI optimization", "Resale value focus", "Cost-benefit analysis"],
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

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Entire Home?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a comprehensive consultation to discuss your whole-home renovation vision. Let's create the home of
            your dreams while maximizing your investment.
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
