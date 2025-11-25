"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Home, DollarSign, Calendar, Download, Phone, BarChart3 } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import { font } from "@/styles/fonts"

export default function MarketUpdatesClientPage() {
  const currentStats = {
    averagePrice: "$425,000",
    priceChange: "+8.2%",
    daysOnMarket: "28 days",
    marketChange: "-5 days",
    inventory: "2.1 months",
    inventoryChange: "-0.3 months",
    salesVolume: "1,247 homes",
    volumeChange: "+12.4%",
  }

  const monthlyReports = [
    {
      month: "December 2024",
      title: "Year-End Market Summary",
      highlights: [
        "Strong finish to 2024 with continued buyer activity",
        "Inventory levels stabilizing in most price ranges",
        "Interest rate fluctuations creating buying opportunities",
        "Luxury coastal properties showing resilience",
      ],
      keyStats: {
        medianPrice: "$425,000",
        salesVolume: "1,247",
        daysOnMarket: "28",
        priceChange: "+8.2%",
      },
      downloadUrl: "/reports/december-2024-market-report.pdf",
    },
    {
      month: "November 2024",
      title: "Pre-Holiday Market Activity",
      highlights: [
        "Seasonal slowdown less pronounced than typical years",
        "First-time buyers taking advantage of rate dips",
        "Renovation projects increasing home values significantly",
        "Coastal properties maintaining premium pricing",
      ],
      keyStats: {
        medianPrice: "$418,000",
        salesVolume: "1,156",
        daysOnMarket: "32",
        priceChange: "+6.8%",
      },
      downloadUrl: "/reports/november-2024-market-report.pdf",
    },
    {
      month: "October 2024",
      title: "Fall Market Momentum",
      highlights: [
        "Increased buyer activity following rate stabilization",
        "Inventory improvements in starter home segment",
        "Hurricane recovery driving renovation demand",
        "Investment property interest remains strong",
      ],
      keyStats: {
        medianPrice: "$412,000",
        salesVolume: "1,289",
        daysOnMarket: "35",
        priceChange: "+5.4%",
      },
      downloadUrl: "/reports/october-2024-market-report.pdf",
    },
  ]

  const neighborhoodSpotlights = [
    {
      area: "St. Augustine Historic District",
      medianPrice: "$485,000",
      priceChange: "+12.3%",
      daysOnMarket: "22 days",
      highlights: [
        "Historic charm driving premium pricing",
        "Renovation projects adding significant value",
        "Tourist rental potential boosting investor interest",
        "Limited inventory creating competitive market",
      ],
      investmentOutlook: "Strong - Historic properties with renovation potential showing excellent returns",
    },
    {
      area: "Amelia Island",
      medianPrice: "$675,000",
      priceChange: "+9.8%",
      daysOnMarket: "31 days",
      highlights: [
        "Luxury coastal market remains resilient",
        "New construction commanding premium prices",
        "Resort-style amenities in high demand",
        "Second home buyers driving activity",
      ],
      investmentOutlook: "Excellent - Premium coastal location with strong appreciation potential",
    },
    {
      area: "Jacksonville Beach",
      medianPrice: "$395,000",
      priceChange: "+7.1%",
      daysOnMarket: "26 days",
      highlights: [
        "Condo market showing strong recovery",
        "Beach proximity driving consistent demand",
        "Renovation opportunities in older properties",
        "Young professional buyer segment active",
      ],
      investmentOutlook: "Good - Affordable beach access with steady appreciation",
    },
    {
      area: "Ponte Vedra Beach",
      medianPrice: "$825,000",
      priceChange: "+11.5%",
      daysOnMarket: "35 days",
      highlights: [
        "Golf course communities in high demand",
        "Luxury home market showing strength",
        "New construction selling quickly",
        "Premium school districts attracting families",
      ],
      investmentOutlook: "Excellent - High-end market with strong fundamentals",
    },
  ]

  const marketTrends = [
    {
      trend: "Interest Rate Impact",
      description: "Rate fluctuations creating buying opportunities for prepared buyers",
      impact: "Moderate",
      timeframe: "Ongoing",
    },
    {
      trend: "Inventory Recovery",
      description: "Gradual increase in available homes, especially in mid-range pricing",
      impact: "Positive",
      timeframe: "6-12 months",
    },
    {
      trend: "Renovation Demand",
      description: "Homeowners investing in improvements rather than moving",
      impact: "High",
      timeframe: "12+ months",
    },
    {
      trend: "Coastal Premium",
      description: "Waterfront and water-view properties maintaining price premiums",
      impact: "High",
      timeframe: "Long-term",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#18457C] to-[#229FD9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`${font.variable} font-serif text-4xl md:text-6xl font-bold text-white mb-6`}>
            First Coast Market Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Comprehensive market analysis and trends for Northeast Florida real estate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Download Latest Report
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#18457C] px-8 py-3 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Market Analysis
            </Button>
          </div>
        </div>
      </section>

      {/* Placeholder for graphs / charts */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-[#229FD9]">Monthly Snapshot – July 2025</h2>
        <p>
          Median sale price on Amelia Island rose 3.2 % month-over-month while days-on-market ticked down to 28 days…
        </p>
        {/* In production, embed chart components or images */}
      </section>

      {/* Current Market Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Current Market Snapshot
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Key metrics for the First Coast real estate market as of December 2024.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#229FD9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-[#229FD9]" />
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-2">{currentStats.averagePrice}</h3>
                <p className="text-[#707070] mb-2">Median Home Price</p>
                <div className="flex items-center justify-center space-x-1">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-semibold">{currentStats.priceChange}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#F16622]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-[#F16622]" />
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-2">{currentStats.daysOnMarket}</h3>
                <p className="text-[#707070] mb-2">Average Days on Market</p>
                <div className="flex items-center justify-center space-x-1">
                  <TrendingDown className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-semibold">{currentStats.marketChange}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#FFCA05]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-[#FFCA05]" />
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-2">{currentStats.inventory}</h3>
                <p className="text-[#707070] mb-2">Months of Inventory</p>
                <div className="flex items-center justify-center space-x-1">
                  <TrendingDown className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-semibold">{currentStats.inventoryChange}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#18457C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-[#18457C]" />
                </div>
                <h3 className="text-2xl font-bold text-[#18457C] mb-2">{currentStats.salesVolume}</h3>
                <p className="text-[#707070] mb-2">Homes Sold (Last 30 Days)</p>
                <div className="flex items-center justify-center space-x-1">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-semibold">{currentStats.volumeChange}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Monthly Market Reports
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Detailed analysis of market trends, pricing, and activity levels.
            </p>
          </div>

          <div className="space-y-8">
            {monthlyReports.map((report, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge className="bg-[#229FD9] text-white">{report.month}</Badge>
                        <h3 className="text-2xl font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
                          {report.title}
                        </h3>
                      </div>

                      <div className="space-y-3 mb-6">
                        {report.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#229FD9] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-[#707070]">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="bg-[#F16622] hover:bg-[#F16622]/90 text-white">
                        <Download className="mr-2 h-4 w-4" />
                        Download Full Report
                      </Button>
                    </div>

                    <div className="lg:w-1/3">
                      <div className="bg-[#18457C]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#18457C] mb-4">Key Statistics</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-[#707070]">Median Price:</span>
                            <span className="font-semibold text-[#18457C]">{report.keyStats.medianPrice}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#707070]">Sales Volume:</span>
                            <span className="font-semibold text-[#18457C]">{report.keyStats.salesVolume}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#707070]">Days on Market:</span>
                            <span className="font-semibold text-[#18457C]">{report.keyStats.daysOnMarket}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#707070]">Price Change:</span>
                            <span className="font-semibold text-green-600">{report.keyStats.priceChange}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Spotlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Neighborhood Spotlights
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Detailed analysis of key First Coast markets and investment opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {neighborhoodSpotlights.map((neighborhood, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
                      {neighborhood.area}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#229FD9]">{neighborhood.medianPrice}</div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-green-500 font-semibold">{neighborhood.priceChange}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-[#707070]" />
                        <span className="text-[#707070]">{neighborhood.daysOnMarket}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {neighborhood.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#229FD9] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-[#707070] text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#229FD9]/5 rounded-lg p-4">
                    <h4 className="font-semibold text-[#18457C] mb-2">Investment Outlook:</h4>
                    <p className="text-[#707070] text-sm">{neighborhood.investmentOutlook}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Key Market Trends
            </h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Important trends shaping the First Coast real estate market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {marketTrends.map((trend, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#18457C]" style={{ fontFamily: "serif" }}>
                      {trend.trend}
                    </h3>
                    <Badge
                      className={`${
                        trend.impact === "High"
                          ? "bg-[#F16622]"
                          : trend.impact === "Positive"
                            ? "bg-green-500"
                            : "bg-[#229FD9]"
                      } text-white`}
                    >
                      {trend.impact}
                    </Badge>
                  </div>
                  <p className="text-[#707070] mb-4">{trend.description}</p>
                  <div className="flex items-center space-x-2 text-sm text-[#707070]">
                    <Calendar className="h-4 w-4" />
                    <span>Timeline: {trend.timeframe}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#18457C] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Want Personalized Market Analysis?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get detailed market analysis for your specific area or property type, backed by construction expertise and
            local market knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Request Market Analysis
              </Button>
            </Link>
            <Link href="/real-estate">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#18457C] px-8 py-3 bg-transparent"
              >
                View Real Estate Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="text-center">
        <Button asChild>
          <Link href="/contact">Request Personalized Analysis</Link>
        </Button>
      </div>
    </div>
  )
}
