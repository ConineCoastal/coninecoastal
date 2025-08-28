import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  BarChart3,
  Building2,
  Calculator,
  Baseline as ChartLine,
  CheckCircle,
  Handshake,
  Wrench,
  X,
  Star,
  PieChart,
  FileText,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Investment Portfolio Management - Northeast Florida | Conine Coastal",
  description:
    "Comprehensive multi-property investment portfolio management services in Northeast Florida. Maximize your real estate portfolio performance with our integrated approach.",
  keywords:
    "portfolio management, investment properties, Northeast Florida, real estate portfolio, property management, Jacksonville investments",
}

export default function PortfolioManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/aerial-view-of-multiple-well-maintained-rental-pro.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
            Multi-Property Investment Portfolio Management
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-shadow-md">
            Streamline your real estate portfolio with comprehensive management services designed for serious investors
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-shadow-md">
            Whether you own 3 properties or 30, our integrated approach combines construction expertise, real estate
            knowledge, and professional property management to maximize your portfolio's performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Get Portfolio Analysis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
            >
              Schedule Strategy Session
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Portfolio Management Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Portfolio Strategy & Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Strategic acquisition planning</li>
                  <li>• Market diversification analysis</li>
                  <li>• Portfolio optimization recommendations</li>
                  <li>• Long-term wealth building strategies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Multi-Property Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Centralized management across all properties</li>
                  <li>• Unified financial reporting and analytics</li>
                  <li>• Streamlined tenant management systems</li>
                  <li>• Coordinated maintenance scheduling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ChartLine className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Monthly portfolio performance reports</li>
                  <li>• ROI tracking across all properties</li>
                  <li>• Market comparison analysis</li>
                  <li>• Cash flow optimization insights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Renovation Project Coordination</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Portfolio-wide renovation planning</li>
                  <li>• Bulk contractor negotiations</li>
                  <li>• Simultaneous project management</li>
                  <li>• Capital improvement scheduling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Handshake className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Acquisition & Disposition</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• New property identification and analysis</li>
                  <li>• 1031 exchange coordination</li>
                  <li>• Strategic portfolio expansion</li>
                  <li>• Exit timing optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calculator className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Tax Strategy Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Depreciation schedule coordination</li>
                  <li>• 1099 preparation and distribution</li>
                  <li>• Tax-efficient renovation timing</li>
                  <li>• Professional referral network</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Size Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tailored Services for Every Portfolio Size</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="w-fit mx-auto mb-4">
                  Starter Portfolio
                </Badge>
                <CardTitle className="text-2xl">3-8 Properties</CardTitle>
                <CardDescription className="text-lg font-semibold text-blue-600">
                  8% of collected rent per property
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Individual property management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Quarterly portfolio reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Basic performance analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Maintenance coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Annual strategy review</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-600 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <Badge variant="secondary" className="w-fit mx-auto mb-4">
                  Growth Portfolio
                </Badge>
                <CardTitle className="text-2xl">9-20 Properties</CardTitle>
                <CardDescription className="text-lg font-semibold text-blue-600">
                  7% of collected rent per property
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Everything in Starter plus:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Advanced portfolio analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Dedicated portfolio manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Priority contractor network</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Bulk purchasing discounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Semi-annual strategy sessions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="w-fit mx-auto mb-4">
                  Enterprise Portfolio
                </Badge>
                <CardTitle className="text-2xl">21+ Properties</CardTitle>
                <CardDescription className="text-lg font-semibold text-blue-600">
                  Custom pricing (typically 6-7%)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Everything in Growth plus:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Custom reporting dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Dedicated account team</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>White-glove acquisition services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Institutional-level analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Quarterly board-level reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Optimization Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio Optimization Process</h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">COMPREHENSIVE AUDIT</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Complete property assessment</li>
                <li>• Financial performance analysis</li>
                <li>• Market position evaluation</li>
                <li>• Maintenance needs assessment</li>
              </ul>
              <p className="text-sm font-semibold text-blue-600 mt-3">Timeline: 30 days</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">STRATEGY DEVELOPMENT</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Portfolio optimization plan</li>
                <li>• Renovation priority matrix</li>
                <li>• Acquisition/disposition recommendations</li>
                <li>• Performance benchmarking</li>
              </ul>
              <p className="text-sm font-semibold text-blue-600 mt-3">Timeline: 2 weeks</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">IMPLEMENTATION</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Execute improvement strategies</li>
                <li>• Coordinate renovations and upgrades</li>
                <li>• Optimize rental rates and tenant mix</li>
                <li>• Implement systems and processes</li>
              </ul>
              <p className="text-sm font-semibold text-blue-600 mt-3">Timeline: 90-180 days</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">ACTIVE MANAGEMENT</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ongoing property management</li>
                <li>• Performance monitoring</li>
                <li>• Market adjustment strategies</li>
                <li>• Proactive maintenance programs</li>
              </ul>
              <p className="text-sm font-semibold text-blue-600 mt-3">Timeline: Ongoing</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-xl font-semibold mb-3">STRATEGIC REVIEW</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Quarterly performance analysis</li>
                <li>• Market trend assessment</li>
                <li>• Portfolio rebalancing recommendations</li>
                <li>• Growth opportunity identification</li>
              </ul>
              <p className="text-sm font-semibold text-blue-600 mt-3">Timeline: Quarterly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Conine Coastal for Portfolio Management
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-6">Our Unique Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <span>Construction expertise across entire portfolio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <span>Integrated real estate and property management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <span>Local Northeast Florida market specialization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <span>Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <span>Technology-driven reporting and analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <span>Proactive rather than reactive management</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-red-600 mb-6">Traditional Property Managers</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="h-6 w-6 text-red-600 mt-0.5" />
                  <span>Limited construction knowledge</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-6 w-6 text-red-600 mt-0.5" />
                  <span>Separate providers for different services</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-6 w-6 text-red-600 mt-0.5" />
                  <span>Generic management approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-6 w-6 text-red-600 mt-0.5" />
                  <span>Hidden fees and markups</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-6 w-6 text-red-600 mt-0.5" />
                  <span>Basic reporting capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="h-6 w-6 text-red-600 mt-0.5" />
                  <span>Reactive maintenance approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Performance Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Track Your Portfolio's Success</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl mb-4">Performance Indicators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Portfolio Value:</span>
                  <span className="font-semibold text-lg">$X.X Million</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly Gross Income:</span>
                  <span className="font-semibold text-lg">$XX,XXX</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Occupancy Rate:</span>
                  <span className="font-semibold text-lg">XX%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Portfolio ROI:</span>
                  <span className="font-semibold text-lg text-green-600">XX.X%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cash-on-Cash Return:</span>
                  <span className="font-semibold text-lg text-green-600">XX.X%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Appreciation Rate:</span>
                  <span className="font-semibold text-lg text-green-600">XX.X%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl mb-4">Property Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Number of Properties:</span>
                  <span className="font-semibold text-lg">XX</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Units:</span>
                  <span className="font-semibold text-lg">XX</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Rent per Unit:</span>
                  <span className="font-semibold text-lg">$X,XXX</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Properties Under Renovation:</span>
                  <span className="font-semibold text-lg">X</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Properties for Sale:</span>
                  <span className="font-semibold text-lg">X</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="overflow-hidden">
            <CardHeader className="bg-blue-600 text-white text-center">
              <CardTitle className="text-2xl">Local Investor's 12-Property Portfolio</CardTitle>
              <CardDescription className="text-blue-100">Portfolio Success Story</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4">Portfolio Overview</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Started: 2019 with 3 properties</li>
                    <li>• Current: 12 properties worth $8.2M</li>
                    <li>• Monthly Income: $54,000</li>
                    <li>• Portfolio ROI: 18.5% since inception</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4">Key Improvements Achieved</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Increased average rent by 22%</li>
                    <li>• Reduced vacancy rate to under 3%</li>
                    <li>• Completed strategic renovations on 8 properties</li>
                    <li>• Added 9 properties through strategic acquisitions</li>
                  </ul>
                </div>
              </div>
              <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700">
                "Conine Coastal transformed my scattered property investments into a cohesive, profitable portfolio.
                Their construction expertise has saved me hundreds of thousands in renovation costs."
              </blockquote>
              <div className="flex items-center gap-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-600 ml-2">Portfolio Client Since 2019</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology & Reporting */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Portfolio Management Technology</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-6">
              <CardHeader>
                <PieChart className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Owner Portal Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Real-time financial dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Property performance analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Maintenance request tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Document storage and access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Tenant communication logs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Monthly/quarterly report downloads</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Reporting Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Individual property P&L statements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Portfolio-wide performance summaries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Market comparison analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Maintenance cost tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Tenant turnover analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Tax preparation support documents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Optimize Your Portfolio Performance?</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle>Portfolio Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Free evaluation of your current portfolio performance and optimization opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle>Strategy Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Custom management plan tailored to your portfolio size and investment goals
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle>Implementation & Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Full-service management with ongoing optimization and strategic guidance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Portfolio Analysis</h2>
            <p className="text-xl text-gray-600">
              Tell us about your portfolio and we'll provide a customized management strategy
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="property-count">Current Number of Properties</Label>
                  <Select name="property-count">
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3-5">3-5</SelectItem>
                      <SelectItem value="6-10">6-10</SelectItem>
                      <SelectItem value="11-20">11-20</SelectItem>
                      <SelectItem value="21+">21+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="portfolio-value">Total Portfolio Value</Label>
                  <Select name="portfolio-value">
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-2m">Under $2M</SelectItem>
                      <SelectItem value="2m-5m">$2M-$5M</SelectItem>
                      <SelectItem value="5m-10m">$5M-$10M</SelectItem>
                      <SelectItem value="10m+">$10M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-base font-medium">Properties Located in (check all that apply)</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {["Jacksonville", "St. Augustine", "Ponte Vedra", "Other Northeast FL"].map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <Checkbox id={area} name="locations" value={area} />
                      <Label htmlFor={area}>{area}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="management-status">Current Management Status</Label>
                <Select name="management-status">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="self-managed">Self-managed</SelectItem>
                    <SelectItem value="different-manager">Different property manager</SelectItem>
                    <SelectItem value="mix">Mix of both</SelectItem>
                    <SelectItem value="vacant">Vacant properties</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium">Primary Portfolio Goals (check all that apply)</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {[
                    "Increase cash flow",
                    "Reduce management time",
                    "Portfolio expansion",
                    "Optimization",
                    "Exit planning",
                  ].map((goal) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <Checkbox id={goal} name="goals" value={goal} />
                      <Label htmlFor={goal}>{goal}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium">Biggest Portfolio Challenges (check all that apply)</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {[
                    "Vacancy issues",
                    "Maintenance costs",
                    "Tenant problems",
                    "Financial tracking",
                    "Market timing",
                  ].map((challenge) => (
                    <div key={challenge} className="flex items-center space-x-2">
                      <Checkbox id={challenge} name="challenges" value={challenge} />
                      <Label htmlFor={challenge}>{challenge}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium">Preferred Contact Method</Label>
                <RadioGroup name="contact-method" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone-contact" />
                    <Label htmlFor="phone-contact">Phone</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-contact" />
                    <Label htmlFor="email-contact">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="text" id="text-contact" />
                    <Label htmlFor="text-contact">Text</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="best-time">Best Time to Contact</Label>
                <Select name="best-time">
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8AM-12PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem>
                    <SelectItem value="evening">Evening (5PM-8PM)</SelectItem>
                    <SelectItem value="anytime">Anytime</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="comments">Additional Details</Label>
                <Textarea
                  id="comments"
                  name="comments"
                  placeholder="Tell us more about your portfolio and specific needs..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                Get My Portfolio Analysis
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  )
}
