"use client"
import { trackEvent } from "@/lib/track-event"
import { getUTMData } from "@/lib/utm-tracker"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service..." },
  { value: "kitchen-remodeling", label: "Kitchen Remodeling" },
  { value: "bathroom-renovation", label: "Bathroom Renovation" },
  { value: "whole-home-renovation", label: "Whole Home Renovation" },
  { value: "additions", label: "Home Additions & Extensions" },
  { value: "interior-renovation", label: "Interior Renovation" },
  { value: "exterior-renovation", label: "Exterior Renovation" },
  { value: "flooring", label: "Flooring Services" },
  { value: "repairs", label: "Home Repairs & Maintenance" },
  { value: "emergency", label: "Emergency Repairs" },
  { value: "buying", label: "Buying a Home" },
  { value: "selling", label: "Selling a Home" },
  { value: "investment", label: "Investment Properties" },
  { value: "fix-and-flip", label: "Fix & Flip Services" },
  { value: "portfolio-management", label: "Portfolio Management" },
  { value: "property-analysis", label: "Property Analysis" },
  { value: "property-management", label: "Property Management" },
  { value: "newsletter", label: "Newsletter Subscription" },
  { value: "other", label: "Other" },
]

export default function ContactClientPage() {
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  useEffect(() => {
    const serviceParam = searchParams.get("service")
    if (serviceParam && SERVICE_OPTIONS.some((opt) => opt.value === serviceParam)) {
      setFormData((prev) => ({ ...prev, service: serviceParam }))
    }
  }, [searchParams])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [formMessage, setFormMessage] = useState("")
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validate = (field: string, value: string) => {
    if (field === "name" && !value.trim()) return "Name is required"
    if (field === "email") {
      if (!value.trim()) return "Email is required"
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email"
    }
    if (field === "phone") {
      if (!value.trim()) return "Phone number is required"
      if (!/[\d()+-\s]{7,}/.test(value)) return "Please enter a valid phone number"
    }
    return ""
  }

  const getError = (field: string) => touched[field] ? validate(field, formData[field as keyof typeof formData]) : ""

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Mark all required fields as touched
    setTouched({ name: true, email: true, phone: true })

    // Check for validation errors before submitting
    const errors = ["name", "email", "phone"].map((f) => validate(f, formData[f as keyof typeof formData])).filter(Boolean)
    if (errors.length > 0) return

    setIsSubmitting(true)
    setFormStatus("idle")
    setFormMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: formData.service || "contact",
          utm: getUTMData(),
        }),
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
      trackEvent("contact_form_submit", { service: formData.service || "general" })
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
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
        <Image
          src="https://images.unsplash.com/photo-1656646424501-06d57009b725?auto=format&fit=crop&w=2000&q=80"
          alt="Contact Conine Coastal for real estate and renovation services in Northeast Florida"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-serif">
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl mb-8 leading-relaxed">
            Let's discuss your real estate and renovation needs. We're here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-10 py-4 text-xl shadow-lg"
            >
              <a href="/schedule">Schedule Consultation</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-coastal-navy px-10 py-4 text-xl"
            >
              <a href="#contact-form">Send a Message</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-coastal-navy mb-6 font-serif">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-coastal-orange mr-4" />
                  <div>
                    <p className="font-semibold text-coastal-navy">Phone</p>
                    <a href="tel:+19046241722" className="text-coastal-grey hover:text-coastal-navy transition-colors">
                      (904) 624-1722
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-coastal-orange mr-4" />
                  <div>
                    <p className="font-semibold text-coastal-navy">Email</p>
                    <p className="text-coastal-grey">info@coninecoastal.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-coastal-orange mr-4" />
                  <div>
                    <p className="font-semibold text-coastal-navy">Location</p>
                    <p className="text-coastal-grey">Serving Northeast Florida</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-coastal-navy mb-6 font-serif">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-coastal-navy mb-1" htmlFor="contact-name">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`border-coastal-grey/30 focus:border-coastal-blue ${getError("name") ? "border-red-500" : ""}`}
                    />
                    {getError("name") && <p className="text-red-500 text-xs mt-1">{getError("name")}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coastal-navy mb-1" htmlFor="contact-email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`border-coastal-grey/30 focus:border-coastal-blue ${getError("email") ? "border-red-500" : ""}`}
                    />
                    {getError("email") && <p className="text-red-500 text-xs mt-1">{getError("email")}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coastal-navy mb-1" htmlFor="contact-phone">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      className={`border-coastal-grey/30 focus:border-coastal-blue ${getError("phone") ? "border-red-500" : ""}`}
                    />
                    {getError("phone") && <p className="text-red-500 text-xs mt-1">{getError("phone")}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coastal-navy mb-1" htmlFor="contact-service">
                      Service Interest
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-coastal-grey/30 bg-background px-3 py-2 text-sm ring-offset-background focus:border-coastal-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coastal-navy mb-1" htmlFor="contact-message">
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-coastal-grey/30 focus:border-coastal-blue"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-coastal-orange hover:bg-coastal-orange/90 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {formStatus !== "idle" && (
                    <div
                      className={`p-4 rounded-lg text-sm ${
                        formStatus === "success"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                      role="alert"
                    >
                      {formMessage}
                    </div>
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
