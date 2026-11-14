"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { isBarePath } from "@/lib/bare-paths"

/** Renders its children everywhere except the bare QR card pages (lib/bare-paths.ts). */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return isBarePath(usePathname()) ? null : <>{children}</>
}
