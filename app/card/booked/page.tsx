import type { Metadata } from "next"
import Image from "next/image"
import { card } from "@/config/card"
import { parseCardBooking } from "@/lib/card/booking-entry"
import { RecordBooking } from "@/components/card/record-booking"

/**
 * Cal.com's "Redirect on booking" lands here with the booking's params (uid, startTime, endTime,
 * email, attendeeName, ...). Bare like /card (components/site-chrome.tsx, lib/bare-paths.ts) and
 * kept out of search. The booking is recorded by a client POST after load, never on this GET;
 * when the params are missing or invalid the page is neutral and nothing is sent.
 */
export const metadata: Metadata = {
  title: { absolute: `Booked | ${card.organization}` },
  description: `${card.person.name}, ${card.organization}.`,
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
}

interface Props { searchParams: Promise<Record<string, string | string[] | undefined>> }

export default async function CardBookedPage({ searchParams }: Props) {
  const parsed = parseCardBooking(await searchParams)
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
      </header>

      <section role="status" className="mt-10 rounded-xl border border-gray-200 bg-gray-50 px-5 py-6 text-center">
        {parsed ? (
          <>
            <h1 className="font-serif text-3xl font-bold text-coastal-navy">You&apos;re booked.</h1>
            <p className="mt-2 text-base text-gray-700">
              A calendar invite is on its way to <span className="font-semibold break-all">{parsed.params.email}</span>. Talk soon.
            </p>
            <RecordBooking booking={parsed.params} />
          </>
        ) : (
          <h1 className="font-serif text-2xl font-bold text-coastal-navy">Thanks — check your email for the invite.</h1>
        )}
      </section>

      <footer className="mt-12 flex items-baseline justify-between gap-4 text-sm">
        <span className="font-serif text-gray-900">
          {taglineLead} <span className="text-[#BF4E17]">{taglineRest.join(" ")}</span>
        </span>
        <span className="text-gray-500">{card.domain}</span>
      </footer>
    </div>
  )
}
