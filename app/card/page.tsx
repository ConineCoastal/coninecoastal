import type { Metadata } from "next"
import Image from "next/image"
import { UserPlus } from "lucide-react"
import { card, VCARD_PATH } from "@/config/card"
import { formatEventBadge, parseEvent } from "@/lib/card/entry"
import { CardLeadForm } from "@/components/card/card-lead-form"

/**
 * The Conine Coastal conference contact card. Reached from a QR code, never from the site's
 * navigation; rendered without the site chrome (components/site-chrome.tsx) and kept out of
 * search (noindex here and in next.config.mjs, disallowed in app/robots.ts).
 *
 * The orange accent is darkened on this page: brand Inlet Orange (#F16622) gives white text only
 * 3.2:1, so text and the Send button use #BF4E17 (4.9:1 on white) and the badge uses #9A3D0F.
 */
export const metadata: Metadata = {
  title: { absolute: `${card.person.name} | ${card.organization}` },
  description: `${card.person.name}, ${card.person.title}, ${card.organization}.`,
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

interface Props { searchParams: Promise<Record<string, string | string[] | undefined>> }

export default async function CardPage({ searchParams }: Props) {
  const event = parseEvent((await searchParams).e)
  const badge = formatEventBadge(event)
  const p = card.person
  const [taglineLead, ...taglineRest] = card.descriptor.split(" ")

  return (
    <div className="mx-auto min-h-dvh w-full max-w-md bg-white px-5 pt-[calc(1.25rem+env(safe-area-inset-top))] pb-[calc(2rem+env(safe-area-inset-bottom))] text-gray-900">
      <header className="flex items-center justify-between gap-4">
        <Image
          src={card.logo.src}
          width={card.logo.width}
          height={card.logo.height}
          alt={card.organization}
          className="h-10 w-auto"
          sizes="85px"
          priority
        />
        {badge && (
          <span className="rounded-full bg-coastal-orange/10 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-[#9A3D0F]">
            {badge}
          </span>
        )}
      </header>

      <section aria-label={p.name} className="mt-10 flex flex-col items-center text-center">
        <span
          aria-hidden="true"
          className="inline-flex size-24 items-center justify-center rounded-full bg-coastal-navy/5 font-serif text-3xl text-coastal-navy ring-1 ring-coastal-navy/15"
        >
          DC
        </span>
        <p className="mt-4 text-lg font-semibold text-gray-900">{p.name}</p>
        <p className="mt-0.5 text-sm text-gray-500">{p.title}</p>
      </section>

      <h1 className="mt-10 font-serif text-4xl font-bold leading-[1.1] tracking-[-0.025em] text-coastal-navy">
        {card.copy.headline}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-gray-600">{card.copy.intro}</p>

      <CardLeadForm event={event} copy={card.copy} />

      <a
        href={VCARD_PATH}
        className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 text-base font-semibold text-coastal-navy transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-coastal-blue/50 focus-visible:ring-offset-2"
      >
        <UserPlus aria-hidden="true" className="size-5" />
        {card.copy.saveLabel}
      </a>

      <hr className="mt-10 border-gray-200" />

      <address className="mt-8 flex flex-col gap-1 text-base not-italic">
        <span className="font-semibold text-gray-900">{p.name}</span>
        <span className="text-gray-600">{p.title}</span>
        <a
          href={`mailto:${p.email}`}
          className="mt-1 w-fit text-gray-900 underline underline-offset-4 hover:text-coastal-navy focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-coastal-blue/50"
        >
          {p.email}
        </a>
        <a
          href={card.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 w-fit font-semibold text-[#BF4E17] hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-coastal-blue/50"
        >
          {card.copy.connectLabel}
        </a>
      </address>

      <footer className="mt-12 flex items-baseline justify-between gap-4 text-sm">
        <span className="font-serif text-gray-900">
          {taglineLead} <span className="text-[#BF4E17]">{taglineRest.join(" ")}</span>
        </span>
        <span className="text-gray-500">{card.domain}</span>
      </footer>
    </div>
  )
}
