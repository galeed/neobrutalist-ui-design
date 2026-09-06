"use client"

import { useState } from "react"
import { Accessibility, Check } from "lucide-react"

export default function AccessibilityPanel() {
  const [largeText, setLargeText] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const options = [["Large text", largeText, setLargeText], ["High contrast", highContrast, setHighContrast], ["Reduce motion", reducedMotion, setReducedMotion]] as const
  return <section id="accessibility" className="mb-10 rounded-2xl border-4 border-black bg-white p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]" aria-labelledby="accessibility-title"><div className="flex items-start justify-between"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">Preferences</p><h2 id="accessibility-title" className="text-2xl font-black">ACCESSIBILITY</h2></div><Accessibility className="size-7" aria-hidden="true" /></div><div className="mt-5 grid gap-2 sm:grid-cols-3">{options.map(([label, checked, setChecked]) => <button type="button" key={label} aria-pressed={checked} onClick={() => setChecked(!checked)} className={`flex min-h-14 items-center justify-between rounded-xl border-2 border-black p-3 text-left font-bold ${checked ? "bg-black text-white" : "bg-white"}`}><span className="text-sm">{label}</span>{checked && <Check className="size-5" aria-hidden="true" />}</button>)}</div><p className="mt-4 text-xs text-muted-foreground" role="status">Changes apply to this preview session.</p></section>
}
