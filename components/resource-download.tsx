"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, CheckCircle, Loader2, Mail, X } from "lucide-react"
import { trackEvent } from "@/lib/track-event"
import { getUTMData } from "@/lib/utm-tracker"

interface ResourceDownloadProps {
  resourceName: string
  resourceSlug: string
  buttonText?: string
  variant?: "default" | "secondary" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
}

export default function ResourceDownload({
  resourceName,
  resourceSlug,
  buttonText = "Download Free Guide",
  variant = "secondary",
  size = "lg",
  className = "",
}: ResourceDownloadProps) {
  const [showForm, setShowForm] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
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
          name: name.trim() || "Resource Download",
          email,
          phone: "N/A",
          message: `Resource download request: ${resourceName}`,
          source: `resource-download-${resourceSlug}`,
          utm: getUTMData(),
        }),
      })

      if (!response.ok) throw new Error("Request failed")

      setStatus("success")
      setMessage(`We'll send your ${resourceName} to ${email} shortly.`)
      trackEvent("resource_download", { resource: resourceSlug })
    } catch {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-6 py-3 rounded-lg">
        <CheckCircle className="h-5 w-5 flex-shrink-0" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    )
  }

  if (!showForm) {
    return (
      <Button
        size={size}
        variant={variant}
        className={className}
        onClick={() => setShowForm(true)}
      >
        <Download className="mr-2 h-5 w-5" />
        {buttonText}
      </Button>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full border">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-coastal-navy text-lg">Get Your Free {resourceName}</h4>
        <button
          onClick={() => setShowForm(false)}
          className="text-coastal-grey hover:text-coastal-navy transition-colors p-1"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <p className="text-sm text-coastal-grey mb-4">
        Enter your email and we&apos;ll send the {resourceName.toLowerCase()} directly to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          placeholder="Your name (optional)"
          aria-label="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-10"
        />
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-coastal-grey/40" />
          <Input
            type="email"
            placeholder="Your email address"
            aria-label="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === "error") setStatus("idle")
            }}
            className="pl-9 h-10"
            required
          />
        </div>
        {status === "error" && (
          <p className="text-red-500 text-xs">{message}</p>
        )}
        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-coastal-orange hover:bg-coastal-orange/90 text-white"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Send Me the Guide
            </>
          )}
        </Button>
        <p className="text-xs text-coastal-grey/60 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  )
}
