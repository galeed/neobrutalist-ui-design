"use client"

import { useEffect, useState } from "react"
import { Moon, Palette, Sun, Swords } from "lucide-react"
import { Button } from "@/components/ui/button"

const themes = [
  { value: "light", label: "Claro", icon: Sun },
  { value: "dark", label: "Oscuro", icon: Moon },
  { value: "gamer", label: "Gamer", icon: Swords },
  { value: "oxford", label: "Oxford", icon: Palette },
]

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const saved = localStorage.getItem("postcraft-theme") || "light"
    document.documentElement.className = saved === "light" ? "" : `theme-${saved}`
    setTheme(saved)
  }, [])

  const changeTheme = (nextTheme: string) => {
    document.documentElement.className = nextTheme === "light" ? "" : `theme-${nextTheme}`
    localStorage.setItem("postcraft-theme", nextTheme)
    setTheme(nextTheme)
  }

  return (
    <div className="fixed right-3 top-3 z-50 flex flex-wrap justify-end gap-1 rounded-xl border-2 border-black bg-background/95 p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] backdrop-blur sm:right-5 sm:top-5" aria-label="Tema visual">
      {themes.map(({ value, label, icon: Icon }) => (
        <Button key={value} type="button" size="sm" variant={theme === value ? "default" : "ghost"} className="h-8 gap-1 rounded-lg px-2 text-[10px] font-black uppercase sm:px-3" onClick={() => changeTheme(value)} aria-pressed={theme === value}>
          <Icon data-icon="inline-start" />
          <span className="hidden sm:inline">{label}</span>
        </Button>
      ))}
    </div>
  )
}
