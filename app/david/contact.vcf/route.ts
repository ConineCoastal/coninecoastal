import { personalCard } from "@/lib/personal-card"
import { buildVCard } from "@/lib/vcard"

// Built at deploy time from the Vercel env (lib/personal-card.ts); a change there needs a redeploy.
export const dynamic = "force-static"

export function GET() {
  return new Response(buildVCard(personalCard()), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'inline; filename="David-Conine.vcf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
      "X-Robots-Tag": "noindex, nofollow",
    },
  })
}
