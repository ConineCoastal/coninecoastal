import "server-only"

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().optional(),
  source: z.string().optional(),
})

const smtpHost = process.env.SMTP_HOST
const smtpPort = process.env.SMTP_PORT
const smtpUser = process.env.SMTP_USER
const smtpPass = process.env.SMTP_PASS
const smtpSecureSetting = (process.env.SMTP_SECURE ?? "auto").toLowerCase()
const smtpRequireTLS = (process.env.SMTP_REQUIRE_TLS ?? "false").toLowerCase() === "true"
const smtpIgnoreTLS = (process.env.SMTP_IGNORE_TLS ?? "false").toLowerCase() === "true"
const smtpAllowInvalidCerts = (process.env.SMTP_ALLOW_INVALID_CERTS ?? "false").toLowerCase() === "true"

const gmailUser = process.env.GMAIL_SMTP_USER ?? process.env.GMAIL_EMAIL ?? smtpUser
const gmailAppPasswordRaw = process.env.GMAIL_SMTP_APP_PASSWORD ?? process.env.GMAIL_APP_PASSWORD ?? smtpPass
const gmailAppPassword = gmailAppPasswordRaw?.replace(/\s+/g, "")

const parseAddressList = (value: string | undefined | null): string[] =>
  (value ?? "")
    .split(/[\n,;]+/)
    .map((entry) => entry.trim())
    .filter(Boolean)

const extractAddressParts = (value: string | undefined | null): { address: string; name?: string } => {
  if (!value) {
    return { address: "" }
  }

  const trimmed = value.trim()
  const match = trimmed.match(/^(?:"?([^<>"]+)"?\s*)?<([^<>]+)>$/)

  if (match) {
    const name = match[1]?.trim()
    const address = match[2].trim()
    return {
      address,
      name: name && name.length > 0 ? name : undefined,
    }
  }

  return { address: trimmed }
}

const rawContactTo =
  process.env.CONTACT_FORWARD_TO ??
  process.env.CONTACT_TO_EMAIL ??
  gmailUser ??
  "info@coninecoastal.com"

const CONTACT_TO_EMAILS = (() => {
  const recipients = parseAddressList(rawContactTo)
  return recipients.length > 0 ? recipients : ["info@coninecoastal.com"]
})()

const rawContactFrom = process.env.CONTACT_FROM_EMAIL ?? gmailUser ?? smtpUser ?? CONTACT_TO_EMAILS[0]
const parsedContactFrom = extractAddressParts(rawContactFrom)

const CONTACT_FROM_NAME = process.env.CONTACT_FROM_NAME ?? parsedContactFrom.name ?? "Conine Coastal"
const CONTACT_FROM_EMAIL = parsedContactFrom.address || "info@coninecoastal.com"

const CONTACT_BCC_EMAILS = parseAddressList(
  process.env.CONTACT_BCC ?? process.env.CONTACT_BCC_EMAIL ?? process.env.CONTACT_BCC_EMAILS
)

const resendApiKey = process.env.RESEND_API_KEY
const resendRegion = process.env.RESEND_REGION
const parsedResendFrom = extractAddressParts(process.env.RESEND_FROM_EMAIL)
const resendFromEmail = parsedResendFrom.address || CONTACT_FROM_EMAIL
const resendFromName = process.env.RESEND_FROM_NAME ?? parsedResendFrom.name ?? CONTACT_FROM_NAME

const resendClient = resendApiKey ? new Resend(resendApiKey) : null

interface SmtpTransportDetails {
  provider: "gmail" | "smtp"
  transporter: nodemailer.Transporter
}

const createSmtpTransporter = (): SmtpTransportDetails | null => {
  if (gmailUser && gmailAppPassword) {
    return {
      provider: "gmail",
      transporter: nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      }),
    }
  }

  if (smtpHost) {
    const parsedPort = smtpPort ? Number.parseInt(smtpPort, 10) : undefined
    const port = Number.isFinite(parsedPort) ? (parsedPort as number) : 587
    const secureOption =
      smtpSecureSetting === "true" ? true : smtpSecureSetting === "false" ? false : port === 465

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port,
      secure: secureOption,
      auth:
        smtpUser && smtpPass
          ? {
              user: smtpUser,
              pass: smtpPass,
            }
          : undefined,
      ...(smtpRequireTLS ? { requireTLS: true } : {}),
      ...(smtpIgnoreTLS ? { ignoreTLS: true } : {}),
      ...(smtpAllowInvalidCerts ? { tls: { rejectUnauthorized: false } } : {}),
    })

    return {
      provider: "smtp",
      transporter,
    }
  }

  return null
}

