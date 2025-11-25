"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Download, Calendar, MapPin, Home, BarChart3 } from "lucide-react"

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
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 text-white">
        <img
          src="https://images.unsplash.com/photo-1758518729794-456bbd9f70f8?auto=format&fit=crop&w=2000&q=80"
          alt="Team discussing financial charts and market reports"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18457C]/90 via-[#18457C]/70 to-[#229FD9]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "serif" }}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Current Market Overview
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Real-time market data for Northeast Florida's premier coastal communities
            </p>
            <Badge className="mt-4 bg-[#229FD9] text-white px-4 py-2">Updated December 2024</Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketData.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
                      {area.area}
                    </h3>
                    <MapPin className="h-5 w-5 text-[#707070]" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#707070]">Median Price:</span>
                      <span className="font-bold text-[#18457C]">{area.medianPrice}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#707070]">Price Change:</span>
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
                      <span className="text-sm text-[#707070]">Avg. Days on Market:</span>
                      <span className="font-semibold text-[#18457C]">{area.avgDaysOnMarket} days</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#707070]">Inventory:</span>
                      <span className="font-semibold text-[#18457C]">{area.inventory}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#707070]">Sales Volume:</span>
                      <span className="font-semibold text-[#18457C]">{area.salesVolume} homes</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Key Market Insights
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Expert analysis backed by construction knowledge and market experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 border-[#229FD9]/20 hover:border-[#229FD9] transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#229FD9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-[#229FD9]" />
                </div>
                <h3 className="text-lg font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                  Strong Appreciation
                </h3>
                <p className="text-2xl font-bold text-[#229FD9] mb-2">+8.4%</p>
                <p className="text-sm text-[#707070]">Average price growth across all coastal markets</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-[#F16622]/20 hover:border-[#F16622] transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#F16622]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-[#F16622]" />
                </div>
                <h3 className="text-lg font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                  Low Inventory
                </h3>
                <p className="text-2xl font-bold text-[#F16622] mb-2">2.9 months</p>
                <p className="text-sm text-[#707070]">Average inventory levels indicate seller's market</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-[#FFCA05]/20 hover:border-[#FFCA05] transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#FFCA05]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-[#FFCA05]" />
                </div>
                <h3 className="text-lg font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                  Quick Sales
                </h3>
                <p className="text-2xl font-bold text-[#FFCA05] mb-2">25 days</p>
                <p className="text-sm text-[#707070]">Average days on market for coastal properties</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-[#18457C]/20 hover:border-[#18457C] transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#18457C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-[#18457C]" />
                </div>
                <h3 className="text-lg font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                  High Activity
                </h3>
                <p className="text-2xl font-bold text-[#18457C] mb-2">591</p>
                <p className="text-sm text-[#707070]">Total sales volume this quarter</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Reports */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Available Market Reports
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Download our comprehensive market reports for detailed analysis and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  report.featured ? "border-2 border-[#229FD9]/20" : ""
                }`}
              >
                <CardContent className="p-6">
                  {report.featured && <Badge className="mb-4 bg-[#F16622] text-white">Featured Report</Badge>}

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                        {report.title}
                      </h3>
                      <div className="flex items-center text-sm text-[#707070] mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {report.date}
                      </div>
                      <Badge variant="outline" className="text-xs mb-3">
                        {report.type}
                      </Badge>
                    </div>
                    <Download className="h-6 w-6 text-[#229FD9]" />
                  </div>

                  <p className="text-[#707070] mb-4 text-sm leading-relaxed">{report.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-[#707070]">{report.pages}</span>
                    <span className="text-xs text-[#229FD9] font-semibold">FREE DOWNLOAD</span>
                  </div>

                  <Button className="w-full bg-[#229FD9] hover:bg-[#229FD9]/90 text-white">
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
      <section className="py-16 bg-[#18457C] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Stay Updated with Market Trends
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to receive our monthly market reports and exclusive insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-[#18457C] focus:outline-none focus:ring-2 focus:ring-[#229FD9]"
            />
            <Button className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-6 py-3">Subscribe</Button>
          </div>
          <p className="text-white/60 text-sm mt-4">No spam, unsubscribe at any time. Reports delivered monthly.</p>
        </div>
      </section>
    </div>
  )
}
