"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export default function BathroomRemodeling() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10" />
        <img
          src="/placeholder.svg?height=800&width=1200&text=Luxury+Bathroom+Renovation"
          alt="Luxury bathroom renovation"
          className="absolute inset-0 object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-amber-600 hover:bg-amber-700 text-white">Bathroom Renovation Specialists</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Bathroom Into a Personal Spa Retreat
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Expert bathroom renovations that combine luxury design with smart functionality, backed by our real estate
            market expertise to maximize your home's value.
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
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete Bathroom Renovation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From powder rooms to master suites, we create beautiful, functional bathrooms that enhance your daily
              routine and boost your property value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Master Bathroom Suites",
                description: "Luxury renovations with spa-like features, walk-in showers, and premium finishes",
                features: ["Walk-in showers", "Soaking tubs", "Double vanities", "Heated floors"],
              },
              {
                title: "Guest Bathroom Updates",
                description: "Stylish and efficient renovations that impress guests and add value",
                features: ["Space optimization", "Modern fixtures", "Storage solutions", "Elegant finishes"],
              },
              {
                title: "Powder Room Makeovers",
                description: "Transform small spaces into stunning statement rooms",
                features: ["Bold design elements", "Space-saving fixtures", "Luxury touches", "Perfect lighting"],
              },
              {
                title: "Accessibility Modifications",
                description: "Safe, beautiful bathrooms designed for all ages and abilities",
                features: ["Walk-in tubs", "Grab bars", "Non-slip surfaces", "Comfort height fixtures"],
              },
              {
                title: "Wet Room Installations",
                description: "Modern, open-concept bathroom designs with seamless waterproofing",
                features: ["Barrier-free access", "Premium waterproofing", "Luxury finishes", "Custom drainage"],
              },
              {
                title: "Vintage Restoration",
                description: "Preserve character while adding modern functionality and efficiency",
                features: [
                  "Period-appropriate fixtures",
                  "Modern plumbing",
                  "Energy efficiency",
                  "Character preservation",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Bathroom?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and detailed quote for your bathroom renovation project. Let's create the bathroom
            of your dreams while maximizing your home's value.
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
              Request Quote
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
