"use client"

import { useMemo, useState } from "react"
import { BadgeCheck, Check, ChevronDown, Facebook, Globe2, Instagram, Music2, Plus, Send, Sparkles, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const accounts = [
  { id: "instagram", name: "Instagram", handle: "@studio.nova", detail: "Cuenta de creador", followers: "24.8K", verified: true, icon: Instagram, tone: "from-fuchsia-500 to-orange-400" },
  { id: "facebook", name: "Facebook", handle: "Studio Nova", detail: "Página pública", followers: "18.2K", verified: false, icon: Facebook, tone: "from-blue-600 to-sky-400" },
  { id: "x", name: "X / Twitter", handle: "@studionova", detail: "Perfil personal", followers: "9.4K", verified: false, icon: Twitter, tone: "from-slate-950 to-slate-700" },
  { id: "tiktok", name: "TikTok", handle: "@studio.nova", detail: "Cuenta de creador", followers: "61.7K", verified: true, icon: Sparkles, tone: "from-cyan-400 to-pink-500" },
  { id: "spotify", name: "Spotify", handle: "Studio Nova", detail: "Artist profile claimed", followers: "42.1K monthly listeners", verified: true, icon: Music2, tone: "from-emerald-500 to-lime-400", pro: true },
  { id: "youtube", name: "YouTube", handle: "Studio Nova Official", detail: "Official Artist Channel", followers: "12.6K subscribers", verified: true, icon: Youtube, tone: "from-red-600 to-orange-400", pro: true },
]

export default function SocialWorkspace() {
  const [connected, setConnected] = useState<string[]>(["instagram", "spotify", "youtube"])
  const [selected, setSelected] = useState<string[]>(["instagram", "spotify"])
  const [content, setContent] = useState("")
  const [saved, setSaved] = useState(false)
  const connectedAccounts = useMemo(() => accounts.filter((account) => connected.includes(account.id)), [connected])

  function toggleConnection(id: string) {
    setConnected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
    setSelected((current) => current.filter((item) => item !== id))
  }

  function toggleSelected(id: string) {
    if (!connected.includes(id)) return
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">Local workspace</p>
          <h2 className="text-3xl font-black tracking-tight">Social command center</h2>
          <p className="max-w-2xl text-muted-foreground">Explora cómo se verán tus conexiones mientras terminamos la autorización OAuth. Los perfiles PRO se activan con señales verificables de cada plataforma.</p>
        </div>
        <Button className="w-fit rounded-xl border-2 border-black bg-black font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" onClick={() => setSaved(true)}>
          {saved ? <Check data-icon="inline-start" /> : <Plus data-icon="inline-start" />} {saved ? "Workspace saved" : "Save workspace"}
        </Button>
      </div>

      <Card className="rounded-2xl border-4 border-black bg-amber-100 p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-start gap-3"><Globe2 className="mt-1 size-5 shrink-0" /><div><p className="font-black">Modo local activo</p><p className="text-sm">Las conexiones son demostrativas y se guardan en esta sesión. No se envían tokens ni se publican piezas hasta configurar OAuth.</p></div></div>
      </Card>

      <div>
        <div className="mb-4 flex items-center justify-between"><div><h3 className="text-xl font-black">Connected accounts</h3><p className="text-sm text-muted-foreground">{connectedAccounts.length} de {accounts.length} cuentas conectadas</p></div><Badge variant="outline" className="border-2 border-black font-bold">{connectedAccounts.filter((a) => a.verified).length} PRO ready</Badge></div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {accounts.map((account) => { const Icon = account.icon; const isConnected = connected.includes(account.id); return <Card key={account.id} className={`overflow-hidden rounded-2xl border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] ${account.pro ? "bg-slate-950 text-white" : "bg-white"}`}>
            <div className={`bg-gradient-to-r ${account.tone} p-4 text-white`}><div className="flex items-center justify-between"><Icon className="size-7" /><Badge className="border border-white/60 bg-black/25 text-white">{isConnected ? "Connected" : "Available"}</Badge></div><div className="mt-6 flex items-end justify-between gap-3"><div><p className="font-black">{account.name}</p><p className="text-sm opacity-90">{account.handle}</p></div>{account.verified && <BadgeCheck className="size-7" />}</div></div>
            <div className="flex flex-col gap-4 p-4"><div><p className="text-sm font-bold">{account.detail}</p><p className="text-xs opacity-70">{account.followers}</p></div><div className="flex items-center justify-between gap-3"><Badge variant={account.pro ? "default" : "secondary"} className="font-bold">{account.pro ? "PRO PROFILE" : "BASIC PROFILE"}</Badge><Button variant={isConnected ? "outline" : "default"} size="sm" className="rounded-lg border-2 border-black font-bold" onClick={() => toggleConnection(account.id)}>{isConnected ? "Disconnect" : "Connect"}</Button></div></div>
          </Card> })}
        </div>
      </div>

      <div>
        <div className="mb-4"><h3 className="text-xl font-black">Multiplatform editor</h3><p className="text-sm text-muted-foreground">Crea una pieza y adapta el preview para cada cuenta conectada.</p></div>
        <Card className="grid gap-6 rounded-2xl border-4 border-black p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-4"><Textarea value={content} onChange={(event) => setContent(event.target.value)} placeholder="Escribe el mensaje que quieres adaptar a tus plataformas..." className="min-h-44 rounded-xl border-2 border-black text-base" /><div className="grid gap-3 sm:grid-cols-[1fr_auto]"><Input placeholder="#newrelease #behindthescenes" className="rounded-xl border-2 border-black" /><Button variant="outline" className="rounded-xl border-2 border-black font-bold"><Plus data-icon="inline-start" /> Add media</Button></div><div className="flex flex-wrap gap-2">{connectedAccounts.map((account) => <Button key={account.id} variant={selected.includes(account.id) ? "default" : "outline"} size="sm" onClick={() => toggleSelected(account.id)} className="rounded-lg border-2 border-black font-bold">{account.name}</Button>)}</div><Button className="w-full rounded-xl border-2 border-black bg-black font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:w-fit" onClick={() => setSaved(true)}><Send data-icon="inline-start" /> Save draft</Button></div>
          <div className="flex flex-col gap-4 rounded-xl border-2 border-black bg-muted/50 p-4"><div className="flex items-center justify-between"><p className="font-black">Live preview</p><ChevronDown className="size-4" /></div><Separator className="bg-black" />{selected.length ? <div className="flex flex-col gap-3">{selected.map((id) => { const account = accounts.find((item) => item.id === id)!; return <div key={id} className="rounded-lg border-2 border-black bg-background p-3"><p className="text-xs font-black uppercase">{account.name}</p><p className="mt-2 line-clamp-4 text-sm">{content || "Tu contenido aparecerá aquí con el formato de esta plataforma."}</p></div> })}</div> : <p className="text-sm text-muted-foreground">Conecta y selecciona una cuenta para ver el preview.</p>}</div>
        </Card>
      </div>
    </section>
  )
}
