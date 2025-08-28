import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import {
  Search,
  Hammer,
  Camera,
  TrendingUp,
  DollarSign,
  CheckCircle,
  Home,
  MapPin,
  Shield,
  Calculator,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Fix & Flip Investment Services - Northeast Florida | Conine Coastal",
  description:
    "Expert fix & flip services with 20 years construction experience. Maximize your flip profits with integrated real estate expertise and professional construction management in Northeast Florida.",
}

export default function FixAndFlipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/before-after-split-image-successful-house-flip-tra.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
            Expert Fix & Flip Services with 20 Years Construction Experience
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-shadow-md">
            Maximize your flip profits with integrated real estate expertise and professional construction management
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-shadow-md">
            Unlike working with separate agents and contractors, our dual expertise ensures accurate cost estimates,
            quality renovations, and faster sales for maximum ROI on your fix-and-flip investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Analyze Your Next Flip
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
            >
              View Flip Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Flip Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Fix & Flip Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach covers every phase of your fix and flip investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">PHASE 1: ACQUISITION</CardTitle>
                <p className="text-sm text-gray-500">Weeks 1-2</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>Property sourcing and evaluation</li>
                  <li>Market analysis and ARV calculations</li>
                  <li>Purchase negotiation and closing</li>
                </ul>
                <Badge variant="secondary">Our fee: 2.5% of purchase price</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">PHASE 2: RENOVATION</CardTitle>
                <p className="text-sm text-gray-500">Weeks 3-14</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>Design and permit management</li>
                  <li>Construction oversight and quality control</li>
                  <li>Timeline and budget management</li>
                </ul>
                <Badge variant="secondary">Our fee: 12% of renovation costs</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">PHASE 3: STAGING & MARKETING</CardTitle>
                <p className="text-sm text-gray-500">Weeks 15-16</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>Professional staging and photography</li>
                  <li>MLS listing and marketing campaign</li>
                  <li>Showing coordination</li>
                </ul>
                <Badge variant="secondary">Included in sale commission</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">PHASE 4: SALE</CardTitle>
                <p className="text-sm text-gray-500">Weeks 17-20</p>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>Offer negotiation and management</li>
                  <li>Closing coordination</li>
                  <li>Final profit distribution</li>
                </ul>
                <Badge variant="secondary">Our fee: 2.5% of sale price</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Faster Flips, Higher Profits</h2>
            <p className="text-xl text-gray-600">See how our integrated approach saves time and money</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl text-red-700">Traditional Approach</CardTitle>
                <p className="text-red-600 font-semibold">6-8 months</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-sm">
                      1-3
                    </div>
                    <span className="text-gray-700">Find separate contractor and agent</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-sm">
                      4-6
                    </div>
                    <span className="text-gray-700">Get multiple renovation bids</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-sm">
                      7-20
                    </div>
                    <span className="text-gray-700">Construction (delays common)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-sm">
                      21-24
                    </div>
                    <span className="text-gray-700">Find listing agent</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-sm">
                      25-32
                    </div>
                    <span className="text-gray-700">Marketing and sale</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-700">Total: 32+ weeks</p>
                  <p className="text-red-600 text-sm">Higher costs, coordination headaches</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-2xl text-green-700">Our Integrated Approach</CardTitle>
                <p className="text-green-600 font-semibold">4-5 months</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">
                      1-2
                    </div>
                    <span className="text-gray-700">Property acquisition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">
                      3-14
                    </div>
                    <span className="text-gray-700">Professional renovation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">
                      15-20
                    </div>
                    <span className="text-gray-700">Immediate listing and sale</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-700">Total: 20 weeks</p>
                  <p className="text-green-600 text-sm">Lower total costs, single point of contact</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fix & Flip Track Record</h2>
            <p className="text-xl text-gray-600">Proven results across Northeast Florida</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">85+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Completed Flips</div>
                <div className="text-sm text-gray-600">Average timeline: 18 weeks</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">22%</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Average Profit Margin</div>
                <div className="text-sm text-gray-600">On-time completion: 94%</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">96%</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Budget Adherence Rate</div>
                <div className="text-sm text-gray-600">Accurate cost estimates</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">$115K</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Average Client Profit</div>
                <div className="text-sm text-gray-600">Per flip project</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Financial Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average purchase price:</span>
                    <span className="font-semibold">$450K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average renovation investment:</span>
                    <span className="font-semibold">$75K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average sale price:</span>
                    <span className="font-semibold">$650K</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-900 font-semibold">Average client profit:</span>
                    <span className="font-bold text-green-600">$115K</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Jacksonville Metro:</span>
                    <span className="font-semibold">45 flips</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">St. Augustine:</span>
                    <span className="font-semibold">22 flips</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ponte Vedra/Beaches:</span>
                    <span className="font-semibold">12 flips</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fernandina Beach:</span>
                    <span className="font-semibold">6 flips</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Criteria */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Properties We Target for Maximum Flip Potential</h2>
            <p className="text-xl text-gray-600">Strategic criteria for profitable fix and flip investments</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  Ideal Purchase Price Ranges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Jacksonville Metro:</span>
                    <span className="font-semibold">$300K - $600K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">St. Augustine:</span>
                    <span className="font-semibold">$350K - $700K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ponte Vedra:</span>
                    <span className="font-semibold">$500K - $900K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fernandina Beach:</span>
                    <span className="font-semibold">$400K - $750K</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-blue-600" />
                  Property Characteristics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Solid bones, cosmetic needs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Desirable neighborhoods</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">3+ bedrooms, 2+ bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Properties 15-25% below ARV</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">No major structural issues</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">$50K-$150K renovation needs</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  Market Factors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Strong buyer demand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Low inventory markets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Good school districts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Proximity to employment centers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Recent comparable sales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Neighborhoods showing appreciation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Fix & Flip Success Stories</h2>
            <p className="text-xl text-gray-600">Real projects, real profits, real results</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">The Riverside Renovation</CardTitle>
                  <Badge className="bg-green-100 text-green-800">26% ROI</Badge>
                </div>
                <p className="text-gray-600">Jacksonville - Riverside</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purchase Price:</span>
                    <span className="font-semibold">$385,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Renovation Investment:</span>
                    <span className="font-semibold">$95,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sale Price:</span>
                    <span className="font-semibold">$625,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold">16 weeks</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-900 font-semibold">Client Profit:</span>
                    <span className="font-bold text-green-600">$125,500</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-2">Key Improvements:</p>
                  <ul className="space-y-1">
                    <li>• Complete kitchen renovation ($28K)</li>
                    <li>• Master bathroom addition ($18K)</li>
                    <li>• Open concept living area ($15K)</li>
                    <li>• Luxury flooring throughout ($12K)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">The St. Augustine Surprise</CardTitle>
                  <Badge className="bg-green-100 text-green-800">25% ROI</Badge>
                </div>
                <p className="text-gray-600">St. Augustine - Historic District</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purchase Price:</span>
                    <span className="font-semibold">$465,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Renovation Investment:</span>
                    <span className="font-semibold">$78,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sale Price:</span>
                    <span className="font-semibold">$695,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold">19 weeks</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-900 font-semibold">Client Profit:</span>
                    <span className="font-bold text-green-600">$135,000</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-2">Key Improvements:</p>
                  <ul className="space-y-1">
                    <li>• Historic-appropriate updates ($25K)</li>
                    <li>• Gourmet kitchen renovation ($32K)</li>
                    <li>• Bathroom modernization ($16K)</li>
                    <li>• Refinished original hardwoods ($5K)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">The Ponte Vedra Prize</CardTitle>
                  <Badge className="bg-green-100 text-green-800">18% ROI</Badge>
                </div>
                <p className="text-gray-600">Ponte Vedra Beach</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Purchase Price:</span>
                    <span className="font-semibold">$750,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Renovation Investment:</span>
                    <span className="font-semibold">$125,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sale Price:</span>
                    <span className="font-semibold">$1,050,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold">22 weeks</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-900 font-semibold">Client Profit:</span>
                    <span className="font-bold text-green-600">$155,000</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-2">Key Improvements:</p>
                  <ul className="space-y-1">
                    <li>• Luxury kitchen with ocean views ($45K)</li>
                    <li>• Master suite expansion ($35K)</li>
                    <li>• Outdoor living space ($25K)</li>
                    <li>• High-end finishes throughout ($20K)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flip Calculator */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Calculate Your Flip Potential</h2>
            <p className="text-xl text-gray-600">See your estimated returns with our flip calculator</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Fix & Flip Profit Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="purchase-price">Purchase Price</Label>
                  <div className="mt-2">
                    <Slider defaultValue={[500000]} max={1000000} min={300000} step={25000} className="w-full" />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>$300K</span>
                      <span className="font-semibold">$500K</span>
                      <span>$1M</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="renovation-costs">Estimated Renovation Costs</Label>
                  <div className="mt-2">
                    <Slider defaultValue={[75000]} max={200000} min={25000} step={5000} className="w-full" />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>$25K</span>
                      <span className="font-semibold">$75K</span>
                      <span>$200K</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="arv">Estimated ARV (After Repair Value)</Label>
                  <Input id="arv" type="number" placeholder="750000" className="mt-2" />
                </div>

                <Separator />

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Estimated Results</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Total Investment:</span>
                      <span className="font-semibold">$590,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Our Total Fees:</span>
                      <span className="font-semibold">$52,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Projected Sale:</span>
                      <span className="font-semibold">$750,000</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold">Your Net Profit:</span>
                      <span className="font-bold text-green-600">$107,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">ROI:</span>
                      <span className="font-bold text-blue-600">18.2%</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Get Detailed Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Next Fix & Flip Project</h2>
            <p className="text-xl text-gray-600">Simple process, maximum results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Property Identification</h3>
                <p className="text-gray-600">We help you find properties with flip potential in target markets</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Investment Analysis</h3>
                <p className="text-gray-600">
                  Complete financial analysis with renovation estimates and profit projections
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional Renovation</h3>
                <p className="text-gray-600">Expert construction management with timeline and quality guarantees</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Sale</h3>
                <p className="text-gray-600">Professional marketing and negotiation for maximum sale price</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Fix & Flip Journey?</h2>
            <p className="text-xl text-gray-600">Get started with a free consultation and property analysis</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Fix & Flip Consultation Request</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" className="mt-1" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="experience">Flip Experience</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first">First flip</SelectItem>
                        <SelectItem value="2-5">2-5 flips</SelectItem>
                        <SelectItem value="6+">6+ flips</SelectItem>
                        <SelectItem value="professional">Professional flipper</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Investment Budget</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="300-500">$300K-500K</SelectItem>
                        <SelectItem value="500-750">$500K-750K</SelectItem>
                        <SelectItem value="750-1000">$750K-1M</SelectItem>
                        <SelectItem value="1000+">$1M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Preferred Markets</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="jacksonville" />
                      <Label htmlFor="jacksonville" className="text-sm">
                        Jacksonville Metro
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="st-augustine" />
                      <Label htmlFor="st-augustine" className="text-sm">
                        St. Augustine
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ponte-vedra" />
                      <Label htmlFor="ponte-vedra" className="text-sm">
                        Ponte Vedra
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="fernandina" />
                      <Label htmlFor="fernandina" className="text-sm">
                        Fernandina Beach
                      </Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="timeline">Timeline to Start</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ready">Ready now</SelectItem>
                      <SelectItem value="30-days">Within 30 days</SelectItem>
                      <SelectItem value="90-days">Within 90 days</SelectItem>
                      <SelectItem value="planning">Just planning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea id="comments" className="mt-1" rows={4} />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Request Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 mr-4" />
            <h2 className="text-3xl font-bold">Fix & Flip Performance Guarantee</h2>
          </div>
          <p className="text-xl mb-6">
            If your flip doesn't sell within 90 days of listing at our recommended price, we'll reduce our commission by
            0.5% and provide additional marketing at no cost.
          </p>
          <p className="text-lg opacity-90">We stand behind our expertise and your success.</p>
        </div>
      </section>
    </div>
  )
}
