"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Search, X, FileText, Building2, BookOpen } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

interface SearchResult {
  title: string
  description: string
  url: string
  category: string
  icon: "page" | "company" | "resource" | "blog"
}

const STATIC_PAGES: SearchResult[] = [
  { title: "Home", description: "Conine Coastal Group - Family of Companies", url: "/", category: "Pages", icon: "page" },
  { title: "About Us", description: "Learn about Conine Coastal Group", url: "/about", category: "Pages", icon: "page" },
  { title: "Contact", description: "Get in touch with our team", url: "/contact", category: "Pages", icon: "page" },
  { title: "Schedule Consultation", description: "Book a free consultation online", url: "/schedule", category: "Pages", icon: "page" },
  { title: "FAQ", description: "Frequently asked questions about our companies", url: "/faq", category: "Pages", icon: "page" },
  { title: "Client Reviews", description: "Read what our clients say about us", url: "/reviews", category: "Pages", icon: "page" },

  // Companies
  { title: "Conine Coastal Real Estate", description: "Residential & commercial real estate services", url: "/companies/real-estate", category: "Companies", icon: "company" },
  { title: "Conine Coastal Estates", description: "Construction and design-build services", url: "/companies/estates", category: "Companies", icon: "company" },
  { title: "Conine Coastal Development", description: "Land development and planning", url: "/companies/development", category: "Companies", icon: "company" },
  { title: "Conine Coastal Home Services", description: "Property maintenance and repairs", url: "/companies/home-services", category: "Companies", icon: "company" },
  { title: "Conine Coastal Travel", description: "Vacation rentals and experiences", url: "/companies/travel", category: "Companies", icon: "company" },

  // Resources
  { title: "Resources", description: "Guides, tools, and educational content", url: "/resources", category: "Resources", icon: "resource" },
  { title: "Homebuyer's Guide", description: "Complete guide to buying a home on the First Coast", url: "/resources/buyers-guide", category: "Resources", icon: "resource" },
  { title: "Seller's Checklist", description: "Maximize your home's sale value", url: "/resources/sellers-checklist", category: "Resources", icon: "resource" },
  { title: "Renovation Planning", description: "Smart renovation planning guide", url: "/resources/renovation-planning", category: "Resources", icon: "resource" },
  { title: "Blog", description: "Latest articles and market insights", url: "/resources/blog", category: "Resources", icon: "resource" },
  { title: "Market Updates", description: "First Coast real estate market updates", url: "/resources/market-updates", category: "Resources", icon: "resource" },
]

function getIcon(icon: string) {
  switch (icon) {
    case "company": return <Building2 className="h-4 w-4" />
    case "resource": return <BookOpen className="h-4 w-4" />
    case "blog": return <FileText className="h-4 w-4" />
    default: return <FileText className="h-4 w-4" />
  }
}

export default function SiteSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const allResults = useMemo<SearchResult[]>(() => [
    ...STATIC_PAGES,
    ...blogPosts.map((post) => ({
      title: post.title,
      description: post.excerpt,
      url: `/resources/blog/${post.slug}`,
      category: "Blog",
      icon: "blog" as const,
    })),
  ], [])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setSelectedIndex(0)
      return
    }

    const lower = query.toLowerCase()
    const terms = lower.split(/\s+/).filter(Boolean)

    const scored = allResults
      .map((item) => {
        const titleLower = item.title.toLowerCase()
        const descLower = item.description.toLowerCase()
        const catLower = item.category.toLowerCase()

        let score = 0
        for (const term of terms) {
          if (titleLower.includes(term)) score += 10
          if (titleLower.startsWith(term)) score += 5
          if (descLower.includes(term)) score += 3
          if (catLower.includes(term)) score += 2
        }
        return { ...item, score }
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)

    setResults(scored)
    setSelectedIndex(0)
  }, [query, allResults])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen) {
      const timerId = setTimeout(() => inputRef.current?.focus(), 50)
      return () => clearTimeout(timerId)
    } else {
      setQuery("")
      setResults([])
    }
  }, [isOpen])

  const navigate = (url: string) => {
    setIsOpen(false)
    router.push(url)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === "Enter" && results[selectedIndex]) {
      navigate(results[selectedIndex].url)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-coastal-grey hover:text-coastal-navy transition-colors p-2 -m-2 touch-manipulation"
        aria-label="Search site"
      >
        <Search className="h-5 w-5" />
        <span className="hidden lg:inline text-sm">
          <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-xs font-mono">Ctrl+K</kbd>
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div
            ref={dialogRef}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden"
          >
            <div className="flex items-center border-b px-4">
              <Search className="h-5 w-5 text-coastal-grey flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search companies, pages, blog posts..."
                aria-label="Search site"
                className="flex-1 py-4 px-3 text-base outline-none placeholder:text-coastal-grey/50"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-coastal-grey hover:text-coastal-navy p-1 touch-manipulation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {results.length > 0 && (
              <ul className="max-h-80 overflow-y-auto py-2">
                {results.map((result, index) => (
                  <li key={result.url}>
                    <button
                      onClick={() => navigate(result.url)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${
                        index === selectedIndex ? "bg-coastal-blue/5" : "hover:bg-gray-50"
                      }`}
                    >
                      <span className={`mt-0.5 flex-shrink-0 ${
                        index === selectedIndex ? "text-coastal-blue" : "text-coastal-grey/60"
                      }`}>
                        {getIcon(result.icon)}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`font-medium text-sm ${
                            index === selectedIndex ? "text-coastal-navy" : "text-coastal-grey"
                          }`}>
                            {result.title}
                          </span>
                          <span className="text-xs text-coastal-grey/50 bg-gray-100 px-1.5 py-0.5 rounded flex-shrink-0">
                            {result.category}
                          </span>
                        </div>
                        <p className="text-xs text-coastal-grey/60 truncate mt-0.5">
                          {result.description}
                        </p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {query && results.length === 0 && (
              <div className="py-8 text-center text-coastal-grey/60">
                <Search className="h-8 w-8 mx-auto mb-2 opacity-40" />
                <p className="text-sm">No results for &ldquo;{query}&rdquo;</p>
                <p className="text-xs mt-1">Try different keywords or browse our companies</p>
              </div>
            )}

            {!query && (
              <div className="py-4 px-4 text-center text-coastal-grey/50 text-xs">
                Type to search across all companies, pages, and blog posts
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
