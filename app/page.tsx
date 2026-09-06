import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, Instagram, Linkedin, Menu, MessageSquare, Twitter, Users, Youtube } from "lucide-react"
import SocialWorkspace from "@/components/social-workspace"
import InternalInbox from "@/components/internal-inbox"
import PersonalProfile from "@/components/personal-profile"
import NotificationsCenter from "@/components/notifications-center"
import MobileBottomNav from "@/components/mobile-bottom-nav"
import MobileNavigation from "@/components/mobile-navigation"
import ContactsPanel from "@/components/contacts-panel"
import ActivityAnalytics from "@/components/activity-analytics"
import ContentStudioDashboard from "@/components/content-studio-dashboard"
import GettingStarted from "@/components/getting-started"
import AccessibilityPanel from "@/components/accessibility-panel"
import UiStatesDemo from "@/components/ui-states-demo"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Dashboard() {
  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-2 pb-24 sm:p-4 sm:pb-24 md:p-8 md:pb-8">
      {/* Glassmorphic container */}
      <div className="w-full max-w-7xl mx-auto backdrop-blur-xl bg-white/30 border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* Header */}
        <header className="border-b-4 border-black p-4 sm:p-6 bg-white/40 backdrop-blur-md">
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">POSTCRAFT</h1>

            {/* Mobile menu */}
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-xl border-2 border-black">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="border-r-4 border-black p-0">
                  <MobileNavigation />
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Button className="bg-black hover:bg-black/80 text-white rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Connect Account
              </Button>
              <Button
                variant="outline"
                className="rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                Settings
              </Button>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-[280px_1fr] h-[calc(100vh-6rem)]">
          {/* Sidebar - Desktop only */}
          <div className="hidden md:block border-r-4 border-black bg-white/40 p-4">
            <nav className="space-y-2">
              <p className="px-3 pb-1 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Overview</p>
              <Link href="#top" className="flex items-center gap-2 rounded-xl bg-black p-3 text-lg font-bold text-white">Dashboard</Link>
              <p className="px-3 pb-1 pt-4 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Plan & create</p>
              <Link href="#calendar" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">Calendar</Link>
              <Link href="#content-studio" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">Content Studio</Link>
              <p className="px-3 pb-1 pt-4 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Community</p>
              <Link href="#contacts" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">Contacts</Link>
              <Link href="#inbox" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl"><MessageSquare className="size-5" /> Messages <span className="ml-auto rounded-full bg-lime-300 px-2 py-0.5 text-xs">2</span></Link>
              <p className="px-3 pb-1 pt-4 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">Insights & settings</p>
              <Link href="#analytics" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">Analytics</Link>
              <Link href="#accessibility" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">Settings</Link>
              <Link href="#inbox" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">
                <MessageSquare className="size-5" /> Messages <span className="ml-auto rounded-full bg-lime-300 px-2 py-0.5 text-xs">2</span>
              </Link>
            </nav>

            <div className="mt-8">
              <h2 className="text-xl font-black mb-4">PLATFORMS</h2>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 rounded-xl border-2 border-black font-bold"
                >
                  <Instagram className="h-5 w-5" /> Instagram
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 rounded-xl border-2 border-black font-bold"
                >
                  <Twitter className="h-5 w-5" /> Twitter
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 rounded-xl border-2 border-black font-bold"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 rounded-xl border-2 border-black font-bold"
                >
                  <Youtube className="h-5 w-5" /> YouTube
                </Button>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="overflow-auto p-4 sm:p-6">
            <SocialWorkspace />
            <GettingStarted />
            <div className="my-10 border-t-4 border-black" />
            <PersonalProfile />
            <NotificationsCenter />
            <InternalInbox />
            <ContactsPanel />
            <ActivityAnalytics />
            <div id="content-studio"><ContentStudioDashboard /></div>
            <UiStatesDemo />
            <AccessibilityPanel />

            <div className="mb-10 grid gap-4 lg:grid-cols-2">
              <section id="calendar" className="rounded-2xl border-4 border-black bg-white p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-5 flex items-start justify-between"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">Plan ahead</p><h2 className="text-2xl font-black">CONTENT CALENDAR</h2></div><CalendarDays className="size-7" /></div>
                <div className="space-y-3">{[["TODAY · 18:30", "Behind the scenes", "Instagram + TikTok", "bg-fuchsia-200"], ["THU · 09:00", "Launch notes", "LinkedIn", "bg-cyan-200"], ["SAT · 12:00", "Studio diary #04", "YouTube", "bg-amber-200"]].map(([date, title, channel, tone]) => <div key={title} className={`flex items-center gap-3 rounded-xl border-2 border-black p-3 ${tone}`}><div className="min-w-24 text-xs font-black">{date}</div><div className="min-w-0 flex-1"><p className="truncate font-black">{title}</p><p className="text-xs">{channel}</p></div><span className="rounded-full border-2 border-black bg-white px-2 py-1 text-[10px] font-black">SCHEDULED</span></div>)}</div>
              </section>
              <section className="rounded-2xl border-4 border-black bg-black p-5 text-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"><div className="mb-5 flex items-start justify-between"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-white/60">This week</p><h2 className="text-2xl font-black">AUDIENCE PULSE</h2></div><Users className="size-7" /></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{[["+12.8%", "Growth"], ["8.4%", "Engagement"], ["18:30", "Best time"], ["Reels", "Top format"]].map(([value, label]) => <div key={label} className="rounded-xl border-2 border-white/40 bg-white/10 p-3"><p className="text-xl font-black text-lime-300">{value}</p><p className="text-xs text-white/70">{label}</p></div>)}</div><p className="mt-5 text-sm text-white/70">Tu comunidad responde mejor a contenido breve y cercano durante la tarde.</p></section>
            </div>

          </div>
        </div>
      </div>
      <MobileBottomNav />
    </div>
  )
}

