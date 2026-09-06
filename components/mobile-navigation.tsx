import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AppNavigation } from "@/components/app-navigation"

export default function MobileNavigation() {
  return <div className="flex h-full flex-col bg-background text-foreground"><div className="border-b-4 border-current p-6"><p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Postcraft / Menú</p><h2 className="text-2xl font-black">OPCIONES</h2></div><div className="flex-1 overflow-auto p-4"><AppNavigation /><nav className="space-y-2 md:hidden">{["Perfil", "Cuentas conectadas", "Editor multiplataforma", "Creador de contenido", "Content Studio", "Configuraciones"].map((label, index) => { const hrefs = ["/profile", "/connections", "/editor", "/creator", "/studio", "/settings"]; return <Link key={label} href={hrefs[index]} className="block rounded-xl border-2 border-current p-3 font-bold hover:bg-muted">{label}</Link> })}</nav></div><div className="border-t-4 border-current p-4"><Button asChild className="w-full rounded-xl border-2 border-current font-black"><Link href="/profile">Abrir perfil</Link></Button></div></div>
}
