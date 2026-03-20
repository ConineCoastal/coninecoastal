"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Download, Calendar, MapPin, Home, BarChart3 } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export default function MarketReportsPage() {
  const marketData = [
    {
      area: "St. Augustine",
      medianPrice: "$425,000",
      priceChange: "+8.2%",
      trend: "up",
      avgDaysOnMarket: 28,
      inventory: "3.2 months",
      salesVolume: 156,
    },
    {
      area: "Ponte Vedra Beach",
      medianPrice: "$675,000",
      priceChange: "+12.1%",
      trend: "up",
      avgDaysOnMarket: 21,
      inventory: "2.8 months",
      salesVolume: 89,
    },
    {
      area: "Fernandina Beach",
      medianPrice: "$385,000",
      priceChange: "+6.5%",
      trend: "up",
      avgDaysOnMarket: 32,
      inventory: "3.5 months",
      salesVolume: 67,
    },
    {
      area: "Jacksonville Beaches",
      medianPrice: "$495,000",
      priceChange: "+4.8%",
      trend: "up",
      avgDaysOnMarket: 25,
      inventory: "2.9 months",
      salesVolume: 234,
    },
    {
      area: "Amelia Island",
      medianPrice: "$550,000",
      priceChange: "+9.3%",
      trend: "up",
      avgDaysOnMarket: 19,
      inventory: "2.4 months",
      salesVolume: 45,
    },
  ]

  const reports = [
    {
      title: "Q4 2024 Market Summary",
      date: "December 2024",
      type: "Quarterly Report",
      description: "Comprehensive analysis of Q4 market trends across Northeast Florida coastal communities.",
      pages: "24 pages",
      featured: true,
    },
    {
      title: "November 2024 Market Update",
      date: "November 2024",
      type: "Monthly Report",
      description: "Latest market statistics and trends for November 2024.",
      pages: "12 pages",
      featured: false,
    },
    {
      title: "Luxury Market Analysis",
      date: "November 2024",
      type: "Special Report",
      description: "In-depth analysis of the luxury home market ($750K+) in coastal Northeast Florida.",
      pages: "18 pages",
      featured: true,
    },
    {
      title: "First-Time Buyer Report",
      date: "October 2024",
      type: "Special Report",
      description: "Market opportunities and trends for first-time homebuyers in the region.",
      pages: "16 pages",
      featured: false,
    },
    {
      title: "Investment Property Outlook",
      date: "October 2024",
      type: "Investment Report",
      description: "Analysis of rental market trends and investment opportunities.",
      pages: "20 pages",
      featured: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 text-white">
        <Image
          src="https://images.unsplash.com/photo-1758518729794-456bbd9f70f8?auto=format&fit=crop&w=2000&q=80"
          alt="Team discussing financial charts and market reports"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
            Market Reports & Analysis
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Stay informed with comprehensive market data and expert analysis of Northeast Florida's coastal real estate
            markets
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our detailed reports combine 20 years of construction expertise with deep market knowledge to provide
            insights you won't find anywhere else.
          </p>
        </div>
      </section>

      {/* Current Market Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-coastal-navy mb-4 font-serif">
              Current Market Overview
            </h2>
            <p className="text-xl text-coastal-grey max-w-3xl mx-auto">
              Real-time market data for Northeast Florida's premier coastal communities
            </p>
            <Badge className="mt-4 bg-coastal-blue text-white px-4 py-2">Updated December 2024</Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketData.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-coastal-navy font-serif">
                      {area.area}
                    </h3>
                    <MapPin className="h-5 w-5 text-coastal-grey" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-coastal-grey">Median Price:</span>
                      <span className="font-bold text-coastal-navy">{area.medianPrice}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-coastal-grey">Price Change:</span>
                      <div className="flex items-center">
                        {area.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                        )}
                        <span className={`font-bold ${area.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                          {area.priceChange}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-coastal-grey">Avg. Days on Market:</span>
                      <span className="font-semibold text-coastal-navy">{area.avgDaysOnMarket} days</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-coastal-grey">Inventory:</span>
                      <span className="font-semibold text-coastal-navy">{area.inventory}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-coastal-grey">Sales Volume:</span>
                      <span className="font-semibold text-coastal-navy">{area.salesVolume} homes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-coastal-navy mb-4 font-serif">
              Key Market Insights
            </h2>
            <p className="text-xl text-coastal-grey max-w-3xl mx-auto">
              Expert analysis backed by construction knowledge and market experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 border-coastal-blue/20 hover:border-coastal-blue transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-coastal-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-coastal-blue" />
                </div>
                <h3 className="text-lg font-bold text-coastal-navy mb-2 font-serif">
                  Strong Appreciation
                </h3>
                <p className="text-2xl font-bold text-coastal-blue mb-2">+8.4%</p>
                <p className="text-sm text-coastal-grey">Average price growth across all coastal markets</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-coastal-orange/20 hover:border-coastal-orange transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-coastal-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-coastal-orange" />
                </div>
                <h3 className="text-lg font-bold text-coastal-navy mb-2 font-serif">
                  Low Inventory
                </h3>
                <p className="text-2xl font-bold text-coastal-orange mb-2">2.9 months</p>
                <p className="text-sm text-coastal-grey">Average inventory levels indicate seller's market</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-coastal-yellow/20 hover:border-coastal-yellow transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-coastal-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-coastal-yellow" />
                </div>
                <h3 className="text-lg font-bold text-coastal-navy mb-2 font-serif">
                  Quick Sales
                </h3>
                <p className="text-2xl font-bold text-coastal-yellow mb-2">25 days</p>
                <p className="text-sm text-coastal-grey">Average days on market for coastal properties</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-coastal-navy/20 hover:border-coastal-navy transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-coastal-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-coastal-navy" />
                </div>
                <h3 className="text-lg font-bold text-coastal-navy mb-2 font-serif">
                  High Activity
                </h3>
                <p className="text-2xl font-bold text-coastal-navy mb-2">591</p>
                <p className="text-sm text-coastal-grey">Total sales volume this quarter</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Reports */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-coastal-navy mb-4 font-serif">
              Available Market Reports
            </h2>
            <p className="text-xl text-coastal-grey max-w-3xl mx-auto">
              Download our comprehensive market reports for detailed analysis and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  report.featured ? "border-2 border-coastal-blue/20" : ""
                }`}
              >
                <CardContent className="p-6">
                  {report.featured && <Badge className="mb-4 bg-coastal-orange text-white">Featured Report</Badge>}

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-coastal-navy mb-2 font-serif">
                        {report.title}
                      </h3>
                      <div className="flex items-center text-sm text-coastal-grey mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {report.date}
                      </div>
                      <Badge variant="outline" className="text-xs mb-3">
                        {report.type}
                      </Badge>
                    </div>
                    <Download className="h-6 w-6 text-coastal-blue" />
                  </div>

                  <p className="text-coastal-grey mb-4 text-sm leading-relaxed">{report.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-coastal-grey">{report.pages}</span>
                    <span className="text-xs text-coastal-blue font-semibold">FREE DOWNLOAD</span>
                  </div>

                  <Button className="w-full bg-coastal-blue hover:bg-coastal-blue/90 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-coastal-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Stay Updated with Market Trends
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to receive our monthly market reports and exclusive insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-coastal-navy focus:outline-none focus:ring-2 focus:ring-coastal-blue"
            />
            <Button className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-6 py-3">Subscribe</Button>
          </div>
          <p className="text-white/60 text-sm mt-4">No spam, unsubscribe at any time. Reports delivered monthly.</p>
        </div>
      </section>
    </div>
  )
}
