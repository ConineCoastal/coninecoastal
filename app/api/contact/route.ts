import "server-only"

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
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
const smtpSecure = (process.env.SMTP_SECURE ?? "false").toLowerCase() === "true"

const gmailUser = process.env.GMAIL_SMTP_USER ?? process.env.GMAIL_EMAIL ?? smtpUser
const gmailAppPasswordRaw = process.env.GMAIL_SMTP_APP_PASSWORD ?? process.env.GMAIL_APP_PASSWORD ?? smtpPass
const gmailAppPassword = gmailAppPasswordRaw?.replace(/\s+/g, "")

const CONTACT_TO_EMAIL = process.env.CONTACT_FORWARD_TO ?? process.env.CONTACT_TO_EMAIL ?? gmailUser ?? "info@coninecoastal.com"
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? gmailUser ?? CONTACT_TO_EMAIL

function createTransporter() {
  if (gmailUser && gmailAppPassword) {
    return nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })
  }

  if (smtpHost) {
    return nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort ? Number.parseInt(smtpPort, 10) : 587,
      secure: smtpSecure,
      auth:
        smtpUser && smtpPass
          ? {
              user: smtpUser,
              pass: smtpPass,
            }
          : undefined,
    })
  }

  console.warn(
    "Contact form fallback: SMTP credentials not provided. Messages will be logged only. Configure GMAIL_SMTP_USER and GMAIL_SMTP_APP_PASSWORD for Gmail Workspace support."
  )
  return nodemailer.createTransport({ jsonTransport: true })
}

const transporter = createTransporter()

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const data = contactSchema.parse(json)

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: process.env.TZ ?? "UTC",
    })

    await transporter.sendMail({
      to: CONTACT_TO_EMAIL,
      from: CONTACT_FROM_EMAIL,
      subject: `New inquiry from ${data.name}`,
      replyTo: data.email,
      text: `New inquiry submitted on ${submittedAt}.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Source: ${data.source ?? "N/A"}

Message:
${data.message ?? "(No message provided)"}
`,
      html: `
        <h1>New Inquiry</h1>
        <p><strong>Submitted at:</strong> ${submittedAt}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        ${data.source ? `<p><strong>Source:</strong> ${data.source}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${(data.message ?? "(No message provided)").replace(/\n/g, "<br/>")}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.flatten() }, { status: 400 })
    }

    console.error("Contact form submission error", error)
    return NextResponse.json({ success: false, message: "Unable to submit form right now." }, { status: 500 })
  }
}
