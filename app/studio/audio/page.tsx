"use client"

import AudioStudio from "@/components/studios/audio-studio"

export default function AudioStudioPage() {
  return <AudioStudio onBack={() => window.history.back()} />
}
