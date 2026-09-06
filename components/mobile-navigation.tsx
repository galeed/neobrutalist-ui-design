import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, Instagram, Linkedin, MessageSquare, Twitter, UserRound, Youtube } from "lucide-react"

export default function MobileNavigation() {
  return (
    <div className="h-full bg-white/40 backdrop-blur-md flex flex-col">
      <div className="p-6 border-b-4 border-black">
        <h2 className="text-2xl font-black">POSTCRAFT</h2>
      </div>

      <div className="flex-1 overflow-auto p-4">
        <nav className="mb-8 space-y-2">
          <p className="px-3 pb-1 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Overview</p>
          <Link href="#top" className="flex items-center gap-2 rounded-xl bg-black p-3 text-lg font-bold text-white">Dashboard</Link>
          <p className="px-3 pb-1 pt-4 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Plan & create</p>
          <Link href="#calendar" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">Calendar</Link>
          <Link href="#content-studio" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">Content Studio</Link>
          <p className="px-3 pb-1 pt-4 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Community</p>
          <Link href="#contacts" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">Contacts</Link>
          <Link href="#inbox" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">
            <MessageSquare className="size-5" /> Messages
          </Link>
          <p className="px-3 pb-1 pt-4 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Insights & settings</p>
          <Link href="#analytics" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">Analytics</Link>
          <Link href="#notifications" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl"><Bell className="size-5" /> Notifications</Link>
          <Link href="#profile" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl"><UserRound className="size-5" /> Profile</Link>
          <Link href="#accessibility" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">Settings</Link>
        </nav>

        <div>
          <h2 className="text-xl font-black mb-4">PLATFORMS</h2>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start gap-2 rounded-xl border-2 border-black font-bold">
              <Instagram className="h-5 w-5" /> Instagram
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2 rounded-xl border-2 border-black font-bold">
              <Twitter className="h-5 w-5" /> Twitter
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2 rounded-xl border-2 border-black font-bold">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2 rounded-xl border-2 border-black font-bold">
              <Youtube className="h-5 w-5" /> YouTube
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 border-t-4 border-black">
        <div className="grid grid-cols-2 gap-2">
          <Button className="bg-black hover:bg-black/80 text-white rounded-xl border-2 border-black font-bold">
            Connect
          </Button>
          <Button variant="outline" className="rounded-xl border-2 border-black font-bold">
            Settings
          </Button>
        </div>
      </div>
    </div>
  )
}

