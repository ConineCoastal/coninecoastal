import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, TrendingUp, Home, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Resources & Guides - Conine Coastal | Expert Real Estate & Renovation Insights",
  description:
    "Access expert guides, market reports, and planning tools for smart real estate and renovation decisions in Northeast Florida.",
  keywords: "real estate guides, renovation planning, market reports, First Coast, homebuyer guide, seller checklist",
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#18457C] to-[#229FD9] text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Resources & Guides</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert insights for smart real estate and renovation decisions on the First Coast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/resources/buyers-guide">Start Your Home Search</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#18457C]"
              asChild
            >
              <Link href="/resources/market-updates">View Market Reports</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">
              Your Complete Resource Library
            </h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              Access comprehensive guides, tools, and insights backed by 20 years of construction expertise and deep
              First Coast market knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* For Home Buyers */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#229FD9]/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-[#229FD9]" />
                </div>
                <CardTitle className="text-[#18457C] font-serif">For Home Buyers</CardTitle>
                <CardDescription>
                  Navigate the First Coast market with confidence using our comprehensive buyer resources.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-[#707070]">
                  <li>• First-time buyer checklist</li>
                  <li>• Construction inspection guide</li>
                  <li>• Financing options overview</li>
                  <li>• Neighborhood analysis tools</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/resources/buyers-guide">Access Buyer's Guide</Link>
                </Button>
              </CardContent>
            </Card>

            {/* For Home Sellers */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#229FD9]/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[#229FD9]" />
                </div>
                <CardTitle className="text-[#18457C] font-serif">For Home Sellers</CardTitle>
                <CardDescription>
                  Maximize your home's value with strategic improvements and expert market timing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-[#707070]">
                  <li>• Pre-listing preparation guide</li>
                  <li>• ROI-focused improvement tips</li>
                  <li>• Market timing strategies</li>
                  <li>• Professional staging advice</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/resources/sellers-checklist">Get Seller's Checklist</Link>
                </Button>
              </CardContent>
            </Card>

            {/* For Renovators */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F16622]/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-[#F16622]" />
                </div>
                <CardTitle className="text-[#18457C] font-serif">For Renovators</CardTitle>
                <CardDescription>
                  Plan successful renovations with professional insights and proven strategies.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-[#707070]">
                  <li>• Project planning templates</li>
                  <li>• Budget calculators</li>
                  <li>• Contractor selection guide</li>
                  <li>• Permit requirements</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/resources/renovation-planning">Start Planning</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">Featured Resources</h2>
            <p className="text-lg text-[#707070]">Our most popular guides and tools for First Coast property owners</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Market Intelligence */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#229FD9]/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-[#229FD9]" />
                  </div>
                  <div>
                    <CardTitle className="text-[#18457C] font-serif">Market Intelligence</CardTitle>
                    <CardDescription>Stay informed with the latest First Coast market data</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Monthly market reports</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/resources/market-updates">View Reports</Link>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Neighborhood analysis</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/resources/market-updates">Explore Areas</Link>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Investment insights</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/resources/blog">Read Blog</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tools & Calculators */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F16622]/10 rounded-lg flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-[#F16622]" />
                  </div>
                  <div>
                    <CardTitle className="text-[#18457C] font-serif">Tools & Calculators</CardTitle>
                    <CardDescription>Interactive tools for informed decision making</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Renovation ROI calculator</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/resources/renovation-planning">Calculate</Link>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Home affordability tool</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/resources/buyers-guide">Use Tool</Link>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Improvement cost estimator</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/resources/sellers-checklist">Estimate</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">Latest Insights</h2>
              <p className="text-lg text-[#707070]">Expert advice and market updates from the First Coast</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/resources/blog">View All Posts</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">First Coast Market Trends - Q4 2024</CardTitle>
                <CardDescription>Analysis of recent sales data and predictions for the coming quarter</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070] mb-4">
                  Market activity remains strong across Northeast Florida, with particular growth in...
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/blog">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">
                  5 Kitchen Updates That Actually Add Value
                </CardTitle>
                <CardDescription>Construction expert insights on renovation ROI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070] mb-4">
                  Not all kitchen improvements are created equal. Here's what really matters...
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/blog">Read More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">Best Time to Buy on Amelia Island</CardTitle>
                <CardDescription>Seasonal market patterns and timing strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070] mb-4">
                  Understanding Amelia Island's unique market cycles can save you thousands...
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/blog">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#18457C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're buying, selling, or renovating, our expert guidance and comprehensive resources will help you
            make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#18457C]"
              asChild
            >
              <Link href="/resources/buyers-guide">Download Free Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
