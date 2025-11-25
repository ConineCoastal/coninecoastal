"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calculator, TrendingUp, Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ROICalculatorClientPage() {
  const [purchasePrice, setPurchasePrice] = useState([500000])
  const [downPayment, setDownPayment] = useState([100000])
  const [renovationCosts, setRenovationCosts] = useState([50000])
  const [monthlyRent, setMonthlyRent] = useState([3500])
  const [monthlyExpenses, setMonthlyExpenses] = useState([1200])
  const [arv, setArv] = useState(650000)

  // Calculations
  const totalInvestment = purchasePrice[0] + renovationCosts[0]
  const loanAmount = purchasePrice[0] - downPayment[0]
  const monthlyMortgage = (loanAmount * 0.07) / 12 // Assuming 7% interest rate
  const netMonthlyIncome = monthlyRent[0] - monthlyExpenses[0] - monthlyMortgage
  const annualCashFlow = netMonthlyIncome * 12
  const cashOnCashReturn = (annualCashFlow / (downPayment[0] + renovationCosts[0])) * 100
  const capRate = ((monthlyRent[0] * 12 - monthlyExpenses[0] * 12) / totalInvestment) * 100
  const instantEquity = arv - totalInvestment
  const totalROI = ((annualCashFlow + instantEquity) / (downPayment[0] + renovationCosts[0])) * 100

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 text-white">
        <img
          src="https://images.unsplash.com/photo-1763565062965-16173b9ee752?auto=format&fit=crop&w=2000&q=80"
          alt="Investment advisor calculating property returns"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18457C]/90 via-[#18457C]/70 to-[#229FD9]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Real Estate Investment ROI Calculator
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Calculate your potential returns on rental properties, fix & flip projects, and investment opportunities in
            Northeast Florida
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Get accurate projections backed by 20 years of construction and real estate expertise
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Panel */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-[#229FD9]" />
                  Investment Parameters
                </CardTitle>
                <CardDescription>Adjust the values below to calculate your potential returns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-semibold">Purchase Price</Label>
                  <div className="mt-2">
                    <Slider
                      value={purchasePrice}
                      onValueChange={setPurchasePrice}
                      max={1000000}
                      min={200000}
                      step={25000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>$200K</span>
                      <span className="font-semibold text-[#18457C]">${purchasePrice[0].toLocaleString()}</span>
                      <span>$1M</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold">Down Payment</Label>
                  <div className="mt-2">
                    <Slider
                      value={downPayment}
                      onValueChange={setDownPayment}
                      max={purchasePrice[0] * 0.5}
                      min={purchasePrice[0] * 0.2}
                      step={5000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>20%</span>
                      <span className="font-semibold text-[#18457C]">${downPayment[0].toLocaleString()}</span>
                      <span>50%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold">Renovation Costs</Label>
                  <div className="mt-2">
                    <Slider
                      value={renovationCosts}
                      onValueChange={setRenovationCosts}
                      max={200000}
                      min={0}
                      step={5000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>$0</span>
                      <span className="font-semibold text-[#18457C]">${renovationCosts[0].toLocaleString()}</span>
                      <span>$200K</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold">Monthly Rent</Label>
                  <div className="mt-2">
                    <Slider
                      value={monthlyRent}
                      onValueChange={setMonthlyRent}
                      max={8000}
                      min={1500}
                      step={100}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>$1,500</span>
                      <span className="font-semibold text-[#18457C]">${monthlyRent[0].toLocaleString()}</span>
                      <span>$8,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold">Monthly Expenses</Label>
                  <div className="mt-2">
                    <Slider
                      value={monthlyExpenses}
                      onValueChange={setMonthlyExpenses}
                      max={3000}
                      min={500}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>$500</span>
                      <span className="font-semibold text-[#18457C]">${monthlyExpenses[0].toLocaleString()}</span>
                      <span>$3,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="arv" className="text-base font-semibold">
                    After Repair Value (ARV)
                  </Label>
                  <Input
                    id="arv"
                    type="number"
                    value={arv}
                    onChange={(e) => setArv(Number(e.target.value))}
                    className="mt-2"
                    placeholder="650000"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Results Panel */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                    Investment Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-[#229FD9]">{cashOnCashReturn.toFixed(1)}%</div>
                      <div className="text-sm text-gray-600">Cash-on-Cash Return</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{capRate.toFixed(1)}%</div>
                      <div className="text-sm text-gray-600">Cap Rate</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Investment:</span>
                      <span className="font-semibold">${(downPayment[0] + renovationCosts[0]).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Cash Flow:</span>
                      <span className={`font-semibold ${netMonthlyIncome >= 0 ? "text-green-600" : "text-red-600"}`}>
                        ${netMonthlyIncome.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Cash Flow:</span>
                      <span className={`font-semibold ${annualCashFlow >= 0 ? "text-green-600" : "text-red-600"}`}>
                        ${annualCashFlow.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Instant Equity:</span>
                      <span className="font-semibold text-blue-600">${instantEquity.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold">Total First-Year ROI:</span>
                      <span className="font-bold text-[#18457C]">{totalROI.toFixed(1)}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investment Recommendation</CardTitle>
                </CardHeader>
                <CardContent>
                  {totalROI > 15 ? (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <Badge className="bg-green-600 text-white mb-2">STRONG BUY</Badge>
                      <p className="text-green-800">
                        This investment shows excellent potential with strong cash flow and ROI above 15%. Consider
                        moving forward with professional analysis.
                      </p>
                    </div>
                  ) : totalROI > 8 ? (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <Badge className="bg-yellow-600 text-white mb-2">CONSIDER</Badge>
                      <p className="text-yellow-800">
                        This investment shows moderate potential. Consider market conditions and your investment goals.
                        Professional analysis recommended.
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <Badge className="bg-red-600 text-white mb-2">CAUTION</Badge>
                      <p className="text-red-800">
                        This investment shows lower returns. Consider adjusting parameters or looking for better
                        opportunities. Professional consultation strongly recommended.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Get Professional Analysis</CardTitle>
                  <CardDescription>
                    Ready to move forward? Get expert analysis from our construction and real estate professionals.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/investor-services/property-analysis" className="flex-1">
                      <Button className="w-full bg-[#229FD9] hover:bg-[#229FD9]/90">
                        Request Property Analysis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent">
                        Schedule Consultation
                      </Button>
                    </Link>
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    <p>Get accurate renovation estimates and market analysis</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#18457C] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "serif" }}>
            Ready to Invest with Confidence?
          </h2>
          <p className="text-xl mb-8">
            Get professional guidance from experts who understand both construction costs and market values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#F16622] hover:bg-[#F16622]/90 text-white px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Talk with Our Team
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#18457C] px-8 py-4 text-lg bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
