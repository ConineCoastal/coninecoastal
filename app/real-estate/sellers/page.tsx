"use client"
import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  X,
  Home,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Camera,
  Users,
  Calculator,
  MapPin,
  Star,
} from "lucide-react"

export default function SellersPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const [formData, setFormData] = React.useState({
    address: "",
    name: "",
    phone: "",
    email: "",
    timeline: "",
    message: "",
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/home-selling-hero.png')",
          }}
        ></div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Sell Smarter, Not Harder
          </h1>
          <p className="text-2xl lg:text-3xl mb-12 leading-relaxed">
            Maximize your profit with renovation insights others can't provide
          </p>

          <Button size="lg" className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-10 py-4 text-xl shadow-lg">
            Get Free Home Valuation
          </Button>
        </div>
      </section>

      {/* The Seller's Edge */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              The Seller's Edge
            </h2>
            <p className="text-xl text-[#707070] max-w-4xl mx-auto">
              Why settle for guesswork when you can have certainty? Our construction expertise gives you the insider
              advantage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/seller-advantage-renovations.png"
                alt="Strategic home improvements for selling"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#F16622]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-[#F16622]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Strategic Improvements</h3>
                  <p className="text-[#707070] leading-relaxed">
                    Only invest in upgrades that add real value. We know which $5,000 kitchen update will add $15,000 to
                    your sale price - and which $20,000 renovation won't add a dime.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#229FD9]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-[#229FD9]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Accurate Pricing</h3>
                  <p className="text-[#707070] leading-relaxed">
                    Factor in true property potential, not just current condition. Price your home based on what it
                    could be worth, giving buyers confidence in their investment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FFCA05]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-[#FFCA05]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Pre-Sale Renovations</h3>
                  <p className="text-[#707070] leading-relaxed">
                    Complete cost-effective improvements before listing. We handle the work so you can focus on
                    maximizing your return on investment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#18457C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Home className="h-6 w-6 text-[#18457C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Marketing Advantage</h3>
                  <p className="text-[#707070] leading-relaxed">
                    Showcase renovation potential to buyers. Help them see the possibilities while providing accurate
                    cost estimates for their peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Seller Services */}
      <section className="py-20 bg-gradient-to-r from-[#18457C]/5 to-[#229FD9]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Our Seller Services
            </h2>
            <p className="text-xl text-[#707070]">Complete support from valuation to closing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator,
                title: "Free Home Valuation & Market Analysis",
                desc: "Comprehensive assessment including current value and improvement potential.",
              },
              {
                icon: TrendingUp,
                title: "Pre-Listing Improvement Recommendations",
                desc: "Strategic advice on which renovations will maximize your return on investment.",
              },
              {
                icon: CheckCircle,
                title: "Strategic Renovation Planning",
                desc: "Complete project management for pre-sale improvements that add real value.",
              },
              {
                icon: Camera,
                title: "Professional Photography & Marketing",
                desc: "Showcase your home's best features and potential with expert marketing materials.",
              },
              {
                icon: Users,
                title: "Staging Consultation",
                desc: "Expert advice on presenting your home to appeal to the widest range of buyers.",
              },
              {
                icon: DollarSign,
                title: "Buyer Negotiation Support",
                desc: "Leverage our construction knowledge to justify pricing and handle buyer concerns.",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-[#F16622]/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-[#F16622]" />
                    </div>
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

      {/* ROI-Focused Improvements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              ROI-Focused Improvements
            </h2>
            <p className="text-xl text-[#707070]">Smart investments that actually increase your home's value</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* What TO Do */}
            <Card className="border-2 border-[#229FD9]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#229FD9] mb-6" style={{ fontFamily: "serif" }}>
                  High-Return Improvements
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      improvement: "Kitchen Updates That Sell",
                      roi: "75-85% ROI",
                      desc: "Cabinet refacing, countertop upgrades, modern fixtures",
                    },
                    {
                      improvement: "Bathroom Renovations Worth Doing",
                      roi: "60-70% ROI",
                      desc: "Updated vanities, modern tile, efficient fixtures",
                    },
                    {
                      improvement: "Curb Appeal Enhancements",
                      roi: "100%+ ROI",
                      desc: "Fresh paint, landscaping, front door replacement",
                    },
                    {
                      improvement: "Interior Improvements",
                      roi: "50-75% ROI",
                      desc: "Fresh paint, flooring updates, lighting improvements",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-[#229FD9] mt-1 flex-shrink-0" />
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-[#18457C]">{item.improvement}</h4>
                          <span className="text-[#229FD9] font-bold text-sm">{item.roi}</span>
                        </div>
                        <p className="text-[#707070] text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What NOT To Do */}
            <Card className="border-2 border-[#F16622]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#F16622] mb-6" style={{ fontFamily: "serif" }}>
                  What NOT to Renovate Before Selling
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      improvement: "Over-the-Top Kitchen Remodels",
                      warning: "Low ROI",
                      desc: "Luxury appliances and custom cabinets rarely pay for themselves",
                    },
                    {
                      improvement: "Swimming Pool Installation",
                      warning: "Risky Investment",
                      desc: "Appeals to limited buyers and expensive to maintain",
                    },
                    {
                      improvement: "Bedroom/Bathroom Additions",
                      warning: "Complex & Costly",
                      desc: "Rarely recover full investment, especially in smaller homes",
                    },
                    {
                      improvement: "High-End Flooring",
                      warning: "Diminishing Returns",
                      desc: "Mid-range options often provide same buyer appeal",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <X className="h-6 w-6 text-[#F16622] mt-1 flex-shrink-0" />
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-[#18457C]">{item.improvement}</h4>
                          <span className="text-[#F16622] font-bold text-sm">{item.warning}</span>
                        </div>
                        <p className="text-[#707070] text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-[#229FD9]/10 to-[#18457C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Success Stories
            </h2>
            <p className="text-xl text-[#707070]">Real results from real sellers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria & Carlos Rodriguez",
                location: "St. Augustine",
                investment: "$8,500",
                return: "$28,000",
                story:
                  "David recommended specific kitchen updates and fresh paint. We invested $8,500 and sold for $28,000 more than our original asking price.",
                rating: 5,
              },
              {
                name: "Jennifer Thompson",
                location: "Ponte Vedra Beach",
                investment: "$12,000",
                return: "$35,000",
                story:
                  "His construction expertise helped us avoid a $25,000 bathroom remodel. Instead, we did strategic updates for $12,000 and got full value.",
                rating: 5,
              },
              {
                name: "Robert & Susan Chen",
                location: "Amelia Island",
                investment: "$15,000",
                return: "$42,000",
                story:
                  "We were going to list as-is. David's pre-sale improvements added $42,000 to our sale price. Best investment we ever made.",
                rating: 5,
              },
            ].map((story, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#FFCA05] fill-current" />
                    ))}
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-[#707070]">Investment:</span>
                      <span className="font-bold text-[#F16622]">{story.investment}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-[#707070]">Additional Sale Value:</span>
                      <span className="font-bold text-[#229FD9]">{story.return}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#707070] font-semibold">Net Profit:</span>
                      <span className="font-bold text-[#18457C]">
                        $
                        {Number.parseInt(story.return.replace(/[$,]/g, "")) -
                          Number.parseInt(story.investment.replace(/[$,]/g, ""))}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#707070] mb-4 italic text-sm">"{story.story}"</p>
                  <div>
                    <p className="font-semibold text-[#18457C]">{story.name}</p>
                    <p className="text-sm text-[#707070]">{story.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#18457C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "serif" }}>
            Get Your Free Home Valuation
          </h2>
          <p className="text-xl text-white/90">
            Discover your home's true potential with our comprehensive market analysis and improvement recommendations.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
                  Schedule Home Assessment
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="address"
                    placeholder="Property Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="border-[#707070]/30 focus:border-[#229FD9]"
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
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
                  </div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-[#707070]/30 focus:border-[#229FD9]"
                  />
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-[#707070]/30 rounded-md focus:border-[#229FD9] focus:outline-none"
                  >
                    <option value="">Timeline to Sell</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="just-exploring">Just exploring options</option>
                  </select>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your home, any recent improvements, or specific questions..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="border-[#707070]/30 focus:border-[#229FD9]"
                  />
                  <Button type="submit" className="w-full bg-[#F16622] hover:bg-[#F16622]/90 text-white py-3">
                    Schedule Home Assessment
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-left text-white space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "serif" }}>
                  What You'll Receive
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FFCA05] mt-1 flex-shrink-0" />
                    <p>Comprehensive market analysis and current home value</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FFCA05] mt-1 flex-shrink-0" />
                    <p>Strategic improvement recommendations with ROI projections</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FFCA05] mt-1 flex-shrink-0" />
                    <p>Detailed renovation cost estimates for suggested improvements</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FFCA05] mt-1 flex-shrink-0" />
                    <p>Timeline projections for pre-sale improvements</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#FFCA05] mt-1 flex-shrink-0" />
                    <p>Marketing strategy tailored to your property</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Emergency Contact</h4>
                <p className="text-white/80 text-sm mb-2">For urgent selling questions</p>
                <a href="tel:5551234911" className="text-[#FFCA05] font-semibold">
                  (555) 123-4911
                </a>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">Contact Information</h4>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-[#F16622]" />
                    (555) 123-4567
                  </p>
                  <p className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-[#F16622]" />
                    Serving Northeast Florida
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
