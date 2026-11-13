import fs from "node:fs"
import path from "node:path"
import type { PersonalCard } from "@/lib/vcard"

/**
 * David's personal contact card (/david). This is the only card with a phone number.
 *
 * This repo is PUBLIC, so the personal email and mobile number are not in the source. They
 * come from two Vercel environment variables, set in the dashboard:
 *   PERSONAL_CARD_EMAIL, PERSONAL_CARD_PHONE (e.g. +1-904-555-0100)
 * With either unset, the card is served without that line and the build logs a warning.
 *
 * Headshot: put a square JPEG (about 400 px, under 100 KB) at public/people/david.jpg; it is
 * embedded in the vCard and shown on the page. Until then the page shows initials.
 */
export const PERSONAL_CARD_NAME = "David Conine"
export const PERSONAL_CARD_LINKEDIN = "https://www.linkedin.com/in/davidaconine/"
export const PERSONAL_CARD_PHOTO = "/people/david.jpg"

export function personalCard(env: Record<string, string | undefined> = process.env): PersonalCard {
  const email = env.PERSONAL_CARD_EMAIL?.trim() || null
  const phone = env.PERSONAL_CARD_PHONE?.trim() || null
  if (!email || !phone) {
    console.warn(
      `[personal-card] missing ${[!email && "PERSONAL_CARD_EMAIL", !phone && "PERSONAL_CARD_PHONE"].filter(Boolean).join(" and ")}; /david/contact.vcf is incomplete`,
    )
  }
  return { name: PERSONAL_CARD_NAME, email, phone, linkedin: PERSONAL_CARD_LINKEDIN, photo: readPhoto() }
}

export function hasPhoto(): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", PERSONAL_CARD_PHOTO))
}

function readPhoto(): Buffer | null {
  const file = path.join(process.cwd(), "public", PERSONAL_CARD_PHOTO)
  return fs.existsSync(file) ? fs.readFileSync(file) : null
}
