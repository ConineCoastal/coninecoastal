import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Download, Home, Calculator, FileText, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Homebuyer's Guide - Conine Coastal | First Coast Real Estate",
  description:
    "Navigate the First Coast real estate market with confidence. Expert guidance from a construction professional with 20 years of experience.",
  keywords: "homebuyer guide, First Coast real estate, construction expertise, home inspection, Northeast Florida",
}

export default function BuyersGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 text-white">
        <img
          src="https://images.unsplash.com/photo-1758523671285-9ff3f4e0ff38?auto=format&fit=crop&w=2000&q=80"
          alt="Excited homebuyers reviewing a guide with their agent"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#18457C]/90 via-[#18457C]/70 to-[#229FD9]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Complete Homebuyer's Guide</h1>
            <p className="text-xl md:text-2xl mb-8">
              Navigate the First Coast market with confidence using insights from 20 years of construction expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                <Download className="mr-2 h-5 w-5" />
                Download PDF Guide
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#18457C]"
                asChild
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">
              Your 5-Step Home Buying Journey
            </h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              A proven process that combines real estate expertise with construction knowledge to help you make the best
              decision
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Step 1 */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#229FD9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#229FD9]">1</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">Get Pre-Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">
                  Understand your budget and strengthen your offer with pre-approval from trusted First Coast lenders.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#229FD9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#229FD9]">2</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">Find Your Home</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">
                  Search properties with an agent who understands construction quality and potential issues.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#229FD9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#229FD9]">3</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">Make an Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">
                  Craft competitive offers with strategic contingencies that protect your interests.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#229FD9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#229FD9]">4</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">Inspect & Appraise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">
                  Professional inspection with construction expertise to identify potential issues and costs.
                </p>
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#229FD9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#229FD9]">5</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">Close & Move</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">
                  Navigate closing with confidence and get keys to your new First Coast home.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Construction Expertise Advantage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-6">
                Why Construction Expertise Matters
              </h2>
              <p className="text-lg text-[#707070] mb-8">
                With 20 years in construction, I can spot issues other agents miss and help you understand the true cost
                of ownership.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-[#18457C] mb-2">Structural Assessment</h3>
                    <p className="text-[#707070]">
                      Identify foundation, framing, and structural issues that could cost thousands later.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-[#18457C] mb-2">System Evaluation</h3>
                    <p className="text-[#707070]">
                      Assess HVAC, plumbing, and electrical systems for efficiency and remaining lifespan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-[#18457C] mb-2">Renovation Potential</h3>
                    <p className="text-[#707070]">
                      Understand what improvements are possible and their realistic costs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-[#18457C] mb-2">Coastal Considerations</h3>
                    <p className="text-[#707070]">
                      Navigate First Coast-specific challenges like flood zones, wind resistance, and salt air exposure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-[#18457C] mb-6">Real Example: Hidden Savings</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#229FD9] pl-4">
                  <p className="text-[#707070] italic mb-2">
                    "A client was considering a $450,000 home that seemed perfect. During our walkthrough, I noticed
                    subtle signs of foundation settling that the inspector missed."
                  </p>
                  <p className="text-[#707070]">
                    <strong>Result:</strong> We negotiated a $15,000 credit for foundation repairs, saving the buyer
                    significant future costs.
                  </p>
                </div>
                <div className="text-center pt-4">
                  <p className="text-sm text-[#707070] mb-4">- David Conine, Licensed Contractor & Realtor</p>
                  <Button asChild>
                    <Link href="/contact">Get Expert Guidance</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Coast Market Insights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">
              Understanding the First Coast Market
            </h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              Local insights that help you make informed decisions in Northeast Florida's unique market
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#229FD9]/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-[#229FD9]" />
                </div>
                <CardTitle className="text-[#18457C] font-serif">Neighborhood Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#707070]">
                  <li>• St. Augustine historic district considerations</li>
                  <li>• Amelia Island luxury market trends</li>
                  <li>• Jacksonville Beach development impact</li>
                  <li>• Ponte Vedra investment opportunities</li>
                  <li>• Fernandina Beach waterfront properties</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#229FD9]/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-[#229FD9]" />
                </div>
                <CardTitle className="text-[#18457C] font-serif">Financing Options</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#707070]">
                  <li>• Conventional loans for primary residences</li>
                  <li>• Jumbo loans for luxury properties</li>
                  <li>• VA loans for military families</li>
                  <li>• Investment property financing</li>
                  <li>• Construction-to-permanent loans</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#229FD9]/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[#229FD9]" />
                </div>
                <CardTitle className="text-[#18457C] font-serif">Coastal Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#707070]">
                  <li>• Flood zone requirements and insurance</li>
                  <li>• Wind mitigation features</li>
                  <li>• Salt air impact on materials</li>
                  <li>• Hurricane preparedness</li>
                  <li>• Coastal construction standards</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloadable Checklist */}
      <section className="py-16 bg-[#18457C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get Your Free Homebuyer's Checklist</h2>
              <p className="text-xl mb-8">
                A comprehensive 25-point checklist that covers everything from pre-approval to closing, with
                construction-focused inspection points.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#229FD9]" />
                  <span>Pre-approval requirements and documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#229FD9]" />
                  <span>Property search criteria and must-haves</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#229FD9]" />
                  <span>Inspection points from a contractor's perspective</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#229FD9]" />
                  <span>Closing preparation and final walkthrough</span>
                </div>
              </div>

              <Button size="lg" variant="secondary">
                <Download className="mr-2 h-5 w-5" />
                Download Free Checklist
              </Button>
            </div>

            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold mb-6">Ready to Start Your Search?</h3>
              <p className="mb-6">
                Schedule a consultation to discuss your goals and get personalized guidance for your First Coast home
                search.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-[#229FD9]" />
                  <span>One-on-one consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Home className="h-5 w-5 text-[#229FD9]" />
                  <span>Personalized property search</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-[#229FD9]" />
                  <span>Construction expertise included</span>
                </div>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="w-full mt-6 bg-transparent border-white text-white hover:bg-white hover:text-[#18457C]"
                asChild
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
