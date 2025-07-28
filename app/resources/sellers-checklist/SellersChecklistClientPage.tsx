"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Download, TrendingUp, Hammer, DollarSign, X } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import { font } from "@/styles/fonts"

export default function SellersChecklistClientPage() {
  const improvementCategories = [
    {
      title: "High-ROI Improvements",
      description: "Projects that typically return 70-90% of investment",
      icon: <TrendingUp className="h-8 w-8 text-[#229FD9]" />,
      color: "bg-green-50 border-green-200",
      improvements: [
        "Fresh interior paint (neutral colors)",
        "Kitchen cabinet refresh or reface",
        "Updated bathroom fixtures and vanities",
        "New flooring in high-traffic areas",
        "Improved curb appeal and landscaping",
        "Energy-efficient windows and doors",
      ],
    },
    {
      title: "What NOT to Renovate",
      description: "Avoid these costly mistakes before selling",
      icon: <X className="h-8 w-8 text-[#F16622]" />,
      color: "bg-red-50 border-red-200",
      improvements: [
        "Major kitchen gut renovations",
        "Adding square footage or rooms",
        "High-end luxury finishes",
        "Swimming pools (in most cases)",
        "Highly personalized design choices",
        "Expensive landscaping projects",
      ],
    },
    {
      title: "Quick Wins",
      description: "Low-cost improvements with immediate impact",
      icon: <Hammer className="h-8 w-8 text-[#FFCA05]" />,
      color: "bg-yellow-50 border-yellow-200",
      improvements: [
        "Deep cleaning and decluttering",
        "Professional staging consultation",
        "Minor repairs and touch-ups",
        "Updated light fixtures and hardware",
        "Fresh mulch and basic landscaping",
        "Power washing exterior surfaces",
      ],
    },
  ]

  const sellingSteps = [
    {
      phase: "Pre-Listing (4-6 weeks before)",
      tasks: [
        "Complete home inspection and address major issues",
        "Implement strategic improvements based on ROI analysis",
        "Declutter and deep clean entire home",
        "Research comparable sales and market conditions",
        "Interview and select experienced listing agent",
      ],
    },
    {
      phase: "Listing Preparation (2-3 weeks before)",
      tasks: [
        "Professional photography and virtual tour",
        "Complete staging (at minimum, key rooms)",
        "Finalize listing price strategy",
        "Prepare marketing materials and online listings",
        "Schedule initial showings and open houses",
      ],
    },
    {
      phase: "Active Marketing (Ongoing)",
      tasks: [
        "Monitor showing feedback and market response",
        "Adjust pricing strategy if needed",
        "Maintain home in show-ready condition",
        "Review and negotiate offers strategically",
        "Coordinate inspections and appraisals",
      ],
    },
    {
      phase: "Under Contract (3-4 weeks)",
      tasks: [
        "Complete any agreed-upon repairs",
        "Prepare for final walkthrough",
        "Coordinate moving and utility transfers",
        "Review closing documents carefully",
        "Plan for key transfer and possession",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <Breadcrumb />

      {/* Hero Section */}
      <main className="mx-auto max-w-4xl px-6 py-20 space-y-16">
        <header className="space-y-4 text-center">
          <h1 className={`${font.variable} font-serif text-4xl sm:text-5xl text-[#18457C]`}>
            Maximize Your Home's Sale Value
          </h1>
          <p className="text-lg">David Conine's construction expertise pinpoints the renovations that truly pay off.</p>
          <Button asChild>
            <Link href="/files/sellers-checklist.pdf" target="_blank">
              Download Improvement Checklist
            </Link>
          </Button>
        </header>

        {/* Strategic Improvements */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                Strategic Improvements That Pay Off
              </h2>
              <p className="text-xl text-[#707070] max-w-3xl mx-auto">
                Not all improvements are created equal. Focus your time and money on changes that actually increase your
                sale price.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {improvementCategories.map((category, index) => (
                <Card key={index} className={`border-2 ${category.color}`}>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#18457C] mb-4 text-center" style={{ fontFamily: "serif" }}>
                      {category.title}
                    </h3>
                    <p className="text-[#707070] mb-6 text-center">{category.description}</p>
                    <div className="space-y-3">
                      {category.improvements.map((improvement, improvementIndex) => (
                        <div key={improvementIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-[#229FD9] mt-0.5 flex-shrink-0" />
                          <span className="text-[#707070] text-sm">{improvement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* David's Construction Advantage */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
                    Construction Expertise That Maximizes Your Profit
                  </h2>
                  <p className="text-xl text-[#707070] mb-8">
                    David's 20+ years in construction means he knows exactly which improvements will give you the best
                    return on investment.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#229FD9]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <DollarSign className="h-6 w-6 text-[#229FD9]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#18457C] mb-2">Accurate Cost Estimates</h3>
                        <p className="text-[#707070]">
                          Know exactly what improvements will cost before you commit, avoiding budget surprises.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#229FD9]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="h-6 w-6 text-[#229FD9]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#18457C] mb-2">ROI-Focused Recommendations</h3>
                        <p className="text-[#707070]">
                          Only suggest improvements that will actually increase your sale price and appeal to buyers.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#229FD9]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Hammer className="h-6 w-6 text-[#229FD9]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#18457C] mb-2">Trusted Contractor Network</h3>
                        <p className="text-[#707070]">
                          Access to reliable, fairly-priced contractors who deliver quality work on schedule.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#18457C] text-white p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "serif" }}>
                    Success Story
                  </h3>
                  <p className="text-white/90 mb-4">
                    "Instead of a $30,000 kitchen renovation, we recommended $5,000 in strategic updates. The home sold
                    for $15,000 over asking price, netting the seller $25,000 more than the full renovation would have."
                  </p>
                  <p className="text-white/80 text-sm">- Recent client result, Ponte Vedra Beach</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selling Timeline */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                Your Selling Timeline
              </h2>
              <p className="text-xl text-[#707070] max-w-3xl mx-auto">
                A strategic approach to selling your home, from preparation to closing.
              </p>
            </div>

            <div className="space-y-8">
              {sellingSteps.map((step, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#229FD9] text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                          {step.phase}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {step.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-[#229FD9] mt-0.5 flex-shrink-0" />
                              <span className="text-[#707070]">{task}</span>
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

        {/* Download Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
              Get Your Complete Seller's Toolkit
            </h2>

            <Card className="p-8 bg-gradient-to-r from-[#229FD9]/5 to-[#18457C]/5 border-2 border-[#229FD9]/20">
              <CardContent className="p-0">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-[#229FD9] rounded-full flex items-center justify-center">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                  Pre-Sale Improvement Checklist
                </h3>
                <p className="text-[#707070] mb-6">
                  Complete checklist with ROI estimates, timeline, and contractor recommendations.
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
        <div className="rounded-md bg-[#18457C] p-8 text-white text-center">
          <h3 className="mb-4 text-2xl font-semibold">Get your free home valuation</h3>
          <Button asChild variant="secondary" className="text-[#18457C]">
            <Link href="/contact">Request Valuation</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
