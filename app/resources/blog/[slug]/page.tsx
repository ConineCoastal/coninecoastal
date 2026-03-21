import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Breadcrumb from "@/components/breadcrumb"
import FadeIn from "@/components/fade-in"
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react"
import { blogPosts, getPostBySlug, getAllSlugs } from "@/lib/blog-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.title} | Conine Coastal Blog`,
    description: post.excerpt,
    alternates: { canonical: `/resources/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  }
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

function renderContent(paragraphs: string[]) {
  return paragraphs.map((paragraph, index) => {
    if (paragraph.startsWith("## ")) {
      return (
        <h2
          key={index}
          className="text-2xl md:text-3xl font-bold text-coastal-navy mt-10 mb-4 font-serif"
        >
          {paragraph.replace("## ", "")}
        </h2>
      )
    }

    // Handle paragraphs with bold text
    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g)
    return (
      <p key={index} className="text-coastal-grey leading-relaxed mb-4 text-lg">
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={i} className="text-coastal-navy font-semibold">
                {part.slice(2, -2)}
              </strong>
            )
          }
          return part
        })}
      </p>
    )
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[1]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <Badge className={`mb-4 ${categoryColor(post.category)}`}>{post.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1.5" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1.5" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1.5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="prose-lg">{renderContent(post.content)}</div>
          </FadeIn>
        </div>
      </article>

      {/* Author Card */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-coastal-blue/20">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-coastal-navy rounded-full flex items-center justify-center text-white text-2xl font-bold font-serif flex-shrink-0">
                  DC
                </div>
                <div>
                  <h3 className="text-xl font-bold text-coastal-navy font-serif mb-1">
                    David Conine
                  </h3>
                  <p className="text-sm text-coastal-blue mb-3">
                    Licensed Florida Realtor & General Contractor
                  </p>
                  <p className="text-coastal-grey leading-relaxed">
                    With 20+ years of construction experience and a deep understanding of the
                    Northeast Florida real estate market, David provides unique insights that
                    combine hands-on building knowledge with market expertise. Construction
                    Management degree from UNF, Harvard Real Estate Certificate.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-coastal-navy mb-8 font-serif">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/resources/blog/${related.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                    <div className="relative h-48">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <Badge className={`absolute top-3 left-3 ${categoryColor(related.category)}`}>
                        {related.category}
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold text-coastal-navy mb-2 font-serif">
                        {related.title}
                      </h3>
                      <p className="text-sm text-coastal-grey line-clamp-2">{related.excerpt}</p>
                      <div className="flex items-center mt-3 text-xs text-coastal-grey">
                        <Calendar className="h-3 w-3 mr-1" />
                        {related.date}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next Navigation */}
      <section className="py-8 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {prevPost ? (
              <Link
                href={`/resources/blog/${prevPost.slug}`}
                className="flex items-center text-coastal-navy hover:text-coastal-blue transition-colors group"
              >
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-coastal-grey">Previous</div>
                  <div className="text-sm font-medium line-clamp-1">{prevPost.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            <Link
              href="/resources/blog"
              className="text-sm text-coastal-grey hover:text-coastal-blue transition-colors"
            >
              All Articles
            </Link>
            {nextPost ? (
              <Link
                href={`/resources/blog/${nextPost.slug}`}
                className="flex items-center text-coastal-navy hover:text-coastal-blue transition-colors group"
              >
                <div className="text-right">
                  <div className="text-xs text-coastal-grey">Next</div>
                  <div className="text-sm font-medium line-clamp-1">{nextPost.title}</div>
                </div>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-coastal-navy to-coastal-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">
            Have Questions About This Topic?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get personalized advice from someone with 20+ years of construction and real estate
            experience on the First Coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Talk with David
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-coastal-navy hover:bg-white/90 px-8 py-4 text-lg"
            >
              <Link href="/contact" className="flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Send a Message
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            author: {
              "@type": "Person",
              name: post.author,
              jobTitle: "Licensed Florida Realtor & General Contractor",
            },
            publisher: {
              "@type": "Organization",
              name: "Conine Coastal",
              url: "https://www.coninecoastal.com",
            },
            datePublished: post.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.coninecoastal.com/resources/blog/${post.slug}`,
            },
          }),
        }}
      />
    </div>
  )
}
