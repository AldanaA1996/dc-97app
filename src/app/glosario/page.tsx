import BottomBar from "@/src/components/layout/bottom-bar"

export default function GlosarioPage() {
  return (
    <main className="min-h-screen bg-background pb-28">
      <div className="mx-auto max-w-3xl p-6">
        <h1 className="text-2xl font-bold">Glosario</h1>
        <p className="mt-2 text-muted-foreground">
          Definiciones y referencias técnicas de los elementos del proyecto.
        </p>

        <div className="mt-6 rounded-2xl border border-border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">
            Aquí se mostrará el contenido del glosario.
          </p>
        </div>
      </div>

      <BottomBar />
    </main>
  )
}
