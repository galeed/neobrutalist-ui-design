"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Download, Save } from "lucide-react"
import { downloadText, saveProject } from "@/lib/project-storage"

export default function TextStudioPage() {
  const [text, setText] = useState(""); const [saved, setSaved] = useState(false)
  useEffect(() => { const draft = sessionStorage.getItem("text-studio-draft"); if (draft) setText(draft) }, [])
  useEffect(() => { sessionStorage.setItem("text-studio-draft", text) }, [text])
  const stats = useMemo(() => { const words = text.trim() ? text.trim().split(/\s+/).length : 0; return { words, characters: text.length, sentences: text.split(/[.!?]+/).filter(Boolean).length, reading: Math.max(1, Math.ceil(words / 200)) } }, [text])
  const save = async () => { await saveProject({ id: "text-main", kind: "text", name: "Text project", data: { text }, updatedAt: Date.now() }); setSaved(true); setTimeout(() => setSaved(false), 1800) }
  const copy = async () => { await navigator.clipboard.writeText(text) }
  return <div><h2 className="mb-6 text-3xl font-black">TEXT STUDIO</h2><div className="grid gap-6 lg:grid-cols-[1fr_300px]"><Card className="rounded-xl border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-6"><div className="mb-4 flex flex-wrap items-center justify-between gap-2"><h3 className="text-xl font-bold">Text Editor</h3><span className="text-sm font-bold">{stats.words} words · {stats.characters} characters</span></div><Textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Write or paste your text here..." className="min-h-[420px] resize-y rounded-xl border-2 border-black p-4 text-lg" /><div className="mt-4 flex flex-wrap gap-2"><Button variant="outline" className="rounded-xl border-2 border-black font-bold" onClick={copy}><Copy className="mr-2" />Copy</Button><Button variant="outline" className="rounded-xl border-2 border-black font-bold" onClick={() => setText("")}>Clear</Button></div></Card><aside className="rounded-xl border-4 border-black p-4"><h3 className="mb-4 text-xl font-bold">Project</h3><div className="mb-6 space-y-2 text-sm"><div className="flex justify-between"><b>Sentences</b><span>{stats.sentences}</span></div><div className="flex justify-between"><b>Reading time</b><span>{stats.reading} min</span></div></div><Button className="mb-3 w-full rounded-xl border-2 border-black bg-black font-bold text-white" onClick={save}><Save className="mr-2" />{saved ? "Saved locally" : "Save Project"}</Button><Button variant="outline" className="mb-3 w-full rounded-xl border-2 border-black font-bold" onClick={() => downloadText(text, "text-project.txt")}><Download className="mr-2" />Export TXT</Button><Button variant="outline" className="w-full rounded-xl border-2 border-black font-bold" onClick={() => downloadText(`# Text Project\n\n${text}`, "text-project.md", "text/markdown")}><Download className="mr-2" />Export Markdown</Button></aside></div></div>
}
