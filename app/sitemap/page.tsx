import type { Metadata } from "next"
import Link from "next/link"

const sitemapLinks = [
  {
    title: "Home",
    items: [
      { label: "Overview", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Our Companies",
    items: [
      { label: "Conine Coastal Real Estate", href: "/companies/real-estate" },
      { label: "Conine Coastal Estates", href: "/companies/estates" },
      { label: "Conine Coastal Development", href: "/companies/development" },
      { label: "Conine Coastal Home Services", href: "/companies/home-services" },
      { label: "Conine Coastal Travel", href: "/companies/travel" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Resource Hub", href: "/resources" },
      { label: "Buyer's Guide", href: "/resources/buyers-guide" },
      { label: "Seller's Checklist", href: "/resources/sellers-checklist" },
      { label: "Renovation Planning", href: "/resources/renovation-planning" },
      { label: "Blog & News", href: "/resources/blog" },
      { label: "Market Updates", href: "/resources/market-updates" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Client Reviews", href: "/reviews" },
      { label: "FAQ", href: "/faq" },
      { label: "Schedule Consultation", href: "/schedule" },
      { label: "Client Portal", href: "/portal" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
]

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Quickly navigate to any Conine Coastal Group page, including our companies, resources, and more.",
  openGraph: {
    title: "Sitemap",
    description: "Quickly navigate to any Conine Coastal Group page, including our companies, resources, and more.",
  },
  alternates: { canonical: "/sitemap" },
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-coastal-navy font-serif">
            Sitemap
          </h1>
          <p className="text-lg text-coastal-grey">
            Explore every section of Conine Coastal Group in a single view.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2">
          {sitemapLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-2xl font-semibold text-coastal-navy">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-coastal-blue hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <footer className="text-center text-sm text-gray-400">
          <p>
            Need help finding something specific? Email
            <a href="mailto:info@coninecoastal.com" className="text-coastal-blue hover:underline ml-1">
              info@coninecoastal.com
            </a>
            or call
            <a href="tel:+19046241722" className="text-coastal-blue hover:underline ml-1">
              (904) 624-1722
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  )
}
