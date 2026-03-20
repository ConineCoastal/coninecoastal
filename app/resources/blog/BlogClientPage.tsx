"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, TrendingUp, Home, Wrench, DollarSign } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

const featuredPost = {
  title: "First Coast Market Trends - Q4 2024",
  excerpt:
    "Comprehensive analysis of Northeast Florida real estate market trends, including pricing, inventory levels, and buyer behavior patterns.",
  author: "David Conine",
  date: "December 15, 2024",
  category: "Market Analysis",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
  href: "/resources/blog/q4-2024-market-trends",
}

const _blogPosts = [
  {
    title: "5 Kitchen Updates That Actually Add Value",
    excerpt:
      "Not all kitchen renovations are created equal. Learn which updates provide the best return on investment in coastal markets.",
    author: "David Conine",
    date: "December 10, 2024",
    category: "Home Improvement",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80",
    href: "/resources/blog/kitchen-updates-roi",
  },
  {
    title: "Best Time to Buy on Amelia Island",
    excerpt:
      "Seasonal market patterns and timing strategies for purchasing property on Amelia Island and surrounding areas.",
    author: "David Conine",
    date: "December 5, 2024",
    category: "Buying Tips",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=400&q=80",
    href: "/resources/blog/amelia-island-buying-timing",
  },
  {
    title: "Emergency Hurricane Preparation for Coastal Homes",
    excerpt:
      "Essential preparation steps for protecting your coastal property during hurricane season, from a construction expert's perspective.",
    author: "David Conine",
    date: "November 28, 2024",
    category: "Home Maintenance",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    href: "/resources/blog/hurricane-preparation-coastal-homes",
  },
  {
    title: "St. Augustine Historic District Investment Opportunities",
    excerpt:
      "Analyzing investment potential in St. Augustine's historic properties, including renovation considerations and rental income prospects.",
    author: "David Conine",
    date: "November 20, 2024",
    category: "Investment",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80",
    href: "/resources/blog/st-augustine-investment-opportunities",
  },
  {
    title: "Bathroom Renovation ROI: What Works in Coastal Markets",
    excerpt:
      "Maximize your bathroom renovation investment with strategies that appeal to First Coast buyers and add real value.",
    author: "David Conine",
    date: "November 15, 2024",
    category: "Home Improvement",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80",
    href: "/resources/blog/bathroom-renovation-roi",
  },
  {
    title: "Jacksonville Beach Condo Market Update",
    excerpt:
      "Current trends in the Jacksonville Beach condominium market, including pricing, inventory, and buyer preferences.",
    author: "David Conine",
    date: "November 8, 2024",
    category: "Market Analysis",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
    href: "/resources/blog/jacksonville-beach-condo-market",
  },
]

void _blogPosts

const categories = [
  { name: "Market Analysis", count: 12, icon: <TrendingUp className="h-5 w-5" />, color: "bg-coastal-blue" },
  { name: "Home Improvement", count: 18, icon: <Wrench className="h-5 w-5" />, color: "bg-coastal-orange" },
  { name: "Buying Tips", count: 15, icon: <Home className="h-5 w-5" />, color: "bg-coastal-navy" },
  { name: "Investment", count: 8, icon: <DollarSign className="h-5 w-5" />, color: "bg-coastal-yellow" },
  { name: "Home Maintenance", count: 10, icon: <Wrench className="h-5 w-5" />, color: "bg-coastal-grey" },
]

const posts = [
  {
    title: "First Coast Market Trends – Q4 2024",
    href: "/resources/blog/q4-2024-market-trends",
    excerpt: "Prices continue to rise in St. Augustine while inventory remains tight…",
  },
  {
    title: "5 Kitchen Updates That Actually Add Value",
    href: "/resources/blog/kitchen-updates-roi",
    excerpt: "Not every upgrade nets a return—these five deliver the highest ROI…",
  },
  // more placeholder posts …
]

