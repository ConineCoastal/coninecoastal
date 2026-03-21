"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Sun, Moon, Monitor } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="w-9 h-9" />
  }

  const options = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ] as const

  const CurrentIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center justify-center w-9 h-9 rounded-lg text-coastal-grey hover:text-coastal-navy hover:bg-gray-100 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/10 transition-colors touch-manipulation"
        aria-label="Toggle theme"
      >
        <CurrentIcon className="h-[18px] w-[18px]" />
      </button>

      {showMenu && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
          <div className="absolute right-0 top-full mt-2 z-50 bg-white dark:bg-gray-900 rounded-lg shadow-lg border dark:border-gray-700 py-1 min-w-[140px]">
            {options.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => {
                  setTheme(value)
                  setShowMenu(false)
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                  theme === value
                    ? "text-coastal-blue bg-coastal-blue/5"
                    : "text-coastal-grey dark:text-white/60 hover:bg-gray-50 dark:hover:bg-white/5"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
