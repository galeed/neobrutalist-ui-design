"use client"

import { useMemo, useState } from "react"
import { Check, Search, UserPlus, UsersRound } from "lucide-react"

const initialContacts = [
  { name: "Maya Chen", handle: "@mayamakes", detail: "Design + slow living", color: "bg-fuchsia-200", status: "Connect" },
  { name: "Leo Martins", handle: "@leomotion", detail: "Motion designer", color: "bg-cyan-200", status: "Connected" },
  { name: "Noah Williams", handle: "@noahwrites", detail: "Writer + storyteller", color: "bg-amber-200", status: "Connect" },
  { name: "Ari Patel", handle: "@aripixel", detail: "Product photographer", color: "bg-lime-200", status: "Connect" },
]

export default function ContactsPanel() {
  const [query, setQuery] = useState("")
  const [contacts, setContacts] = useState(initialContacts)
  const filtered = useMemo(() => contacts.filter((contact) => `${contact.name} ${contact.handle} ${contact.detail}`.toLowerCase().includes(query.toLowerCase())), [contacts, query])

  return <section id="contacts" className="mb-10 rounded-2xl border-4 border-black bg-white p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"><div className="mb-5 flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">Your people</p><h2 className="text-2xl font-black">CONTACTS</h2><p className="mt-1 max-w-xl text-sm text-muted-foreground">Encuentra personas dentro de Postcraft y crea tu círculo creativo.</p></div><UsersRound className="size-7" /></div><label className="mb-4 flex items-center gap-2 rounded-xl border-2 border-black bg-stone-50 px-3 py-2"><Search className="size-4" /><span className="sr-only">Search contacts</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search people" className="w-full bg-transparent text-sm font-bold outline-none" /></label><div className="grid gap-3 sm:grid-cols-2">{filtered.map((contact) => <div key={contact.handle} className="flex items-center gap-3 rounded-xl border-2 border-black p-3"><div className={`flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-black text-lg font-black ${contact.color}`}>{contact.name.charAt(0)}</div><div className="min-w-0 flex-1"><p className="truncate font-black">{contact.name}</p><p className="text-xs text-muted-foreground">{contact.handle} · {contact.detail}</p></div><button type="button" onClick={() => setContacts((items) => items.map((item) => item.handle === contact.handle ? { ...item, status: item.status === "Connected" ? "Connect" : "Connected" } : item))} className="inline-flex shrink-0 items-center gap-1 rounded-lg border-2 border-black bg-lime-300 px-2 py-1 text-xs font-black hover:bg-lime-400">{contact.status === "Connected" ? <Check className="size-3" /> : <UserPlus className="size-3" />}{contact.status}</button></div>)}</div>{filtered.length === 0 && <p className="rounded-xl border-2 border-dashed border-black p-6 text-center font-bold">No people found.</p>}</section>
}
