import { card } from "@/config/card"
import { buildVCard } from "@/lib/vcard"

// Built once at build time: the card changes only when config/card.ts does.
export const dynamic = "force-static"

export function GET() {
  const vcf = buildVCard({
    name: card.person.name,
    email: card.person.email,
    phone: null, // the personal card (/david) is the only one with a phone number
    linkedin: null,
    photo: null,
    org: card.organization,
    title: card.person.title,
    url: card.url,
  })
  return new Response(vcf, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'inline; filename="David-Conine-Conine-Coastal.vcf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
      "X-Robots-Tag": "noindex, nofollow",
    },
  })
}
