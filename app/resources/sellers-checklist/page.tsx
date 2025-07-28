import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Download, TrendingUp, DollarSign, Home, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Seller's Checklist - Maximize Your Home's Value | Conine Coastal",
  description:
    "Strategic home improvements and selling tips from a construction expert. Maximize your First Coast property value with proven strategies.",
  keywords: "home selling tips, property value, construction expertise, First Coast real estate, home improvements ROI",
}

export default function SellersChecklistPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#18457C] to-[#229FD9] text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Maximize Your Home's Sale Value</h1>
            <p className="text-xl md:text-2xl mb-8">
              Strategic improvements and expert guidance from a construction professional who knows what buyers really
              want
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                <Download className="mr-2 h-5 w-5" />
                Get Free Checklist
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#18457C]"
                asChild
              >
                <Link href="/contact">Get Home Valuation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI-Focused Improvements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">
              High-ROI Improvements That Sell Homes
            </h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              Focus your time and money on improvements that deliver the highest return on investment in the First Coast
              market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kitchen Updates */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-[#229FD9]">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#229FD9]/10 rounded-lg flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-[#229FD9]" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-[#229FD9]">85%</span>
                    <p className="text-xs text-[#707070]">Avg ROI</p>
                  </div>
                </div>
                <CardTitle className="text-[#18457C] font-serif">Kitchen Refresh</CardTitle>
                <CardDescription>Strategic updates that maximize impact</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#707070]">
                  <li>• Cabinet painting or refacing</li>
                  <li>• Quartz countertop upgrade</li>
                  <li>• Modern hardware and fixtures</li>
                  <li>• Stainless steel appliances</li>
                  <li>• Under-cabinet lighting</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Cost:</strong> $15,000-25,000 | <strong>Value Added:</strong> $20,000-30,000
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Bathroom Updates */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-[#229FD9]">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#229FD9]/10 rounded-lg flex items-center justify-center">
                    <Home className="h-6 w-6 text-[#229FD9]" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-[#229FD9]">75%</span>
                    <p className="text-xs text-[#707070]">Avg ROI</p>
                  </div>
                </div>
                <CardTitle className="text-[#18457C] font-serif">Bathroom Upgrade</CardTitle>
                <CardDescription>Focus on master and guest baths</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#707070]">
                  <li>• Vanity and mirror replacement</li>
                  <li>• Modern tile and fixtures</li>
                  <li>• Improved lighting</li>
                  <li>• Fresh paint and caulking</li>
                  <li>• Quality hardware</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Cost:</strong> $8,000-15,000 | <strong>Value Added:</strong> $12,000-18,000
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Curb Appeal */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-[#229FD9]">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#229FD9]/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-[#229FD9]" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-[#229FD9]">100%</span>
                    <p className="text-xs text-[#707070]">Avg ROI</p>
                  </div>
                </div>
                <CardTitle className="text-[#18457C] font-serif">Curb Appeal</CardTitle>
                <CardDescription>First impressions matter most</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#707070]">
                  <li>• Professional landscaping</li>
                  <li>• Fresh exterior paint</li>
                  <li>• New front door and hardware</li>
                  <li>• Pressure washing</li>
                  <li>• Outdoor lighting</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Cost:</strong> $3,000-8,000 | <strong>Value Added:</strong> $5,000-12,000
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What NOT to Do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">
              What NOT to Renovate Before Selling
            </h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              Avoid these common mistakes that waste money and don't add value in the First Coast market
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-600 font-serif flex items-center">
                  <span className="mr-2">❌</span>
                  Avoid These Expensive Mistakes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Over-Personalized Renovations</h4>
                    <p className="text-sm text-[#707070]">
                      Unique tile patterns, bold paint colors, or highly specific design choices that limit buyer
                      appeal.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Swimming Pool Installation</h4>
                    <p className="text-sm text-[#707070]">
                      Pools rarely add their full cost in value and can actually deter some buyers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Luxury Upgrades in Starter Homes</h4>
                    <p className="text-sm text-[#707070]">
                      High-end finishes that exceed the neighborhood's price point won't return their investment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Converting Bedrooms</h4>
                    <p className="text-sm text-[#707070]">
                      Removing bedrooms for home offices or gyms typically reduces overall home value.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-600 font-serif flex items-center">
                  <span className="mr-2">✅</span>
                  Focus on These Instead
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Neutral, Move-in Ready Updates</h4>
                    <p className="text-sm text-[#707070]">
                      Fresh paint, clean carpets, and modern fixtures that appeal to the broadest audience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Essential Repairs</h4>
                    <p className="text-sm text-[#707070]">
                      Fix any structural, electrical, or plumbing issues that could derail a sale.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Energy Efficiency</h4>
                    <p className="text-sm text-[#707070]">
                      HVAC maintenance, insulation, and efficient windows that reduce operating costs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Storage Solutions</h4>
                    <p className="text-sm text-[#707070]">
                      Organized closets and storage areas that help buyers envision their belongings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Construction Expert Advantage */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-6">
                Construction Expertise That Maximizes Profit
              </h2>
              <p className="text-lg text-[#707070] mb-8">
                As a licensed contractor and realtor, I know exactly which improvements deliver the best return and
                which ones to avoid.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-[#18457C] mb-2">Accurate Cost Estimates</h3>
                    <p className="text-[#707070]">
                      Know exactly what improvements will cost before you commit, avoiding budget overruns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-[#18457C] mb-2">Quality Control</h3>
                    <p className="text-[#707070]">
                      Ensure work is done right the first time with professional oversight and standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-[#18457C] mb-2">Strategic Timing</h3>
                    <p className="text-[#707070]">
                      Coordinate improvements with market timing for maximum impact and fastest sale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-[#18457C] mb-2">Buyer Psychology</h3>
                    <p className="text-[#707070]">
                      Understand what First Coast buyers really want and how to present your home effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-[#18457C] mb-6">
                Success Story: Strategic Improvements
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#229FD9] pl-4">
                  <p className="text-[#707070] italic mb-2">
                    "A seller wanted to spend $40,000 on a full kitchen remodel. Instead, I recommended strategic
                    updates for $12,000 that achieved the same buyer appeal."
                  </p>
                  <p className="text-[#707070]">
                    <strong>Result:</strong> Home sold for $15,000 over asking price in just 8 days, netting the seller
                    $43,000 more than the original plan.
                  </p>
                </div>
                <div className="text-center pt-4">
                  <p className="text-sm text-[#707070] mb-4">- David Conine, Licensed Contractor & Realtor</p>
                  <Button asChild>
                    <Link href="/contact">Get Strategic Guidance</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Sale Checklist */}
      <section className="py-16 bg-[#18457C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Complete Pre-Sale Improvement Checklist
              </h2>
              <p className="text-xl mb-8">
                A prioritized action plan that maximizes your home's value while minimizing unnecessary expenses.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#229FD9]" />
                  <span>30-day, 60-day, and 90-day improvement timelines</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#229FD9]" />
                  <span>Cost estimates for each improvement category</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#229FD9]" />
                  <span>ROI calculations specific to First Coast market</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#229FD9]" />
                  <span>Contractor recommendations and quality standards</span>
                </div>
              </div>

              <Button size="lg" variant="secondary">
                <Download className="mr-2 h-5 w-5" />
                Download Complete Checklist
              </Button>
            </div>

            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold mb-6">Ready to Maximize Your Sale?</h3>
              <p className="mb-6">
                Get a free home valuation and personalized improvement recommendations that will maximize your profit.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-5 w-5 text-[#229FD9]" />
                  <span>Free market analysis and valuation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-[#229FD9]" />
                  <span>Personalized improvement strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wrench className="h-5 w-5 text-[#229FD9]" />
                  <span>Construction expertise included</span>
                </div>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="w-full mt-6 bg-transparent border-white text-white hover:bg-white hover:text-[#18457C]"
                asChild
              >
                <Link href="/contact">Get Free Home Valuation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
