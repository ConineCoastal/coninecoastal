"use server"

import { buildCardEntry, cardInput, sendCardEntry } from "@/lib/card/entry"

export interface CardFormValues { email: string; name: string; organization: string; title: string; interest: string }

export type CardFormState =
  | { status: "idle" }
  | { status: "ok" }
  /** `values` is echoed back because React 19 resets a form after its action runs. */
  | { status: "error"; message: string; field?: "email"; values: CardFormValues }

const field = (f: FormData, k: string) => {
  const v = f.get(k)
  return typeof v === "string" ? v : ""
}

/** Logs the cause (nodemailer code, SMTP response code) without any form values. */
function describeError(error: unknown): string {
  if (error && typeof error === "object") {
    const e = error as { code?: string | number; responseCode?: number; message?: string; name?: string }
    return [e.name, e.code !== undefined && `code=${e.code}`, e.responseCode !== undefined && `smtp=${e.responseCode}`, e.message]
      .filter(Boolean)
      .join(" ")
  }
  return String(error)
}

export async function submitCardEntry(_prev: CardFormState, form: FormData): Promise<CardFormState> {
  // Honeypot: a bot that fills it gets the thank-you screen and nothing is sent.
  if (field(form, "company_website")) return { status: "ok" }

  const values: CardFormValues = {
    email: field(form, "email"),
    name: field(form, "name"),
    organization: field(form, "organization"),
    title: field(form, "title"),
    interest: field(form, "interest"),
  }
  const parsed = cardInput.safeParse(values)
  if (!parsed.success) {
    const issue = parsed.error.issues[0]
    return {
      status: "error",
      message:
        issue?.path[0] === "interest" ? "Please choose from the list." : (issue?.message ?? "Please check the form and try again."),
      field: issue?.path[0] === "email" ? "email" : undefined,
      values,
    }
  }

  const entry = buildCardEntry(parsed.data, field(form, "event") || null)
  try {
    await sendCardEntry(entry)
  } catch (error) {
    console.error(`[card] entry ${entry.id} not sent:`, describeError(error))
    return { status: "error", message: "Something went wrong sending your details. Please try again.", values }
  }
  return { status: "ok" }
}
