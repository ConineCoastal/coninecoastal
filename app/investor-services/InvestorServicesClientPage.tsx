"use client"
import React from "react"
import FadeIn from "@/components/fade-in"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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

export default function InvestorServicesClientPage() {
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
        <Image
          src="https://images.unsplash.com/photo-1652878530627-cc6f063e3947?auto=format&fit=crop&w=2000&q=80"
          alt="Investors reviewing coastal real estate opportunities"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-serif">
            Turn-Key Rental Property Solutions for Northeast Florida Investors
          </h1>
          <p className="text-xl lg:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
            From acquisition to sale, we manage every step of your rental property investment with 20 years of
            construction expertise and professional real estate services
          </p>

          <Button
            asChild
            size="lg"
            className="bg-coastal-yellow hover:bg-coastal-yellow/90 text-coastal-navy px-10 py-4 text-xl shadow-lg font-semibold"
          >
            <Link href="/contact?service=investment">Talk with Our Team</Link>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-coastal-navy mb-4 font-serif">
                Complete Investment Management Services
              </h2>
              <p className="text-xl text-coastal-grey max-w-3xl mx-auto">
                We handle every aspect of your rental property investment so you can focus on building wealth
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Property Acquisition */}
            <FadeIn delay={0}>
            <Card className="border-2 border-coastal-blue/20 hover:border-coastal-blue transition-colors h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-coastal-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-coastal-blue" />
                </div>
                <h3 className="text-xl font-bold text-coastal-navy mb-3 font-serif">
                  Property Acquisition
                </h3>
                <div className="bg-coastal-blue/5 p-3 rounded-lg mb-4">
                  <p className="text-2xl font-bold text-coastal-blue">2.5%</p>
                  <p className="text-sm text-coastal-grey">Commission</p>
                </div>
                <p className="text-coastal-grey text-sm leading-relaxed flex-grow">
                  Find and secure profitable rental properties with our market expertise and construction knowledge to
                  identify the best investment opportunities.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-coastal-grey">
                    <CheckCircle className="h-4 w-4 text-coastal-blue mr-2 flex-shrink-0" />
                    <span>Market analysis & property sourcing</span>
                  </div>
                  <div className="flex items-center text-sm text-coastal-grey">
                    <CheckCircle className="h-4 w-4 text-coastal-blue mr-2 flex-shrink-0" />
                    <span>Renovation cost estimates</span>
                  </div>
                  <div className="flex items-center text-sm text-coastal-grey">
                    <CheckCircle className="h-4 w-4 text-coastal-blue mr-2 flex-shrink-0" />
                    <span>Negotiation & closing support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            </FadeIn>

            {/* Construction Management */}
            <FadeIn delay={150}>
            <Card className="border-2 border-coastal-orange/20 hover:border-coastal-orange transition-colors h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-coastal-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="h-8 w-8 text-coastal-orange" />
                </div>
                <h3 className="text-xl font-bold text-coastal-navy mb-3 font-serif">
                  Construction Management
                </h3>
                <div className="bg-coastal-orange/5 p-3 rounded-lg mb-4">
                  <p className="text-2xl font-bold text-coastal-orange">12%</p>
                  <p className="text-sm text-coastal-grey">of Renovation Costs</p>
                </div>
                <p className="text-coastal-grey text-sm leading-relaxed flex-grow">
                  Complete renovations with guaranteed timelines using our 20 years of construction experience and
                  trusted contractor network.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-coastal-grey">
                    <CheckCircle className="h-4 w-4 text-coastal-orange mr-2 flex-shrink-0" />
                    <span>Project planning & permits</span>
                  </div>
                  <div className="flex items-center text-sm text-coastal-grey">
                    <CheckCircle className="h-4 w-4 text-coastal-orange mr-2 flex-shrink-0" />
                    <span>Quality control & inspections</span>
                  </div>
                  <div className="flex items-center text-sm text-coastal-grey">
                    <CheckCircle className="h-4 w-4 text-coastal-orange mr-2 flex-shrink-0" />
                    <span>Timeline guarantees</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            </FadeIn>

            {/* Property Management */}
            <FadeIn delay={300}>
            <Card className="border-2 border-coastal-yellow/20 hover:border-coastal-yellow transition-colors h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-coastal-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-coastal-yellow" />
                </div>
                <h3 className="text-xl font-bold text-coastal-navy mb-3 font-serif">
                  Property Management
                </h3>
                <div className="bg-coastal-yellow/5 p-3 rounded-lg mb-4">
                  <p className="text-2xl font-bold text-coastal-yellow">8%</p>
                  <p className="text-sm text-coastal-grey">of Monthly Rent</p>
                </div>
                <p className="text-coastal-grey text-sm leading-relaxed flex-grow">
                  Full-service property management and tenant relations to maximize your rental income while minimizing
                  your involvement.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-coastal-grey">
                    <CheckCircle className="h-4 w-4 text-coastal-yellow mr-2 flex-shrink-0" />
                    <span>Tenant screening & placement</span>
                  </div>
                  <div className="flex items-center text-sm text-coastal-grey">
                    <CheckCircle className="h-4 w-4 text-coastal-yellow mr-2 flex-shrink-0" />
                    <span>Rent collection & accounting</span>
                  </div>
                  <div className="flex items-center text-sm text-coastal-grey">
                    <CheckCircle className="h-4 w-4 text-coastal-yellow mr-2 flex-shrink-0" />
                    <span>Maintenance & repairs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            </FadeIn>

            {/* Property Sales */}
            <FadeIn delay={450}>
            <Card className="border-2 border-coastal-navy/20 hover:border-coastal-navy transition-colors h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-16 h-16 bg-coastal-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-coastal-navy" />
                </div>
                <h3 className="text-xl font-bold text-coastal-navy mb-3 font-serif">
                  Property Sales
                </h3>
                <div className="bg-coastal-navy/5 p-3 rounded-lg mb-4">
                  <p className="text-2xl font-bold text-coastal-navy">2.5%</p>
                  <p className="text-sm text-coastal-grey">Commission</p>
                </div>
                <p className="text-coastal-grey text-sm leading-relaxed flex-grow">
                  Maximize your exit strategy when ready to sell with expert market positioning and proven sales
                  strategies.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-coastal-grey">
                    <CheckCircle className="h-4 w-4 text-coastal-navy mr-2 flex-shrink-0" />
                    <span>Market analysis & pricing</span>
                  </div>
                  <div className="flex items-center text-sm text-coastal-grey">
                    <CheckCircle className="h-4 w-4 text-coastal-navy mr-2 flex-shrink-0" />
                    <span>Professional marketing</span>
                  </div>
                  <div className="flex items-center text-sm text-coastal-grey">
                    <CheckCircle className="h-4 w-4 text-coastal-navy mr-2 flex-shrink-0" />
                    <span>Negotiation & closing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Investment Timeline */}
      <section className="py-16 bg-gradient-to-r from-coastal-navy/5 to-coastal-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-coastal-navy mb-4 font-serif">
                Complete 6+ Year Investment Lifecycle
              </h2>
              <p className="text-xl text-coastal-grey max-w-3xl mx-auto">
                From acquisition to exit, we manage every phase of your rental property investment
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-coastal-blue via-coastal-orange via-coastal-yellow to-coastal-navy transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid lg:grid-cols-6 gap-6 lg:gap-4">
              {/* Phase 1: Acquisition */}
              <FadeIn delay={0}>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-coastal-blue rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-coastal-blue/20">
                  <h3 className="text-lg font-bold text-coastal-navy mb-2 font-serif">
                    Acquisition
                  </h3>
                  <p className="text-sm text-coastal-grey mb-2">Months 1-2</p>
                  <ul className="text-xs text-coastal-grey space-y-1">
                    <li>• Property sourcing</li>
                    <li>• Due diligence</li>
                    <li>• Purchase closing</li>
                  </ul>
                </div>
              </div>
              </FadeIn>

              {/* Phase 2: Renovation */}
              <FadeIn delay={150}>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-coastal-orange rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-coastal-orange/20">
                  <h3 className="text-lg font-bold text-coastal-navy mb-2 font-serif">
                    Renovation
                  </h3>
                  <p className="text-sm text-coastal-grey mb-2">Months 3-5</p>
                  <ul className="text-xs text-coastal-grey space-y-1">
                    <li>• Construction management</li>
                    <li>• Quality control</li>
                    <li>• Final inspections</li>
                  </ul>
                </div>
              </div>
              </FadeIn>

              {/* Phase 3: Tenant Placement */}
              <FadeIn delay={300}>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-coastal-yellow rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <Key className="h-8 w-8 text-coastal-navy" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-coastal-yellow/20">
                  <h3 className="text-lg font-bold text-coastal-navy mb-2 font-serif">
                    Tenant Placement
                  </h3>
                  <p className="text-sm text-coastal-grey mb-2">Month 6</p>
                  <ul className="text-xs text-coastal-grey space-y-1">
                    <li>• Marketing & showing</li>
                    <li>• Tenant screening</li>
                    <li>• Lease signing</li>
                  </ul>
                </div>
              </div>
              </FadeIn>

              {/* Phase 4: Cash Flow */}
              <FadeIn delay={450}>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-coastal-blue rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-coastal-blue/20">
                  <h3 className="text-lg font-bold text-coastal-navy mb-2 font-serif">
                    Cash Flow
                  </h3>
                  <p className="text-sm text-coastal-grey mb-2">Years 1-5+</p>
                  <ul className="text-xs text-coastal-grey space-y-1">
                    <li>• Monthly rental income</li>
                    <li>• Property management</li>
                    <li>• Maintenance & repairs</li>
                  </ul>
                </div>
              </div>
              </FadeIn>

              {/* Phase 5: Appreciation */}
              <FadeIn delay={600}>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-coastal-orange rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-coastal-orange/20">
                  <h3 className="text-lg font-bold text-coastal-navy mb-2 font-serif">
                    Appreciation
                  </h3>
                  <p className="text-sm text-coastal-grey mb-2">Years 3-6+</p>
                  <ul className="text-xs text-coastal-grey space-y-1">
                    <li>• Market value growth</li>
                    <li>• Equity building</li>
                    <li>• Portfolio expansion</li>
                  </ul>
                </div>
              </div>
              </FadeIn>

              {/* Phase 6: Exit Strategy */}
              <FadeIn delay={750}>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-coastal-navy rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-coastal-navy/20">
                  <h3 className="text-lg font-bold text-coastal-navy mb-2 font-serif">
                    Exit Strategy
                  </h3>
                  <p className="text-sm text-coastal-grey mb-2">Year 6+</p>
                  <ul className="text-xs text-coastal-grey space-y-1">
                    <li>• Market analysis</li>
                    <li>• Sale preparation</li>
                    <li>• Profit realization</li>
                  </ul>
                </div>
              </div>
              </FadeIn>
            </div>
          </div>

          {/* Timeline Summary */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg border-2 border-coastal-navy/10">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-coastal-blue mb-2">6+ Years</div>
                <p className="text-coastal-grey">Typical hold period for maximum returns</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-coastal-orange mb-2">8-12%</div>
                <p className="text-coastal-grey">Annual cash-on-cash returns</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-coastal-yellow mb-2">15-25%</div>
                <p className="text-coastal-grey">Total annualized returns including appreciation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-coastal-navy mb-4 text-center font-serif">
              Investor FAQs
            </h2>
            <p className="text-xl text-coastal-grey text-center mb-12">
              Common questions about real estate investing
            </p>
          </FadeIn>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-semibold text-coastal-navy">
                What's the minimum investment needed to get started?
              </AccordionTrigger>
              <AccordionContent className="text-coastal-grey leading-relaxed">
                Investment properties in Northeast Florida start around $150,000-$200,000. With conventional financing, you'll typically need 20-25% down plus closing costs and a reserve fund. We'll help you identify properties that match your budget and investment goals during your free consultation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold text-coastal-navy">
                How does your construction background help investors?
              </AccordionTrigger>
              <AccordionContent className="text-coastal-grey leading-relaxed">
                We provide accurate renovation cost estimates before you buy, identify properties with the highest value-add potential, and handle the renovation work to get your property rent-ready quickly. This end-to-end approach eliminates the guesswork and contractor coordination that trip up most investors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold text-coastal-navy">
                What kind of returns can I expect on rental properties here?
              </AccordionTrigger>
              <AccordionContent className="text-coastal-grey leading-relaxed">
                Returns vary by property type and location, but well-selected rental properties in Northeast Florida typically generate 6-10% cash-on-cash returns. Value-add properties — where we buy below market, renovate strategically, and increase rents — can deliver even higher returns. We run detailed projections for every property we evaluate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-semibold text-coastal-navy">
                Do you help with property management after the purchase?
              </AccordionTrigger>
              <AccordionContent className="text-coastal-grey leading-relaxed">
                Yes. We offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, and financial reporting. Our construction expertise means maintenance issues are handled efficiently and cost-effectively — we know fair pricing for every type of repair.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-semibold text-coastal-navy">
                What's the difference between fix-and-flip and buy-and-hold strategies?
              </AccordionTrigger>
              <AccordionContent className="text-coastal-grey leading-relaxed">
                Fix-and-flip focuses on buying undervalued properties, renovating them, and selling for a profit within 3-6 months. Buy-and-hold is a long-term strategy where you renovate to increase rental income and build equity over time. We support both strategies and can help you decide which approach best fits your financial goals.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What's the minimum investment needed to get started?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Investment properties in Northeast Florida start around $150,000-$200,000. With conventional financing, you'll typically need 20-25% down plus closing costs and a reserve fund. We'll help you identify properties that match your budget and investment goals during your free consultation."
                }
              },
              {
                "@type": "Question",
                "name": "How does your construction background help investors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide accurate renovation cost estimates before you buy, identify properties with the highest value-add potential, and handle the renovation work to get your property rent-ready quickly. This end-to-end approach eliminates the guesswork and contractor coordination that trip up most investors."
                }
              },
              {
                "@type": "Question",
                "name": "What kind of returns can I expect on rental properties here?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Returns vary by property type and location, but well-selected rental properties in Northeast Florida typically generate 6-10% cash-on-cash returns. Value-add properties — where we buy below market, renovate strategically, and increase rents — can deliver even higher returns. We run detailed projections for every property we evaluate."
                }
              },
              {
                "@type": "Question",
                "name": "Do you help with property management after the purchase?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, and financial reporting. Our construction expertise means maintenance issues are handled efficiently and cost-effectively — we know fair pricing for every type of repair."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between fix-and-flip and buy-and-hold strategies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fix-and-flip focuses on buying undervalued properties, renovating them, and selling for a profit within 3-6 months. Buy-and-hold is a long-term strategy where you renovate to increase rental income and build equity over time. We support both strategies and can help you decide which approach best fits your financial goals."
                }
              }
            ]
          })
        }}
      />

      {/* Contact CTA Section */}
      <section className="py-16 bg-coastal-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Start Building Your Rental Property Portfolio?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our turn-key investment services can help you achieve your financial goals.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-coastal-navy mb-6 font-serif">
                  Request a Portfolio Review
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-coastal-navy mb-1" htmlFor="investor-name">
                      Name *
                    </label>
                    <Input
                      id="investor-name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-coastal-grey/30 focus:border-coastal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-coastal-navy mb-1" htmlFor="investor-email">
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
                      className="border-coastal-grey/30 focus:border-coastal-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-coastal-navy mb-1" htmlFor="investor-phone">
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
                      className="border-coastal-grey/30 focus:border-coastal-blue"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-coastal-navy mb-1"
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
                      className="border-coastal-grey/30 focus:border-coastal-blue"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-coastal-orange hover:bg-coastal-orange/90 text-white py-3"
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
                <h3 className="text-2xl font-bold mb-4 font-serif">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4 text-coastal-orange" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+19046241722" className="text-coastal-blue hover:underline">
                        (904) 624-1722
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4 text-coastal-orange" />
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
                  className="bg-coastal-yellow hover:bg-coastal-yellow/90 text-coastal-navy font-semibold"
                >
                  <Link href="/contact?service=investment">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
