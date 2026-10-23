"use client"

import Link from "next/link"
import { ArrowLeft, Check, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const themes = [
  { value: "light", label: "Claro", description: "Una interfaz luminosa, limpia y neobrutalista.", icon: Sun },
  { value: "dark", label: "Oscuro", description: "Una interfaz de alto contraste con fondo oscuro y texto claro.", icon: Moon },
]

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const selectedTheme = theme || "light"

  function applyTheme(nextTheme: string) {
    setTheme(nextTheme)
  }

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 font-bold underline-offset-4 hover:underline">
          <ArrowLeft data-icon="inline-start" /> Volver al dashboard
        </Link>
        <header className="mb-8 border-b-4 border-current pb-6">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Meow Studio / Ajustes</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">CONFIGURACIONES</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">Elige el ambiente visual del espacio de trabajo. El cambio se guarda en este navegador y conserva la estética neobrutalista.</p>
        </header>

        <Card className="border-4 border-current bg-card shadow-[8px_8px_0px_0px_currentColor]">
          <CardHeader>
            <CardTitle className="text-2xl font-black">Efectos visuales</CardTitle>
            <CardDescription>Selecciona un modo para toda la aplicación.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            {themes.map(({ value, label, description, icon: Icon }) => (
              <button key={value} type="button" onClick={() => applyTheme(value)} aria-pressed={selectedTheme === value} className={`group flex min-h-44 flex-col items-start justify-between rounded-xl border-4 border-current p-5 text-left transition-transform hover:-translate-y-1 ${selectedTheme === value ? "bg-primary text-primary-foreground shadow-[6px_6px_0px_0px_currentColor]" : "bg-background"}`}>
                <div className="flex w-full items-center justify-between">
                  <Icon className="size-8" aria-hidden="true" />
                  {selectedTheme === value && <Check className="size-6" aria-label="Seleccionado" />}
                </div>
                <span>
                  <strong className="block text-xl font-black uppercase">{label}</strong>
                  <span className="mt-1 block text-sm opacity-80">{description}</span>
                </span>
              </button>
            ))}
          </CardContent>
        </Card>

        <Button asChild variant="outline" className="mt-8 rounded-xl border-2 border-current font-bold">
          <Link href="/studio">Abrir Content Studio</Link>
        </Button>
      </div>
    </main>
  )
}
