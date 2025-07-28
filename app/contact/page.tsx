"use client"
import { useState } from "react"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, Shield, Award, Users, AlertTriangle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
    contactMethod: "",
    bestTime: "",
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
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/coastal-hero-bg.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-white/85"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
            Get In Touch
          </h1>
          <p className="text-xl lg:text-2xl text-[#707070] leading-relaxed">
            Ready to start your real estate or renovation journey? Let's discuss how we can help.
          </p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-[#18457C] mb-8" style={{ fontFamily: "serif" }}>
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#18457C] mb-2">Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 border-[#707070]/30 focus:border-[#229FD9] text-lg"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#18457C] mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 border-[#707070]/30 focus:border-[#229FD9] text-lg"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#18457C] mb-2">Phone Number</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-12 border-2 border-[#707070]/30 focus:border-[#229FD9] text-lg"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#18457C] mb-2">Service Interest *</label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 p-3 border-2 border-[#707070]/30 rounded-md focus:border-[#229FD9] focus:outline-none text-lg"
                      >
                        <option value="">Select a service</option>
                        <option value="real-estate-buying">Real Estate - Buying</option>
                        <option value="real-estate-selling">Real Estate - Selling</option>
                        <option value="home-renovation">Home Renovation</option>
                        <option value="investment-property">Investment Property</option>
                        <option value="emergency-repair">Emergency Repair</option>
                        <option value="general-inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#18457C] mb-2">
                          Preferred Contact Method
                        </label>
                        <select
                          name="contactMethod"
                          value={formData.contactMethod}
                          onChange={handleInputChange}
                          className="w-full h-12 p-3 border-2 border-[#707070]/30 rounded-md focus:border-[#229FD9] focus:outline-none text-lg"
                        >
                          <option value="">Select method</option>
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                          <option value="text">Text</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#18457C] mb-2">Best Time to Contact</label>
                        <select
                          name="bestTime"
                          value={formData.bestTime}
                          onChange={handleInputChange}
                          className="w-full h-12 p-3 border-2 border-[#707070]/30 rounded-md focus:border-[#229FD9] focus:outline-none text-lg"
                        >
                          <option value="">Select time</option>
                          <option value="morning">Morning</option>
                          <option value="afternoon">Afternoon</option>
                          <option value="evening">Evening</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#18457C] mb-2">Project Details/Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="border-2 border-[#707070]/30 focus:border-[#229FD9] text-lg"
                        placeholder="Tell us about your project, timeline, budget, or any specific questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#F16622] hover:bg-[#F16622]/90 text-white py-4 text-lg font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
                    Contact Details
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-[#F16622] mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#18457C]">Phone</p>
                        <a href="tel:5551234567" className="text-[#229FD9] hover:underline text-lg">
                          (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-[#F16622] mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#18457C]">Email</p>
                        <a href="mailto:info@coninecoastal.com" className="text-[#229FD9] hover:underline">
                          info@coninecoastal.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <AlertTriangle className="h-6 w-6 text-[#F16622] mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#18457C]">Emergency Repairs</p>
                        <a href="tel:5551234911" className="text-[#229FD9] hover:underline text-lg">
                          (555) 123-4911
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-[#F16622] mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-[#18457C] mb-2">Business Hours</p>
                        <div className="text-[#707070] space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Emergency calls only</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
                    Service Area
                  </h3>

                  <div className="mb-4">
                    <p className="text-lg font-semibold text-[#229FD9] mb-4">Proudly Serving the First Coast</p>

                    <div className="space-y-2 text-[#707070]">
                      <p className="font-medium">Primary Areas:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>St. Augustine</li>
                        <li>Ponte Vedra Beach</li>
                        <li>Jacksonville Beaches</li>
                        <li>Fernandina Beach</li>
                        <li>Amelia Island</li>
                      </ul>
                    </div>

                    <p className="text-sm text-[#707070] mt-4 italic">Additional areas available upon request</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#229FD9]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-8 w-8 text-[#229FD9]" />
                  </div>
                  <p className="text-sm font-semibold text-[#18457C]">Licensed & Insured</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F16622]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="h-8 w-8 text-[#F16622]" />
                  </div>
                  <p className="text-sm font-semibold text-[#18457C]">20+ Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FFCA05]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="h-8 w-8 text-[#FFCA05]" />
                  </div>
                  <p className="text-sm font-semibold text-[#18457C]">Local First Coast Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
