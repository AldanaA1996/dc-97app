"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Menu,
  BookOpenText,
  ClipboardList,
  Map,
  Boxes,
  Moon,
  Sun,
  LogOut,
  UserCircle,
} from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

const navItems = [
  { label: "Glosario", href: "/glosario", Icon: BookOpenText },
  { label: "Evaluación", href: "/evaluacion", Icon: ClipboardList },
  { label: "Mapa", href: "/mapa", Icon: Map },
  { label: "Elemento", href: "/elemento", Icon: Boxes },
];

export default function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const montado = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  function toggleTema() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function cerrarSesion() {
    void fetch("/api/login", { method: "DELETE" }).finally(() => {
      router.replace("/");
      router.refresh();
    });
  }

  const esOscuro = montado && theme === "dark";

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Abrir menú">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-72">
          <SheetHeader>
            <SheetTitle>Menú</SheetTitle>
          </SheetHeader>

          <nav className="mt-4 flex flex-col gap-1">
            {navItems.map(({ label, href, Icon }) => {
              const activo = pathname === href;

              return (
                <SheetClose asChild key={label}>
                  <Link
                    href={href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      activo
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                    {label}
                  </Link>
                </SheetClose>
              );
            })}
          </nav>

          <div className="mt-6 space-y-1 border-t border-border pt-4">
            <Button
              type="button"
              variant="ghost"
              className="w-full justify-start gap-3"
              onClick={toggleTema}
            >
              {esOscuro ? (
                <Sun className="size-5" aria-hidden="true" />
              ) : (
                <Moon className="size-5" aria-hidden="true" />
              )}
              {esOscuro ? "Modo claro" : "Modo oscuro"}
            </Button>

            <Button
              type="button"
              variant="ghost"
              className="w-full justify-start gap-3"
              onClick={cerrarSesion}
            >
              <LogOut className="size-5" aria-hidden="true" />
              Cerrar sesión
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-base font-semibold">DC-97 Evaluación</h1>

      <Button variant="ghost" size="icon" aria-label="Perfil">
        <UserCircle className="size-6" />
      </Button>
    </header>
  );
}