"use client"

import { useActionState, useId, type MouseEvent } from "react"
import { Share2 } from "lucide-react"
import { submitCardEntry, type CardFormState } from "@/app/actions/card"
import { CARD_INTERESTS, type CardConfig } from "@/config/card"
import { cardShareMailto, cardShareTitle, cardShareUrl } from "@/lib/card/share"
import { BookCallLink } from "@/components/card/book-call-link"

const initial: CardFormState = { status: "idle" }

const inputClass =
  "h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-base text-gray-900 focus-visible:border-coastal-navy focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-coastal-blue/40"
const labelClass = "text-sm font-medium text-gray-900"
const panelClass = "mt-8 rounded-xl border border-gray-200 bg-gray-50 px-5 py-6"
// The page's secondary button (the "Save my contact" style).
const secondaryButtonClass =
  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 text-base font-semibold text-coastal-navy transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-coastal-blue/50 focus-visible:ring-offset-2"

/**
 * "Send this card to a colleague": the share sheet where there is one, else a mailto with no
 * recipient. The link carries this entry's id as `ref`. The site sends nothing.
 */
function ForwardCardLink({ entryId, event }: { entryId: string; event: string | null }) {
  const url = cardShareUrl(entryId, event)
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (typeof navigator === "undefined" || typeof navigator.share !== "function") return
    e.preventDefault()
    // A dismissed share sheet rejects with AbortError; nothing to do either way.
    navigator.share({ title: cardShareTitle, url }).catch(() => undefined)
  }
  return (
    <a href={cardShareMailto(url)} onClick={onClick} className={`mt-6 ${secondaryButtonClass}`}>
      <Share2 aria-hidden="true" className="size-5" />
      Send this card to a colleague
    </a>
  )
}

export function CardLeadForm({
  event,
  refId,
  copy,
  bookingUrl = null,
}: {
  event: string | null
  refId: string | null
  copy: CardConfig["copy"]
  /** The validated CARD_BOOKING_URL, from the server page; null hides the booking button. */
  bookingUrl?: string | null
}) {
  const [state, action, pending] = useActionState(submitCardEntry, initial)
  const id = useId()
  const errId = `${id}-error`

  if (state.status === "ok") {
    return (
      <section role="status" aria-live="polite" className={`${panelClass} text-center`}>
        <h2 className="font-serif text-2xl font-bold text-coastal-navy">{copy.thanksHeading}</h2>
        <p className="mt-2 text-base text-gray-700">{copy.thanksBody}</p>
        <BookCallLink bookingUrl={bookingUrl} email={state.email} name={state.name} className="mt-6" />
        {state.entryId && <ForwardCardLink entryId={state.entryId} event={event} />}
      </section>
    )
  }

  const isError = state.status === "error"
  const emailError = isError && state.field === "email"
  const v = isError ? state.values : undefined

  return (
    <section aria-labelledby={`${id}-heading`} className={panelClass}>
      <h2 id={`${id}-heading`} className="text-lg font-semibold text-gray-900">
        {copy.formHeading}
      </h2>
      {/* The key remounts the form on each error so defaultValue restores what was typed. */}
      <form key={isError ? state.message + JSON.stringify(v) : "form"} action={action} noValidate className="mt-4 flex flex-col gap-4">
        <input type="hidden" name="event" value={event ?? ""} />
        <input type="hidden" name="ref" value={refId ?? ""} />

        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email <span className="font-normal text-gray-500">(required)</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="off"
            spellCheck={false}
            required
            aria-required="true"
            defaultValue={v?.email}
            aria-invalid={emailError || undefined}
            aria-describedby={isError ? errId : undefined}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-name`} className={labelClass}>
            Name
          </label>
          <input id={`${id}-name`} name="name" type="text" autoComplete="name" maxLength={120} defaultValue={v?.name} className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-org`} className={labelClass}>
            Organization
          </label>
          <input
            id={`${id}-org`}
            name="organization"
            type="text"
            autoComplete="organization"
            maxLength={160}
            defaultValue={v?.organization}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-title`} className={labelClass}>
            Title
          </label>
          <input
            id={`${id}-title`}
            name="title"
            type="text"
            autoComplete="organization-title"
            maxLength={120}
            defaultValue={v?.title}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-interest`} className={labelClass}>
            {copy.interestLabel}
          </label>
          <select id={`${id}-interest`} name="interest" defaultValue={v?.interest ?? ""} className={inputClass}>
            <option value="">Choose one (optional)</option>
            {CARD_INTERESTS.map((i) => (
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </div>

        {/* Honeypot: off-screen and hidden from assistive tech; people never fill it. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor={`${id}-hp`}>Company website</label>
          <input id={`${id}-hp`} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {isError && (
          <p id={errId} role="alert" className="text-sm font-medium text-red-700">
            {state.message}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="mt-1 h-12 w-full rounded-md bg-[#BF4E17] text-base font-semibold text-white transition-colors hover:bg-[#A3410F] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-coastal-blue/50 focus-visible:ring-offset-2 disabled:opacity-70"
        >
          {pending ? "Sending…" : copy.submitLabel}
        </button>
      </form>
    </section>
  )
}
