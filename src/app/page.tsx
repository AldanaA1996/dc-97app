"use client";

import { FormEvent, useState } from "react";
import { LockKeyhole, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";

export default function Home() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function manejarIngreso(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setCargando(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          message?: string;
        } | null;
        setError(data?.message ?? "No se pudo iniciar sesión.");
        return;
      }

      router.replace("/evaluacion");
      router.refresh();
    } catch {
      setError("No se pudo conectar con el servidor.");
    } finally {
      setCargando(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#102a2e] px-4 py-12">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[48px_48px] opacity-30" />
      <div className="relative w-full max-w-md rounded-2xl border border-white/15 bg-[#f7f5ef] p-8 shadow-2xl shadow-black/30 sm:p-10">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0f766e]">
              DC-97
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#1f2933]">
              Evaluación protegida
            </h1>
            <p className="mt-2 text-sm leading-6 text-[#667085]">
              Introduce la contraseña para acceder al espacio de trabajo.
            </p>
          </div>
          <div className="rounded-xl bg-[#dff1ed] p-3 text-[#0f766e]" aria-hidden="true">
            <LockKeyhole className="size-6" />
          </div>
        </div>

        <form className="space-y-5" onSubmit={manejarIngreso}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1f2933]" htmlFor="password">
              Contraseña
            </label>
            <input
              autoComplete="current-password"
              className="h-11 w-full rounded-lg border border-[#d9e0e7] bg-white px-3 text-sm text-[#1f2933] outline-none transition focus:border-[#0f766e] focus:ring-2 focus:ring-[#0f766e]/20"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
          </div>

          {error && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
              {error}
            </p>
          )}

          <Button className="h-11 w-full gap-2 bg-[#0f766e] text-white hover:bg-[#0b5f59]" disabled={cargando} type="submit">
            <LogIn className="size-4" />
            {cargando ? "Comprobando..." : "Desbloquear evaluación"}
          </Button>
        </form>

        <p className="mt-8 text-center text-xs text-[#667085]">
          Acceso privado para el equipo de evaluación.
        </p>
      </div>
    </main>
  );
}