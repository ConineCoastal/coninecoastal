"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, DollarSign, Search, Shield, Eye, Calculator, MapPin, Home } from "lucide-react"

export default function BuyersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/home-buying-hero.png')",
          }}
        ></div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Home Buying Made Smarter
          </h1>
          <p className="text-2xl lg:text-3xl mb-12 leading-relaxed">
            Why guess at renovation costs when you can know for certain?
          </p>

          <Button size="lg" className="bg-[#229FD9] hover:bg-[#229FD9]/90 text-white px-10 py-4 text-xl shadow-lg">
            Start Your Home Search
          </Button>
        </div>
      </section>

      {/* The Conine Coastal Buyer Advantage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              The Conine Coastal Buyer Advantage
            </h2>
            <p className="text-xl text-[#707070] max-w-4xl mx-auto">
              Get the insider advantage that comes from 20 years of construction experience combined with deep real
              estate market knowledge.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/buyer-advantage-construction.png"
                alt="Construction expertise for home buyers"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#229FD9]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calculator className="h-6 w-6 text-[#229FD9]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Instant Renovation Estimates</h3>
                  <p className="text-[#707070] leading-relaxed">
                    Walk through any property and get accurate renovation costs on the spot. No more guessing if that
                    kitchen remodel will cost $15,000 or $50,000 - you'll know before you make an offer.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#F16622]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-[#F16622]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Hidden Problem Detection</h3>
                  <p className="text-[#707070] leading-relaxed">
                    20 years of construction experience means spotting issues before they become expensive surprises.
                    Foundation problems, electrical issues, plumbing concerns - we catch them early.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FFCA05]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-[#FFCA05]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">True Value Assessment</h3>
                  <p className="text-[#707070] leading-relaxed">
                    Understand what a property will really be worth after improvements, not just its current condition.
                    Make offers based on true potential, not surface appearances.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#18457C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-[#18457C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Renovation Timeline Planning</h3>
                  <p className="text-[#707070] leading-relaxed">
                    Know exactly how long projects will take before you buy. Plan your move-in date with confidence,
                    understanding realistic timelines for any needed improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Buyer Services */}
      <section className="py-20 bg-gradient-to-r from-[#18457C]/5 to-[#229FD9]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Our Buyer Services
            </h2>
            <p className="text-xl text-[#707070]">Comprehensive support from search to closing and beyond</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "First-Time Homebuyer Guidance",
                desc: "Navigate the process with confidence, understanding every step from pre-approval to closing.",
              },
              {
                icon: Search,
                title: "Investment Property Evaluation",
                desc: "Identify properties with the best potential for appreciation and rental income.",
              },
              {
                icon: Calculator,
                title: "Fixer-Upper Potential Analysis",
                desc: "See beyond surface issues to identify diamonds in the rough with real potential.",
              },
              {
                icon: MapPin,
                title: "Market Trend Analysis",
                desc: "Understand local market conditions and timing for the best buying opportunities.",
              },
              {
                icon: Shield,
                title: "Neighborhood Expertise",
                desc: "Deep knowledge of Northeast Florida communities from St. Augustine to Amelia Island.",
              },
              {
                icon: CheckCircle,
                title: "Closing Coordination",
                desc: "Smooth transaction management with attention to every detail through closing.",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-[#229FD9]/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-[#229FD9]" />
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

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Our Home Buying Process
            </h2>
            <p className="text-xl text-[#707070]">A proven 5-step approach to finding your perfect home</p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Discuss your needs, budget, and timeline. Understand your financing options and get pre-approved.",
                color: "#229FD9",
              },
              {
                step: "02",
                title: "Search Strategy",
                desc: "Target properties that match your goals, including fixer-uppers with potential you might not see.",
                color: "#F16622",
              },
              {
                step: "03",
                title: "Property Evaluation",
                desc: "Professional assessment including renovation potential, hidden issues, and true market value.",
                color: "#FFCA05",
              },
              {
                step: "04",
                title: "Negotiation",
                desc: "Leverage our construction knowledge for better deals, factoring in real renovation costs.",
                color: "#18457C",
              },
              {
                step: "05",
                title: "Closing Support",
                desc: "Smooth transaction management with coordination of inspections, appraisals, and final walkthrough.",
                color: "#707070",
              },
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
                  style={{ backgroundColor: step.color }}
                >
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-[#707070] text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#18457C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "serif" }}>
            Ready to Start Your Home Search?
          </h2>
          <p className="text-xl text-white/90">
            Let's find your perfect home with the confidence that comes from knowing true costs and potential.
          </p>

          <Button size="lg" className="bg-[#229FD9] hover:bg-[#229FD9]/90 text-white px-8 py-4 text-lg">
            Schedule Buyer Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
