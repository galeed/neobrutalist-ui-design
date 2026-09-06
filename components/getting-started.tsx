"use client"

import { useState } from "react"
import { Check, ChevronRight, Sparkles } from "lucide-react"

const steps = ["Set your profile", "Pick your goals", "Connect a platform"]

export default function GettingStarted() {
  const [completed, setCompleted] = useState(1)
  return <section id="getting-started" className="mb-10 rounded-2xl border-4 border-black bg-lime-200 p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]" aria-labelledby="getting-started-title">
    <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.18em]">Start here</p><h2 id="getting-started-title" className="text-2xl font-black">GETTING STARTED</h2><p className="mt-1 text-sm">Build your personal space in three quick steps.</p></div><Sparkles className="size-7 shrink-0" aria-hidden="true" /></div>
    <div className="mt-5 grid gap-2 sm:grid-cols-3">{steps.map((step, index) => { const done = index < completed; return <button type="button" key={step} onClick={() => setCompleted(Math.max(completed, index + 1))} className="flex min-h-14 items-center gap-3 rounded-xl border-2 border-black bg-white p-3 text-left font-bold transition hover:-translate-y-0.5"><span className={`flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-black text-sm ${done ? "bg-black text-white" : "bg-white"}`}>{done ? <Check className="size-4" aria-hidden="true" /> : index + 1}</span><span className="flex-1 text-sm">{step}</span><ChevronRight className="size-4" aria-hidden="true" /></button> })}</div>
    <div className="mt-4 h-3 overflow-hidden rounded-full border-2 border-black bg-white" role="progressbar" aria-valuenow={completed} aria-valuemin={0} aria-valuemax={3} aria-label="Onboarding progress"><div className="h-full bg-black transition-all" style={{ width: `${(completed / 3) * 100}%` }} /></div>
  </section>
}
