"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Users, Award, AlertTriangle, Clock, Home } from "lucide-react"

export default function EmergencyRepairs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1737739973200-61c2ae4d1272?auto=format&fit=crop&w=2000&q=80"
          alt="Technician responding to an emergency home repair"
          className="absolute inset-0 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10" />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white">24/7 Emergency Repairs</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Fast, Reliable Emergency Home Repairs When You Need Them Most
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            We're available 24/7 to handle urgent home repairs, providing quick solutions and peace of mind during
            stressful situations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Request Immediate Help
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/contact" className="flex items-center justify-center">
                Request Emergency Service
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">24/7 Emergency Repair Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle all types of emergency home repairs, providing quick, reliable solutions to protect your home
              and family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
                title: "Plumbing Emergencies",
                description: "Burst pipes, leaks, and sewer backups",
                features: ["Leak detection", "Pipe repair", "Sewer line clearing", "Water heater repair"],
              },
              {
                icon: <Phone className="h-8 w-8 text-red-600" />,
                title: "Electrical Emergencies",
                description: "Power outages, short circuits, and faulty wiring",
                features: ["Power restoration", "Wiring repair", "Circuit breaker replacement", "Generator service"],
              },
              {
                icon: <Home className="h-8 w-8 text-red-600" />,
                title: "Storm Damage",
                description: "Roof damage, flooding, and wind damage",
                features: ["Roof tarping", "Water extraction", "Board-up services", "Debris removal"],
              },
              {
                icon: <Clock className="h-8 w-8 text-red-600" />,
                title: "HVAC Failures",
                description: "Heating and cooling system breakdowns",
                features: [
                  "Emergency heating repair",
                  "Emergency AC repair",
                  "HVAC system inspection",
                  "Air quality testing",
                ],
              },
              {
                icon: <Users className="h-8 w-8 text-red-600" />,
                title: "Appliance Breakdowns",
                description: "Urgent repairs for essential appliances",
                features: ["Refrigerator repair", "Oven repair", "Washer/dryer repair", "Dishwasher repair"],
              },
              {
                icon: <Award className="h-8 w-8 text-red-600" />,
                title: "Other Urgent Repairs",
                description: "Any other urgent home repair needs",
                features: ["Locksmith services", "Board-up services", "Tree removal", "Water extraction"],
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Emergency Repairs - Call Now!</h2>
          <p className="text-xl text-gray-300 mb-8">We're available 24/7 to handle your urgent home repair needs.</p>
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
          >
            <Link href="/contact" className="flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Contact Our Emergency Team
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
