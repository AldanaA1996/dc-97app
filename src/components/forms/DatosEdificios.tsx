"use client";

import { useEvaluacion } from "@/src/context/evaluacion-context";
import DatosEdifForm from "@/src/components/forms/datosEdif";

export default function DatosEdificios() {
  const { edificios, cargado } = useEvaluacion();

  if (!cargado) {
    return null;
  }

  if (edificios.length === 0) {
    return (
      <p className="text-muted-foreground">
        Primero indique la cantidad de edificios en Datos Generales.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {edificios.map((edificio) => (
        <DatosEdifForm
          key={edificio.id}
          edificioId={edificio.id}
        />
      ))}
    </div>
  );
}