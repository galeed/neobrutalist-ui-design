"use client"

import VideoStudio from "@/components/studios/video-studio"

export default function VideoStudioPage() {
  return <VideoStudio onBack={() => window.history.back()} />
}
