"use client"
import { Button } from "@/components/ui/button"
import { DollarSign, Eye, Calculator } from "lucide-react"

export default function KitchenRemodelingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1609280069678-ab9ef26a0b05?auto=format&fit=crop&w=2000&q=80"
          alt="Modern coastal-inspired kitchen remodel"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Kitchen Remodeling
          </h1>
          <p className="text-2xl lg:text-3xl mb-8 leading-relaxed">Coastal-Inspired Kitchens That Add Value</p>
          <p className="text-xl lg:text-2xl mb-12 text-white/90 leading-relaxed">
            Transform your kitchen with designs that blend functionality, style, and maximum resale value
          </p>

          <Button size="lg" className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-10 py-4 text-xl shadow-lg">
            Get Free Kitchen Consultation
          </Button>
        </div>
      </section>

      {/* Kitchen ROI Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
              Smart Kitchen Investments
            </h2>
            <p className="text-xl text-[#707070] max-w-4xl mx-auto">
              Not all kitchen improvements are created equal. Our real estate expertise ensures every dollar spent adds
              maximum value to your home.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/kitchen-roi-analysis.png"
                alt="Kitchen ROI analysis and value-driven design"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#229FD9]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calculator className="h-6 w-6 text-[#229FD9]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">70-85% ROI Potential</h3>
                  <p className="text-[#707070] leading-relaxed">
                    Well-planned kitchen remodels typically return 70-85% of investment. We focus on improvements that
                    maximize this return for your specific market.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#F16622]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-[#F16622]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Value-Driven Design Choices</h3>
                  <p className="text-[#707070] leading-relaxed">
                    Every design decision is informed by market data. We know which features coastal buyers prioritize
                    and which add the most value.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FFCA05]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="h-6 w-6 text-[#FFCA05]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#18457C] mb-2">Buyer-Preferred Features</h3>
                  <p className="text-[#707070] leading-relaxed">
                    We incorporate elements that coastal homebuyers actively seek: open layouts, natural materials, and
                    durable finishes that handle salt air.
                  </p>
                </div>
              </div>
            </div>
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
        </div>
      </section>
    </div>
  )
}
