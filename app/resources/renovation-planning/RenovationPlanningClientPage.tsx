"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Calculator, FileText, Users, DollarSign, Calendar, Download } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import { font } from "@/styles/fonts"

export default function RenovationPlanningClientPage() {
  const planningSteps = [
    {
      step: "1",
      title: "Setting Realistic Budgets",
      description: "Learn how to budget for your renovation project with accurate cost estimates.",
      icon: <DollarSign className="h-8 w-8 text-[#229FD9]" />,
      details: [
        "Add 20% contingency for unexpected issues",
        "Get multiple detailed quotes from contractors",
        "Factor in permit costs and design fees",
        "Consider temporary living arrangements if needed",
      ],
    },
    {
      step: "2",
      title: "Choosing the Right Contractor",
      description: "Essential criteria for selecting a contractor who will deliver quality work on time and budget.",
      icon: <Users className="h-8 w-8 text-[#229FD9]" />,
      details: [
        "Verify licensing, insurance, and bonding",
        "Check references from recent projects",
        "Review portfolio of similar work",
        "Get detailed written contracts and timelines",
      ],
    },
    {
      step: "3",
      title: "Permits and Planning Requirements",
      description: "Navigate the permit process and ensure your project meets all local codes.",
      icon: <FileText className="h-8 w-8 text-[#229FD9]" />,
      details: [
        "Understand which projects require permits",
        "Factor permit timeline into project schedule",
        "Ensure compliance with coastal building codes",
        "Plan for required inspections",
      ],
    },
    {
      step: "4",
      title: "Project Timeline Management",
      description: "Realistic scheduling and managing the renovation process from start to finish.",
      icon: <Calendar className="h-8 w-8 text-[#229FD9]" />,
      details: [
        "Account for material delivery delays",
        "Plan around weather and seasonal factors",
        "Coordinate multiple trades and inspections",
        "Build in buffer time for unexpected issues",
      ],
    },
  ]

  const roiProjects = [
    {
      project: "Kitchen Remodel",
      investment: "$15,000 - $50,000",
      roi: "70-80%",
      description: "Focus on cabinet refacing, countertops, and appliances for best return",
    },
    {
      project: "Bathroom Renovation",
      investment: "$10,000 - $25,000",
      roi: "65-75%",
      description: "Update fixtures, vanity, and tile for maximum impact",
    },
    {
      project: "Flooring Replacement",
      investment: "$5,000 - $15,000",
      roi: "75-85%",
      description: "Hardwood or luxury vinyl plank in main living areas",
    },
    {
      project: "Exterior Improvements",
      investment: "$3,000 - $12,000",
      roi: "80-90%",
      description: "Fresh paint, landscaping, and front door replacement",
    },
    {
      project: "HVAC System Upgrade",
      investment: "$8,000 - $15,000",
      roi: "60-70%",
      description: "Energy-efficient systems appeal to coastal buyers",
    },
    {
      project: "Deck/Patio Addition",
      investment: "$10,000 - $25,000",
      roi: "65-75%",
      description: "Outdoor living space is highly valued in coastal markets",
    },
  ]

  const financingOptions = [
    {
      option: "Cash Payment",
      pros: ["No interest charges", "Faster project completion", "Better contractor rates"],
      cons: ["Ties up liquid assets", "No tax benefits", "Risk if project goes over budget"],
    },
    {
      option: "Home Equity Loan",
      pros: ["Fixed interest rate", "Tax-deductible interest", "Predictable payments"],
      cons: ["Home as collateral", "Closing costs", "Fixed loan amount"],
    },
    {
      option: "HELOC (Line of Credit)",
      pros: ["Pay interest only on used funds", "Flexible access to money", "Variable rate options"],
      cons: ["Variable interest rates", "Home as collateral", "Temptation to overborrow"],
    },
    {
      option: "Personal Loan",
      pros: ["No home as collateral", "Fixed terms", "Quick approval process"],
      cons: ["Higher interest rates", "Lower loan amounts", "Shorter repayment terms"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      <main className="mx-auto max-w-4xl px-6 py-20 space-y-16">
        <header className="space-y-4 text-center">
          <h1 className={`${font.variable} font-serif text-4xl sm:text-5xl text-[#18457C]`}>
            Smart Renovation Planning
          </h1>
          <p className="text-lg">
            Plan like a pro—from permits to project timelines—before you swing the first hammer.
          </p>
          <Button asChild>
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </header>

        {/* Planning Steps */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                Your Renovation Planning Process
              </h2>
              <p className="text-xl text-[#707070] max-w-3xl mx-auto">
                Follow these essential steps to ensure your renovation project is successful, on-budget, and adds real
                value.
              </p>
            </div>

            <div className="space-y-12">
              {planningSteps.map((step, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#229FD9]/10 rounded-full flex items-center justify-center mb-4">
                          {step.icon}
                        </div>
                        <Badge className="bg-[#18457C] text-white">Step {step.step}</Badge>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                          {step.title}
                        </h3>
                        <p className="text-[#707070] mb-6 text-lg leading-relaxed">{step.description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-[#229FD9] mt-0.5 flex-shrink-0" />
                              <span className="text-[#707070]">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Considerations */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                ROI Considerations for Different Renovations
              </h2>
              <p className="text-xl text-[#707070] max-w-3xl mx-auto">
                Not all renovations are created equal. Here's what you can expect for return on investment in the First
                Coast market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roiProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-[#18457C] mb-2" style={{ fontFamily: "serif" }}>
                        {project.project}
                      </h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#707070] text-sm">Investment:</span>
                        <span className="font-semibold text-[#18457C]">{project.investment}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[#707070] text-sm">Expected ROI:</span>
                        <Badge className="bg-[#229FD9] text-white">{project.roi}</Badge>
                      </div>
                    </div>
                    <p className="text-[#707070] text-sm text-center">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Financing Options */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                Financing Your Renovation Project
              </h2>
              <p className="text-xl text-[#707070] max-w-3xl mx-auto">
                Explore different financing options to fund your renovation project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {financingOptions.map((option, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#18457C] mb-6" style={{ fontFamily: "serif" }}>
                      {option.option}
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-[#229FD9] mb-3">Pros:</h4>
                        <div className="space-y-2">
                          {option.pros.map((pro, proIndex) => (
                            <div key={proIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-[#707070] text-sm">{pro}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-[#F16622] mb-3">Cons:</h4>
                        <div className="space-y-2">
                          {option.cons.map((con, conIndex) => (
                            <div key={conIndex} className="flex items-start space-x-3">
                              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              </div>
                              <span className="text-[#707070] text-sm">{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                Planning Tools & Resources
              </h2>
              <p className="text-xl text-[#707070] max-w-3xl mx-auto">
                Use these tools to plan and budget your renovation project effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[#229FD9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calculator className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                    Budget Calculator
                  </h3>
                  <p className="text-[#707070] mb-6">
                    Calculate realistic budgets for different types of renovation projects.
                  </p>
                  <Button className="bg-[#229FD9] hover:bg-[#229FD9]/90 text-white">Use Calculator</Button>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[#F16622] rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                    ROI Estimator
                  </h3>
                  <p className="text-[#707070] mb-6">
                    Estimate the return on investment for various home improvement projects.
                  </p>
                  <Button className="bg-[#F16622] hover:bg-[#F16622]/90 text-white">Estimate ROI</Button>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[#FFCA05] rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#18457C] mb-4" style={{ fontFamily: "serif" }}>
                    Contractor Questions
                  </h3>
                  <p className="text-[#707070] mb-6">Essential questions to ask potential contractors before hiring.</p>
                  <Button className="bg-[#FFCA05] hover:bg-[#FFCA05]/90 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download List
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
