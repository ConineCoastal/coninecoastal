"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, Loader2 } from "lucide-react"
import { trackEvent } from "@/lib/track-event"
import { getUTMData } from "@/lib/utm-tracker"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
          name: "Newsletter Subscriber",
          email,
          phone: "N/A",
          message: "Newsletter subscription request",
          source: "newsletter",
          utm: getUTMData(),
        }),
      })

      if (!response.ok) throw new Error("Subscription failed")

      setStatus("success")
      setMessage("You're subscribed! Check your inbox for updates.")
      trackEvent("newsletter_signup", { location: "footer" })
      setEmail("")
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-green-400">
        <CheckCircle className="h-5 w-5 flex-shrink-0" />
        <span className="text-sm">{message}</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === "error") setStatus("idle")
          }}
          className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-coastal-orange h-10"
        />
      </div>
      <Button
        type="submit"
        disabled={status === "loading"}
        className="bg-coastal-orange hover:bg-coastal-orange/90 text-white h-10 px-5 whitespace-nowrap"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Subscribe"
        )}
      </Button>
      {status === "error" && (
        <p className="text-red-400 text-xs sm:absolute sm:bottom-0 sm:translate-y-full sm:mt-1">
          {message}
        </p>
      )}
    </form>
  )
}
