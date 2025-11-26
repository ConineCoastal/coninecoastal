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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [formMessage, setFormMessage] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus("idle")
    setFormMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, source: "contact" }),
      })

      let result: unknown
      try {
        result = await response.json()
      } catch (parseError) {
        console.warn("Unable to parse contact form response", parseError)
      }

      const responseBody =
        typeof result === "object" && result !== null
          ? (result as { success?: boolean; message?: string })
          : undefined

      if (!response.ok || responseBody?.success === false) {
        const errorMessage = responseBody?.message ?? "Failed to submit form"
        throw new Error(errorMessage)
      }

      setFormStatus("success")
      setFormMessage(responseBody?.message ?? "Thanks for reaching out! We'll be in touch soon.")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      console.error("Contact form submission failed", error)
      setFormStatus("error")
      const errorMessage =
        error instanceof Error
          ? error.message
          : "We couldn't send your message. Please try again or email us directly at info@coninecoastal.com."
      setFormMessage(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1656646424501-06d57009b725?auto=format&fit=crop&w=2000&q=80"
          alt="Client meeting with a real estate advisor"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl mb-8 leading-relaxed">
            Let's discuss your real estate and renovation needs. We're here to help.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-10 py-4 text-xl shadow-lg"
          >
            <a href="#contact-form">Schedule Consultation</a>
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white" id="contact-form">
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
                    <a href="tel:+19046241722" className="text-[#707070] hover:text-[#18457C] transition-colors">
                      (904) 624-1722
                    </a>
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
                    <label className="block text-sm font-medium text-[#18457C] mb-1" htmlFor="contact-name">
                      Name *
                    </label>
                    <Input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1" htmlFor="contact-email">
                      Email *
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1" htmlFor="contact-phone">
                      Phone *
                    </label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1" htmlFor="contact-message">
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#F16622] hover:bg-[#F16622]/90 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {formStatus !== "idle" && (
                    <p
                      className={`text-sm ${
                        formStatus === "success" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {formMessage}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
