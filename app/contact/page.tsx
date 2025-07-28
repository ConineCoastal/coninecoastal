"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import type React from "react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://picsum.photos/1920/1080)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl mb-8 leading-relaxed">
            Let's discuss your real estate and renovation needs. We're here to help.
          </p>

          <Button size="lg" className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-10 py-4 text-xl shadow-lg">
            Schedule Consultation
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
                Contact Information
              </h2>

              <div className="space-y-6">
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

            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1">Phone *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-[#707070]/30 focus:border-[#229FD9]"
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
