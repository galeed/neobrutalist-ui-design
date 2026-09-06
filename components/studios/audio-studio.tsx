"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Download, Music, Pause, Play, Save, SkipBack, SkipForward, Upload, Volume2, VolumeX } from "lucide-react"
import { downloadBlob, saveProject } from "@/lib/project-storage"

interface AudioStudioProps { onBack: () => void }

export default function AudioStudio({ onBack }: AudioStudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [url, setUrl] = useState("")
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(80)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => () => { if (url) URL.revokeObjectURL(url) }, [url])
  const loadFile = (nextFile: File) => { if (url) URL.revokeObjectURL(url); setFile(nextFile); setUrl(URL.createObjectURL(nextFile)); setStart(0); setEnd(0) }
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => { const nextFile = event.target.files?.[0]; if (nextFile) loadFile(nextFile) }
  const togglePlayback = () => { if (!audioRef.current) return; if (playing) audioRef.current.pause(); else void audioRef.current.play(); setPlaying(!playing) }
  const seek = (amount: number) => { if (audioRef.current) audioRef.current.currentTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + amount)) }
  const save = async () => { if (!file) return; await saveProject({ id: `audio-${file.name}`, kind: "audio", name: file.name, data: { start, end, volume }, updatedAt: Date.now() }) }
  const exportAudio = () => { if (file) downloadBlob(file, `edited-${file.name}`) }

  return <Card className="rounded-xl border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-6">
    <Button variant="outline" className="mb-4 rounded-xl border-2 border-black font-bold" onClick={onBack}>Back to Studios</Button>
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]"><main>
      <h2 className="mb-4 text-2xl font-black">AUDIO STUDIO</h2>
      <label className="mb-6 flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-4 border-dashed border-black p-6 text-center">
        <Music className="mb-2 size-10" /> <span className="font-bold">{file ? file.name : "Select an audio file"}</span><span className="text-sm text-muted-foreground">MP3, WAV, OGG and more</span><input type="file" accept="audio/*" className="sr-only" onChange={handleFileChange} />
      </label>
      {url ? <><audio ref={audioRef} src={url} onLoadedMetadata={(event) => { setDuration(event.currentTarget.duration); setEnd(event.currentTarget.duration) }} onEnded={() => setPlaying(false)} className="hidden" />
        <div className="rounded-xl border-4 border-black bg-white p-4"><div className="mb-4 flex h-28 items-center justify-center rounded-lg border-2 border-black bg-[repeating-linear-gradient(90deg,#000_0_3px,transparent_3px_10px)] opacity-80" aria-label="Audio waveform" /><div className="flex justify-center gap-2"><Button variant="outline" size="icon" className="rounded-xl border-2 border-black" onClick={() => seek(-5)} aria-label="Back 5 seconds"><SkipBack /></Button><Button size="icon" className="size-12 rounded-xl border-2 border-black bg-black text-white" onClick={togglePlayback} aria-label={playing ? "Pause" : "Play"}>{playing ? <Pause /> : <Play />}</Button><Button variant="outline" size="icon" className="rounded-xl border-2 border-black" onClick={() => seek(5)} aria-label="Forward 5 seconds"><SkipForward /></Button></div></div>
        <div className="mt-4 rounded-xl border-2 border-black p-4"><div className="mb-2 flex justify-between font-bold"><span>Trim range</span><span>{start.toFixed(1)}s – {end.toFixed(1)}s</span></div><Slider min={0} max={duration || 1} step={0.1} value={[start, end || duration]} onValueChange={(values) => { setStart(values[0]); setEnd(values[1] ?? end) }} /></div></> : <p className="text-center text-muted-foreground">Upload a file to start editing.</p>}
    </main><aside className="rounded-xl border-4 border-black p-4"><h3 className="mb-4 text-xl font-bold">Controls</h3><div className="flex items-center justify-between"><span className="font-bold">Volume</span>{volume === 0 ? <VolumeX /> : <Volume2 />}</div><Slider value={[volume]} max={100} onValueChange={(v) => { setVolume(v[0]); if (audioRef.current) audioRef.current.volume = v[0] / 100 }} className="my-4" /><Button className="mb-3 w-full rounded-xl border-2 border-black bg-black font-bold text-white" onClick={save} disabled={!file}><Save className="mr-2" />Save Project</Button><Button variant="outline" className="w-full rounded-xl border-2 border-black font-bold" onClick={exportAudio} disabled={!file}><Download className="mr-2" />Export Audio</Button></aside></div>
  </Card>
}
