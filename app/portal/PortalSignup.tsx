"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Loader2, User, Mail, Phone } from "lucide-react"
import { trackEvent } from "@/lib/track-event"
import { getUTMData } from "@/lib/utm-tracker"

export default function PortalSignup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim()) {
      setStatus("error")
      setMessage("Please fill in your name and email.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error")
      setMessage("Please enter a valid email address.")
      return
    }

    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || "N/A",
          message: "Client portal access request",
          source: "portal-signup",
          utm: getUTMData(),
        }),
      })

      if (!response.ok) throw new Error("Request failed")

      setStatus("success")
      setMessage("We'll set up your portal access and send login details to your email.")
      trackEvent("portal_signup", { source: "portal_page" })
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again or call us.")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-1">Request Received!</h4>
            <p className="text-sm text-green-700 dark:text-green-400">{message}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-coastal-grey/40" />
        <Input
          type="text"
          placeholder="Full name"
          aria-label="Full name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            if (status === "error") setStatus("idle")
          }}
          className="pl-9 h-11"
          required
        />
      </div>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-coastal-grey/40" />
        <Input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === "error") setStatus("idle")
          }}
          className="pl-9 h-11"
          required
        />
      </div>
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-coastal-grey/40" />
        <Input
          type="tel"
          placeholder="Phone number (optional)"
          aria-label="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="pl-9 h-11"
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">{message}</p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-coastal-orange hover:bg-coastal-orange/90 text-white h-11 text-base"
      >
        {status === "loading" ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          "Request Portal Access"
        )}
      </Button>
    </form>
  )
}
