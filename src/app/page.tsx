"use client"

import BottomBar from "@/src/components/layout/bottom-bar"
import Datos from "../components/forms/datos"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-28">
      <div className="mx-auto max-w-7xl p-6">
        <h1 className="text-2xl font-bold">Nueva Evaluación</h1>
        <p className="text-muted-foreground">
          Complete la información para generar el documento.
        </p>

        <div className="mt-6 space-y-6">
          <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <h2 className="text-lg font-semibold">Evaluación</h2>
            <div className="mt-4">
              <Datos />
            </div>
          </section>
        </div>
      </div>

      <BottomBar />
    </main>
  )
}