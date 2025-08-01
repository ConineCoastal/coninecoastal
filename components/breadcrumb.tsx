"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Breadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter((segment) => segment !== "")

  const breadcrumbs = [{ label: "Home", href: "/" }]

  let currentHref = ""
  for (const segment of pathSegments) {
    currentHref += `/${segment}`
    const breadcrumbLabel = segment.replace(/-/g, " ").replace(/^(.)/, (match) => match.toUpperCase())
    breadcrumbs.push({ label: breadcrumbLabel, href: currentHref })
  }

  return (
    <div className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      </div>
    </div>
  )
}
