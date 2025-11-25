"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Mail, MapPin, Users, Award, TrendingUp, Layers, Palette, Shield } from "lucide-react"

export default function FlooringServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1693948568453-a3564f179a84?auto=format&fit=crop&w=2000&q=80"
          alt="Premium hardwood flooring installation"
          className="absolute inset-0 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-amber-600 hover:bg-amber-700 text-white">Premium Flooring Solutions</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Transform Your Home From the Ground Up</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Expert flooring installation and refinishing services that enhance your home's beauty, comfort, and market
            value with premium materials and craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Estimate
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              Browse Materials
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Flooring Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hardwood refinishing to luxury vinyl installation, we provide comprehensive flooring solutions for
              every room and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="h-8 w-8 text-amber-600" />,
                title: "Hardwood Flooring",
                description: "Premium solid and engineered hardwood installation and refinishing",
                features: [
                  "Solid hardwood installation",
                  "Engineered wood systems",
                  "Hardwood refinishing",
                  "Custom staining",
                ],
              },
              {
                icon: <Palette className="h-8 w-8 text-amber-600" />,
                title: "Luxury Vinyl Plank",
                description: "Waterproof, durable luxury vinyl with authentic wood and stone looks",
                features: ["Waterproof construction", "Realistic textures", "Easy maintenance", "Pet-friendly options"],
              },
              {
                icon: <Shield className="h-8 w-8 text-amber-600" />,
                title: "Tile & Stone",
                description: "Ceramic, porcelain, and natural stone installation for lasting beauty",
                features: [
                  "Ceramic & porcelain tile",
                  "Natural stone installation",
                  "Custom patterns",
                  "Heated floor systems",
                ],
              },
              {
                icon: <Users className="h-8 w-8 text-amber-600" />,
                title: "Carpet & Area Rugs",
                description: "Comfortable, stylish carpet installation for bedrooms and living areas",
                features: [
                  "Plush carpet installation",
                  "Stain-resistant options",
                  "Area rug placement",
                  "Carpet padding",
                ],
              },
              {
                icon: <Award className="h-8 w-8 text-amber-600" />,
                title: "Laminate Flooring",
                description: "Budget-friendly laminate with realistic wood and tile appearances",
                features: ["High-quality laminate", "Scratch resistance", "Easy installation", "Moisture protection"],
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
                title: "Specialty Flooring",
                description: "Unique flooring solutions including bamboo, cork, and concrete",
                features: ["Bamboo flooring", "Cork installation", "Polished concrete", "Epoxy coatings"],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Floors?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a free in-home consultation to explore flooring options and receive a detailed estimate for your
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Talk with Our Team
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Request Estimate
              </Link>
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
