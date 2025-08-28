import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Hammer,
  Key,
  DollarSign,
  TrendingUp,
  Users,
  Home,
  Target,
  CheckCircle,
  X,
  MapPin,
  Calculator,
  Phone,
  Mail,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Investment Property Services - Northeast Florida | Conine Coastal",
  description:
    "Turn-key investment property solutions in Northeast Florida. From acquisition to sale, we manage every step of your rental property investment journey with 20 years of construction expertise.",
  keywords:
    "investment property, rental property, Northeast Florida, Jacksonville real estate investment, property management, construction expertise, ROI calculator",
}

export default function InvestmentServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/modern-renovated-rental-property-exterior-with-pro.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
            Turn-Key Investment Property Solutions in Northeast Florida
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto text-shadow-md">
            From acquisition to sale, we manage every step of your rental property investment journey
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-shadow-md opacity-90">
            Combine 20 years of construction expertise with professional real estate services for maximum ROI on your
            Northeast Florida investment properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Link href="/roi-calculator">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Your Investment ROI
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
            >
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Complete Investment Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach manages every phase of your investment property lifecycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phase 1: Acquisition */}
            <Card className="relative overflow-hidden border-t-4 border-t-blue-600">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <Badge variant="secondary" className="mb-2">
                  Phase 1: Month 1
                </Badge>
                <CardTitle className="text-xl">ACQUISITION</CardTitle>
                <CardDescription className="font-semibold text-blue-600">Property Analysis & Purchase</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">Market analysis, due diligence, negotiation, closing</p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Our fee:</strong> 2.5% commission
                  </p>
                  <p className="text-sm">
                    <strong>Timeline:</strong> 30-45 days
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2: Renovation */}
            <Card className="relative overflow-hidden border-t-4 border-t-orange-600">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="h-8 w-8 text-orange-600" />
                </div>
                <Badge variant="secondary" className="mb-2">
                  Phase 2: Months 2-4
                </Badge>
                <CardTitle className="text-xl">RENOVATION</CardTitle>
                <CardDescription className="font-semibold text-orange-600">Construction Management</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Permits, contractor coordination, quality control, timeline management
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Our fee:</strong> 12% of renovation costs
                  </p>
                  <p className="text-sm">
                    <strong>Timeline:</strong> 60-90 days
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Phase 3: Management */}
            <Card className="relative overflow-hidden border-t-4 border-t-green-600">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="h-8 w-8 text-green-600" />
                </div>
                <Badge variant="secondary" className="mb-2">
                  Phase 3: Years 1-6+
                </Badge>
                <CardTitle className="text-xl">MANAGEMENT</CardTitle>
                <CardDescription className="font-semibold text-green-600">Property Management</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Tenant placement, rent collection, maintenance, financial reporting
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Our fee:</strong> 8% of monthly rent
                  </p>
                  <p className="text-sm">
                    <strong>Timeline:</strong> Ongoing
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Phase 4: Exit Strategy */}
            <Card className="relative overflow-hidden border-t-4 border-t-purple-600">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <Badge variant="secondary" className="mb-2">
                  Phase 4: Year 5-7+
                </Badge>
                <CardTitle className="text-xl">EXIT STRATEGY</CardTitle>
                <CardDescription className="font-semibold text-purple-600">Property Sale</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">Market analysis, staging, marketing, negotiation, closing</p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Our fee:</strong> 2.5% commission
                  </p>
                  <p className="text-sm">
                    <strong>Timeline:</strong> 30-60 days
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Invest in Northeast Florida */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Northeast Florida: A Premier Investment Market
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong fundamentals make Northeast Florida an ideal location for rental property investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-600">15%</CardTitle>
                <CardDescription className="font-semibold">Population Growth</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Growth over 5 years with strong job market and economic development
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-600">{"<5%"}</CardTitle>
                <CardDescription className="font-semibold">Rental Demand</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Low vacancy rates with high demand from military and corporate relocations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-orange-600">3.5%</CardTitle>
                <CardDescription className="font-semibold">Property Appreciation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Average annual appreciation with coastal location and limited land supply
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-600">6-8%</CardTitle>
                <CardDescription className="font-semibold">Rental Yields</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Typical gross rental yields with strong cash flow potential</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Investment Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Conine Coastal Investment Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach delivers better results than working with multiple providers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Traditional Approach */}
            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-xl text-red-800 flex items-center">
                  <X className="mr-2 h-5 w-5" />
                  Traditional Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <X className="mr-2 h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Work with separate agents, contractors, property managers</span>
                  </li>
                  <li className="flex items-start">
                    <X className="mr-2 h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Communication gaps between service providers</span>
                  </li>
                  <li className="flex items-start">
                    <X className="mr-2 h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Unexpected renovation costs and delays</span>
                  </li>
                  <li className="flex items-start">
                    <X className="mr-2 h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Higher total fees across multiple providers</span>
                  </li>
                  <li className="flex items-start">
                    <X className="mr-2 h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Limited construction expertise in property evaluation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Our Integrated Approach */}
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-800 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Our Integrated Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Single point of contact for entire investment lifecycle</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Seamless communication and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Accurate renovation estimates from day one</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Competitive total fees with transparent pricing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">20 years construction expertise in property analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Property Criteria */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Properties We Target for Maximum ROI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our criteria ensure we identify properties with the highest investment potential
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Location Criteria */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                  Location Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Growing neighborhoods with strong rental demand</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Good school districts and low crime rates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Proximity to employment centers and military bases</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Access to beaches, downtown areas, and amenities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Property Criteria */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Home className="mr-2 h-5 w-5 text-orange-600" />
                  Property Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">$700K+ purchase price for optimal fee structure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Properties with 15-25% renovation potential</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Single-family and small multi-family properties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Properties with strong rental yield potential (6%+)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Market Criteria */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Target className="mr-2 h-5 w-5 text-purple-600" />
                  Market Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Below-market purchase opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Properties requiring cosmetic to moderate renovations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Areas with limited rental inventory</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">Properties with future appreciation potential</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Calculator Preview */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See Your Potential Returns</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our ROI calculator to estimate your investment returns
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Calculator Preview */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Calculator className="mr-2 h-5 w-5 text-blue-600" />
                  Investment Calculator Preview
                </CardTitle>
                <CardDescription>Adjust the purchase price to see potential returns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="purchase-price">Purchase Price Range</Label>
                  <div className="mt-2 text-center">
                    <span className="text-2xl font-bold text-blue-600">$850,000</span>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>$700K</span>
                    <span>$2M</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/roi-calculator">View Full Calculator</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Sample Calculation */}
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              <CardHeader>
                <CardTitle className="text-xl">$850K Property Investment Example</CardTitle>
                <CardDescription className="text-blue-100">Projected 6-year investment scenario</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-blue-100">Total Investment</p>
                    <p className="text-xl font-bold">$1,003,750</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Annual Cash Flow</p>
                    <p className="text-xl font-bold">$28,800</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">6-Year Profit</p>
                    <p className="text-xl font-bold">$275,500</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">Annualized Return</p>
                    <p className="text-xl font-bold">4.2%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Story Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Success Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our integrated investment approach
            </p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Before/After Images */}
              <div className="space-y-4 p-6">
                <div>
                  <h4 className="font-semibold mb-2">Before Renovation</h4>
                  <img
                    src="/dated-property-exterior-before-renovation.png"
                    alt="Property before renovation"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">After Renovation</h4>
                  <img
                    src="/modern-renovated-property-exterior-after-renovatio.png"
                    alt="Property after renovation"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Success Metrics */}
              <div className="p-6 bg-gray-50">
                <h3 className="text-2xl font-bold mb-6">Jacksonville Investment Success</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Purchase Price</p>
                    <p className="text-lg font-bold">$775,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Renovation Investment</p>
                    <p className="text-lg font-bold">$95,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Monthly Rent</p>
                    <p className="text-lg font-bold">$5,800</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Sale Price (5 years)</p>
                    <p className="text-lg font-bold">$975,000</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600">Client Total Profit</p>
                  <p className="text-3xl font-bold text-green-600">$248,000</p>
                  <p className="text-lg font-semibold">28.5% ROI over 5 years</p>
                </div>

                <blockquote className="italic text-gray-700 border-l-4 border-blue-600 pl-4">
                  "Conine Coastal's construction expertise helped us avoid a property with foundation issues and find
                  this gem instead. Their management kept it profitable from day one."
                </blockquote>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Investment Services Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Investment Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-service investment management from acquisition to exit
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service 1: Investment Property Acquisition */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Investment Property Acquisition</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">Fee: 2.5% of purchase price</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Market analysis and property identification</li>
                  <li>• Due diligence and inspection coordination</li>
                  <li>• Negotiation and closing assistance</li>
                  <li>• Investment potential assessment</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 2: Construction Management */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Hammer className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Construction Management</CardTitle>
                <CardDescription className="text-orange-600 font-semibold">
                  Fee: 12% of renovation costs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Renovation planning and budgeting</li>
                  <li>• Contractor selection and management</li>
                  <li>• Permit acquisition and inspections</li>
                  <li>• Timeline and quality control</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 3: Property Management */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Property Management</CardTitle>
                <CardDescription className="text-green-600 font-semibold">Fee: 8% of monthly rent</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Tenant screening and placement</li>
                  <li>• Rent collection and financial reporting</li>
                  <li>• Maintenance coordination</li>
                  <li>• Property inspections and upkeep</li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 4: Investment Property Sales */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Investment Property Sales</CardTitle>
                <CardDescription className="text-purple-600 font-semibold">Fee: 2.5% of sale price</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Market timing and exit strategy</li>
                  <li>• Professional staging and marketing</li>
                  <li>• Negotiation and closing assistance</li>
                  <li>• 1031 exchange coordination</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Areas Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Northeast Florida Investment Markets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each market offers unique investment opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Jacksonville Metro",
              "St. Augustine",
              "Ponte Vedra Beach",
              "Fernandina Beach",
              "Orange Park",
              "Fleming Island",
            ].map((area) => (
              <Card key={area} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              <strong>Note:</strong> Each market offers unique investment opportunities. Contact us for area-specific
              analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Your Investment Journey Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to begin building your rental property portfolio
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <CardTitle className="text-xl">Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Discuss your investment goals and get market insights from our experienced team
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <CardTitle className="text-xl">Property Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We identify and analyze potential investment opportunities that match your criteria
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <CardTitle className="text-xl">Full-Service Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From purchase to sale, we handle everything while you collect rent checks
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Start Investing?</h2>
            <p className="text-xl text-gray-600">
              Tell us about your investment goals and we'll get back to you within 24 hours
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Investment Inquiry Form</CardTitle>
              <CardDescription className="text-center">
                Complete this form to receive a personalized investment consultation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Investment Budget Range</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="700k-900k">$700K - $900K</SelectItem>
                        <SelectItem value="900k-1.2m">$900K - $1.2M</SelectItem>
                        <SelectItem value="1.2m-1.5m">$1.2M - $1.5M</SelectItem>
                        <SelectItem value="1.5m+">$1.5M+</SelectItem>
                        <SelectItem value="determining">Still determining</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Investment Timeline</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ready-now">Ready now</SelectItem>
                        <SelectItem value="3-months">Within 3 months</SelectItem>
                        <SelectItem value="6-months">Within 6 months</SelectItem>
                        <SelectItem value="1-year">Within 1 year</SelectItem>
                        <SelectItem value="researching">Just researching</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Investment Experience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="first-time">First-time investor</SelectItem>
                      <SelectItem value="2-5-properties">2-5 properties</SelectItem>
                      <SelectItem value="6-plus">6+ properties</SelectItem>
                      <SelectItem value="experienced">Experienced investor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Preferred Areas (check all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Jacksonville",
                      "St. Augustine",
                      "Ponte Vedra",
                      "Fernandina Beach",
                      "Orange Park",
                      "Open to suggestions",
                    ].map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <Checkbox id={area.toLowerCase().replace(/\s+/g, "-")} />
                        <Label htmlFor={area.toLowerCase().replace(/\s+/g, "-")} className="text-sm">
                          {area}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Investment Goals (check all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {["Cash flow", "Appreciation", "Tax benefits", "Portfolio diversification"].map((goal) => (
                      <div key={goal} className="flex items-center space-x-2">
                        <Checkbox id={goal.toLowerCase().replace(/\s+/g, "-")} />
                        <Label htmlFor={goal.toLowerCase().replace(/\s+/g, "-")} className="text-sm">
                          {goal}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="referral">How did you hear about us?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google search</SelectItem>
                      <SelectItem value="referral">Referral from friend/family</SelectItem>
                      <SelectItem value="social-media">Social media</SelectItem>
                      <SelectItem value="real-estate-site">Real estate website</SelectItem>
                      <SelectItem value="advertisement">Advertisement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea
                    id="comments"
                    placeholder="Tell us more about your investment goals, specific questions, or any other details..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Submit Investment Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Investment Portfolio?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our 20 years of construction and real estate expertise work for your investment success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link href="/roi-calculator">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Your ROI
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
