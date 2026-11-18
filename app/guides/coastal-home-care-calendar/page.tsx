import type { Metadata } from "next"
import Image from "next/image"
import { card } from "@/config/card"
import { CALENDAR as C } from "@/lib/card/giveaway"

/**
 * The conference give-away, linked from the day-0 card follow-up (lib/card/giveaway.ts).
 * Unlisted like /card: rendered without the site chrome (lib/bare-paths.ts), noindex here and
 * in next.config.mjs, and not in app/sitemap.ts. Laid out to print as a one-column checklist.
 */
export const metadata: Metadata = {
  title: { absolute: `${C.title} | ${card.organization}` },
  description: C.subtitle,
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function CoastalHomeCareCalendarPage() {
  return (
    <main className="mx-auto w-full max-w-2xl bg-white px-5 pt-[calc(1.5rem+env(safe-area-inset-top))] pb-[calc(3rem+env(safe-area-inset-bottom))] text-gray-900">
      <header>
        <Image
          src={card.logo.src}
          width={card.logo.width}
          height={card.logo.height}
          alt={card.organization}
          className="h-10 w-auto"
          sizes="85px"
          priority
        />
      </header>

      <h1 className="mt-10 font-serif text-4xl font-bold leading-[1.1] tracking-[-0.025em] text-coastal-navy">
        {C.title}
      </h1>
      <p className="mt-3 text-lg text-gray-600">{C.subtitle}</p>
      {C.intro.map((p) => (
        <p key={p} className="mt-5 text-base leading-relaxed text-gray-700">
          {p}
        </p>
      ))}

      {C.sections.map((s) => (
        <section key={s.heading} className="mt-10 break-inside-avoid">
          <h2 className="font-serif text-2xl font-bold text-coastal-navy">{s.heading}</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {s.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-gray-700">
                <span aria-hidden="true" className="mt-1.5 size-4 flex-none rounded-sm border-[1.5px] border-gray-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <hr className="mt-12 border-gray-200" />

      <section className="mt-8">
        <h2 className="font-serif text-2xl font-bold text-coastal-navy">About {card.organization}</h2>
        {C.about.map((p) => (
          <p key={p} className="mt-4 text-base leading-relaxed text-gray-700">
            {p}
          </p>
        ))}
        <address className="mt-6 flex flex-col gap-1 text-base not-italic">
          <span className="font-semibold text-gray-900">{C.signer.name}</span>
          <a
            href={`mailto:${C.signer.email}`}
            className="text-[#BF4E17] underline underline-offset-2 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-coastal-blue/50"
          >
            {C.signer.email}
          </a>
        </address>
        <p className="mt-8 text-sm italic text-gray-500">{C.disclaimer}</p>
      </section>
    </main>
  )
}
