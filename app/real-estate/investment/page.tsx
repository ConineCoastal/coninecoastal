"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Phone,
  TrendingUp,
  CheckCircle,
  Calculator,
  Target,
  Eye,
  Clock,
  MapPin,
  PieChart,
  BarChart3,
  Zap,
} from "lucide-react"

export default function InvestmentServicesPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://picsum.photos/1920/1080)",
          }}
        ></div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Investment Properties Done Right
          </h1>
          <p className="text-2xl lg:text-3xl mb-12 leading-relaxed">
            Accurate renovation costs. Real profit projections. Smart investment decisions.
          </p>

          <Button
            size="lg"
            className="bg-[#FFCA05] hover:bg-[#FFCA05]/90 text-[#18457C] px-10 py-4 text-xl shadow-lg font-semibold"
          >
            Find Investment Opportunities
          </Button>
        </div>
      </section>

      {/* The Investment Advantage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              The Construction-Informed Investment Advantage
            </h2>
            <p className="text-xl text-[#707070] max-w-4xl mx-auto">
              Most real estate agents guess at renovation costs. We provide accurate estimates based on 20 years of
              construction experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://picsum.photos/400/300"
                alt="Construction-informed investment analysis"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FFCA05]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calculator className="h-6 w-6 text-[#FFCA05]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Accurate Renovation Estimates</h3>
                  <p className="text-[#707070] leading-relaxed">
                    No more guessing games. Get precise renovation costs for any property before you make an offer. Know
                    exactly what you're investing in.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#229FD9]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-[#229FD9]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">True Profit Potential Analysis</h3>
                  <p className="text-[#707070] leading-relaxed">
                    Understand real profit margins by factoring in accurate rehab costs, timeline projections, and
                    market conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#F16622]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-[#F16622]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Hidden Opportunity Detection</h3>
                  <p className="text-[#707070] leading-relaxed">
                    Spot diamonds in the rough that other investors miss. Identify properties with real potential for
                    profitable transformations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#18457C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-[#18457C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Realistic Timeline Planning</h3>
                  <p className="text-[#707070] leading-relaxed">
                    Know exactly how long renovations will take. Plan your holding costs and exit strategy with
                    confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-20 bg-gradient-to-r from-[#FFCA05]/10 to-[#229FD9]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Our Investment Services
            </h2>
            <p className="text-xl text-[#707070]">Comprehensive support for real estate investors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: PieChart,
                title: "Investment Property Analysis",
                desc: "Complete financial analysis including accurate renovation costs, profit projections, and ROI calculations.",
                color: "#FFCA05",
              },
              {
                icon: Target,
                title: "Fix & Flip Opportunities",
                desc: "Identify properties with the best potential for profitable renovations and quick resale.",
                color: "#F16622",
              },
              {
                icon: BarChart3,
                title: "Rental Property Evaluation",
                desc: "Assess properties for long-term rental income potential with renovation cost analysis.",
                color: "#229FD9",
              },
              {
                icon: Zap,
                title: "Off-Market Deal Access",
                desc: "Get first access to investment opportunities before they hit the public market.",
                color: "#18457C",
              },
              {
                icon: Calculator,
                title: "Rehab Cost Estimation",
                desc: "Detailed renovation cost breakdowns for accurate investment planning and budgeting.",
                color: "#707070",
              },
              {
                icon: TrendingUp,
                title: "Market Trend Analysis",
                desc: "Stay ahead of market changes with expert analysis of Northeast Florida investment trends.",
                color: "#229FD9",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <service.icon className="h-8 w-8" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-[#18457C] mb-3" style={{ fontFamily: "serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-[#707070] text-sm leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Investment Strategies We Support
            </h2>
            <p className="text-xl text-[#707070]">Choose the investment approach that fits your goals</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Fix & Flip */}
            <Card className="border-2 border-[#F16622]/20 hover:border-[#F16622] transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#F16622]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-10 w-10 text-[#F16622]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                    Fix & Flip
                  </h3>
                  <p className="text-[#F16622] font-semibold">Quick Profit Strategy</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#F16622] mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#707070]">Accurate renovation cost estimates</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#F16622] mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#707070]">Realistic timeline projections</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#F16622] mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#707070]">Market value after renovation analysis</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#F16622] mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#707070]">Optimal improvement recommendations</p>
                  </div>
                </div>

                <div className="bg-[#F16622]/5 p-4 rounded-lg text-center">
                  <p className="text-sm text-[#707070] mb-2">Typical Timeline:</p>
                  <p className="text-lg font-bold text-[#F16622]">3-6 months</p>
                </div>
              </CardContent>
            </Card>

            {/* Buy & Hold */}
            <Card className="border-2 border-[#229FD9]/20 hover:border-[#229FD9] transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#229FD9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-10 w-10 text-[#229FD9]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                    Buy & Hold
                  </h3>
                  <p className="text-[#229FD9] font-semibold">Long-term Wealth Building</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#229FD9] mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#707070]">Rental income potential analysis</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#229FD9] mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#707070]">Long-term appreciation forecasts</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#229FD9] mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#707070]">Property management recommendations</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#229FD9] mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#707070]">Maintenance cost projections</p>
                  </div>
                </div>

                <div className="bg-[#229FD9]/5 p-4 rounded-lg text-center">
                  <p className="text-sm text-[#707070] mb-2">Target Cash Flow:</p>
                  <p className="text-lg font-bold text-[#229FD9]">8-12% ROI</p>
                </div>
              </CardContent>
            </Card>

            {/* BRRRR Strategy */}
            <Card className="border-2 border-[#FFCA05]/20 hover:border-[#FFCA05] transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#FFCA05]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-10 w-10 text-[#FFCA05]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                    BRRRR Method
                  </h3>
                  <p className="text-[#FFCA05] font-semibold">Buy, Rehab, Rent, Refinance, Repeat</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#FFCA05] mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#707070]">Value-add opportunity identification</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#FFCA05] mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#707070]">Post-renovation value estimates</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#FFCA05] mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#707070]">Refinancing potential analysis</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#FFCA05] mt-1 flex-shrink-0" />
                    <p className="text-sm text-[#707070]">Portfolio scaling strategies</p>
                  </div>
                </div>

                <div className="bg-[#FFCA05]/5 p-4 rounded-lg text-center">
                  <p className="text-sm text-[#707070] mb-2">Capital Recovery:</p>
                  <p className="text-lg font-bold text-[#FFCA05]">70-90%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-[#18457C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "serif" }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90">
            Let's discuss how our unique combination of real estate and construction expertise can benefit you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
                  Quick Consultation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-[#707070]/30 focus:border-[#229FD9]"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-[#707070]/30 focus:border-[#229FD9]"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="border-[#707070]/30 focus:border-[#229FD9]"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-[#707070]/30 rounded-md focus:border-[#229FD9] focus:outline-none"
                  >
                    <option value="">Select Service</option>
                    <option value="buying">Buying a Home</option>
                    <option value="selling">Selling a Home</option>
                    <option value="investment">Investment Property</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                  <Button type="submit" className="w-full bg-[#F16622] hover:bg-[#F16622]/90 text-white py-3">
                    Schedule Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-left text-white space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "serif" }}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4 text-[#F16622]" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:5551234567" className="text-[#229FD9] hover:underline">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4 text-[#F16622]" />
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p className="text-white/80">Northeast Florida</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Emergency Contact</h4>
                <p className="text-white/80 text-sm mb-2">For urgent real estate needs</p>
                <a href="tel:5551234911" className="text-[#FFCA05] font-semibold">
                  (555) 123-4911
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
