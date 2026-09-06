"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle2, Loader2, PackageOpen } from "lucide-react"

const states = { ready: ["Ready", "Your workspace is all caught up."], loading: ["Loading", "Refreshing your latest activity…"], empty: ["Empty", "Nothing here yet. Start by creating your first post."], error: ["Error", "We couldn't load this section. Try again."] } as const

export default function UiStatesDemo() {
  const [state, setState] = useState<keyof typeof states>("ready")
  const [title, message] = states[state]
  const icon = state === "ready" ? <CheckCircle2 className="size-8 text-lime-600" /> : state === "loading" ? <Loader2 className="size-8 animate-spin" /> : state === "empty" ? <PackageOpen className="size-8" /> : <AlertCircle className="size-8 text-red-600" />
  return <section id="ui-states" className="mb-10 rounded-2xl border-4 border-black bg-amber-100 p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]" aria-labelledby="states-title"><div className="flex items-start justify-between"><div><p className="text-xs font-black uppercase tracking-[0.18em]">Interaction preview</p><h2 id="states-title" className="text-2xl font-black">UI STATES</h2></div><span className="rounded-full border-2 border-black bg-white px-2 py-1 text-[10px] font-black">DEMO</span></div><div className="mt-4 flex flex-wrap gap-2">{Object.keys(states).map((key) => <button type="button" key={key} onClick={() => setState(key as keyof typeof states)} className={`rounded-full border-2 border-black px-3 py-2 text-xs font-black uppercase ${state === key ? "bg-black text-white" : "bg-white"}`}>{key}</button>)}</div><div className="mt-4 flex min-h-28 items-center gap-4 rounded-xl border-2 border-black bg-white p-4" role="status" aria-live="polite">{icon}<div><p className="font-black">{title}</p><p className="text-sm text-muted-foreground">{message}</p></div></div></section>
}
