"use client"

import { useState } from "react"
import { Bell, CheckCheck, Heart, MessageCircle, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

const initialNotifications = [
  { id: 1, title: "Maya Chen replied to your message", detail: "Want me to review the final carousel?", time: "2 min ago", type: "message", unread: true },
  { id: 2, title: "You have a new connection request", detail: "Jordan Lee wants to join your circle.", time: "1 hour ago", type: "people", unread: true },
  { id: 3, title: "Your post is getting attention", detail: "12 people liked “Behind the scenes”.", time: "Yesterday", type: "like", unread: false },
]

export default function NotificationsCenter() {
  const [items, setItems] = useState(initialNotifications)
  const unread = items.filter((item) => item.unread).length
  const icons = { message: MessageCircle, people: UserPlus, like: Heart }
  return <section id="notifications" className="mb-10"><div className="mb-4 flex items-end justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Stay in the loop</p><h2 className="text-xl font-black sm:text-2xl">NOTIFICATIONS</h2></div><Button onClick={() => setItems((current) => current.map((item) => ({ ...item, unread: false })))} variant="outline" className="rounded-xl border-2 border-black font-bold"><CheckCheck className="mr-2 size-4" /> Read all</Button></div><div className="overflow-hidden rounded-2xl border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"><div className="flex items-center justify-between border-b-2 border-black bg-amber-100 p-4"><span className="flex items-center gap-2 font-black"><Bell className="size-5" /> Activity for you</span><span className="rounded-full border-2 border-black bg-lime-300 px-2 py-1 text-xs font-black">{unread} new</span></div>{items.map((item) => { const Icon = icons[item.type as keyof typeof icons]; return <button key={item.id} onClick={() => setItems((current) => current.map((entry) => entry.id === item.id ? { ...entry, unread: false } : entry))} className={`flex w-full items-start gap-3 border-b-2 border-black p-4 text-left last:border-b-0 ${item.unread ? "bg-fuchsia-50" : "bg-white"}`}><span className="grid size-10 shrink-0 place-items-center rounded-xl border-2 border-black bg-cyan-200"><Icon className="size-5" /></span><span className="min-w-0 flex-1"><strong className="block text-sm">{item.title}</strong><span className="block text-sm text-muted-foreground">{item.detail}</span><small className="mt-1 block text-xs font-bold text-muted-foreground">{item.time}</small></span>{item.unread && <span className="mt-2 size-3 shrink-0 rounded-full bg-fuchsia-500" aria-label="Unread" />}</button> })}</div></section>
}
