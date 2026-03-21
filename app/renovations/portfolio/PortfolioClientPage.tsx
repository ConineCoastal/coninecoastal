"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FadeIn from "@/components/fade-in"
import {
  Phone,
  Mail,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
} from "lucide-react"

type Category = "All" | "Kitchen" | "Bathroom" | "Whole Home" | "Exterior" | "Flooring" | "Addition"

interface Project {
  id: number
  title: string
  category: Category
  location: string
  duration: string
  investment: string
  valueAdded: string
  description: string
  highlights: string[]
  before: string
  after: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Historic San Marco Kitchen Revival",
    category: "Kitchen",
    location: "San Marco, Jacksonville",
    duration: "8 weeks",
    investment: "$52,000",
    valueAdded: "$85,000",
    description:
      "Complete gut renovation of a 1940s kitchen, preserving original charm while adding modern functionality. Custom cabinetry, quartz countertops, and professional-grade appliances.",
    highlights: [
      "Custom shaker cabinetry",
      "Quartz waterfall island",
      "Professional gas range",
      "Under-cabinet lighting",
    ],
    before:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Ponte Vedra Coastal Bathroom Retreat",
    category: "Bathroom",
    location: "Ponte Vedra Beach",
    duration: "5 weeks",
    investment: "$34,000",
    valueAdded: "$52,000",
    description:
      "Master bathroom transformed into a spa-like retreat with walk-in shower, freestanding tub, and coastal-inspired tile work. Humidity-resistant materials selected for coastal longevity.",
    highlights: [
      "Frameless glass shower",
      "Freestanding soaking tub",
      "Heated tile floors",
      "Custom vanity with dual sinks",
    ],
    before:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Riverside Whole Home Transformation",
    category: "Whole Home",
    location: "Riverside, Jacksonville",
    duration: "14 weeks",
    investment: "$145,000",
    valueAdded: "$225,000",
    description:
      "Complete renovation of a mid-century home including open floor plan conversion, new kitchen and bathrooms, updated electrical and plumbing, and modern finishes throughout.",
    highlights: [
      "Open floor plan conversion",
      "New HVAC system",
      "Impact-resistant windows",
      "Luxury vinyl plank flooring",
    ],
    before:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Amelia Island Exterior Makeover",
    category: "Exterior",
    location: "Amelia Island",
    duration: "6 weeks",
    investment: "$68,000",
    valueAdded: "$95,000",
    description:
      "Complete exterior renovation including new HardiePlank siding, impact windows, updated landscaping, and a redesigned front entry. Built to withstand coastal weather.",
    highlights: [
      "HardiePlank fiber cement siding",
      "Impact-rated windows & doors",
      "New front porch & entry",
      "Professional landscaping",
    ],
    before:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "St. Augustine Beach Kitchen Remodel",
    category: "Kitchen",
    location: "St. Augustine Beach",
    duration: "7 weeks",
    investment: "$41,000",
    valueAdded: "$65,000",
    description:
      "Bright coastal kitchen remodel featuring white shaker cabinets, butcher block island, subway tile backsplash, and stainless steel appliances. Optimized layout for entertaining.",
    highlights: [
      "White shaker cabinets",
      "Butcher block island",
      "Subway tile backsplash",
      "Pendant lighting",
    ],
    before:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Neptune Beach Hardwood Flooring",
    category: "Flooring",
    location: "Neptune Beach",
    duration: "2 weeks",
    investment: "$18,000",
    valueAdded: "$28,000",
    description:
      "Replaced dated carpet and vinyl with engineered hardwood throughout the main living areas. Moisture-resistant underlayment selected for coastal humidity.",
    highlights: [
      "Engineered white oak hardwood",
      "Moisture-resistant underlayment",
      "Custom stain matching",
      "Seamless transitions",
    ],
    before:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Nocatee Guest Suite Addition",
    category: "Addition",
    location: "Nocatee, Ponte Vedra",
    duration: "12 weeks",
    investment: "$95,000",
    valueAdded: "$140,000",
    description:
      "600 sq ft guest suite addition with full bathroom, walk-in closet, and private entrance. Seamlessly matched to existing architecture with coastal-rated construction.",
    highlights: [
      "600 sq ft living space",
      "Full en-suite bathroom",
      "Private entrance",
      "Matched exterior finishes",
    ],
    before:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Jacksonville Beach Bathroom Remodel",
    category: "Bathroom",
    location: "Jacksonville Beach",
    duration: "4 weeks",
    investment: "$22,000",
    valueAdded: "$35,000",
    description:
      "Hall bathroom converted into a modern oasis with large-format porcelain tile, floating vanity, and curbless shower entry. Salt-air resistant fixtures throughout.",
    highlights: [
      "Large-format porcelain tile",
      "Floating double vanity",
      "Curbless shower entry",
      "LED mirror cabinet",
    ],
    before:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
  },
]

