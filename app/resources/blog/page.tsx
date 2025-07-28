import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, TrendingUp, Home, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog & News - Conine Coastal | First Coast Real Estate & Construction Insights",
  description:
    "Expert insights on First Coast real estate market trends, home renovation tips, and construction industry news from Northeast Florida.",
  keywords: "First Coast real estate blog, construction news, home renovation tips, market trends, Northeast Florida",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#18457C] to-[#229FD9] text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Latest Insights & News</h1>
            <p className="text-xl md:text-2xl mb-8">
              Expert perspectives on First Coast real estate, construction trends, and market insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#featured">Read Featured Posts</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#18457C]"
                asChild
              >
                <Link href="#newsletter">Subscribe to Newsletter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section id="featured" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Badge className="mb-4 bg-[#F16622] text-white">Featured Article</Badge>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-[#18457C] to-[#229FD9] p-8 lg:p-12 text-white">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>December 15, 2024</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <User className="h-4 w-4" />
                      <span>David Conine</span>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                    First Coast Market Outlook: What 2025 Holds for Buyers and Sellers
                  </h2>
                  <p className="text-lg mb-8 opacity-90">
                    After analyzing Q4 2024 data and current market indicators, here's what I'm seeing for the First
                    Coast real estate market in the coming year, plus strategic advice for both buyers and sellers.
                  </p>
                  <Button variant="secondary" size="lg">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-serif font-semibold text-[#18457C] mb-3">Key Market Indicators</h3>
                      <ul className="space-y-2 text-[#707070]">
                        <li>• Inventory levels up 15% from last year</li>
                        <li>• Average days on market: 28 days</li>
                        <li>• Price appreciation slowing to sustainable levels</li>
                        <li>• Construction costs stabilizing</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-[#18457C] mb-3">What This Means</h3>
                      <ul className="space-y-2 text-[#707070]">
                        <li>• More balanced market conditions</li>
                        <li>• Better opportunities for buyers</li>
                        <li>• Strategic timing becomes crucial for sellers</li>
                        <li>• Quality and condition matter more than ever</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">Explore by Category</h2>
            <p className="text-lg text-[#707070] max-w-3xl mx-auto">
              Find the insights most relevant to your First Coast real estate and renovation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-[#229FD9]/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[#229FD9]" />
                </div>
                <CardTitle className="text-[#18457C] font-serif">Market Updates</CardTitle>
                <CardDescription>Latest trends and analysis from the First Coast</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#707070]">Recent Posts:</span>
                    <Badge variant="secondary">12</Badge>
                  </div>
                  <ul className="space-y-1 text-sm text-[#707070]">
                    <li>• Q4 2024 Market Report</li>
                    <li>• Amelia Island Luxury Trends</li>
                    <li>• St. Augustine Historic District Analysis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F16622]/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-[#F16622]" />
                </div>
                <CardTitle className="text-[#18457C] font-serif">Renovation Tips</CardTitle>
                <CardDescription>Expert construction and improvement advice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#707070]">Recent Posts:</span>
                    <Badge variant="secondary">18</Badge>
                  </div>
                  <ul className="space-y-1 text-sm text-[#707070]">
                    <li>• Kitchen ROI Maximization</li>
                    <li>• Coastal Construction Considerations</li>
                    <li>• Hurricane-Resistant Upgrades</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-[#18457C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-[#18457C]" />
                </div>
                <CardTitle className="text-[#18457C] font-serif">Community News</CardTitle>
                <CardDescription>First Coast developments and local insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#707070]">Recent Posts:</span>
                    <Badge variant="secondary">8</Badge>
                  </div>
                  <ul className="space-y-1 text-sm text-[#707070]">
                    <li>• New Development Projects</li>
                    <li>• Infrastructure Improvements</li>
                    <li>• Local Market Spotlights</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#18457C] mb-4">Recent Posts</h2>
              <p className="text-lg text-[#707070]">Stay up-to-date with the latest insights and analysis</p>
            </div>
            <Button variant="outline">View All Posts</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-3">
                  <Badge className="bg-[#229FD9] text-white">Market Update</Badge>
                  <span className="text-sm text-[#707070]">Dec 10, 2024</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">
                  5 Kitchen Updates That Actually Add Value
                </CardTitle>
                <CardDescription>
                  Not all kitchen improvements deliver the same ROI. Here's what really matters to First Coast buyers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070] mb-4">
                  After 20 years in construction and countless kitchen renovations, I've learned which updates truly add
                  value and which ones are just expensive...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-[#707070]">
                    <User className="h-4 w-4" />
                    <span>David Conine</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Post 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-3">
                  <Badge className="bg-[#F16622] text-white">Renovation</Badge>
                  <span className="text-sm text-[#707070]">Dec 8, 2024</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">Best Time to Buy on Amelia Island</CardTitle>
                <CardDescription>
                  Understanding seasonal patterns and market cycles can save you thousands on your Amelia Island
                  purchase.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070] mb-4">
                  Amelia Island's luxury market has unique seasonal patterns that smart buyers can leverage. Here's what
                  I've observed over the past decade...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-[#707070]">
                    <User className="h-4 w-4" />
                    <span>David Conine</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Post 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-3">
                  <Badge className="bg-[#18457C] text-white">Community</Badge>
                  <span className="text-sm text-[#707070]">Dec 5, 2024</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">
                  Hurricane Preparation for Coastal Homes
                </CardTitle>
                <CardDescription>
                  Essential preparations and improvements that protect your First Coast investment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070] mb-4">
                  Living on the First Coast means preparing for hurricane season. Here are the most effective ways to
                  protect your home and family...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-[#707070]">
                    <User className="h-4 w-4" />
                    <span>David Conine</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Post 4 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-3">
                  <Badge className="bg-[#229FD9] text-white">Market Update</Badge>
                  <span className="text-sm text-[#707070]">Dec 3, 2024</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">
                  St. Augustine Historic District: Investment Opportunities
                </CardTitle>
                <CardDescription>
                  Navigating the unique challenges and opportunities of historic property ownership.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070] mb-4">
                  The St. Augustine Historic District offers unique investment opportunities, but requires specialized
                  knowledge of preservation requirements...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-[#707070]">
                    <User className="h-4 w-4" />
                    <span>David Conine</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Post 5 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-3">
                  <Badge className="bg-[#F16622] text-white">Renovation</Badge>
                  <span className="text-sm text-[#707070]">Nov 30, 2024</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">
                  Choosing the Right Contractor: Red Flags to Avoid
                </CardTitle>
                <CardDescription>
                  Protect yourself from costly mistakes with these contractor selection guidelines.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070] mb-4">
                  As both a contractor and realtor, I've seen the aftermath of poor contractor choices. Here's how to
                  avoid the most common pitfalls...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-[#707070]">
                    <User className="h-4 w-4" />
                    <span>David Conine</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Post 6 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-3">
                  <Badge className="bg-[#18457C] text-white">Community</Badge>
                  <span className="text-sm text-[#707070]">Nov 28, 2024</span>
                </div>
                <CardTitle className="text-[#18457C] font-serif text-lg">
                  Ponte Vedra Beach: Market Analysis & Trends
                </CardTitle>
                <CardDescription>
                  Deep dive into one of the First Coast's most desirable luxury markets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#707070] mb-4">
                  Ponte Vedra Beach continues to attract discerning buyers seeking luxury coastal living. Here's what's
                  driving the market...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-[#707070]">
                    <User className="h-4 w-4" />
                    <span>David Conine</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-16 bg-[#18457C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Stay Informed with Our Newsletter</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get monthly market updates, renovation tips, and exclusive insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-[#18457C] placeholder-gray-400"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-80">No spam, unsubscribe anytime. Your email stays private.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
