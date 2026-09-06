"use client"

import ImageStudio from "@/components/studios/image-studio"

export default function ImageStudioPage() {
  return <ImageStudio onBack={() => window.history.back()} />
}
