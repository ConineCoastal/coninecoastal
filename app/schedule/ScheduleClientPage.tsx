"use client"

import { trackEvent } from "@/lib/track-event"
import { getUTMData } from "@/lib/utm-tracker"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Breadcrumb from "@/components/breadcrumb"
import FadeIn from "@/components/fade-in"
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Home,
  Wrench,
  TrendingUp,
  Building,
  Shield,
  Layers,
} from "lucide-react"

const SERVICE_CATEGORIES = [
  {
    id: "real-estate",
    label: "Real Estate",
    icon: <Home className="h-6 w-6" />,
    color: "border-coastal-blue hover:border-coastal-blue bg-coastal-blue/5",
    activeColor: "border-coastal-blue bg-coastal-blue/10 ring-2 ring-coastal-blue",
    services: [
      { value: "buying", label: "Buying a Home", duration: "30 min" },
      { value: "selling", label: "Selling a Home", duration: "30 min" },
      { value: "property-management", label: "Property Management", duration: "30 min" },
      { value: "market-analysis", label: "Market Analysis", duration: "20 min" },
    ],
  },
  {
    id: "renovation",
    label: "Renovation",
    icon: <Wrench className="h-6 w-6" />,
    color: "border-coastal-orange hover:border-coastal-orange bg-coastal-orange/5",
    activeColor: "border-coastal-orange bg-coastal-orange/10 ring-2 ring-coastal-orange",
    services: [
      { value: "kitchen-remodeling", label: "Kitchen Remodeling", duration: "45 min" },
      { value: "bathroom-renovation", label: "Bathroom Renovation", duration: "45 min" },
      { value: "whole-home-renovation", label: "Whole Home Renovation", duration: "60 min" },
      { value: "exterior-renovation", label: "Exterior Renovation", duration: "45 min" },
      { value: "flooring", label: "Flooring Services", duration: "30 min" },
      { value: "repairs", label: "Repairs & Maintenance", duration: "30 min" },
      { value: "additions", label: "Home Additions", duration: "60 min" },
    ],
  },
  {
    id: "investment",
    label: "Investment",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "border-coastal-navy hover:border-coastal-navy bg-coastal-navy/5",
    activeColor: "border-coastal-navy bg-coastal-navy/10 ring-2 ring-coastal-navy",
    services: [
      { value: "investment", label: "Investment Strategy", duration: "45 min" },
      { value: "fix-and-flip", label: "Fix & Flip Consultation", duration: "45 min" },
      { value: "property-analysis", label: "Property Analysis", duration: "30 min" },
      { value: "portfolio-management", label: "Portfolio Review", duration: "45 min" },
    ],
  },
]

const TIME_SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
]

const CONSULTATION_TYPES = [
  {
    id: "phone",
    label: "Phone Call",
    icon: <Phone className="h-5 w-5" />,
    description: "Quick and convenient",
  },
  {
    id: "video",
    label: "Video Call",
    icon: <Building className="h-5 w-5" />,
    description: "Face-to-face virtually",
  },
  {
    id: "in-person",
    label: "In Person",
    icon: <MapPin className="h-5 w-5" />,
    description: "Meet at the property or office",
  },
]

function getNextWeekdays(count: number): Date[] {
  const dates: Date[] = []
  const today = new Date()
  const current = new Date(today)
  current.setDate(current.getDate() + 1) // start from tomorrow

  while (dates.length < count) {
    const day = current.getDay()
    if (day !== 0 && day !== 6) {
      // skip weekends
      dates.push(new Date(current))
    }
    current.setDate(current.getDate() + 1)
  }
  return dates
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
}

