"use client"

import { useMemo, useState } from "react"
import { Archive, ArrowLeft, Inbox, Search, Send, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const conversations = [
  { id: "maya", name: "Maya Chen", role: "Creative circle", preview: "I loved the direction of the new launch.", time: "09:42", unread: 2, color: "bg-fuchsia-300" },
  { id: "leo", name: "Leo Martins", role: "Collab request", preview: "Are you free to review the moodboard?", time: "Yesterday", unread: 0, color: "bg-cyan-300" },
  { id: "noor", name: "Noor Alvarez", role: "Close friends", preview: "Sent you three references for the reel.", time: "Mon", unread: 0, color: "bg-amber-300" },
]

const messages = {
  maya: [{ from: "them", text: "Hey! I loved the direction of the new launch.", time: "09:38" }, { from: "me", text: "Thank you. I am keeping the campaign warm and a little unexpected.", time: "09:40" }, { from: "them", text: "That sounds perfect. Want me to review the final carousel?", time: "09:42" }],
  leo: [{ from: "them", text: "Are you free to review the moodboard?", time: "Yesterday" }],
  noor: [{ from: "them", text: "Sent you three references for the reel.", time: "Mon" }],
}

export default function InternalInbox() {
  const [selectedId, setSelectedId] = useState("maya")
  const [query, setQuery] = useState("")
  const [draft, setDraft] = useState("")
  const [sent, setSent] = useState<string[]>([])
  const selected = conversations.find((conversation) => conversation.id === selectedId) ?? conversations[0]
  const filtered = useMemo(() => conversations.filter((conversation) => `${conversation.name} ${conversation.preview}`.toLowerCase().includes(query.toLowerCase())), [query])
  const thread = [...messages[selected.id as keyof typeof messages], ...sent.filter((item) => selected.id === "maya").map((text) => ({ from: "me" as const, text, time: "now" }))]

  function sendMessage() {
    if (!draft.trim()) return
    setSent((current) => [...current, draft.trim()])
    setDraft("")
  }

  return (
    <section id="inbox" className="mb-10">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div><p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">Private network</p><h2 className="text-xl font-black sm:text-2xl">INTERNAL INBOX</h2><p className="text-sm text-muted-foreground">Mensajes entre personas dentro de Postcraft, sin mezclar tus redes externas.</p></div>
        <Badge className="border-2 border-black bg-lime-300 text-black"><Sparkles className="mr-1 size-3" /> {conversations.reduce((sum, item) => sum + item.unread, 0)} new</Badge>
      </div>
      <Card className="overflow-hidden rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] lg:grid lg:grid-cols-[290px_1fr]">
        <div className="border-b-4 border-black bg-white/70 p-4 lg:border-b-0 lg:border-r-4">
          <div className="relative mb-4"><Search className="absolute left-3 top-3 size-4" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search people..." className="rounded-xl border-2 border-black pl-9" /></div>
          <div className="flex flex-col gap-2">{filtered.map((conversation) => <button key={conversation.id} onClick={() => setSelectedId(conversation.id)} className={`flex items-start gap-3 rounded-xl border-2 border-black p-3 text-left transition ${selected.id === conversation.id ? "bg-black text-white" : "bg-background hover:bg-lime-100"}`}><span className={`grid size-10 shrink-0 place-items-center rounded-full border-2 border-black font-black text-black ${conversation.color}`}>{conversation.name.split(" ").map((part) => part[0]).join("")}</span><span className="min-w-0 flex-1"><span className="flex items-center justify-between gap-2"><strong className="truncate">{conversation.name}</strong><small className="opacity-70">{conversation.time}</small></span><span className="block truncate text-xs opacity-70">{conversation.preview}</span></span>{conversation.unread > 0 && <span className="grid size-5 place-items-center rounded-full bg-lime-300 text-xs font-black text-black">{conversation.unread}</span>}</button>)}</div>
          <Button variant="outline" className="mt-4 w-full rounded-xl border-2 border-black font-bold"><Inbox className="mr-2 size-4" /> View all messages</Button>
        </div>
        <div className="flex min-h-[390px] flex-col bg-amber-50/60">
          <div className="flex items-center justify-between border-b-2 border-black p-4"><div className="flex items-center gap-3"><button className="lg:hidden" aria-label="Back to conversations"><ArrowLeft className="size-5" /></button><div><h3 className="font-black">{selected.name}</h3><p className="text-xs text-muted-foreground">{selected.role} · active now</p></div></div><Button variant="ghost" size="icon" aria-label="Archive conversation"><Archive className="size-4" /></Button></div>
          <div className="flex flex-1 flex-col gap-3 overflow-auto p-4">{thread.map((message, index) => <div key={`${message.time}-${index}`} className={`flex ${message.from === "me" ? "justify-end" : "justify-start"}`}><div className={`max-w-[80%] rounded-2xl border-2 border-black px-4 py-3 text-sm ${message.from === "me" ? "bg-black text-white" : "bg-white"}`}><p>{message.text}</p><small className="mt-1 block text-[10px] opacity-60">{message.time}</small></div></div>)}</div>
          <div className="border-t-2 border-black bg-white/70 p-4"><div className="flex gap-2"><Textarea value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing && event.keyCode !== 229) { event.preventDefault(); sendMessage() } }} placeholder="Write a private message..." className="min-h-12 resize-none rounded-xl border-2 border-black" /><Button onClick={sendMessage} size="icon" aria-label="Send message" className="size-12 shrink-0 rounded-xl border-2 border-black bg-black text-white"><Send className="size-4" /></Button></div><p className="mt-2 text-[11px] text-muted-foreground">Enter para enviar · Shift + Enter para una nueva línea</p></div>
        </div>
      </Card>
    </section>
  )
}