const smtpTransportDetails = createSmtpTransporter()
const smtpTransporter = smtpTransportDetails?.transporter ?? null
const smtpProviderLabel = smtpTransportDetails?.provider ?? null

const logTransporter = nodemailer.createTransport({ jsonTransport: true })

if (!resendClient && !smtpTransporter) {
  console.warn(
    "Contact form email transport is not configured. Set RESEND_API_KEY or SMTP_* / GMAIL_* credentials to deliver messages via email."
  )
}

const fallbackSuccessMessage =
  "We received your message, but email delivery isn't fully configured yet. Our team will follow up shortly."
const defaultSuccessMessage = "Thanks for reaching out! We'll be in touch soon."

interface TransportErrorEntry {
  provider: "resend" | "gmail" | "smtp"
  error: unknown
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const data = contactSchema.parse(json)

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: process.env.TZ ?? "UTC",
    })

    const recipients = CONTACT_TO_EMAILS
    const bccRecipients = CONTACT_BCC_EMAILS

    const subject = `New inquiry from ${data.name}`
    const textBody = `New inquiry submitted on ${submittedAt}.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Source: ${data.source ?? "N/A"}

Message:
${data.message ?? "(No message provided)"}
`
    const htmlBody = `
      <h1>New Inquiry</h1>
      <p><strong>Submitted at:</strong> ${submittedAt}</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.source ? `<p><strong>Source:</strong> ${data.source}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${(data.message ?? "(No message provided)").replace(/\n/g, "<br/>")}</p>
    `

    const tags = [{ name: "channel", value: data.source ?? "contact-form" }]

    const transportErrors: TransportErrorEntry[] = []

    if (resendClient) {
      try {
        const { data: resendData, error: resendError } = await resendClient.emails.send({
          from: `${resendFromName} <${resendFromEmail}>`,
          to: recipients,
          ...(bccRecipients.length ? { bcc: bccRecipients } : {}),
          replyTo: [data.email],
          subject,
          html: htmlBody,
          text: textBody,
          ...(resendRegion ? { region: resendRegion } : {}),
          headers: {
            "X-Contact-Submitted-At": submittedAt,
          },
          tags,
        })

        if (resendError) {
          throw new Error(resendError.message)
        }

        if (!resendData) {
          throw new Error("Resend did not return a delivery receipt")
        }

        return NextResponse.json({ success: true, message: defaultSuccessMessage, delivered: true, provider: "resend" })
      } catch (error) {
        console.error("Contact form email delivery via Resend failed", error)
        transportErrors.push({ provider: "resend", error })
      }
    }

    if (smtpTransporter && smtpProviderLabel) {
      try {
        await smtpTransporter.sendMail({
          to: recipients,
          ...(bccRecipients.length ? { bcc: bccRecipients } : {}),
          from: {
            name: CONTACT_FROM_NAME,
            address: CONTACT_FROM_EMAIL,
          },
          replyTo: data.email,
          subject,
          text: textBody,
          html: htmlBody,
          headers: {
            "X-Contact-Submitted-At": submittedAt,
            "X-Contact-Source": data.source ?? "contact-form",
          },
        })

        return NextResponse.json({ success: true, message: defaultSuccessMessage, delivered: true, provider: smtpProviderLabel })
      } catch (error) {
        console.error(`Contact form email delivery via ${smtpProviderLabel.toUpperCase()} SMTP failed`, error)
        transportErrors.push({ provider: smtpProviderLabel, error })
      }
    }

    await logTransporter.sendMail({
      to: recipients,
      from: {
        name: CONTACT_FROM_NAME,
        address: resendFromEmail,
      },
      subject,
      text: textBody,
      html: htmlBody,
      replyTo: data.email,
      headers: {
        "X-Contact-Submitted-At": submittedAt,
        "X-Contact-Source": data.source ?? "contact-form",
        "X-Contact-Delivery": transportErrors.length > 0 ? "fallback-log" : "log-only",
      },
    })

    if (transportErrors.length > 0) {
      return NextResponse.json(
        {
          success: true,
          delivered: false,
          message: fallbackSuccessMessage,
          provider: "log",
          errors: transportErrors.map(({ provider }) => provider),
        },
        { status: 202 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        delivered: false,
        message: fallbackSuccessMessage,
        provider: "log",
      },
      { status: 202 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.flatten() }, { status: 400 })
    }

    console.error("Contact form submission error", error)
    return NextResponse.json({ success: false, message: "Unable to submit form right now." }, { status: 500 })
  }
}