export default function BlogClientPage() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 text-white">
        <Image
          src="https://images.unsplash.com/photo-1583777456855-d44bfb9066cf?auto=format&fit=crop&w=2000&q=80"
          alt="Real estate expert drafting a blog post on a laptop"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif"
          >
            Latest Insights & News
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Expert insights on First Coast real estate trends, home renovation tips, and market analysis
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Stay informed with the latest news and expert advice from someone with 20+ years of construction and real
            estate experience.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-coastal-orange text-white">Featured Article</Badge>
            <h2
              className="text-3xl md:text-4xl font-bold text-coastal-navy mb-4 font-serif"
            >
              Latest Featured Post
            </h2>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-coastal-blue text-white">{featuredPost.category}</Badge>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <h3
                  className="text-3xl font-bold text-coastal-navy mb-4 font-serif"
                >
                  {featuredPost.title}
                </h3>
                <p className="text-coastal-grey mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-6 mb-6 text-sm text-coastal-grey">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button asChild className="bg-coastal-blue hover:bg-coastal-blue/90 text-white">
                  <Link href={featuredPost.href} className="flex items-center justify-center">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2
                className="text-3xl md:text-4xl font-bold text-coastal-navy mb-8 font-serif"
              >
                Recent Articles
              </h2>

              <div className="space-y-8">
                {posts.map((post) => (
                  <Card key={post.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href={post.href} className="block h-full">
                      <CardHeader>
                        <CardTitle>{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>{post.excerpt}</CardContent>
                    </Link>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  className="border-coastal-blue text-coastal-blue hover:bg-coastal-blue hover:text-white px-8 py-3 bg-transparent"
                >
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Categories */}
                <Card>
                  <CardContent className="p-6">
                    <h3
                      className="text-xl font-bold text-coastal-navy mb-6 font-serif"
                    >
                      Categories
                    </h3>
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          href={`/resources/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
                        >
                          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-8 h-8 ${category.color} rounded-full flex items-center justify-center text-white`}
                              >
                                {category.icon}
                              </div>
                              <span className="text-coastal-grey hover:text-coastal-blue">{category.name}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {category.count}
                            </Badge>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="bg-gradient-to-r from-coastal-blue/5 to-coastal-navy/5 border-2 border-coastal-blue/20">
                  <CardContent className="p-6 text-center">
                    <h3
                      className="text-xl font-bold text-coastal-navy mb-4 font-serif"
                    >
                      Stay Updated
                    </h3>
                    <p className="text-coastal-grey mb-6">
                      Get the latest First Coast real estate insights and renovation tips delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coastal-blue focus:border-transparent"
                      />
                      <Button className="w-full bg-coastal-blue hover:bg-coastal-blue/90 text-white">Subscribe</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Featured Resources */}
                <Card>
                  <CardContent className="p-6">
                    <h3
                      className="text-xl font-bold text-coastal-navy mb-6 font-serif"
                    >
                      Featured Resources
                    </h3>
                    <div className="space-y-4">
                      <Link
                        href="/resources/buyers-guide"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-semibold text-coastal-navy mb-1">Homebuyer's Guide</h4>
                        <p className="text-sm text-coastal-grey">Complete guide to buying your First Coast home</p>
                      </Link>
                      <Link
                        href="/resources/sellers-checklist"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-semibold text-coastal-navy mb-1">Seller's Checklist</h4>
                        <p className="text-sm text-coastal-grey">Maximize your home's sale value</p>
                      </Link>
                      <Link
                        href="/resources/renovation-planning"
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-semibold text-coastal-navy mb-1">Renovation Planning</h4>
                        <p className="text-sm text-coastal-grey">Smart renovation planning guide</p>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-coastal-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 font-serif"
          >
            Get Expert Insights Delivered
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter for the latest First Coast real estate trends and renovation tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-coastal-navy focus:outline-none focus:ring-2 focus:ring-coastal-blue"
            />
            <Button className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8 py-3">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
