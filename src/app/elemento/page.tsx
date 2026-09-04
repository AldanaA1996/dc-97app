import BottomBar from "@/src/components/layout/bottom-bar"

export default function ElementoPage() {
  return (
    <main className="min-h-screen bg-background pb-28">
      <div className="mx-auto max-w-3xl p-6">
        <h1 className="text-2xl font-bold">Elemento</h1>
        <p className="mt-2 text-muted-foreground">
          Gestión y detalle de los elementos que forman parte del estudio.
        </p>

        <div className="mt-6 rounded-2xl border border-border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">
            Aquí se mostrará la información de elementos.
          </p>
        </div>
      </div>

      <BottomBar />
    </main>
  )
}
