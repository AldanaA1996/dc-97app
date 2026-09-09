"use client";

import { ChevronLeft, ChevronRight, FileDown, Trash2 } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import { useEvaluacion } from "@/src/context/evaluacion-context";

interface BottomBarProps {
  onAtras?: () => void;
  onSiguiente?: () => void;
  onExportar?: () => void;
  deshabilitarAtras?: boolean;
  deshabilitarSiguiente?: boolean;
}

export default function BottomBar({
  onAtras = () => undefined,
  onSiguiente = () => undefined,
  onExportar = () => undefined,
  deshabilitarAtras = false,
  deshabilitarSiguiente = false,
}: BottomBarProps) {
  const { limpiarTodo } = useEvaluacion();

  return (
    <nav
      aria-label="Acciones de la evaluación"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[max(env(safe-area-inset-bottom),0.75rem)] shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur supports-[backdrop-filter]:bg-background/80"
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-2 px-4 pt-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onAtras}
          disabled={deshabilitarAtras}
          aria-label="Paso anterior"
        >
          <ChevronLeft className="size-5" />
        </Button>

        <AlertDialog>
          <AlertDialogTrigger
            render={
              <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Limpiar formulario"
              />
            }
          >
            <Trash2 className="size-5" />
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Limpiar formulario?</AlertDialogTitle>
              <AlertDialogDescription>
                Esto borrará todos los datos ingresados en la evaluación
                actual. Esta acción no se puede deshacer.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={limpiarTodo}>
                Sí, limpiar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button type="button" onClick={onExportar} className="flex-1 gap-2">
          <FileDown className="size-4" />
          Exportar PDF
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onSiguiente}
          disabled={deshabilitarSiguiente}
          aria-label="Paso siguiente"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </nav>
  );
}