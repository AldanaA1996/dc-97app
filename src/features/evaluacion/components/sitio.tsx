
"use client";

import { ChevronDown } from "lucide-react";
import { catalogoCostos, Elemento } from "@/src/features/evaluacion/data/elementosSitio";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/src/components/ui/select";
import { Field, FieldGroup, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { useEvaluacion } from "@/src/context/evaluacion-context";
import { FilaElemento, filaVacia } from "@/src/features/evaluacion/types";
import { useState } from "react";

const condicion = [
  { value: "excelente", label: "Excelente" },
  { value: "buena", label: "Buena" },
  { value: "regular", label: "Regular" },
  { value: "mala", label: "Mala" },
];

function calcularAjusteAniosRestantes(fila: FilaElemento): number | null {
  const anios = parseInt(fila.aniosRestantes, 10);
  if (isNaN(anios)) return null;
  const factores: Record<string, number> = {
    excelente: 1,
    buena: 0.85,
    regular: 0.6,
    mala: 0.3,
  };
  const factor = factores[fila.condicion] ?? 1;
  return Math.round(anios * factor);
}

export default function SitioForm() {
  const { sitio, setSitio } = useEvaluacion();
  const [expandidos, setExpandidos] = useState<Set<number>>(new Set());

  function toggleExpandido(numero: number) {
    setExpandidos((prev) => {
      const next = new Set(prev);

      if (next.has(numero)) {
        next.delete(numero);
      } else {
        next.add(numero);
      }

      return next;
    });
  }

  function obtenerFila(numero: number): FilaElemento {
    return sitio[numero] ?? filaVacia;
  }

  function actualizarFila(numero: number, cambios: Partial<FilaElemento>) {
    const filaActual = { ...obtenerFila(numero), ...cambios };
    filaActual.ajusteAniosRestantes = calcularAjusteAniosRestantes(filaActual);
    setSitio({ ...sitio, [numero]: filaActual });
  }

  function seleccionarComponente(elemento: Elemento, nombreComponente: string) {
    const comp = elemento.componentes.find(
      (c) => c.componente === nombreComponente
    );
    if (!comp) return;
    actualizarFila(elemento.numero, {
      componente: comp.componente,
      codigo: comp.codigo,
      unidad: comp.unidad,
    });
  }

  return (
    <form className="space-y-4">
      {catalogoCostos.map((elemento) => {
        const fila = obtenerFila(elemento.numero);
        const abierto = expandidos.has(elemento.numero);

        return (
          <div
            key={elemento.numero}
            className="border border-border rounded-lg p-4"
          >
            <button
              type="button"
              onClick={() => toggleExpandido(elemento.numero)}
              className="flex items-center justify-between w-full text-left"
            >
              <div className="flex items-baseline gap-3">
                <h1 className="font-bold text-lg">{elemento.nombre}</h1>
                {fila.codigo && (
                  <span className="text-sm text-muted-foreground">
                    {fila.codigo}
                  </span>
                )}
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform ${
                  abierto ? "rotate-180" : ""
                }`}
              />
            </button>

            {abierto && (
              <div className="pt-4">
                <FieldGroup>
                  <Field>
                    <FieldLabel>Componente de Elemento</FieldLabel>
                    <Select
                      value={fila.componente}
                      onValueChange={(valor) =>
                        seleccionarComponente(elemento, valor)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un componente" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {elemento.componentes.map((c, i) => (
                            <SelectItem key={`${c.codigo}-${i}`} value={c.componente}>
                              {c.componente}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field>
                    <FieldLabel>Unidad</FieldLabel>
                    <Input value={fila.unidad} readOnly />
                  </Field>

                  <Field>
                    <FieldLabel>Cantidad</FieldLabel>
                    <Input
                      type="number"
                      value={fila.cantidad}
                      onChange={(e) =>
                        actualizarFila(elemento.numero, { cantidad: e.target.value })
                      }
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Último año de Reemplazo (o Agregado)</FieldLabel>
                    <Input
                      type="number"
                      value={fila.anioReemplazo}
                      onChange={(e) =>
                        actualizarFila(elemento.numero, { anioReemplazo: e.target.value })
                      }
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Condición</FieldLabel>
                    <Select
                      value={fila.condicion}
                      onValueChange={(valor) =>
                        actualizarFila(elemento.numero, { condicion: valor })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona condición" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {condicion.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field>
                    <FieldLabel>Años Restantes</FieldLabel>
                    <Input
                      type="number"
                      value={fila.aniosRestantes}
                      onChange={(e) =>
                        actualizarFila(elemento.numero, { aniosRestantes: e.target.value })
                      }
                    />
                  </Field>
                </FieldGroup>

                <Field>
                  <FieldLabel>Ajuste Años Restantes</FieldLabel>
                  <Input value={fila.ajusteAniosRestantes ?? ""} readOnly />
                </Field>

                <Field>
                  <FieldLabel>Información Adicional</FieldLabel>
                  <Input
                    type="text"
                    value={fila.infoAdicional}
                    onChange={(e) =>
                      actualizarFila(elemento.numero, { infoAdicional: e.target.value })
                    }
                  />
                </Field>
              </div>
            )}
          </div>
        );
      })}
    </form>
  );
}