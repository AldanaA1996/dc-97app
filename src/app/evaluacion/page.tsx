"use client";

import { useMemo, useState } from "react";
import BottomBar from "@/src/components/layout/bottom-bar";
import Datos from "@/src/features/evaluacion/components/datos";
import DatosEdificios from "@/src/features/evaluacion/components/DatosEdificios";
import SitioForm from "@/src/features/evaluacion/components/sitio";
import EdificioForm from "@/src/features/evaluacion/components/edificio";
import PisoForm from "@/src/features/evaluacion/components/piso1";
import  { generarPDF } from "./../../pdf/Generarpdf";

import { useEvaluacion } from "@/src/context/evaluacion-context";

type Paso =
  | {
      tipo: "datos";
      titulo: string;
    }
  | {
      tipo: "datosEdificios";
      titulo: string;
    }
  | {
      tipo: "sitio";
      titulo: string;
    }
  | {
      tipo: "edificio";
      titulo: string;
      edificioId: number;
    }
  | {
      tipo: "piso";
      titulo: string;
      edificioId: number;
    };

function EvaluacionContenido() {
  const [pasoActual, setPasoActual] = useState(0);

  const evaluacion = useEvaluacion();

  const pasos = useMemo<Paso[]>(() => {
    const pasosGenerados: Paso[] = [
      {
        tipo: "datos",
        titulo: "Datos Generales",
      },

      {
        tipo: "datosEdificios",
        titulo: "Datos de los Edificios",
      },

      {
        tipo: "sitio",
        titulo: "Sitio",
      },
    ];

    evaluacion.edificios.forEach((edificio) => {
      const nombreEdificio = edificio.datos.nombre || `Edificio ${edificio.id}`;

      pasosGenerados.push({
        tipo: "edificio",

        titulo: `Evaluación - ${nombreEdificio}`,

        edificioId: edificio.id,
      });

      pasosGenerados.push({
        tipo: "piso",

        titulo: `Pisos - ${nombreEdificio}`,

        edificioId: edificio.id,
      });
    });

    return pasosGenerados;
  }, [evaluacion.edificios]);

  const paso = pasos[pasoActual];

  const esPrimero = pasoActual === 0;

  const esUltimo = pasoActual === pasos.length - 1;

  function irSiguiente() {
    if (!esUltimo) {
      setPasoActual((prev) => prev + 1);
    }
  }

  function irAtras() {
    if (!esPrimero) {
      setPasoActual((prev) => prev - 1);
    }
  }

  function renderPaso() {
    if (!paso) {
      return null;
    }

    switch (paso.tipo) {
      case "datos":
        return <Datos />;

      case "datosEdificios":
        return <DatosEdificios />;

      case "sitio":
        return <SitioForm />;

      case "edificio":
        return <EdificioForm edificioId={paso.edificioId} />;

      case "piso":
        return <PisoForm edificioId={paso.edificioId} />;
    }
  }
  async function manejarExportar() {
    const pdf = await generarPDF(evaluacion);
    const bytes = new ArrayBuffer(pdf.byteLength);
    new Uint8Array(bytes).set(pdf);
    const blob = new Blob([bytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");

    enlace.href = url;
    enlace.download = "evaluacion-dc97.pdf";
    enlace.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="mt-6 rounded-2xl border border-border bg-card p-4 shadow-sm">
        {pasoActual > 0 && (
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Paso {pasoActual + 1}
              {" de "}
              {pasos.length}
            </p>

            <h2 className="text-xl font-semibold">{paso.titulo}</h2>
          </div>
        )}

        {renderPaso()}
      </div>

      <BottomBar
      onAtras={irAtras}
      onSiguiente={irSiguiente}
      onExportar={manejarExportar}
      deshabilitarAtras={esPrimero}
      deshabilitarSiguiente={esUltimo}
    ></BottomBar>
    </>
  );
}




export default function EvaluacionPage() {
  return (
    
      <main className="min-h-screen bg-background pb-28">
        <div className="mx-auto max-w-5xl p-6">
          <h1 className="text-2xl font-bold">Evaluación</h1>

          <p className="mt-2 text-muted-foreground">
            Registro de datos generales del proyecto y la evaluación.
          </p>

          <EvaluacionContenido />
        </div>
      </main>
  );
}