function formatDateFull(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export default function ScheduleClientPage() {
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedService, setSelectedService] = useState("")
  const [consultationType, setConsultationType] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [formMessage, setFormMessage] = useState("")
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const availableDates = getNextWeekdays(10)

  // Pre-select service from URL params
  useEffect(() => {
    const serviceParam = searchParams.get("service")
    if (serviceParam) {
      for (const category of SERVICE_CATEGORIES) {
        const match = category.services.find((s) => s.value === serviceParam)
        if (match) {
          setSelectedCategory(category.id)
          setSelectedService(match.value)
          setStep(2)
          break
        }
      }
    }
  }, [searchParams])

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === selectedCategory)
  const activeService = activeCategory?.services.find((s) => s.value === selectedService)

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

  const getError = (field: string) =>
    touched[field] ? validate(field, formData[field as keyof typeof formData] ?? "") : ""

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    setTouched({ name: true, email: true, phone: true })
    const errors = ["name", "email", "phone"]
      .map((f) => validate(f, formData[f as keyof typeof formData] ?? ""))
      .filter(Boolean)
    if (errors.length > 0) return

    setIsSubmitting(true)
    setFormStatus("idle")

    const schedulingDetails = [
      `Service: ${activeService?.label ?? selectedService}`,
      `Category: ${activeCategory?.label ?? selectedCategory}`,
      `Consultation Type: ${consultationType}`,
      `Preferred Date: ${selectedDate ? formatDateFull(selectedDate) : "Not specified"}`,
      `Preferred Time: ${selectedTime || "Not specified"}`,
      `Estimated Duration: ${activeService?.duration ?? "30 min"}`,
      formData.address ? `Property Address: ${formData.address}` : null,
      formData.message ? `\nAdditional Notes:\n${formData.message}` : null,
    ]
      .filter(Boolean)
      .join("\n")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: schedulingDetails,
          source: `schedule-${selectedService}`,
          utm: getUTMData(),
        }),
      })

      let result: unknown
      try {
        result = await response.json()
      } catch {
        // parse error is ok
      }

      const body =
        typeof result === "object" && result !== null
          ? (result as { success?: boolean; message?: string })
          : undefined

      if (!response.ok || body?.success === false) {
        throw new Error(body?.message ?? "Failed to submit")
      }

      setFormStatus("success")
      setFormMessage(
        "Your consultation request has been submitted! We'll confirm your appointment within one business day."
      )
      trackEvent("schedule_consultation", {
        service: selectedService,
        type: consultationType,
        category: selectedCategory,
      })
    } catch (error) {
      setFormStatus("error")
      setFormMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or call us at (904) 624-1722."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceedStep1 = selectedCategory && selectedService
  const canProceedStep2 = consultationType && selectedDate && selectedTime
  const canProceedStep3 =
    formData.name.trim() && formData.email.trim() && formData.phone.trim()

  if (formStatus === "success") {
    return (
      <div className="min-h-screen bg-white">
        <Breadcrumb />
        <section className="py-24">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-coastal-navy mb-4 font-serif">
              Consultation Requested!
            </h1>
            <p className="text-xl text-coastal-grey mb-4">{formMessage}</p>
            <div className="bg-gray-50 rounded-lg p-6 text-left mb-8">
              <h3 className="font-semibold text-coastal-navy mb-3">Your Request Summary</h3>
              <div className="space-y-2 text-sm text-coastal-grey">
                <div className="flex justify-between">
                  <span>Service:</span>
                  <span className="font-medium text-coastal-navy">{activeService?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="font-medium text-coastal-navy capitalize">{consultationType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium text-coastal-navy">
                    {selectedDate ? formatDateFull(selectedDate) : ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-medium text-coastal-navy">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium text-coastal-navy">{activeService?.duration}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-coastal-orange hover:bg-coastal-orange/90 text-white">
                <Link href="/">Return Home</Link>
              </Button>
              <Button asChild variant="outline" className="border-coastal-blue text-coastal-blue hover:bg-coastal-blue hover:text-white bg-transparent">
                <Link href="/renovations/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
          alt="Schedule a consultation with Conine Coastal"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-coastal-orange text-white px-6 py-2 text-base">
            Free Consultation
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Schedule Your Consultation
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Book a free consultation with David Conine. Phone, video, or in-person — your choice.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: "Select Service" },
              { num: 2, label: "Pick Date & Time" },
              { num: 3, label: "Your Details" },
              { num: 4, label: "Confirm" },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      step >= s.num
                        ? "bg-coastal-orange text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step > s.num ? <CheckCircle className="h-5 w-5" /> : s.num}
                  </div>
                  <span
                    className={`text-xs mt-1 hidden sm:block ${
                      step >= s.num ? "text-coastal-navy font-medium" : "text-gray-400"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < 3 && (
                  <div
                    className={`w-12 sm:w-24 h-0.5 mx-2 ${
                      step > s.num ? "bg-coastal-orange" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <FadeIn>
              <h2 className="text-2xl font-bold text-coastal-navy mb-2 font-serif">
                What can we help you with?
              </h2>
              <p className="text-coastal-grey mb-8">
                Select a category, then choose your specific service.
              </p>

              {/* Category Selection */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {SERVICE_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id)
                      setSelectedService("")
                    }}
                    className={`p-5 rounded-xl border-2 text-left transition-all ${
                      selectedCategory === cat.id ? cat.activeColor : cat.color
                    }`}
                  >
                    <div className="mb-2">{cat.icon}</div>
                    <div className="font-semibold text-coastal-navy">{cat.label}</div>
                    <div className="text-xs text-coastal-grey mt-1">
                      {cat.services.length} services
                    </div>
                  </button>
                ))}
              </div>

              {/* Service Selection */}
              {activeCategory && (
                <div>
                  <h3 className="text-lg font-semibold text-coastal-navy mb-4">
                    Select a service
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {activeCategory.services.map((service) => (
                      <button
                        key={service.value}
                        onClick={() => setSelectedService(service.value)}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          selectedService === service.value
                            ? "border-coastal-orange bg-coastal-orange/5 ring-2 ring-coastal-orange"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="font-medium text-coastal-navy">
                          {service.label}
                        </div>
                        <div className="flex items-center text-xs text-coastal-grey mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {service.duration} consultation
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end mt-8">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!canProceedStep1}
                  className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeIn>
          )}

          {/* Step 2: Date, Time, & Type */}
          {step === 2 && (
            <FadeIn>
              <h2 className="text-2xl font-bold text-coastal-navy mb-2 font-serif">
                When would you like to meet?
              </h2>
              <p className="text-coastal-grey mb-8">
                Choose your preferred consultation type, date, and time.
              </p>

              {/* Consultation Type */}
              <h3 className="text-lg font-semibold text-coastal-navy mb-3">
                How would you like to meet?
              </h3>
              <div className="grid sm:grid-cols-3 gap-3 mb-8">
                {CONSULTATION_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setConsultationType(type.id)}
                    className={`p-4 rounded-lg border-2 text-center transition-all ${
                      consultationType === type.id
                        ? "border-coastal-blue bg-coastal-blue/5 ring-2 ring-coastal-blue"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex justify-center mb-2 text-coastal-navy">{type.icon}</div>
                    <div className="font-medium text-coastal-navy text-sm">{type.label}</div>
                    <div className="text-xs text-coastal-grey">{type.description}</div>
                  </button>
                ))}
              </div>

              {/* Date Selection */}
              <h3 className="text-lg font-semibold text-coastal-navy mb-3">
                Select a date
              </h3>
              <div className="grid grid-cols-5 gap-2 mb-8">
                {availableDates.map((date) => {
                  const isSelected =
                    selectedDate?.toDateString() === date.toDateString()
                  return (
                    <button
                      key={date.toISOString()}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        isSelected
                          ? "border-coastal-orange bg-coastal-orange/10 ring-2 ring-coastal-orange"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-xs text-coastal-grey">
                        {date.toLocaleDateString("en-US", { weekday: "short" })}
                      </div>
                      <div className="text-lg font-bold text-coastal-navy">
                        {date.getDate()}
                      </div>
                      <div className="text-xs text-coastal-grey">
                        {date.toLocaleDateString("en-US", { month: "short" })}
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Time Selection */}
              <h3 className="text-lg font-semibold text-coastal-navy mb-3">
                Select a time
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-8">
                {TIME_SLOTS.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2.5 px-2 rounded-lg border text-sm font-medium transition-all ${
                      selectedTime === time
                        ? "border-coastal-orange bg-coastal-orange text-white"
                        : "border-gray-200 text-coastal-grey hover:border-gray-300"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!canProceedStep2}
                  className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeIn>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <FadeIn>
              <h2 className="text-2xl font-bold text-coastal-navy mb-2 font-serif">
                Your Contact Information
              </h2>
              <p className="text-coastal-grey mb-8">
                We'll use this to confirm your appointment.
              </p>

              <div className="space-y-5">
                <div>
                  <label htmlFor="schedule-name" className="block text-sm font-medium text-coastal-navy mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="schedule-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="John Smith"
                    className={`border-coastal-grey/30 focus:border-coastal-blue ${getError("name") ? "border-red-500" : ""}`}
                  />
                  {getError("name") && (
                    <p className="text-red-500 text-xs mt-1">{getError("name")}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="schedule-email" className="block text-sm font-medium text-coastal-navy mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="schedule-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      className={`border-coastal-grey/30 focus:border-coastal-blue ${getError("email") ? "border-red-500" : ""}`}
                    />
                    {getError("email") && (
                      <p className="text-red-500 text-xs mt-1">{getError("email")}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="schedule-phone" className="block text-sm font-medium text-coastal-navy mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="schedule-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="(904) 555-0123"
                      className={`border-coastal-grey/30 focus:border-coastal-blue ${getError("phone") ? "border-red-500" : ""}`}
                    />
                    {getError("phone") && (
                      <p className="text-red-500 text-xs mt-1">{getError("phone")}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="schedule-address" className="block text-sm font-medium text-coastal-navy mb-1">
                    Property Address <span className="text-coastal-grey text-xs">(optional)</span>
                  </label>
                  <Input
                    id="schedule-address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main St, Jacksonville, FL 32250"
                    className="border-coastal-grey/30 focus:border-coastal-blue"
                  />
                </div>

                <div>
                  <label htmlFor="schedule-message" className="block text-sm font-medium text-coastal-navy mb-1">
                    Anything else we should know? <span className="text-coastal-grey text-xs">(optional)</span>
                  </label>
                  <Textarea
                    id="schedule-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Tell us about your project, budget, timeline, or any specific questions..."
                    className="border-coastal-grey/30 focus:border-coastal-blue"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={() => setStep(4)}
                  disabled={!canProceedStep3}
                  className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8"
                >
                  Review & Confirm
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeIn>
          )}

          {/* Step 4: Review & Confirm */}
          {step === 4 && (
            <FadeIn>
              <h2 className="text-2xl font-bold text-coastal-navy mb-2 font-serif">
                Review & Confirm
              </h2>
              <p className="text-coastal-grey mb-8">
                Please review your consultation details before confirming.
              </p>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-semibold text-coastal-grey uppercase tracking-wider mb-4">
                        Consultation Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Wrench className="h-4 w-4 text-coastal-orange mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm text-coastal-grey">Service</div>
                            <div className="font-medium text-coastal-navy">
                              {activeService?.label}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Shield className="h-4 w-4 text-coastal-blue mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm text-coastal-grey">Type</div>
                            <div className="font-medium text-coastal-navy capitalize">
                              {consultationType}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Calendar className="h-4 w-4 text-coastal-navy mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm text-coastal-grey">Date & Time</div>
                            <div className="font-medium text-coastal-navy">
                              {selectedDate ? formatDateFull(selectedDate) : ""} at {selectedTime}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-4 w-4 text-coastal-grey mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm text-coastal-grey">Duration</div>
                            <div className="font-medium text-coastal-navy">
                              {activeService?.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-coastal-grey uppercase tracking-wider mb-4">
                        Your Information
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-coastal-grey">Name</div>
                          <div className="font-medium text-coastal-navy">{formData.name}</div>
                        </div>
                        <div>
                          <div className="text-sm text-coastal-grey">Email</div>
                          <div className="font-medium text-coastal-navy">{formData.email}</div>
                        </div>
                        <div>
                          <div className="text-sm text-coastal-grey">Phone</div>
                          <div className="font-medium text-coastal-navy">{formData.phone}</div>
                        </div>
                        {formData.address && (
                          <div>
                            <div className="text-sm text-coastal-grey">Property Address</div>
                            <div className="font-medium text-coastal-navy">{formData.address}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {formData.message && (
                    <div className="mt-6 pt-6 border-t">
                      <div className="text-sm text-coastal-grey mb-1">Additional Notes</div>
                      <div className="text-coastal-navy">{formData.message}</div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="bg-coastal-blue/5 border border-coastal-blue/20 rounded-lg p-4 mb-8">
                <div className="flex items-start">
                  <Layers className="h-5 w-5 text-coastal-blue mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-coastal-grey">
                    <strong className="text-coastal-navy">What happens next:</strong> We'll
                    confirm your appointment within one business day via email or phone. If the
                    requested time isn't available, we'll suggest the closest alternative.
                  </div>
                </div>
              </div>

              {formStatus === "error" && (
                <div className="bg-red-50 text-red-700 border border-red-200 rounded-lg p-4 mb-6" role="alert">
                  {formMessage}
                </div>
              )}

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setStep(3)}
                  className="bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-10 py-3 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Confirm Consultation"}
                  {!isSubmitting && <CheckCircle className="ml-2 h-5 w-5" />}
                </Button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Why Consult Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-coastal-navy mb-8 text-center font-serif">
            What to Expect from Your Consultation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-coastal-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-coastal-orange" />
                </div>
                <h3 className="font-semibold text-coastal-navy mb-2">No Pressure</h3>
                <p className="text-sm text-coastal-grey">
                  Every consultation is free with zero obligation. We're here to help you make
                  informed decisions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-coastal-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-6 w-6 text-coastal-blue" />
                </div>
                <h3 className="font-semibold text-coastal-navy mb-2">Expert Insight</h3>
                <p className="text-sm text-coastal-grey">
                  Get advice from someone with 20+ years of construction and real estate
                  experience on the First Coast.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-coastal-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-coastal-navy" />
                </div>
                <h3 className="font-semibold text-coastal-navy mb-2">Actionable Plan</h3>
                <p className="text-sm text-coastal-grey">
                  Walk away with clear next steps, whether you're buying, selling, renovating, or
                  investing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact Alternative */}
      <section className="py-12 bg-gradient-to-r from-coastal-navy to-coastal-blue">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-white mb-4 font-serif">
            Prefer to Talk Now?
          </h2>
          <p className="text-white/90 mb-6">
            Skip the scheduling and call David directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8"
            >
              <a href="tel:+19046241722" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                (904) 624-1722
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-coastal-navy hover:bg-white/90 px-8"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Send a Message
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
