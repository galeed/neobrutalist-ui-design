"use client"

import Link from "next/link"
import { Bell, CalendarDays, Home, MessageSquare, UserRound } from "lucide-react"

const items = [["#top", "Home", Home], ["#inbox", "Inbox", MessageSquare], ["#calendar", "Calendar", CalendarDays], ["#notifications", "Alerts", Bell], ["#profile", "Profile", UserRound]] as const

export default function MobileBottomNav() { return <nav aria-label="Mobile navigation" className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-5 rounded-2xl border-4 border-black bg-white p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hidden">{items.map(([href, label, Icon]) => <Link key={label} href={href} className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl text-[10px] font-black hover:bg-lime-200"><Icon className="size-5" /><span>{label}</span></Link>)}</nav> }
