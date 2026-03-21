"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, TrendingUp, Home, Wrench, DollarSign } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

import { blogPosts } from "@/lib/blog-data"

const featuredPostData = blogPosts[0]
const featuredPost = {
  title: featuredPostData.title,
  excerpt: featuredPostData.excerpt,
  author: featuredPostData.author,
  date: featuredPostData.date,
  category: featuredPostData.category,
  readTime: featuredPostData.readTime,
  image: featuredPostData.image,
  href: `/resources/blog/${featuredPostData.slug}`,
}

const categories = [
  { name: "Market Analysis", count: 12, icon: <TrendingUp className="h-5 w-5" />, color: "bg-coastal-blue" },
  { name: "Home Improvement", count: 18, icon: <Wrench className="h-5 w-5" />, color: "bg-coastal-orange" },
  { name: "Buying Tips", count: 15, icon: <Home className="h-5 w-5" />, color: "bg-coastal-navy" },
  { name: "Investment", count: 8, icon: <DollarSign className="h-5 w-5" />, color: "bg-coastal-yellow" },
  { name: "Home Maintenance", count: 10, icon: <Wrench className="h-5 w-5" />, color: "bg-coastal-grey" },
]

const posts = blogPosts.slice(1).map((p) => ({
  title: p.title,
  href: `/resources/blog/${p.slug}`,
  excerpt: p.excerpt,
}))

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
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
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
                  src={featuredPost.image}
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
                    <Button asChild className="w-full bg-coastal-blue hover:bg-coastal-blue/90 text-white">
                      <Link href="/contact?service=newsletter">Sign Up for Updates</Link>
                    </Button>
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
          <Button asChild className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8 py-3">
            <Link href="/contact?service=newsletter">Subscribe to Newsletter</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
