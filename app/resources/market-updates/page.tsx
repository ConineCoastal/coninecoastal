import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Download, Calendar, MapPin, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "First Coast Market Updates - Conine Coastal | Real Estate Market Intelligence",
  description:
    "Current market statistics, trends, and analysis for Northeast Florida real estate. Monthly reports and neighborhood insights from a local expert.",
  keywords:
    "First Coast market reports, Northeast Florida real estate trends, market statistics, property values, Amelia Island, St. Augustine",
}

export default function MarketUpdatesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#18457C] to-[#229FD9] text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">First Coast Market Intelligence</h1>
            <p className="text-xl md:text-2xl mb-8">
              Current market data, trends, and professional analysis for informed real estate decisions in Northeast
              Florida
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                <Download className="mr-2 h-5 w-5" />
                Download Latest Report
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#18457C]"
                asChild
              >
                <Link href="/contact">Get Custom Analysis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Market Snapshot */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#229FD9] text-white">December 2024</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">Current Market Snapshot</h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              Key metrics and trends across the First Coast real estate market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-l-4 border-[#229FD9]">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">Median Home Price</CardTitle>
                <div className="text-3xl font-bold text-[#229FD9]">$425K</div>
                <div className="flex items-center justify-center space-x-1 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+3.2% YoY</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">Steady appreciation continues across Northeast Florida markets</p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-[#F16622]">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">Days on Market</CardTitle>
                <div className="text-3xl font-bold text-[#F16622]">28</div>
                <div className="flex items-center justify-center space-x-1 text-red-600">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-sm">-5 days YoY</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">Well-priced homes continue to sell quickly in desirable areas</p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-[#229FD9]">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">Active Listings</CardTitle>
                <div className="text-3xl font-bold text-[#229FD9]">2,847</div>
                <div className="flex items-center justify-center space-x-1 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+15% YoY</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">Increased inventory provides more options for buyers</p>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-[#F16622]">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">Price per Sq Ft</CardTitle>
                <div className="text-3xl font-bold text-[#F16622]">$198</div>
                <div className="flex items-center justify-center space-x-1 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+2.8% YoY</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">Consistent value growth across property types</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Neighborhood Spotlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">
              Neighborhood Market Analysis
            </h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              Detailed insights into First Coast's most active real estate markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Amelia Island */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[#229FD9]" />
                    <CardTitle className="text-[#18457C] font-serif">Amelia Island</CardTitle>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Hot Market</Badge>
                </div>
                <CardDescription>Luxury coastal living with strong appreciation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Median Price:</span>
                    <span className="font-semibold text-[#229FD9]">$875,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">YoY Change:</span>
                    <span className="font-semibold text-green-600">+8.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Avg DOM:</span>
                    <span className="font-semibold">22 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Active Listings:</span>
                    <span className="font-semibold">127</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-[#707070]">
                      Waterfront properties driving premium pricing. New construction limited by development
                      restrictions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* St. Augustine */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[#229FD9]" />
                    <CardTitle className="text-[#18457C] font-serif">St. Augustine</CardTitle>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Balanced</Badge>
                </div>
                <CardDescription>Historic charm with diverse price points</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Median Price:</span>
                    <span className="font-semibold text-[#229FD9]">$385,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">YoY Change:</span>
                    <span className="font-semibold text-green-600">+4.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Avg DOM:</span>
                    <span className="font-semibold">31 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Active Listings:</span>
                    <span className="font-semibold">298</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-[#707070]">
                      Historic district properties command premium. New developments expanding inventory.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Jacksonville Beach */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[#229FD9]" />
                    <CardTitle className="text-[#18457C] font-serif">Jacksonville Beach</CardTitle>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">Competitive</Badge>
                </div>
                <CardDescription>Beach lifestyle with urban amenities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Median Price:</span>
                    <span className="font-semibold text-[#229FD9]">$525,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">YoY Change:</span>
                    <span className="font-semibold text-green-600">+6.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Avg DOM:</span>
                    <span className="font-semibold">25 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Active Listings:</span>
                    <span className="font-semibold">156</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-[#707070]">
                      Strong demand for oceanfront and near-beach properties. Condo market particularly active.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ponte Vedra Beach */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[#229FD9]" />
                    <CardTitle className="text-[#18457C] font-serif">Ponte Vedra Beach</CardTitle>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Premium</Badge>
                </div>
                <CardDescription>Exclusive luxury coastal community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Median Price:</span>
                    <span className="font-semibold text-[#229FD9]">$1,125,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">YoY Change:</span>
                    <span className="font-semibold text-green-600">+7.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Avg DOM:</span>
                    <span className="font-semibold">35 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Active Listings:</span>
                    <span className="font-semibold">89</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-[#707070]">
                      Golf course and oceanfront properties maintain strong values. Limited inventory drives
                      competition.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fernandina Beach */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[#229FD9]" />
                    <CardTitle className="text-[#18457C] font-serif">Fernandina Beach</CardTitle>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Growing</Badge>
                </div>
                <CardDescription>Historic charm with modern appeal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Median Price:</span>
                    <span className="font-semibold text-[#229FD9]">$465,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">YoY Change:</span>
                    <span className="font-semibold text-green-600">+5.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Avg DOM:</span>
                    <span className="font-semibold">29 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Active Listings:</span>
                    <span className="font-semibold">142</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-[#707070]">
                      Downtown revitalization driving interest. Mix of historic and new construction options.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nassau County */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[#229FD9]" />
                    <CardTitle className="text-[#18457C] font-serif">Nassau County</CardTitle>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Value</Badge>
                </div>
                <CardDescription>Affordable options with growth potential</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Median Price:</span>
                    <span className="font-semibold text-[#229FD9]">$295,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">YoY Change:</span>
                    <span className="font-semibold text-green-600">+3.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Avg DOM:</span>
                    <span className="font-semibold">38 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#707070]">Active Listings:</span>
                    <span className="font-semibold">234</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-[#707070]">
                      Rural and suburban options attracting families. New development increasing inventory.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">Key Market Trends</h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              Professional insights on what's driving the First Coast market
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-[#229FD9]">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-[#229FD9]" />
                  What's Driving Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Population Migration</h4>
                    <p className="text-sm text-[#707070]">
                      Continued influx from high-tax states seeking coastal lifestyle and business-friendly environment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Remote Work Flexibility</h4>
                    <p className="text-sm text-[#707070]">
                      Professionals choosing First Coast for quality of life while maintaining career opportunities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Infrastructure Investment</h4>
                    <p className="text-sm text-[#707070]">
                      Major transportation and utility improvements supporting long-term growth.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Tourism Recovery</h4>
                    <p className="text-sm text-[#707070]">
                      Strong vacation rental market supporting investment property demand.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[#F16622]">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-[#F16622]" />
                  Market Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Construction Costs</h4>
                    <p className="text-sm text-[#707070]">
                      Material and labor costs remain elevated, impacting new construction and renovation projects.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Insurance Rates</h4>
                    <p className="text-sm text-[#707070]">
                      Rising coastal insurance premiums affecting affordability calculations for buyers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Interest Rate Sensitivity</h4>
                    <p className="text-sm text-[#707070]">
                      Mortgage rate fluctuations creating timing considerations for buyers and sellers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#18457C] mb-2">Inventory Constraints</h4>
                    <p className="text-sm text-[#707070]">
                      Limited developable land in prime coastal areas restricting supply growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monthly Reports */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">Monthly Market Reports</h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              Comprehensive analysis and data for informed decision making
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="h-5 w-5 text-[#229FD9]" />
                  <Badge className="bg-[#229FD9] text-white">Latest</Badge>
                </div>
                <CardTitle className="text-[#18457C] font-serif">December 2024 Report</CardTitle>
                <CardDescription>Year-end market analysis and 2025 outlook</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#707070] mb-4">
                  <li>• Q4 sales volume and pricing trends</li>
                  <li>• Inventory analysis by price range</li>
                  <li>• Construction activity update</li>
                  <li>• 2025 market predictions</li>
                </ul>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="h-5 w-5 text-[#707070]" />
                  <span className="text-sm text-[#707070]">November 2024</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif">Holiday Market Dynamics</CardTitle>
                <CardDescription>Seasonal patterns and buyer behavior</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#707070] mb-4">
                  <li>• Holiday season impact on sales</li>
                  <li>• Luxury market performance</li>
                  <li>• Interest rate effects</li>
                  <li>• Inventory management strategies</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="h-5 w-5 text-[#707070]" />
                  <span className="text-sm text-[#707070]">October 2024</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif">Fall Market Momentum</CardTitle>
                <CardDescription>Post-summer activity and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#707070] mb-4">
                  <li>• Back-to-school market shift</li>
                  <li>• Hurricane season impact</li>
                  <li>• New construction updates</li>
                  <li>• Investment property trends</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Reports Archive
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#18457C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get Personalized Market Analysis</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Receive custom market reports and property valuations tailored to your specific needs and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request Custom Analysis</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#18457C]"
            >
              <Download className="mr-2 h-5 w-5" />
              Subscribe to Reports
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
