"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Home, DollarSign, FileText, Shield, Key, Phone } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import { font } from "@/styles/fonts"

export default function BuyersGuideClientPage() {
  const guideSteps = [
    {
      step: "1",
      title: "Get Pre-Approved for Financing",
      description: "Understand your budget and strengthen your offer with pre-approval from trusted lenders.",
      icon: <DollarSign className="h-8 w-8 text-[#229FD9]" />,
      details: [
        "Check your credit score and improve if needed",
        "Gather financial documents (tax returns, pay stubs, bank statements)",
        "Shop around with multiple lenders for best rates",
        "Get pre-approval letter before house hunting",
      ],
    },
    {
      step: "2",
      title: "Understanding the First Coast Market",
      description: "Learn about Northeast Florida's unique coastal real estate market dynamics.",
      icon: <Home className="h-8 w-8 text-[#229FD9]" />,
      details: [
        "Seasonal market trends and timing",
        "Neighborhood characteristics from St. Augustine to Amelia Island",
        "Hurricane and flood zone considerations",
        "Property tax implications and homestead exemptions",
      ],
    },
    {
      step: "3",
      title: "Working with a Buyer's Agent",
      description: "Why having an experienced agent matters, especially one with construction expertise.",
      icon: <Shield className="h-8 w-8 text-[#229FD9]" />,
      details: [
        "Agent represents your interests, not the seller's",
        "Access to MLS and off-market properties",
        "Negotiation expertise and market knowledge",
        "Construction background helps identify potential issues",
      ],
    },
    {
      step: "4",
      title: "Home Inspection Essentials",
      description: "What to look for and why a construction expert's eye makes all the difference.",
      icon: <FileText className="h-8 w-8 text-[#229FD9]" />,
      details: [
        "Structural integrity and foundation issues",
        "Electrical, plumbing, and HVAC systems",
        "Roof condition and coastal weather damage",
        "Potential renovation costs and feasibility",
      ],
    },
    {
      step: "5",
      title: "Closing Process Walkthrough",
      description: "Navigate the final steps to homeownership with confidence.",
      icon: <Key className="h-8 w-8 text-[#229FD9]" />,
      details: [
        "Final walkthrough checklist",
        "Title search and insurance",
        "Closing costs breakdown",
        "Key transfer and move-in preparation",
      ],
    },
  ]

  const expertiseHighlights = [
    "20+ years construction experience helps identify hidden issues",
    "Accurate renovation cost estimates during negotiations",
    "Understanding of coastal building codes and requirements",
    "Network of trusted contractors and service providers",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 text-white">
        <img
          src="https://images.unsplash.com/photo-1758523671285-9ff3f4e0ff38?auto=format&fit=crop&w=2000&q=80"
          alt="Homebuyers celebrating with their agent"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18457C]/90 via-[#18457C]/70 to-[#229FD9]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">Complete Guide</Badge>
          <h1 className={`${font.variable} font-serif text-4xl md:text-6xl font-bold text-white mb-6`}>
            Complete Homebuyer's Guide
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your step-by-step guide to buying your dream home on the First Coast, backed by construction expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Download PDF Guide
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#18457C] px-8 py-3 bg-transparent"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Guide Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Your Home Buying Journey
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Follow these essential steps to navigate the First Coast real estate market with confidence.
            </p>
          </div>

          <div className="space-y-12">
            {guideSteps.map((step, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#229FD9]/10 rounded-full flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <Badge className="bg-[#18457C] text-white">Step {step.step}</Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                        {step.title}
                      </h3>
                      <p className="text-[#707070] mb-6 text-lg leading-relaxed">{step.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-[#229FD9] mt-0.5 flex-shrink-0" />
                            <span className="text-[#707070]">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* David's Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                Why Working with a Construction Expert Matters
              </h2>
              <p className="text-xl text-[#707070] max-w-3xl mx-auto">
                David Conine's 20+ years in construction gives you a unique advantage in the home buying process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-4">
                  {expertiseHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-[#229FD9] mt-0.5 flex-shrink-0" />
                      <span className="text-[#707070] text-lg">{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="bg-[#229FD9] hover:bg-[#229FD9]/90 text-white px-8 py-3">
                      Get Expert Guidance
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-[#18457C] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "serif" }}>
                  Real Example
                </h3>
                <p className="text-white/90 mb-4">
                  "A client was considering a beachfront property that looked perfect. My construction background helped
                  identify $40,000 in hidden foundation issues that weren't obvious to the typical buyer."
                </p>
                <p className="text-white/80 text-sm">- David Conine, Licensed Realtor & Construction Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
            Take This Guide With You
          </h2>
          <p className="text-xl text-[#707070] mb-8">
            Download our comprehensive homebuyer's checklist and keep this guide handy throughout your home search.
          </p>

          <Card className="p-8 bg-gradient-to-r from-[#229FD9]/5 to-[#18457C]/5 border-2 border-[#229FD9]/20">
            <CardContent className="p-0">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-[#229FD9] rounded-full flex items-center justify-center">
                  <Download className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                Homebuyer's Checklist PDF
              </h3>
              <p className="text-[#707070] mb-6">
                Complete checklist with timelines, important questions to ask, and red flags to watch for.
              </p>
              <Button className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Download Free Checklist
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#18457C] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Ready to Start Your Home Search?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's find your perfect First Coast home with the confidence that comes from construction expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-8 py-3">
                Schedule Your Consultation
              </Button>
            </Link>
            <Link href="/real-estate/buyers">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#18457C] px-8 py-3 bg-transparent"
              >
                View Buyer Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
