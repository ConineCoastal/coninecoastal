import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, TrendingUp, Home, Wrench } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog & News - Conine Coastal | First Coast Real Estate & Construction Insights",
  description:
    "Expert insights on First Coast real estate market trends, home renovation tips, and construction industry news from Northeast Florida.",
  keywords: "First Coast real estate blog, construction news, home renovation tips, market trends, Northeast Florida",
  openGraph: {
    title: "Blog & News - Conine Coastal | First Coast Real Estate & Construction Insights",
    description:
      "Expert insights on First Coast real estate market trends, home renovation tips, and construction industry news from Northeast Florida.",
  },
  alternates: { canonical: "/resources/blog" },
}

function categoryColor(category: string): string {
  switch (category) {
    case "Market Update":
      return "bg-coastal-blue text-white"
    case "Renovation":
      return "bg-coastal-orange text-white"
    case "Community":
      return "bg-coastal-navy text-white"
    case "Buying Tips":
      return "bg-green-600 text-white"
    case "Investment":
      return "bg-coastal-yellow text-coastal-navy"
    default:
      return "bg-coastal-grey text-white"
  }
}

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 text-white">
        <Image
          src="https://images.unsplash.com/photo-1583777456855-d44bfb9066cf?auto=format&fit=crop&w=2000&q=80"
          alt="Real estate professional writing insights on a laptop"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-transparent border-white text-white hover:bg-white hover:text-coastal-navy"
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
            <Badge className="mb-4 bg-coastal-orange text-white">Featured Article</Badge>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <Link href={`/resources/blog/${featuredPost.slug}`} className="block">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-coastal-navy to-coastal-blue p-8 lg:p-12 text-white">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                      {featuredPost.excerpt}
                    </p>
                    <Button variant="secondary" size="lg">
                      Read Full Article
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-serif font-semibold text-coastal-navy mb-3">Key Market Indicators</h3>
                        <ul className="space-y-2 text-coastal-grey">
                          <li>• Inventory levels up 15% from last year</li>
                          <li>• Average days on market: 28 days</li>
                          <li>• Price appreciation slowing to sustainable levels</li>
                          <li>• Construction costs stabilizing</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-coastal-navy mb-3">What This Means</h3>
                        <ul className="space-y-2 text-coastal-grey">
                          <li>• More balanced market conditions</li>
                          <li>• Better opportunities for buyers</li>
                          <li>• Strategic timing becomes crucial for sellers</li>
                          <li>• Quality and condition matter more than ever</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coastal-navy mb-4">Explore by Category</h2>
            <p className="text-lg text-coastal-grey max-w-3xl mx-auto">
              Find the insights most relevant to your First Coast real estate and renovation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-coastal-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-coastal-blue" />
                </div>
                <CardTitle className="text-coastal-navy font-serif">Market Updates</CardTitle>
                <CardDescription>Latest trends and analysis from the First Coast</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-coastal-grey">Recent Posts:</span>
                    <Badge variant="secondary">12</Badge>
                  </div>
                  <ul className="space-y-1 text-sm text-coastal-grey">
                    <li>• Q4 2024 Market Report</li>
                    <li>• Amelia Island Luxury Trends</li>
                    <li>• St. Augustine Historic District Analysis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-coastal-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-coastal-orange" />
                </div>
                <CardTitle className="text-coastal-navy font-serif">Renovation Tips</CardTitle>
                <CardDescription>Expert construction and improvement advice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-coastal-grey">Recent Posts:</span>
                    <Badge variant="secondary">18</Badge>
                  </div>
                  <ul className="space-y-1 text-sm text-coastal-grey">
                    <li>• Kitchen ROI Maximization</li>
                    <li>• Coastal Construction Considerations</li>
                    <li>• Hurricane-Resistant Upgrades</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-coastal-navy/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-coastal-navy" />
                </div>
                <CardTitle className="text-coastal-navy font-serif">Community News</CardTitle>
                <CardDescription>First Coast developments and local insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-coastal-grey">Recent Posts:</span>
                    <Badge variant="secondary">8</Badge>
                  </div>
                  <ul className="space-y-1 text-sm text-coastal-grey">
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-coastal-navy mb-4">Recent Posts</h2>
              <p className="text-lg text-coastal-grey">Stay up-to-date with the latest insights and analysis</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <Link href={`/resources/blog/${post.slug}`} className="block h-full">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <Badge className={`absolute top-3 left-3 ${categoryColor(post.category)}`}>
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm text-coastal-grey">{post.date}</span>
                      <span className="text-sm text-coastal-grey">· {post.readTime}</span>
                    </div>
                    <CardTitle className="text-coastal-navy font-serif text-lg">
                      {post.title}
                    </CardTitle>
                    <CardDescription>
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-coastal-grey">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <span className="text-coastal-blue text-sm font-medium flex items-center">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="py-16 bg-coastal-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Stay Informed with Our Newsletter</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get monthly market updates, renovation tips, and exclusive insights delivered to your inbox.
          </p>
          <Button asChild size="lg" className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8 py-3">
            <Link href="/contact?service=newsletter">Subscribe to Newsletter</Link>
          </Button>
          <p className="text-sm mt-4 opacity-80">No spam, unsubscribe anytime. Your email stays private.</p>
        </div>
      </section>
    </div>
  )
}
