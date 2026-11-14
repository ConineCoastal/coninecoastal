"use client"

import { useActionState, useId } from "react"
import { submitCardEntry, type CardFormState } from "@/app/actions/card"
import { CARD_INTERESTS, type CardConfig } from "@/config/card"

const initial: CardFormState = { status: "idle" }

const inputClass =
  "h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-base text-gray-900 focus-visible:border-coastal-navy focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-coastal-blue/40"
const labelClass = "text-sm font-medium text-gray-900"

export function CardLeadForm({ event, copy }: { event: string | null; copy: CardConfig["copy"] }) {
  const [state, action, pending] = useActionState(submitCardEntry, initial)
  const id = useId()
  const errId = `${id}-error`

  if (state.status === "ok") {
    return (
      <section role="status" aria-live="polite" className="mx-4 mt-8 rounded-md border border-gray-200 bg-gray-50 px-5 py-6 text-center">
        <h2 className="font-serif text-2xl text-coastal-navy">{copy.thanksHeading}</h2>
        <p className="mt-2 text-base text-gray-800">{copy.thanksBody}</p>
      </section>
    )
  }

  const isError = state.status === "error"
  const emailError = isError && state.field === "email"
  const v = isError ? state.values : undefined

  return (
    <section aria-labelledby={`${id}-heading`} className="mx-4 mt-8 border-t border-gray-200 pt-6">
      <h2 id={`${id}-heading`} className="font-serif text-2xl text-coastal-navy">
        {copy.formHeading}
      </h2>
      {/* The key remounts the form on each error so defaultValue restores what was typed. */}
      <form key={isError ? state.message + JSON.stringify(v) : "form"} action={action} noValidate className="mt-4 flex flex-col gap-4">
        <input type="hidden" name="event" value={event ?? ""} />

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
          className="h-12 rounded-md bg-coastal-navy text-base font-semibold text-white transition-colors hover:bg-coastal-navy/90 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-coastal-blue/50 focus-visible:ring-offset-2 disabled:opacity-70"
        >
          {pending ? "Sending…" : copy.submitLabel}
        </button>
      </form>
    </section>
  )
}
