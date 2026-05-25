"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Reveal immediately (no scroll animation) when the user prefers reduced
    // motion or the browser lacks IntersectionObserver, so content is never
    // left stuck at opacity-0.
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return
    }

    // Reveal content already in view at mount without waiting on the observer
    // callback, so above-the-fold content can never be stuck at opacity-0.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "motion-safe:opacity-0",
        isVisible && "motion-safe:animate-fade-in-up",
        className
      )}
      style={isVisible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
