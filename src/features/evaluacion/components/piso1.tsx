"use client";

import { useState } from "react";

import {
  ChevronDown,
  Building2,
  Layers,
} from "lucide-react";

import {
  catalogoCostos,
  Elemento,
} from "@/src/features/evaluacion/data/elementosPiso";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/src/components/ui/select";

import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/src/components/ui/field";

import {
  Input,
} from "@/src/components/ui/input";

import {
  useEvaluacion,
} from "@/src/context/evaluacion-context";

import {
  FilaElemento,
  filaVacia,
  DatosSeccion,
} from "@/src/features/evaluacion/types";


interface PisoFormProps {
  edificioId: number;
}


const condicion = [

  {
    value: "excelente",
    label: "Excelente",
  },

  {
    value: "buena",
    label: "Buena",
  },

  {
    value: "regular",
    label: "Regular",
  },

  {
    value: "mala",
    label: "Mala",
  },

];


function calcularAjusteAniosRestantes(
  fila: FilaElemento
): number | null {

  const anios =
    parseInt(
      fila.aniosRestantes,
      10
    );


  if (isNaN(anios)) {
    return null;
  }


  const factores:
    Record<string, number> = {

      excelente: 1,

      buena: 0.85,

      regular: 0.6,

      mala: 0.3,

    };


  const factor =
    factores[fila.condicion] ?? 1;


  return Math.round(
    anios * factor
  );

}


