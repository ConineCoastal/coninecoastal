"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Phone, Mail, Clock, AlertTriangle, Wrench, Home, Zap, Droplets, Shield } from "lucide-react"
import { useState } from "react"

export default function HomeRepairsMaintenancePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    urgency: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10" />
        <img
          src="https://picsum.photos/1200/600"
          alt="Home repairs and maintenance"
          className="absolute inset-0 object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-amber-600 hover:bg-amber-700 text-white">Home Repairs & Maintenance</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Expert Home Repairs & Maintenance Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            From routine maintenance to urgent repairs, we keep your Northeast Florida home in perfect condition with
            professional craftsmanship and reliable service.
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
                <AlertTriangle className="mr-2 h-5 w-5" />
                Request Emergency Help
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Home Repair & Maintenance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team handles everything from minor repairs to major maintenance projects, ensuring your
              home stays safe, functional, and valuable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets className="h-8 w-8 text-amber-600" />,
                title: "Plumbing Repairs",
                description: "Complete plumbing services from leaks to full system repairs",
                features: [
                  "Leak detection & repair",
                  "Pipe replacement",
                  "Fixture installation",
                  "Water heater service",
                ],
              },
              {
                icon: <Zap className="h-8 w-8 text-amber-600" />,
                title: "Electrical Services",
                description: "Safe, code-compliant electrical repairs and installations",
                features: [
                  "Outlet & switch repair",
                  "Circuit breaker service",
                  "Lighting installation",
                  "Panel upgrades",
                ],
              },
              {
                icon: <Home className="h-8 w-8 text-amber-600" />,
                title: "HVAC Maintenance",
                description: "Keep your heating and cooling systems running efficiently",
                features: ["System tune-ups", "Filter replacement", "Duct cleaning", "Emergency repairs"],
              },
              {
                icon: <Wrench className="h-8 w-8 text-amber-600" />,
                title: "General Handyman",
                description: "All-purpose repair services for your home's needs",
                features: ["Drywall repair", "Door & window service", "Cabinet adjustments", "Hardware installation"],
              },
              {
                icon: <Shield className="h-8 w-8 text-amber-600" />,
                title: "Preventive Maintenance",
                description: "Regular maintenance to prevent costly repairs",
                features: ["Seasonal inspections", "Gutter cleaning", "Caulking & sealing", "Maintenance schedules"],
              },
              {
                icon: <AlertTriangle className="h-8 w-8 text-amber-600" />,
                title: "Emergency Repairs",
                description: "24/7 emergency service for urgent home repairs",
                features: ["Storm damage repair", "Water damage response", "Power outage service", "Security repairs"],
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-slate-100 text-slate-900 hover:bg-slate-200">20+ Years Experience</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Conine Coastal for Home Repairs?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our unique combination of construction expertise and real estate knowledge means we understand how
                repairs affect your home's value and functionality.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: <Shield className="h-6 w-6 text-amber-600" />,
                    title: "Licensed & Insured",
                    description: "Fully licensed contractors with comprehensive insurance coverage",
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-amber-600" />,
                    title: "Reliable Service",
                    description: "On-time service with clear communication throughout the process",
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-amber-600" />,
                    title: "Quality Guarantee",
                    description: "All work backed by our satisfaction guarantee and warranty",
                  },
                  {
                    icon: <Home className="h-6 w-6 text-amber-600" />,
                    title: "Value-Focused",
                    description: "Repairs that maintain and enhance your home's market value",
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
                Schedule Service
              </Button>
            </div>

            <div className="relative">
              <img
                src="https://picsum.photos/400/300"
                alt="Professional home repair service"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border">
                <div className="text-2xl font-bold text-amber-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Emergency Service Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Request Service</h2>
            <p className="text-xl text-gray-600">
              Tell us about your repair needs and we'll provide a prompt response with scheduling options.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-2 border-gray-200 focus:border-amber-600"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Phone *</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-2 border-gray-200 focus:border-amber-600"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 border-2 border-gray-200 focus:border-amber-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Service Type *</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 p-3 border-2 border-gray-200 rounded-md focus:border-amber-600 focus:outline-none"
                    >
                      <option value="">Select service type</option>
                      <option value="plumbing">Plumbing Repair</option>
                      <option value="electrical">Electrical Service</option>
                      <option value="hvac">HVAC Maintenance</option>
                      <option value="handyman">General Handyman</option>
                      <option value="maintenance">Preventive Maintenance</option>
                      <option value="emergency">Emergency Repair</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Urgency Level</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full h-12 p-3 border-2 border-gray-200 rounded-md focus:border-amber-600 focus:outline-none"
                    >
                      <option value="">Select urgency</option>
                      <option value="emergency">Emergency (24 hours)</option>
                      <option value="urgent">Urgent (2-3 days)</option>
                      <option value="normal">Normal (1 week)</option>
                      <option value="scheduled">Scheduled Maintenance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Describe the Issue or Service Needed
                  </label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    className="border-2 border-gray-200 focus:border-amber-600"
                    placeholder="Please provide details about the repair needed, location in home, any symptoms or issues you've noticed..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-4 text-lg font-semibold"
                  >
                    Request Service
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="flex-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-4 text-lg font-semibold bg-transparent"
                  >
                    <Link href="/contact" className="flex items-center justify-center">
                      <AlertTriangle className="mr-2 h-5 w-5" />
                      Emergency Support
                    </Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our experienced repair team is ready to help with all your home maintenance needs.
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
                Email Us
              </Link>
            </Button>
          </div>
          <div className="mt-8 p-4 bg-red-900/30 rounded-lg border border-red-600/30">
            <div className="flex items-center justify-center text-red-300 mb-2">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <span className="font-semibold">24/7 Emergency Service</span>
            </div>
            <p className="text-red-200">For urgent repairs that can't wait, call our emergency line:</p>
            <a href="tel:+19046241722" className="text-red-300 font-bold text-lg hover:text-red-100">
              (904) 624-1722
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
