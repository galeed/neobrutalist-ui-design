"use client"

import { useState } from "react"
import { Check, Edit3, Link2, Lock, MapPin, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PersonalProfile() {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState("Alex Morgan")
  const [bio, setBio] = useState("Visual storyteller building warm, unexpected ideas.")

  return (
    <section id="profile" className="mb-10">
      <div className="mb-4 flex items-end justify-between gap-3"><div><p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Your identity</p><h2 className="text-xl font-black sm:text-2xl">PERSONAL PROFILE</h2></div><Button onClick={() => setEditing(!editing)} variant="outline" className="rounded-xl border-2 border-black font-bold"><Edit3 className="mr-2 size-4" /> {editing ? "Done" : "Edit"}</Button></div>
      <div className="overflow-hidden rounded-2xl border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="h-24 bg-gradient-to-r from-fuchsia-300 via-amber-200 to-cyan-300" />
        <div className="-mt-10 flex flex-col gap-5 p-5 sm:flex-row sm:items-end"><div className="grid size-20 shrink-0 place-items-center rounded-2xl border-4 border-black bg-lime-300 text-2xl font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">AM</div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><input value={name} onChange={(event) => setName(event.target.value)} disabled={!editing} className="max-w-full bg-transparent text-2xl font-black outline-none disabled:text-black" /><span className="rounded-full border-2 border-black bg-black px-2 py-1 text-[10px] font-black text-white">CREATOR</span></div><p className="text-sm text-muted-foreground">@alexmorgan · joined March 2026</p></div></div>
        <div className="grid gap-5 border-t-2 border-black p-5 sm:grid-cols-[1fr_auto] sm:items-center"><textarea value={bio} onChange={(event) => setBio(event.target.value)} disabled={!editing} className="min-h-16 resize-none bg-transparent text-sm outline-none disabled:text-black" /><div className="grid grid-cols-3 gap-4 text-center sm:min-w-64"><div><p className="text-xl font-black">248</p><p className="text-xs text-muted-foreground">Followers</p></div><div><p className="text-xl font-black">86</p><p className="text-xs text-muted-foreground">Following</p></div><div><p className="text-xl font-black">42</p><p className="text-xs text-muted-foreground">Posts</p></div></div></div>
        <div className="flex flex-wrap gap-2 border-t-2 border-black p-5 text-xs font-bold"><span className="flex items-center gap-1"><MapPin className="size-3" /> Madrid, ES</span><span className="flex items-center gap-1"><Link2 className="size-3" /> alexmorgan.studio</span><span className="flex items-center gap-1"><Lock className="size-3" /> Friends only</span>{editing && <span className="ml-auto flex items-center gap-1 text-emerald-700"><Check className="size-3" /> Changes save in demo</span>}</div>
      </div>
    </section>
  )
}

export function ProfileSummary() { return <a href="#profile" className="flex items-center gap-3 rounded-xl border-2 border-black bg-lime-300 p-3"><span className="grid size-10 place-items-center rounded-full border-2 border-black bg-white font-black">AM</span><span><strong className="block text-sm">Alex Morgan</strong><small className="flex items-center gap-1"><UserRound className="size-3" /> View profile</small></span></a> }