const categories: Category[] = ["All", "Kitchen", "Bathroom", "Whole Home", "Exterior", "Flooring", "Addition"]

function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const updateSliderPosition = useCallback(
    (clientX: number) => {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    },
    []
  )

  const handleMouseDown = useCallback(() => setIsDragging(true), [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault()
        updateSliderPosition(e.clientX)
      }
    }
    const handleMouseUp = () => setIsDragging(false)

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, updateSliderPosition])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updateSliderPosition(e.touches[0].clientX)
    },
    [updateSliderPosition]
  )

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden cursor-col-resize select-none rounded-t-lg"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
      role="slider"
      aria-label={`Before and after comparison for ${title}`}
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setSliderPosition((p) => Math.max(0, p - 2))
        if (e.key === "ArrowRight") setSliderPosition((p) => Math.min(100, p + 2))
      }}
    >
      {/* After Image (full width, behind) */}
      <Image
        src={after}
        alt={`${title} after renovation`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Before Image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={before}
          alt={`${title} before renovation`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <ChevronLeft className="h-4 w-4 text-coastal-navy -mr-1" />
          <ChevronRight className="h-4 w-4 text-coastal-navy -ml-1" />
        </div>
      </div>

      {/* Labels */}
      <Badge className="absolute top-3 left-3 bg-gray-800/80 text-white text-xs z-20">Before</Badge>
      <Badge className="absolute top-3 right-3 bg-coastal-blue/90 text-white text-xs z-20">After</Badge>
    </div>
  )
}

