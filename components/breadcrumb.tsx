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

  const baseUrl = "https://www.coninecoastal.com"

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${baseUrl}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-coastal-navy">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center">
                  {index > 0 && <ArrowRight className="h-4 w-4 mx-2 text-coastal-grey" aria-hidden="true" />}
                  <Link
                    href={crumb.href}
                    className={`hover:text-coastal-blue transition-colors ${
                      index === breadcrumbs.length - 1 ? "font-semibold" : ""
                    }`}
                  >
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </>
  )
}
