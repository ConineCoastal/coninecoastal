import type { Metadata } from "next"
import Image from "next/image"
import { UserPlus } from "lucide-react"
import { card, VCARD_PATH } from "@/config/card"
import { parseEvent } from "@/lib/card/entry"
import { CardLeadForm } from "@/components/card/card-lead-form"

/**
 * The Conine Coastal conference contact card. Reached from a QR code, never from the site's
 * navigation; rendered without the site chrome (components/site-chrome.tsx) and kept out of
 * search (noindex here and in next.config.mjs, disallowed in app/robots.ts).
 */
export const metadata: Metadata = {
  title: { absolute: `${card.person.name} | ${card.organization}` },
  description: `${card.person.name}, ${card.person.title}, ${card.organization}.`,
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

interface Props { searchParams: Promise<Record<string, string | string[] | undefined>> }

export default async function CardPage({ searchParams }: Props) {
  const event = parseEvent((await searchParams).e)
  const p = card.person

  return (
    <div className="mx-auto min-h-dvh w-full max-w-md bg-white pb-[calc(2.5rem+env(safe-area-inset-bottom))] text-gray-900">
      <header className="flex flex-col items-center gap-3 bg-coastal-navy px-4 pt-[calc(1.75rem+env(safe-area-inset-top))] pb-6 text-center text-white">
        <span className="inline-flex rounded-md bg-white px-4 py-2">
          <Image
            src={card.logo.src}
            width={card.logo.width}
            height={card.logo.height}
            alt={card.organization}
            className="h-14 w-auto"
            sizes="120px"
            priority
          />
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.14em]">{card.descriptor}</span>
      </header>

      <section aria-labelledby="card-name" className="flex flex-col items-center px-4 pt-7 text-center">
        <span
          aria-hidden="true"
          className="inline-flex size-28 items-center justify-center rounded-full border-[3px] border-coastal-blue/50 bg-gray-50 font-serif text-4xl text-coastal-navy"
        >
          DC
        </span>
        <h1 id="card-name" className="mt-4 font-serif text-3xl leading-tight text-coastal-navy">
          {p.name}
        </h1>
        <p className="mt-1 text-base">{p.title}</p>
        <p className="mt-0.5 text-sm text-gray-500">{card.domain}</p>
        <p className="mt-5 max-w-xs text-base leading-relaxed">{card.copy.intro}</p>

        <a
          href={VCARD_PATH}
          className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-coastal-navy px-6 text-base font-semibold text-white transition-colors hover:bg-coastal-navy/90 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-coastal-blue/50 focus-visible:ring-offset-2"
        >
          <UserPlus aria-hidden="true" className="size-5" />
          {card.copy.saveLabel}
        </a>
      </section>

      <CardLeadForm event={event} copy={card.copy} />
    </div>
  )
}
