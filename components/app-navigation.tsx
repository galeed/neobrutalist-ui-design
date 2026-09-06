"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CircleUserRound, FilePenLine, GalleryVerticalEnd, Home, Link2, Menu, Settings2, UsersRound } from "lucide-react"

const items = [
  { href: "/profile", label: "Perfil", icon: CircleUserRound },
  { href: "/connections", label: "Cuentas conectadas", icon: Link2 },
  { href: "/editor", label: "Editor multiplataforma", icon: FilePenLine },
  { href: "/creator", label: "Creador de contenido", icon: UsersRound },
  { href: "/studio", label: "Content Studio", icon: GalleryVerticalEnd },
  { href: "/settings", label: "Configuraciones", icon: Settings2 },
]

export function AppNavigation({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname()
  const classes = mobile
    ? "fixed inset-x-0 bottom-0 z-50 border-t-4 border-black bg-background/95 px-2 py-2 backdrop-blur-md md:hidden"
    : "hidden md:block"

  if (mobile) {
    return (
      <nav aria-label="Navegación principal móvil" className={classes}>
        <div className="mx-auto grid max-w-lg grid-cols-5 gap-1">
          {[{ href: "/", label: "Inicio", icon: Home }, ...items.slice(0, 4)].map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return <Link key={href} href={href} className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-lg text-[10px] font-black uppercase ${active ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}><Icon className="size-5" aria-hidden="true" /><span>{label === "Cuentas conectadas" ? "Cuentas" : label.split(" ")[0]}</span></Link>
          })}
        </div>
      </nav>
    )
  }

  return <nav aria-label="Navegación principal" className={classes}><div className="space-y-2">{items.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={`flex items-center gap-3 rounded-xl border-2 border-transparent p-3 font-bold transition-colors ${pathname === href ? "bg-primary text-primary-foreground" : "hover:border-current hover:bg-muted"}`}><Icon className="size-5" aria-hidden="true" />{label}</Link>)}</div></nav>
}

export function NavigationMenuButton() {
  return <Link href="/" className="inline-flex items-center gap-2 rounded-xl border-2 border-current px-3 py-2 font-black"><Menu className="size-4" /> Opciones</Link>
}