function Lightbox({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  project: Project
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft" && hasPrev) onPrev()
      if (e.key === "ArrowRight" && hasNext) onNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-bold text-coastal-navy font-serif">{project.title}</h3>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6 text-coastal-grey" />
          </button>
        </div>

        {/* Before/After Slider - Large */}
        <div className="px-4 pt-4">
          <div className="rounded-lg overflow-hidden">
            <BeforeAfterSlider before={project.before} after={project.after} title={project.title} />
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6">
          <div className="grid sm:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center text-sm text-coastal-grey">
              <MapPin className="h-4 w-4 mr-2 text-coastal-blue flex-shrink-0" />
              {project.location}
            </div>
            <div className="flex items-center text-sm text-coastal-grey">
              <Calendar className="h-4 w-4 mr-2 text-coastal-blue flex-shrink-0" />
              {project.duration}
            </div>
            <div className="flex items-center text-sm text-coastal-grey">
              <DollarSign className="h-4 w-4 mr-2 text-coastal-orange flex-shrink-0" />
              Investment: {project.investment}
            </div>
            <div className="flex items-center text-sm text-coastal-grey">
              <TrendingUp className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
              Value Added: {project.valueAdded}
            </div>
          </div>

          <p className="text-coastal-grey leading-relaxed mb-6">{project.description}</p>

          <div>
            <h4 className="text-sm font-semibold text-coastal-navy mb-3">Project Highlights</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center text-sm text-coastal-grey">
                  <div className="w-1.5 h-1.5 bg-coastal-orange rounded-full mr-2 flex-shrink-0" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between p-4 border-t">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className="flex items-center text-sm text-coastal-navy hover:text-coastal-blue disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Previous Project
          </button>
          <Button asChild size="sm" className="bg-coastal-orange hover:bg-coastal-orange/90 text-white">
            <Link href={`/contact?service=${project.category.toLowerCase().replace(" ", "-")}`}>
              Start a Similar Project
            </Link>
          </Button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="flex items-center text-sm text-coastal-navy hover:text-coastal-blue disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Next Project
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function PortfolioClientPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  const lightboxProject = lightboxIndex !== null ? filteredProjects[lightboxIndex] : null

  const stats = {
    totalProjects: projects.length,
    totalInvested: "$475K+",
    totalValueCreated: "$725K+",
    avgROI: "53%",
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
          alt="Beautiful home renovation portfolio by Conine Coastal"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Badge className="mb-6 bg-coastal-orange text-white px-6 py-3 text-lg">Our Work</Badge>
          <h1 className="text-5xl lg:text-7xl font-bold text-coastal-navy mb-8 font-serif">
            Project Portfolio
          </h1>
          <p className="text-2xl lg:text-3xl text-coastal-grey mb-8 leading-relaxed">
            Before & After Transformations Across Northeast Florida
          </p>
          <p className="text-xl text-coastal-grey mb-12 max-w-4xl mx-auto leading-relaxed">
            Drag the slider on any project to reveal the transformation. Every project showcases our commitment
            to quality craftsmanship and value-driven construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-10 py-4 text-xl">
              <Link href="/contact?service=whole-home-renovation" className="flex items-center justify-center">
                <Phone className="mr-2 h-6 w-6" />
                Start Your Project
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-coastal-blue hover:bg-coastal-blue/90 text-white px-10 py-4 text-xl">
              <Link href="/contact?service=whole-home-renovation" className="flex items-center justify-center">
                <Mail className="mr-2 h-6 w-6" />
                Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-gradient-to-r from-coastal-navy to-coastal-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">{stats.totalProjects}+</div>
              <div className="text-sm text-white/70">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coastal-yellow">{stats.totalInvested}</div>
              <div className="text-sm text-white/70">Total Invested</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">{stats.totalValueCreated}</div>
              <div className="text-sm text-white/70">Value Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coastal-yellow">{stats.avgROI}</div>
              <div className="text-sm text-white/70">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-coastal-orange text-white shadow-md"
                    : "bg-white text-coastal-grey hover:text-coastal-navy hover:shadow border border-gray-200"
                }`}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({projects.filter((p) => p.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-coastal-navy mb-4 font-serif">
                {activeCategory === "All" ? "All Projects" : `${activeCategory} Projects`}
              </h2>
              <p className="text-xl text-coastal-grey max-w-3xl mx-auto">
                Click any project for full details. Drag the slider to compare before and after.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 100}>
                <Card
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                  onClick={() => setLightboxIndex(index)}
                >
                  <BeforeAfterSlider
                    before={project.before}
                    after={project.after}
                    title={project.title}
                  />
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs font-medium">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-coastal-grey flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {project.location}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-coastal-navy mb-2 font-serif group-hover:text-coastal-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-coastal-grey leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-2.5 rounded text-center">
                        <div className="text-base font-bold text-coastal-orange">{project.investment}</div>
                        <div className="text-xs text-gray-500">Investment</div>
                      </div>
                      <div className="bg-gray-50 p-2.5 rounded text-center">
                        <div className="text-base font-bold text-coastal-blue">{project.valueAdded}</div>
                        <div className="text-xs text-gray-500">Value Added</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-coastal-grey">No projects found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-coastal-navy to-coastal-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Every project in our portfolio started with a conversation. Let us show you what's possible for
            your home with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-coastal-orange hover:bg-coastal-orange/90 text-white px-8 py-4 text-lg"
            >
              <Link href="/contact?service=whole-home-renovation" className="flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Talk with Our Team
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-coastal-navy hover:bg-white/90 px-8 py-4 text-lg"
            >
              <Link href="/renovations" className="flex items-center justify-center">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxProject && lightboxIndex !== null && (
        <Lightbox
          project={lightboxProject}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
          onNext={() =>
            setLightboxIndex((i) => (i !== null && i < filteredProjects.length - 1 ? i + 1 : i))
          }
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < filteredProjects.length - 1}
        />
      )}
    </>
  )
}
