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
  TrendingUp,
  DollarSign,
  HardHat,
  BarChart3,
  Clock,
  Shield,
  CheckCircle,
  XCircle,
  ArrowRight,
  Download,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Investment Property Analysis - Northeast Florida | Conine Coastal",
  description:
    "Expert property analysis for smart investment decisions. Comprehensive analysis backed by 20 years of construction expertise in Northeast Florida.",
}

export default function PropertyAnalysisPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/professional-analyzing-property-with-tablet-and-do.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Property Analysis for Smart Investment Decisions
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-slate-200 leading-relaxed">
              Make informed investment choices with comprehensive property analysis backed by 20 years of construction
              expertise
            </p>
            <p className="text-lg mb-8 text-slate-300 leading-relaxed max-w-3xl">
              Our dual expertise in real estate and construction gives you the complete picture - from market value and
              rental potential to hidden renovation costs and structural issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Request Property Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                See Sample Analysis Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Property Investment Analysis
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Six critical analysis components that give you the complete investment picture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Market Value Assessment",
                items: [
                  "Current market value analysis",
                  "Comparative market analysis (CMA)",
                  "Future appreciation projections",
                  "Neighborhood trend evaluation",
                ],
              },
              {
                icon: DollarSign,
                title: "Rental Income Analysis",
                items: [
                  "Rental rate assessment",
                  "Market rent comparisons",
                  "Occupancy rate projections",
                  "Rental yield calculations",
                ],
              },
              {
                icon: HardHat,
                title: "Construction Cost Evaluation",
                items: [
                  "Detailed renovation cost estimates",
                  "Structural assessment",
                  "Systems evaluation (HVAC, plumbing, electrical)",
                  "Code compliance review",
                ],
              },
              {
                icon: BarChart3,
                title: "Investment ROI Projections",
                items: [
                  "Cash flow projections",
                  "Return on investment calculations",
                  "Payback period analysis",
                  "Risk-adjusted returns",
                ],
              },
              {
                icon: Clock,
                title: "Market Timing Analysis",
                items: [
                  "Buy/hold/sell timing recommendations",
                  "Market cycle positioning",
                  "Seasonal factors consideration",
                  "Economic indicator assessment",
                ],
              },
              {
                icon: Shield,
                title: "Risk Assessment",
                items: [
                  "Property-specific risks",
                  "Market risk evaluation",
                  "Structural/maintenance risks",
                  "Financial risk analysis",
                ],
              },
            ].map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Comprehensive Analysis Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A systematic 7-day process that delivers actionable investment insights
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "INITIAL EVALUATION",
                timeline: "Day 1",
                description: "Property address and basic information review",
                details: [
                  "Preliminary market research",
                  "Initial feasibility assessment",
                  "Analysis scope determination",
                  "Timeline: Same day",
                ],
              },
              {
                step: 2,
                title: "MARKET RESEARCH",
                timeline: "Days 2-3",
                description: "Comprehensive market analysis",
                details: [
                  "Comparable sales analysis",
                  "Rental market assessment",
                  "Neighborhood analysis",
                  "Economic indicators review",
                ],
              },
              {
                step: 3,
                title: "PROPERTY INSPECTION",
                timeline: "Days 3-5",
                description: "Detailed property evaluation",
                details: [
                  "Comprehensive property walkthrough",
                  "Structural assessment",
                  "Systems evaluation",
                  "Renovation needs identification",
                ],
              },
              {
                step: 4,
                title: "FINANCIAL MODELING",
                timeline: "Days 5-7",
                description: "Investment projections and analysis",
                details: ["Cash flow projections", "ROI calculations", "Scenario analysis", "Risk assessment"],
              },
              {
                step: 5,
                title: "REPORT DELIVERY",
                timeline: "Day 7",
                description: "Comprehensive analysis delivery",
                details: [
                  "Comprehensive written report",
                  "Executive summary with recommendations",
                  "Supporting documentation",
                  "Presentation meeting if requested",
                ],
              },
            ].map((phase, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  {phase.step}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold text-slate-900 mr-4">{phase.title}</h3>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {phase.timeline}
                    </Badge>
                  </div>
                  <p className="text-lg text-slate-700 mb-3">{phase.description}</p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {phase.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Expertise Advantage */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Our Construction Background Matters
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The difference between surface-level analysis and deep construction expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center">
                  <XCircle className="mr-2 h-5 w-5" />
                  Traditional Real Estate Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Surface-level property assessment",
                    "Generic renovation cost estimates",
                    "Limited structural knowledge",
                    "Reliance on third-party inspectors",
                    "Potential for costly surprises",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-red-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Our Construction-Informed Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Deep structural and systems understanding",
                    "Accurate renovation cost projections",
                    "Identification of hidden issues",
                    "Value engineering opportunities",
                    "Realistic timeline assessments",
                    "Quality contractor network recommendations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-green-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Analysis Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real Analysis Examples</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how our analysis has guided actual investment decisions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Hidden Gem",
                property: "4BR/2BA Single Family, Riverside",
                price: "$695,000",
                recommendation: "STRONG BUY",
                recommendationColor: "bg-green-100 text-green-800",
                metrics: [
                  { label: "Market Value", value: "$720,000 (4% equity gain)" },
                  { label: "Renovation Needs", value: "$65,000" },
                  { label: "Projected Monthly Rent", value: "$4,800" },
                  { label: "5-Year ROI", value: "32%" },
                ],
                insight: "Foundation issues appeared minor but required $15K fix - we identified this upfront",
              },
              {
                title: "The Value Trap",
                property: "3BR/2BA Condo, Atlantic Beach",
                price: "$485,000",
                recommendation: "PASS",
                recommendationColor: "bg-red-100 text-red-800",
                metrics: [
                  { label: "Market Value", value: "$465,000 (overpriced)" },
                  { label: "Major Issues", value: "HVAC system failure ($12K)" },
                  { label: "HOA Special Assessment", value: "$8,500 pending" },
                  { label: "Projected ROI", value: "Negative 2%" },
                ],
                insight: "Saved client from a costly mistake with thorough due diligence",
              },
              {
                title: "The Cash Cow",
                property: "Duplex, Springfield",
                price: "$425,000",
                recommendation: "IMMEDIATE PURCHASE",
                recommendationColor: "bg-blue-100 text-blue-800",
                metrics: [
                  { label: "Both units", value: "rent-ready" },
                  { label: "Monthly Income", value: "$3,400" },
                  { label: "Minor cosmetic needs", value: "$8,500" },
                  { label: "5-Year ROI", value: "28%" },
                ],
                insight: "Fast-moving market required same-day analysis and offer",
              },
            ].map((study, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <Badge className={study.recommendationColor}>{study.recommendation}</Badge>
                  </div>
                  <CardDescription className="text-base">{study.property}</CardDescription>
                  <p className="text-2xl font-bold text-slate-900">Purchase Price: {study.price}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex justify-between">
                        <span className="text-slate-600">{metric.label}:</span>
                        <span className="font-semibold">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-slate-700 mb-1">Key Insight:</p>
                    <p className="text-sm text-slate-600 italic">"{study.insight}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transparent Analysis Pricing</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the analysis level that fits your investment timeline and needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: "BASIC ANALYSIS",
                price: "$500",
                turnaround: "3-day turnaround",
                bestFor: "Quick decisions, experienced investors",
                features: [
                  "Market value assessment",
                  "Rental income projections",
                  "Basic renovation estimates",
                  "ROI calculations",
                ],
              },
              {
                name: "COMPREHENSIVE ANALYSIS",
                price: "$1,200",
                turnaround: "7-day turnaround",
                bestFor: "Major investment decisions",
                popular: true,
                features: [
                  "Everything in Basic plus:",
                  "Detailed property inspection",
                  "Construction cost breakdown",
                  "10-year financial modeling",
                  "Risk assessment",
                  "Market timing analysis",
                ],
              },
              {
                name: "PORTFOLIO ANALYSIS",
                price: "Custom Pricing",
                turnaround: "Priority scheduling",
                bestFor: "Serious investors, 1031 exchanges",
                features: [
                  "Multiple property evaluation",
                  "Comparative investment ranking",
                  "Portfolio optimization recommendations",
                  "Bulk pricing discounts",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={`h-full ${plan.popular ? "border-blue-500 shadow-lg" : ""}`}>
                <CardHeader>
                  {plan.popular && <Badge className="w-fit mb-2 bg-blue-600">Most Popular</Badge>}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">{plan.price}</div>
                  <p className="text-slate-600">{plan.turnaround}</p>
                  <p className="text-sm text-slate-500">Best for: {plan.bestFor}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                    Choose {plan.name.split(" ")[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-600 bg-blue-50 p-4 rounded-lg inline-block">
              <strong>Note:</strong> Analysis fee credited toward our commission if you purchase through Conine Coastal
            </p>
          </div>
        </div>
      </section>

      {/* Rush Analysis Option */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-8">
            <Zap className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Need Results Fast?</h2>
            <p className="text-xl mb-6 opacity-90">Expedited analysis services for competitive situations</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">48-Hour Rush Analysis</h3>
                <p className="text-2xl font-bold mb-2">Additional $300</p>
                <p className="opacity-90">Includes verbal briefing plus written report</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Same-Day Preliminary</h3>
                <p className="text-2xl font-bold mb-2">Additional $500</p>
                <p className="opacity-90">Perfect for hot markets and bidding situations</p>
              </div>
            </div>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-slate-100">
              Request Rush Analysis
            </Button>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get Your Property Analysis Started Today
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple 3-step process to get expert investment analysis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: 1,
                title: "Submit Property Details",
                description: "Provide property address and basic information through our online form",
              },
              {
                step: 2,
                title: "Choose Analysis Level",
                description: "Select the analysis package that fits your investment timeline and needs",
              },
              {
                step: 3,
                title: "Receive Expert Analysis",
                description: "Get comprehensive analysis with clear buy/pass/negotiate recommendation",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Analysis Request Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Request Your Property Analysis</h2>
            <p className="text-xl text-slate-600">Get started with expert investment analysis today</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  <div>
                    <Label htmlFor="budget">Purchase Price/Budget</Label>
                    <Input id="budget" placeholder="$500,000" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Property Address *</Label>
                  <Input id="address" required placeholder="123 Main St, Jacksonville, FL 32202" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="property-type">Property Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-family">Single Family</SelectItem>
                        <SelectItem value="duplex">Duplex</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="multi-family">Multi-family</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard 7 days</SelectItem>
                        <SelectItem value="rush">Rush 48 hours (+$300)</SelectItem>
                        <SelectItem value="same-day">Same day (+$500)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Analysis Type Needed</Label>
                  <RadioGroup defaultValue="comprehensive" className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="basic" id="basic" />
                      <Label htmlFor="basic">Basic Analysis - $500</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comprehensive" id="comprehensive" />
                      <Label htmlFor="comprehensive">Comprehensive Analysis - $1,200</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom">Custom Quote</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="status">Current Property Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="for-sale">For sale</SelectItem>
                        <SelectItem value="under-contract">Under contract</SelectItem>
                        <SelectItem value="off-market">Off market</SelectItem>
                        <SelectItem value="researching">Just researching</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Your Investment Experience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first-time">First-time buyer</SelectItem>
                        <SelectItem value="2-5">2-5 properties</SelectItem>
                        <SelectItem value="6-plus">6+ properties</SelectItem>
                        <SelectItem value="professional">Professional investor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Specific Concerns (check all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    {[
                      "Structural issues",
                      "Renovation costs",
                      "Rental potential",
                      "Market timing",
                      "Neighborhood",
                      "Other",
                    ].map((concern) => (
                      <div key={concern} className="flex items-center space-x-2">
                        <Checkbox id={concern.toLowerCase().replace(" ", "-")} />
                        <Label htmlFor={concern.toLowerCase().replace(" ", "-")}>{concern}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="source">How did you find this property?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mls">MLS</SelectItem>
                      <SelectItem value="agent">Agent</SelectItem>
                      <SelectItem value="drive-by">Drive-by</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="additional">Additional Information</Label>
                  <Textarea
                    id="additional"
                    placeholder="Any additional details about the property or your analysis needs..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Request Property Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Analysis Guarantee</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              If you're not completely satisfied with our analysis quality and thoroughness, we'll refund your analysis
              fee. We stand behind our 20 years of construction and real estate expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
