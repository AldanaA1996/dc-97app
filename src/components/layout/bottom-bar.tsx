"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpenText, ClipboardList, Map, Boxes } from "lucide-react"

import { cn } from "@/src/lib/utils"

const items = [
  { label: "Glosario", href: "/glosario", Icon: BookOpenText },
  { label: "Evaluación", href: "/evaluacion", Icon: ClipboardList },
  { label: "Mapa", href: "/mapa", Icon: Map },
  { label: "Elemento", href: "/elemento", Icon: Boxes },
]

export default function BottomBar() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[max(env(safe-area-inset-bottom),0.75rem)] shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur supports-[backdrop-filter]:bg-background/80 md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-4 gap-1 px-2 pt-2">
        {items.map(({ label, href, Icon }) => {
          const isActive = pathname === href

          return (
            <Link
              key={label}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[10px] font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isActive ? "text-foreground bg-accent" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="size-5" aria-hidden="true" />
              <span>{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
