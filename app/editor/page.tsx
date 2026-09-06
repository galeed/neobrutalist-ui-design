import Link from "next/link"
import { ArrowLeft, FilePenLine } from "lucide-react"
import ContentCreator from "@/components/content-creator"
export default function EditorPage() { return <main className="min-h-screen bg-background p-4 text-foreground sm:p-8"><div className="mx-auto max-w-5xl pb-24"><Link href="/" className="mb-8 inline-flex items-center gap-2 font-bold underline"><ArrowLeft className="size-4" /> Volver al inicio</Link><div className="mb-8 flex items-center gap-3 border-b-4 border-current pb-6"><FilePenLine className="size-9" /><div><p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Workspace</p><h1 className="text-4xl font-black">EDITOR MULTIPLATAFORMA</h1></div></div><ContentCreator type="post" /></div></main> }
