"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Home, Wrench, Star, CheckCircle, ArrowRight } from "lucide-react"

export default function ConineCostalWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/coastal-hero-bg.png')",
          }}
        ></div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <img src="/conine-coastal-logo.png" alt="Conine Coastal Logo" className="h-24 w-auto drop-shadow-lg" />
          </div>

          <p className="text-xl md:text-2xl mb-8 text-white/95 drop-shadow-md">
            Your Coastal Home Partner - Real Estate & Renovation Experts
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-8 py-3 shadow-lg">
              <Home className="mr-2 h-5 w-5" />
              Free Home Valuation
            </Button>
            <Button size="lg" className="bg-[#229FD9] hover:bg-[#229FD9]/90 text-white px-8 py-3 shadow-lg">
              <Wrench className="mr-2 h-5 w-5" />
              Free Renovation Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              The Coastal Advantage
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Unique expertise combining real estate knowledge with construction skills - we don't just sell homes, we
              transform them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/coastal-home-renovation.png" alt="Coastal home renovation" className="rounded-lg shadow-lg" />
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Real Estate Expertise</h3>
                  <p className="text-[#707070]">Deep market knowledge helps you buy smart and sell for maximum value</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Construction Knowledge</h3>
                  <p className="text-[#707070]">Spot potential issues and opportunities that other agents miss</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">End-to-End Service</h3>
                  <p className="text-[#707070]">From finding your home to making it perfect - we handle it all</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-r from-[#18457C]/5 to-[#229FD9]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Our Services
            </h2>
            <p className="text-xl text-[#707070]">Two divisions, one commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Real Estate Services */}
            <Card className="border-2 border-[#229FD9]/20 hover:border-[#229FD9] transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Home className="h-12 w-12 text-[#229FD9] mr-4" />
                  <h3 className="text-2xl font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
                    Real Estate Services
                  </h3>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-[#F16622] mr-2" />
                    <span className="text-[#707070]">Buying & Selling Homes</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-[#F16622] mr-2" />
                    <span className="text-[#707070]">Investment Properties</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-[#F16622] mr-2" />
                    <span className="text-[#707070]">Fixer-Upper Specialists</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-[#F16622] mr-2" />
                    <span className="text-[#707070]">Market Analysis</span>
                  </li>
                </ul>

                <Button className="w-full bg-[#229FD9] hover:bg-[#229FD9]/90 text-white">List Your Home</Button>
              </CardContent>
            </Card>

            {/* Home Repairs & Renovations */}
            <Card className="border-2 border-[#F16622]/20 hover:border-[#F16622] transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Wrench className="h-12 w-12 text-[#F16622] mr-4" />
                  <h3 className="text-2xl font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
                    Home Repairs & Renovations
                  </h3>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-[#229FD9] mr-2" />
                    <span className="text-[#707070]">Kitchen & Bath Remodels</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-[#229FD9] mr-2" />
                    <span className="text-[#707070]">Home Maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-[#229FD9] mr-2" />
                    <span className="text-[#707070]">Handyman Services</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-[#229FD9] mr-2" />
                    <span className="text-[#707070]">Property Improvements</span>
                  </li>
                </ul>

                <Button className="w-full bg-[#F16622] hover:bg-[#F16622]/90 text-white">Get Free Estimate</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="featured-properties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Featured Properties
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Handpicked homes with renovation potential and move-in ready options
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Property 1 - Move-in Ready */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img
                  src="/coastal-property-1.png"
                  alt="123 Ocean View Dr property"
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-[#229FD9] text-white px-3 py-1">Move-in Ready</Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-[#18457C] mb-2">$485,000</h3>
                  <p className="text-[#707070] font-medium">123 Ocean View Dr, Northeast Florida</p>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-[#707070]">
                  <span className="flex items-center">
                    <Home className="h-4 w-4 mr-1" />3 bed
                  </span>
                  <span>2 bath</span>
                  <span>1,850 sq ft</span>
                </div>

                <p className="text-[#707070] mb-6 text-sm leading-relaxed">
                  Charming coastal home with stunning water views. Perfect for buyers seeking character and charm.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-[#229FD9] hover:bg-[#229FD9]/90 text-white">View Details</Button>
                  <Button className="flex-1 bg-[#F16622] hover:bg-[#F16622]/90 text-white">Schedule Showing</Button>
                </div>
              </CardContent>
            </Card>

            {/* Property 2 - Renovation Potential */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img
                  src="/coastal-property-2.png"
                  alt="456 Palmetto Street property"
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-[#FFCA05] text-[#18457C] px-3 py-1 font-semibold">
                  Renovation Potential
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-[#18457C] mb-2">$325,000</h3>
                  <p className="text-[#707070] font-medium">456 Palmetto Street, Northeast Florida</p>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-[#707070]">
                  <span className="flex items-center">
                    <Home className="h-4 w-4 mr-1" />4 bed
                  </span>
                  <span>2 bath</span>
                  <span>2,100 sq ft</span>
                </div>

                <p className="text-[#707070] mb-6 text-sm leading-relaxed">
                  Spacious family home with great bones. Ideal investment opportunity with our renovation expertise.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-[#229FD9] hover:bg-[#229FD9]/90 text-white">View Details</Button>
                  <Button className="flex-1 bg-[#F16622] hover:bg-[#F16622]/90 text-white">Schedule Showing</Button>
                </div>
              </CardContent>
            </Card>

            {/* Property 3 - Move-in Ready */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img
                  src="/coastal-property-3.png"
                  alt="789 Seaside Boulevard property"
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-[#229FD9] text-white px-3 py-1">Move-in Ready</Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-[#18457C] mb-2">$595,000</h3>
                  <p className="text-[#707070] font-medium">789 Seaside Boulevard, Northeast Florida</p>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-[#707070]">
                  <span className="flex items-center">
                    <Home className="h-4 w-4 mr-1" />3 bed
                  </span>
                  <span>3 bath</span>
                  <span>2,400 sq ft</span>
                </div>

                <p className="text-[#707070] mb-6 text-sm leading-relaxed">
                  Luxury coastal living with modern updates. Recently renovated kitchen and bathrooms.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-[#229FD9] hover:bg-[#229FD9]/90 text-white">View Details</Button>
                  <Button className="flex-1 bg-[#F16622] hover:bg-[#F16622]/90 text-white">Schedule Showing</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <Button size="lg" className="bg-[#18457C] hover:bg-[#18457C]/90 text-white px-8 py-3 mb-6">
              View All Listings
            </Button>
            <div className="max-w-2xl mx-auto">
              <p className="text-[#707070] mb-2">Need help finding the perfect property?</p>
              <p className="text-sm text-[#229FD9] font-medium">✓ We can estimate renovation costs on any property</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Transformation Gallery
            </h2>
            <p className="text-xl text-[#707070]">See how we transform coastal properties</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                image: "/kitchen-remodel-1.png",
                title: "Coastal Kitchen Remodel",
                desc: "Complete transformation with modern coastal design",
              },
              {
                id: 2,
                image: "/bathroom-renovation-1.png",
                title: "Coastal Bathroom Renovation",
                desc: "Luxury spa-like bathroom with ocean themes",
              },
              {
                id: 3,
                image: "/living-room-renovation-1.png",
                title: "Living Room Makeover",
                desc: "Open concept living with stunning ocean views",
              },
            ].map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-[#F16622] text-white">Before & After</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-[#18457C] mb-2">{project.title}</h3>
                  <p className="text-sm text-[#707070]">{project.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-[#229FD9]/10 to-[#18457C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              What Our Clients Say
            </h2>
            <p className="text-xl text-[#707070]">Trusted by coastal homeowners and investors</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                service: "Real Estate & Renovation",
                text: "Conine Coastal helped us find the perfect fixer-upper and then transformed it into our dream home. Their dual expertise saved us time and money!",
              },
              {
                name: "Mike Rodriguez",
                service: "Investment Property",
                text: "Their construction knowledge helped me identify the best investment opportunities. They knew exactly what renovations would maximize my ROI.",
              },
              {
                name: "Emily Chen",
                service: "Kitchen Remodel",
                text: "Professional, reliable, and the results exceeded our expectations. Our coastal kitchen is now the heart of our home.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#FFCA05] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#707070] mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-[#18457C]">{testimonial.name}</p>
                    <p className="text-sm text-[#707070]">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Get Started Today
            </h2>
            <p className="text-xl text-[#707070]">Ready to buy, sell, or transform your coastal property?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#18457C] mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-[#F16622] mr-4" />
                  <div>
                    <p className="font-semibold text-[#18457C]">Phone</p>
                    <p className="text-[#707070]">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-[#F16622] mr-4" />
                  <div>
                    <p className="font-semibold text-[#18457C]">Email</p>
                    <p className="text-[#707070]">info@coninecoastal.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-[#F16622] mr-4" />
                  <div>
                    <p className="font-semibold text-[#18457C]">Location</p>
                    <p className="text-[#707070]">Serving Northeast Florida</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#18457C] mb-1">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-[#707070]/30 focus:border-[#229FD9]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#18457C] mb-1">Phone *</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="border-[#707070]/30 focus:border-[#229FD9]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1">Service Needed *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border border-[#707070]/30 rounded-md focus:border-[#229FD9] focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="real-estate">Real Estate Services</option>
                      <option value="renovation">Home Renovation</option>
                      <option value="both">Both Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                      placeholder="Tell us about your project or property needs..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#F16622] hover:bg-[#F16622]/90 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