export default function PisoForm({
  edificioId,
}: PisoFormProps) {

  const {

    edificios,

    setEvaluacionPiso,

  } = useEvaluacion();


  const [
    pisoSeleccionado,
    setPisoSeleccionado,
  ] = useState<number | null>(
    null
  );


  const [
    expandidos,
    setExpandidos,
  ] = useState<Set<number>>(
    new Set()
  );


  const edificio =
    edificios.find(
      (item) =>
        item.id === edificioId
    );


  if (!edificio) {

    return (

      <p className="text-muted-foreground">

        No se encontró el edificio.

      </p>

    );

  }


  const pisos =
    edificio.pisos;


  function toggleExpandido(
    numero: number
  ) {

    setExpandidos(
      (prev) => {

        const next =
          new Set(prev);


        if (
          next.has(numero)
        ) {

          next.delete(numero);

        } else {

          next.add(numero);

        }


        return next;

      }
    );

  }


  function obtenerFila(

    pisoId: number,

    numeroElemento: number

  ): FilaElemento {

    const piso =
      pisos.find(
        (item) =>
          item.id === pisoId
      );


    return (

      piso?.evaluacion[
        numeroElemento
      ] ??

      filaVacia

    );

  }


  function actualizarFila(

    pisoId: number,

    numeroElemento: number,

    cambios:
      Partial<FilaElemento>

  ) {

    const piso =
      pisos.find(
        (item) =>
          item.id === pisoId
      );


    const evaluacionActual:
      DatosSeccion =
        piso?.evaluacion ?? {};


    const filaActual = {

      ...(evaluacionActual[
        numeroElemento
      ] ?? filaVacia),

      ...cambios,

    };


    filaActual.ajusteAniosRestantes =
      calcularAjusteAniosRestantes(
        filaActual
      );


    setEvaluacionPiso(

      edificioId,

      pisoId,

      {

        ...evaluacionActual,

        [numeroElemento]:
          filaActual,

      }

    );

  }


  function seleccionarComponente(

    pisoId: number,

    elemento: Elemento,

    nombreComponente: string

  ) {

    const comp =
      elemento.componentes.find(
        (c) =>
          c.componente ===
          nombreComponente
      );


    if (!comp) {
      return;
    }


    actualizarFila(

      pisoId,

      elemento.numero,

      {

        componente:
          comp.componente,

        codigo:
          comp.codigo,

        unidad:
          comp.unidad,

      }

    );

  }


  if (
    pisoSeleccionado === null
  ) {

    return (

      <div className="space-y-4">

        <div className="flex items-center gap-3">

          <Building2 className="h-5 w-5 text-muted-foreground" />

          <p className="text-muted-foreground">

            Selecciona el piso que deseas evaluar.

          </p>

        </div>


        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {pisos.map(
            (piso) => (

              <button

                key={piso.id}

                type="button"

                onClick={() =>
                  setPisoSeleccionado(
                    piso.id
                  )
                }

                className="group rounded-xl border border-border bg-card p-5 text-left transition hover:border-primary hover:shadow-md"

              >

                <div className="flex items-center gap-3">

                  <div className="rounded-lg border border-border p-2">

                    <Layers className="h-5 w-5" />

                  </div>


                  <div>

                    <h3 className="font-semibold">

                      Piso {piso.id}

                    </h3>


                    <p className="text-sm text-muted-foreground">

                      Evaluar elementos del piso

                    </p>

                  </div>

                </div>

              </button>

            )
          )}

        </div>

      </div>

    );

  }


  return (

    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-muted-foreground">

            Edificio {edificioId}

          </p>


          <h3 className="text-xl font-semibold">

            Piso {pisoSeleccionado}

          </h3>

        </div>


        <button

          type="button"

          onClick={() =>
            setPisoSeleccionado(
              null
            )
          }

          className="text-sm text-muted-foreground hover:text-foreground"

        >

          Cambiar piso

        </button>

      </div>


      <form className="space-y-4">

        {catalogoCostos.map(
          (elemento) => {

            const fila =
              obtenerFila(

                pisoSeleccionado,

                elemento.numero

              );


            const abierto =
              expandidos.has(
                elemento.numero
              );


            return (

              <div

                key={elemento.numero}

                className="rounded-lg border border-border p-4"

              >

                <button

                  type="button"

                  onClick={() =>
                    toggleExpandido(
                      elemento.numero
                    )
                  }

                  className="flex w-full items-center justify-between text-left"

                >

                  <div className="flex items-baseline gap-3">

                    <h3 className="text-lg font-bold">

                      {elemento.nombre}

                    </h3>


                    {fila.codigo && (

                      <span className="text-sm text-muted-foreground">

                        {fila.codigo}

                      </span>

                    )}

                  </div>


                  <ChevronDown

                    className={`h-5 w-5 shrink-0 transition-transform ${
                      abierto
                        ? "rotate-180"
                        : ""
                    }`}

                  />

                </button>


                {abierto && (

                  <div className="pt-4">

                    <FieldGroup>

                      <Field>

                        <FieldLabel>

                          Componente de Elemento

                        </FieldLabel>


                        <Select

                          value={
                            fila.componente
                          }

                          onValueChange={(
                            valor
                          ) =>

                            seleccionarComponente(

                              pisoSeleccionado,

                              elemento,

                              valor

                            )

                          }

                        >

                          <SelectTrigger>

                            <SelectValue
                              placeholder="Selecciona un componente"
                            />

                          </SelectTrigger>


                          <SelectContent>

                            <SelectGroup>

                              {elemento.componentes.map(
                                (c, i) => (

                                  <SelectItem

                                    key={`${c.codigo}-${i}`}

                                    value={
                                      c.componente
                                    }

                                  >

                                    {c.componente}

                                  </SelectItem>

                                )
                              )}

                            </SelectGroup>

                          </SelectContent>

                        </Select>

                      </Field>


                      <Field>

                        <FieldLabel>

                          Unidad

                        </FieldLabel>


                        <Input

                          value={
                            fila.unidad
                          }

                          readOnly

                        />

                      </Field>


                      <Field>

                        <FieldLabel>

                          Cantidad

                        </FieldLabel>


                        <Input

                          type="number"

                          value={
                            fila.cantidad
                          }

                          onChange={(
                            e
                          ) =>

                            actualizarFila(

                              pisoSeleccionado,

                              elemento.numero,

                              {
                                cantidad:
                                  e.target.value,
                              }

                            )

                          }

                        />

                      </Field>


                      <Field>

                        <FieldLabel>

                          Último año de Reemplazo (o Agregado)

                        </FieldLabel>


                        <Input

                          type="number"

                          value={
                            fila.anioReemplazo
                          }

                          onChange={(
                            e
                          ) =>

                            actualizarFila(

                              pisoSeleccionado,

                              elemento.numero,

                              {
                                anioReemplazo:
                                  e.target.value,
                              }

                            )

                          }

                        />

                      </Field>


                      <Field>

                        <FieldLabel>

                          Condición

                        </FieldLabel>


                        <Select

                          value={
                            fila.condicion
                          }

                          onValueChange={(
                            valor
                          ) =>

                            actualizarFila(

                              pisoSeleccionado,

                              elemento.numero,

                              {
                                condicion:
                                  valor,
                              }

                            )

                          }

                        >

                          <SelectTrigger>

                            <SelectValue
                              placeholder="Selecciona condición"
                            />

                          </SelectTrigger>


                          <SelectContent>

                            <SelectGroup>

                              {condicion.map(
                                (item) => (

                                  <SelectItem

                                    key={
                                      item.value
                                    }

                                    value={
                                      item.value
                                    }

                                  >

                                    {item.label}

                                  </SelectItem>

                                )
                              )}

                            </SelectGroup>

                          </SelectContent>

                        </Select>

                      </Field>


                      <Field>

                        <FieldLabel>

                          Años Restantes

                        </FieldLabel>


                        <Input

                          type="number"

                          value={
                            fila.aniosRestantes
                          }

                          onChange={(
                            e
                          ) =>

                            actualizarFila(

                              pisoSeleccionado,

                              elemento.numero,

                              {
                                aniosRestantes:
                                  e.target.value,
                              }

                            )

                          }

                        />

                      </Field>

                    </FieldGroup>


                    <Field>

                      <FieldLabel>

                        Ajuste Años Restantes

                      </FieldLabel>


                      <Input

                        value={
                          fila.ajusteAniosRestantes ??
                          ""
                        }

                        readOnly

                      />

                    </Field>


                    <Field>

                      <FieldLabel>

                        Información Adicional

                      </FieldLabel>


                      <Input

                        type="text"

                        value={
                          fila.infoAdicional
                        }

                        onChange={(
                          e
                        ) =>

                          actualizarFila(

                            pisoSeleccionado,

                            elemento.numero,

                            {
                              infoAdicional:
                                e.target.value,
                            }

                          )

                        }

                      />

                    </Field>

                  </div>

                )}

              </div>

            );

          }
        )}

      </form>

    </div>

  );

}