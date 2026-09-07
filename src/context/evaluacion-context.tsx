"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import {
  DatosGenerales,
  DatosSeccion,
  DatosEdificio,
  EdificioEvaluacion,
  datosGeneralesVacio,
  datosEdificioVacio,
} from "../types/evaluacion";

const STORAGE_KEY = "evaluacion-en-progreso";

interface EstadoEvaluacion {
  datosGenerales: DatosGenerales;
  sitio: DatosSeccion;
  edificios: EdificioEvaluacion[];
}

const estadoVacio: EstadoEvaluacion = {
  datosGenerales: datosGeneralesVacio,
  sitio: {},
  edificios: [],
};

interface EvaluacionContextValue extends EstadoEvaluacion {
  setDatosGenerales: (datos: DatosGenerales) => void;

  setSitio: (datos: DatosSeccion) => void;

  sincronizarEdificios: (cantidad: number) => void;

  actualizarDatosEdificio: (
    edificioId: number,
    cambios: Partial<DatosEdificio>,
  ) => void;

  sincronizarPisos: (edificioId: number, cantidad: number) => void;

  setEvaluacionEdificio: (edificioId: number, datos: DatosSeccion) => void;

  setEvaluacionPiso: (
    edificioId: number,
    pisoId: number,
    datos: DatosSeccion,
  ) => void;

  limpiarTodo: () => void;

  cargado: boolean;
}

const EvaluacionContext = createContext<EvaluacionContextValue | null>(null);

function cargarDesdeStorage(): EstadoEvaluacion {
  if (typeof window === "undefined") {
    return estadoVacio;
  }

  try {
    const guardado = window.localStorage.getItem(STORAGE_KEY);

    if (!guardado) {
      return estadoVacio;
    }

    return {
      ...estadoVacio,
      ...JSON.parse(guardado),
    };
  } catch {
    return estadoVacio;
  }
}

export function EvaluacionProvider({ children }: { children: ReactNode }) {
  const [estado, setEstado] = useState<EstadoEvaluacion>(estadoVacio);
  const [cargado, setCargado] = useState(false);

 useEffect(() => {
  setEstado(cargarDesdeStorage());
  setCargado(true);
 }, []);

 useEffect(() => {
  if (!cargado) return;
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(estado)
    );
  } catch (error) {
    console.error("No se pudo guardar en localStorage:", error);
  }
 }, [estado, cargado]);

  function sincronizarEdificios(cantidad: number) {
    const cantidadValida = Math.max(0, cantidad);

    setEstado((prev) => {
      const nuevosEdificios = Array.from(
        { length: cantidadValida },
        (_, index) => {
          const id = index + 1;

          const edificioExistente = prev.edificios.find(
            (edificio) => edificio.id === id,
          );

          return (
            edificioExistente ?? {
              id,

              datos: {
                ...datosEdificioVacio,
              },

              evaluacion: {},

              pisos: [
                {
                  id: 1,
                  evaluacion: {},
                },
              ],
            }
          );
        },
      );

      return {
        ...prev,

        datosGenerales: {
          ...prev.datosGenerales,

          numeroEdificios: cantidadValida,
        },

        edificios: nuevosEdificios,
      };
    });
  }

  function actualizarDatosEdificio(
    edificioId: number,

    cambios: Partial<DatosEdificio>,
  ) {
    setEstado((prev) => ({
      ...prev,

      edificios: prev.edificios.map((edificio) =>
        edificio.id === edificioId
          ? {
              ...edificio,

              datos: {
                ...edificio.datos,

                ...cambios,
              },
            }
          : edificio,
      ),
    }));
  }

  function sincronizarPisos(
    edificioId: number,

    cantidad: number,
  ) {
    const cantidadValida = Math.max(1, cantidad);

    setEstado((prev) => ({
      ...prev,

      edificios: prev.edificios.map((edificio) => {
        if (edificio.id !== edificioId) {
          return edificio;
        }

        const nuevosPisos = Array.from(
          {
            length: cantidadValida,
          },

          (_, index) => {
            const id = index + 1;

            const pisoExistente = edificio.pisos.find((piso) => piso.id === id);

            return (
              pisoExistente ?? {
                id,

                evaluacion: {},
              }
            );
          },
        );

        return {
          ...edificio,

          datos: {
            ...edificio.datos,

            numPisos: cantidadValida,
          },

          pisos: nuevosPisos,
        };
      }),
    }));
  }

  function setEvaluacionEdificio(
    edificioId: number,

    datos: DatosSeccion,
  ) {
    setEstado((prev) => ({
      ...prev,

      edificios: prev.edificios.map((edificio) =>
        edificio.id === edificioId
          ? {
              ...edificio,

              evaluacion: datos,
            }
          : edificio,
      ),
    }));
  }

  function setEvaluacionPiso(
    edificioId: number,

    pisoId: number,

    datos: DatosSeccion,
  ) {
    setEstado((prev) => ({
      ...prev,

      edificios: prev.edificios.map((edificio) => {
        if (edificio.id !== edificioId) {
          return edificio;
        }

        return {
          ...edificio,

          pisos: edificio.pisos.map((piso) =>
            piso.id === pisoId
              ? {
                  ...piso,

                  evaluacion: datos,
                }
              : piso,
          ),
        };
      }),
    }));
  }

  function limpiarTodo() {
    setEstado(estadoVacio);

    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("No se pudo limpiar localStorage:", error);
    }
  }

  return (
    <EvaluacionContext.Provider
      value={{
        ...estado,

        setDatosGenerales: (datosGenerales) =>
          setEstado((prev) => ({
            ...prev,

            datosGenerales,
          })),

        setSitio: (sitio) =>
          setEstado((prev) => ({
            ...prev,

            sitio,
          })),

        sincronizarEdificios,

        actualizarDatosEdificio,

        sincronizarPisos,

        setEvaluacionEdificio,

        setEvaluacionPiso,

        limpiarTodo,

        cargado,
      }}
    >
      {children}
    </EvaluacionContext.Provider>
  );
}

export function useEvaluacion() {
  const ctx = useContext(EvaluacionContext);

  if (!ctx) {
    throw new Error("useEvaluacion debe usarse dentro de EvaluacionProvider");
  }

  return ctx;
}
