"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Mail, MapPin, Users, Award, Home, Paintbrush } from "lucide-react"

export default function InteriorRenovations() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10" />
        <img
          src="/placeholder.svg?height=800&width=1200&text=Interior+Home+Renovation"
          alt="Interior home renovation"
          className="absolute inset-0 object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-amber-600 hover:bg-amber-700 text-white">Interior Renovation Specialists</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Home's Interior Into a Stunning Living Space
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Expert interior renovations that create beautiful, functional living spaces while maximizing your home's
            market value.
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
              Complete Interior Renovation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From flooring and paint to lighting and custom finishes, we handle every aspect of your interior
              transformation with precision and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Paintbrush className="h-8 w-8 text-amber-600" />,
                title: "Painting & Wall Finishes",
                description: "Expert painting services and custom wall finishes for every room",
                features: ["Interior painting", "Custom wall textures", "Wallpaper installation", "Faux finishes"],
              },
              {
                icon: <Home className="h-8 w-8 text-amber-600" />,
                title: "Flooring Installation",
                description: "Premium flooring options including hardwood, tile, carpet, and laminate",
                features: ["Hardwood flooring", "Tile installation", "Carpet installation", "Laminate flooring"],
              },
              {
                icon: <Users className="h-8 w-8 text-amber-600" />,
                title: "Custom Cabinetry & Millwork",
                description: "Custom-designed cabinets, shelving, and trim for a unique look",
                features: ["Kitchen cabinets", "Bathroom vanities", "Built-in shelving", "Custom trim work"],
              },
              {
                icon: <Award className="h-8 w-8 text-amber-600" />,
                title: "Lighting & Electrical",
                description: "Modern lighting solutions and electrical upgrades for safety and style",
                features: [
                  "Recessed lighting",
                  "Pendant lighting",
                  "Electrical panel upgrades",
                  "Smart home integration",
                ],
              },
              {
                title: "Space Planning & Design",
                description: "Expert space planning and design services to maximize functionality and flow",
                icon: <MapPin className="h-8 w-8 text-amber-600" />,
                features: ["Open-concept layouts", "Furniture selection", "Color coordination", "3D renderings"],
              },
              {
                title: "Specialty Finishes",
                description: "Unique interior finishes including custom tile work, stone accents, and more",
                icon: <CheckCircle className="h-8 w-8 text-amber-600" />,
                features: [
                  "Custom tile designs",
                  "Stone veneer accents",
                  "Fireplace remodels",
                  "Unique wall treatments",
                ],
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Home's Interior?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a free consultation to discuss your interior renovation vision. Let's create a space you'll love
            while maximizing your home's value.
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
              Request Consultation
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
