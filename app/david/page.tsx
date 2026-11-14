import type { Metadata } from "next"
import Image from "next/image"
import { PERSONAL_CARD_LINKEDIN, PERSONAL_CARD_NAME, PERSONAL_CARD_PHOTO, hasPhoto } from "@/lib/personal-card"

// David's personal contact card, reached by QR code. Not in the sitemap or the nav.
export const metadata: Metadata = {
  title: { absolute: PERSONAL_CARD_NAME }, // no "| Conine Coastal Group" suffix: a personal card
  description: "Save David Conine's contact.",
  robots: { index: false, follow: false },
}

export default function PersonalCardPage() {
  const photo = hasPhoto()
  return (
    <section className="mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-center px-4 py-12 text-center sm:py-16">
      {photo ? (
        <Image
          src={PERSONAL_CARD_PHOTO}
          width={128}
          height={128}
          alt=""
          priority
          className="h-32 w-32 rounded-full border-4 border-coastal-blue/40 object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-coastal-blue/40 font-serif text-4xl text-coastal-navy"
        >
          DC
        </span>
      )}
      <h1 className="mt-6 font-serif text-4xl text-coastal-navy">{PERSONAL_CARD_NAME}</h1>
      <p className="mt-3 text-base text-gray-600">Save my contact to your phone.</p>

      <a
        href="/david/contact.vcf"
        className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-coastal-navy px-5 text-lg font-semibold text-white transition-colors hover:bg-coastal-navy/90 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-coastal-blue"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
          <path
            fill="currentColor"
            d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.3 0-8 1.7-8 5v1h16v-1c0-3.3-4.7-5-8-5Zm7-6h-2V6h-2V4h2V2h2v2h2v2h-2v2Z"
          />
        </svg>
        Save my contact
      </a>
      <a
        href={PERSONAL_CARD_LINKEDIN}
        rel="noopener noreferrer"
        className="mt-3 inline-flex min-h-[52px] w-full items-center justify-center rounded-lg border-2 border-coastal-navy px-5 text-lg font-semibold text-coastal-navy transition-colors hover:bg-coastal-navy/5 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-coastal-blue"
      >
        LinkedIn
      </a>
    </section>
  )
}
