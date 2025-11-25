import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, FileText, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Smart Renovation Planning Guide - Conine Coastal | Construction Expertise",
  description:
    "Plan successful home renovations with expert guidance from a licensed contractor. Budget planning, contractor selection, and ROI strategies for First Coast properties.",
  keywords:
    "renovation planning, construction expertise, home improvement ROI, contractor selection, First Coast renovations",
}

export default function RenovationPlanningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 text-white">
        <img
          src="https://images.unsplash.com/photo-1754780960162-839cda44d736?auto=format&fit=crop&w=2000&q=80"
          alt="Architect working through renovation plans and blueprints"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F16622]/90 via-[#F16622]/70 to-[#18457C]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Smart Renovation Planning</h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional guidance from a licensed contractor with 20 years of experience building and renovating First
              Coast homes
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                <Calculator className="mr-2 h-5 w-5" />
                Use Planning Tools
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#18457C]"
                asChild
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">
              Your 6-Step Renovation Planning Process
            </h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              A proven methodology that prevents costly mistakes and ensures successful project completion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F16622]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F16622]">1</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">Define Goals & Budget</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">
                  Establish clear objectives, realistic budgets, and ROI expectations for your First Coast property.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F16622]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F16622]">2</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">Design & Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">
                  Create detailed plans, select materials, and obtain necessary permits for coastal construction.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F16622]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F16622]">3</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">Contractor Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">
                  Choose qualified contractors with coastal experience and proper licensing and insurance.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F16622]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F16622]">4</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">Project Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">
                  Coordinate schedules, manage quality control, and handle change orders professionally.
                </p>
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F16622]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F16622]">5</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">Quality Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">
                  Professional inspections at key milestones ensure work meets coastal building standards.
                </p>
              </CardContent>
            </Card>

            {/* Step 6 */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F16622]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F16622]">6</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">Final Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070]">
                  Final walkthrough, punch list completion, and warranty documentation for peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">
              Renovation ROI by Project Type
            </h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              Make informed decisions with real data from First Coast renovation projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-l-4 border-[#229FD9]">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">Kitchen Remodel</CardTitle>
                <div className="text-3xl font-bold text-[#229FD9]">78%</div>
                <CardDescription>Average ROI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Minor Remodel:</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Major Remodel:</span>
                    <span className="font-semibold">70%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Upscale Remodel:</span>
                    <span className="font-semibold">65%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-[#229FD9]">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">Bathroom Remodel</CardTitle>
                <div className="text-3xl font-bold text-[#229FD9]">71%</div>
                <CardDescription>Average ROI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Minor Remodel:</span>
                    <span className="font-semibold">75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mid-range Remodel:</span>
                    <span className="font-semibold">68%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Upscale Remodel:</span>
                    <span className="font-semibold">60%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-[#229FD9]">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">Deck Addition</CardTitle>
                <div className="text-3xl font-bold text-[#229FD9]">69%</div>
                <CardDescription>Average ROI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Wood Deck:</span>
                    <span className="font-semibold">72%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Composite Deck:</span>
                    <span className="font-semibold">66%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Upscale Deck:</span>
                    <span className="font-semibold">62%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-l-4 border-[#229FD9]">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">HVAC Replacement</CardTitle>
                <div className="text-3xl font-bold text-[#229FD9]">58%</div>
                <CardDescription>Average ROI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Standard System:</span>
                    <span className="font-semibold">60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>High-Efficiency:</span>
                    <span className="font-semibold">55%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Smart System:</span>
                    <span className="font-semibold">50%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">Get Custom ROI Analysis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Planning Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">
              Free Planning Tools & Resources
            </h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              Professional-grade tools to help you plan and budget your renovation project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F16622]/10 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-[#F16622]" />
                </div>
                <CardTitle className="text-[#18457C] font-serif">Budget Calculator</CardTitle>
                <CardDescription>Estimate costs for different renovation types</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-[#707070]">
                  <li>• Material cost estimates</li>
                  <li>• Labor cost calculations</li>
                  <li>• Permit and inspection fees</li>
                  <li>• Contingency planning (15-20%)</li>
                  <li>• Financing options comparison</li>
                </ul>
                <Button className="w-full">Use Calculator</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F16622]/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[#F16622]" />
                </div>
                <CardTitle className="text-[#18457C] font-serif">Project Timeline</CardTitle>
                <CardDescription>Plan realistic schedules for your renovation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-[#707070]">
                  <li>• Design and planning phase</li>
                  <li>• Permit acquisition timeline</li>
                  <li>• Construction milestones</li>
                  <li>• Inspection schedules</li>
                  <li>• Weather and seasonal factors</li>
                </ul>
                <Button className="w-full">Download Template</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F16622]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#F16622]" />
                </div>
                <CardTitle className="text-[#18457C] font-serif">Contractor Interview</CardTitle>
                <CardDescription>Essential questions for vetting contractors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-[#707070]">
                  <li>• License and insurance verification</li>
                  <li>• Reference and portfolio review</li>
                  <li>• Coastal construction experience</li>
                  <li>• Communication and timeline</li>
                  <li>• Warranty and guarantee terms</li>
                </ul>
                <Button className="w-full">Get Questions List</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">
              Renovation Financing Options
            </h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              Choose the right financing strategy for your First Coast renovation project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">Home Equity Loan</CardTitle>
                <CardDescription>Fixed rate, predictable payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#707070]">Interest Rate:</span>
                    <span className="font-semibold text-[#229FD9]">6-8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#707070]">Term:</span>
                    <span className="font-semibold">5-30 years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#707070]">Best For:</span>
                    <span className="font-semibold">Large projects</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">HELOC</CardTitle>
                <CardDescription>Flexible credit line access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#707070]">Interest Rate:</span>
                    <span className="font-semibold text-[#229FD9]">5-7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#707070]">Term:</span>
                    <span className="font-semibold">10-20 years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#707070]">Best For:</span>
                    <span className="font-semibold">Phased projects</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">Cash-Out Refi</CardTitle>
                <CardDescription>Refinance with extra cash</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#707070]">Interest Rate:</span>
                    <span className="font-semibold text-[#229FD9]">4-6%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#707070]">Term:</span>
                    <span className="font-semibold">15-30 years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#707070]">Best For:</span>
                    <span className="font-semibold">Rate improvement</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#18457C] font-serif text-lg">Personal Loan</CardTitle>
                <CardDescription>No collateral required</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#707070]">Interest Rate:</span>
                    <span className="font-semibold text-[#229FD9]">8-15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#707070]">Term:</span>
                    <span className="font-semibold">2-7 years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#707070]">Best For:</span>
                    <span className="font-semibold">Small projects</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#18457C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Start Planning Your Renovation?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get expert guidance from a licensed contractor who understands both construction and real estate value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#18457C]"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Use Planning Tools
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
