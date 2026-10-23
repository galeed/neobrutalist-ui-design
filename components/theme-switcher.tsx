"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="fixed right-3 top-3 z-50 flex items-center gap-1 rounded-xl border-2 border-current bg-background/95 p-1 shadow-[4px_4px_0px_0px_currentColor] backdrop-blur sm:right-5 sm:top-5" aria-label="Tema visual">
      <Button
        type="button"
        size="sm"
        variant={!isDark ? "default" : "ghost"}
        className="h-8 gap-1 rounded-lg px-2 text-[10px] font-black uppercase sm:px-3"
        onClick={() => setTheme("light")}
        aria-pressed={!isDark}
      >
        <Sun data-icon="inline-start" />
        <span className="hidden sm:inline">Claro</span>
      </Button>
      <Button
        type="button"
        size="sm"
        variant={isDark ? "default" : "ghost"}
        className="h-8 gap-1 rounded-lg px-2 text-[10px] font-black uppercase sm:px-3"
        onClick={() => setTheme("dark")}
        aria-pressed={isDark}
      >
        <Moon data-icon="inline-start" />
        <span className="hidden sm:inline">Oscuro</span>
      </Button>
    </div>
  )
}
