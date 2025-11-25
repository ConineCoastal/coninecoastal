"use client"
import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Phone,
  TrendingUp,
  CheckCircle,
  Target,
  MapPin,
  BarChart3,
  Home,
  Hammer,
  Users,
  DollarSign,
  Wrench,
  Key,
} from "lucide-react"

export default function InvestorServicesPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    investmentAmount: "",
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formStatus, setFormStatus] = React.useState<"idle" | "success" | "error">("idle")
  const [formMessage, setFormMessage] = React.useState("")

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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Estimated investment amount: $${formData.investmentAmount || "0"}`,
          source: "investor-services",
        }),
      })

      if (!response.ok) {
        throw new Error("Unable to submit form")
      }

      setFormStatus("success")
      setFormMessage("Thanks! We'll review your goals and reach out shortly.")
      setFormData({ name: "", email: "", phone: "", investmentAmount: "" })
    } catch (error) {
      console.error("Investor contact submission failed", error)
      setFormStatus("error")
      setFormMessage(
        "We couldn't process your request. Please try again or email us at info@coninecoastal.com."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1652878530627-cc6f063e3947?auto=format&fit=crop&w=2000&q=80"
          alt="Investors reviewing coastal real estate opportunities"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Turn-Key Rental Property Solutions for Northeast Florida Investors
          </h1>
          <p className="text-xl lg:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
            From acquisition to sale, we manage every step of your rental property investment with 20 years of
            construction expertise and professional real estate services
          </p>

          <Button
            asChild
            size="lg"
            className="bg-[#FFCA05] hover:bg-[#FFCA05]/90 text-[#18457C] px-10 py-4 text-xl shadow-lg font-semibold"
          >
            <Link href="/contact">Talk with Our Team</Link>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Complete Investment Management Services
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              We handle every aspect of your rental property investment so you can focus on building wealth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Property Acquisition */}
            <Card className="border-2 border-[#229FD9]/20 hover:border-[#229FD9] transition-colors h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-[#229FD9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-[#229FD9]" />
                </div>
                <h3 className="text-xl font-bold text-[#18457C] mb-3" style={{ fontFamily: "serif" }}>
                  Property Acquisition
                </h3>
                <div className="bg-[#229FD9]/5 p-3 rounded-lg mb-4">
                  <p className="text-2xl font-bold text-[#229FD9]">2.5%</p>
                  <p className="text-sm text-[#707070]">Commission</p>
                </div>
                <p className="text-[#707070] text-sm leading-relaxed flex-grow">
                  Find and secure profitable rental properties with our market expertise and construction knowledge to
                  identify the best investment opportunities.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-[#707070]">
                    <CheckCircle className="h-4 w-4 text-[#229FD9] mr-2 flex-shrink-0" />
                    <span>Market analysis & property sourcing</span>
                  </div>
                  <div className="flex items-center text-sm text-[#707070]">
                    <CheckCircle className="h-4 w-4 text-[#229FD9] mr-2 flex-shrink-0" />
                    <span>Renovation cost estimates</span>
                  </div>
                  <div className="flex items-center text-sm text-[#707070]">
                    <CheckCircle className="h-4 w-4 text-[#229FD9] mr-2 flex-shrink-0" />
                    <span>Negotiation & closing support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Construction Management */}
            <Card className="border-2 border-[#F16622]/20 hover:border-[#F16622] transition-colors h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-[#F16622]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="h-8 w-8 text-[#F16622]" />
                </div>
                <h3 className="text-xl font-bold text-[#18457C] mb-3" style={{ fontFamily: "serif" }}>
                  Construction Management
                </h3>
                <div className="bg-[#F16622]/5 p-3 rounded-lg mb-4">
                  <p className="text-2xl font-bold text-[#F16622]">12%</p>
                  <p className="text-sm text-[#707070]">of Renovation Costs</p>
                </div>
                <p className="text-[#707070] text-sm leading-relaxed flex-grow">
                  Complete renovations with guaranteed timelines using our 20 years of construction experience and
                  trusted contractor network.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-[#707070]">
                    <CheckCircle className="h-4 w-4 text-[#F16622] mr-2 flex-shrink-0" />
                    <span>Project planning & permits</span>
                  </div>
                  <div className="flex items-center text-sm text-[#707070]">
                    <CheckCircle className="h-4 w-4 text-[#F16622] mr-2 flex-shrink-0" />
                    <span>Quality control & inspections</span>
                  </div>
                  <div className="flex items-center text-sm text-[#707070]">
                    <CheckCircle className="h-4 w-4 text-[#F16622] mr-2 flex-shrink-0" />
                    <span>Timeline guarantees</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Management */}
            <Card className="border-2 border-[#FFCA05]/20 hover:border-[#FFCA05] transition-colors h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-[#FFCA05]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#FFCA05]" />
                </div>
                <h3 className="text-xl font-bold text-[#18457C] mb-3" style={{ fontFamily: "serif" }}>
                  Property Management
                </h3>
                <div className="bg-[#FFCA05]/5 p-3 rounded-lg mb-4">
                  <p className="text-2xl font-bold text-[#FFCA05]">8%</p>
                  <p className="text-sm text-[#707070]">of Monthly Rent</p>
                </div>
                <p className="text-[#707070] text-sm leading-relaxed flex-grow">
                  Full-service property management and tenant relations to maximize your rental income while minimizing
                  your involvement.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-[#707070]">
                    <CheckCircle className="h-4 w-4 text-[#FFCA05] mr-2 flex-shrink-0" />
                    <span>Tenant screening & placement</span>
                  </div>
                  <div className="flex items-center text-sm text-[#707070]">
                    <CheckCircle className="h-4 w-4 text-[#FFCA05] mr-2 flex-shrink-0" />
                    <span>Rent collection & accounting</span>
                  </div>
                  <div className="flex items-center text-sm text-[#707070]">
                    <CheckCircle className="h-4 w-4 text-[#FFCA05] mr-2 flex-shrink-0" />
                    <span>Maintenance & repairs</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Property Sales */}
            <Card className="border-2 border-[#18457C]/20 hover:border-[#18457C] transition-colors h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-[#18457C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-[#18457C]" />
                </div>
                <h3 className="text-xl font-bold text-[#18457C] mb-3" style={{ fontFamily: "serif" }}>
                  Property Sales
                </h3>
                <div className="bg-[#18457C]/5 p-3 rounded-lg mb-4">
                  <p className="text-2xl font-bold text-[#18457C]">2.5%</p>
                  <p className="text-sm text-[#707070]">Commission</p>
                </div>
                <p className="text-[#707070] text-sm leading-relaxed flex-grow">
                  Maximize your exit strategy when ready to sell with expert market positioning and proven sales
                  strategies.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-[#707070]">
                    <CheckCircle className="h-4 w-4 text-[#18457C] mr-2 flex-shrink-0" />
                    <span>Market analysis & pricing</span>
                  </div>
                  <div className="flex items-center text-sm text-[#707070]">
                    <CheckCircle className="h-4 w-4 text-[#18457C] mr-2 flex-shrink-0" />
                    <span>Professional marketing</span>
                  </div>
                  <div className="flex items-center text-sm text-[#707070]">
                    <CheckCircle className="h-4 w-4 text-[#18457C] mr-2 flex-shrink-0" />
                    <span>Negotiation & closing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Timeline */}
      <section className="py-16 bg-gradient-to-r from-[#18457C]/5 to-[#229FD9]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Complete 6+ Year Investment Lifecycle
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              From acquisition to exit, we manage every phase of your rental property investment
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#229FD9] via-[#F16622] via-[#FFCA05] to-[#18457C] transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid lg:grid-cols-6 gap-6 lg:gap-4">
              {/* Phase 1: Acquisition */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#229FD9] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-[#229FD9]/20">
                  <h3 className="text-lg font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                    Acquisition
                  </h3>
                  <p className="text-sm text-[#707070] mb-2">Months 1-2</p>
                  <ul className="text-xs text-[#707070] space-y-1">
                    <li>• Property sourcing</li>
                    <li>• Due diligence</li>
                    <li>• Purchase closing</li>
                  </ul>
                </div>
              </div>

              {/* Phase 2: Renovation */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#F16622] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-[#F16622]/20">
                  <h3 className="text-lg font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                    Renovation
                  </h3>
                  <p className="text-sm text-[#707070] mb-2">Months 3-5</p>
                  <ul className="text-xs text-[#707070] space-y-1">
                    <li>• Construction management</li>
                    <li>• Quality control</li>
                    <li>• Final inspections</li>
                  </ul>
                </div>
              </div>

              {/* Phase 3: Tenant Placement */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#FFCA05] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <Key className="h-8 w-8 text-[#18457C]" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-[#FFCA05]/20">
                  <h3 className="text-lg font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                    Tenant Placement
                  </h3>
                  <p className="text-sm text-[#707070] mb-2">Month 6</p>
                  <ul className="text-xs text-[#707070] space-y-1">
                    <li>• Marketing & showing</li>
                    <li>• Tenant screening</li>
                    <li>• Lease signing</li>
                  </ul>
                </div>
              </div>

              {/* Phase 4: Cash Flow */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#229FD9] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-[#229FD9]/20">
                  <h3 className="text-lg font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                    Cash Flow
                  </h3>
                  <p className="text-sm text-[#707070] mb-2">Years 1-5+</p>
                  <ul className="text-xs text-[#707070] space-y-1">
                    <li>• Monthly rental income</li>
                    <li>• Property management</li>
                    <li>• Maintenance & repairs</li>
                  </ul>
                </div>
              </div>

              {/* Phase 5: Appreciation */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#F16622] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-[#F16622]/20">
                  <h3 className="text-lg font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                    Appreciation
                  </h3>
                  <p className="text-sm text-[#707070] mb-2">Years 3-6+</p>
                  <ul className="text-xs text-[#707070] space-y-1">
                    <li>• Market value growth</li>
                    <li>• Equity building</li>
                    <li>• Portfolio expansion</li>
                  </ul>
                </div>
              </div>

              {/* Phase 6: Exit Strategy */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#18457C] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-[#18457C]/20">
                  <h3 className="text-lg font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                    Exit Strategy
                  </h3>
                  <p className="text-sm text-[#707070] mb-2">Year 6+</p>
                  <ul className="text-xs text-[#707070] space-y-1">
                    <li>• Market analysis</li>
                    <li>• Sale preparation</li>
                    <li>• Profit realization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Summary */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg border-2 border-[#18457C]/10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#229FD9] mb-2">6+ Years</div>
                <p className="text-[#707070]">Typical hold period for maximum returns</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F16622] mb-2">8-12%</div>
                <p className="text-[#707070]">Annual cash-on-cash returns</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FFCA05] mb-2">15-25%</div>
                <p className="text-[#707070]">Total annualized returns including appreciation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-[#18457C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "serif" }}>
            Ready to Start Building Your Rental Property Portfolio?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our turn-key investment services can help you achieve your financial goals.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
                  Request a Portfolio Review
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1" htmlFor="investor-name">
                      Name *
                    </label>
                    <Input
                      id="investor-name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1" htmlFor="investor-email">
                      Email *
                    </label>
                    <Input
                      id="investor-email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#18457C] mb-1" htmlFor="investor-phone">
                      Phone *
                    </label>
                    <Input
                      id="investor-phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-[#18457C] mb-1"
                      htmlFor="investor-amount"
                    >
                      Target Investment Amount ($) *
                    </label>
                    <Input
                      id="investor-amount"
                      name="investmentAmount"
                      type="number"
                      placeholder="Investment Amount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      required
                      className="border-[#707070]/30 focus:border-[#229FD9]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#F16622] hover:bg-[#F16622]/90 text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Contact Me"}
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

            <div className="text-left text-white space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "serif" }}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4 text-[#F16622]" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+19046241722" className="text-[#229FD9] hover:underline">
                        (904) 624-1722
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4 text-[#F16622]" />
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p className="text-white/80">Northeast Florida</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Investment Consultation</h4>
                <p className="text-white/80 text-sm mb-2">Schedule a free portfolio review</p>
                <Button
                  asChild
                  className="bg-[#FFCA05] hover:bg-[#FFCA05]/90 text-[#18457C] font-semibold"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
