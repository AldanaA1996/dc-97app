"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

import { Input } from "@/src/components/ui/input";

import {
  Field,
  FieldLabel,
} from "@/src/components/ui/field";

import { useEvaluacion } from "@/src/context/evaluacion-context";

interface DatosEdifFormProps {
  edificioId: number;
}

const categoriasOcupacion = [
  { label: "Seleccione una", value: "" },

  { label: "Residencial", value: "residencial" },
  { label: "Oficina", value: "oficina" },
  { label: "Almacén", value: "almacen" },
  { label: "Educativo", value: "educativo" },
  { label: "Religioso", value: "religioso" },
  { label: "Otro", value: "otro" },
];

const condiciones = [
  { label: "Excelente", value: "excelente" },
  { label: "Buena", value: "buena" },
  { label: "Regular", value: "regular" },
  { label: "Mala", value: "mala" },
];

export default function DatosEdifForm({
  edificioId,
}: DatosEdifFormProps) {
  const {
    edificios,
    actualizarDatosEdificio,
    sincronizarPisos,
  } = useEvaluacion();

  const edificio = edificios.find(
    (item) => item.id === edificioId
  );

  if (!edificio) {
    return null;
  }

  const datos = edificio.datos;

  function actualizarCampo<
    K extends keyof typeof datos
  >(
    campo: K,
    valor: typeof datos[K]
  ) {
    actualizarDatosEdificio(
      edificioId,
      {
        [campo]: valor,
      }
    );
  }

  function manejarNumeroPisos(
    valor: string
  ) {
    const cantidad = Number(valor);

    if (Number.isNaN(cantidad)) {
      return;
    }

    sincronizarPisos(
      edificioId,
      Math.max(1, cantidad)
    );
  }

  return (
    <div className="border border-border rounded-lg p-4 space-y-4">

      <h2 className="text-xl font-semibold">
        Datos del Edificio {edificioId}
      </h2>

      <form className="grid gap-4 md:grid-cols-2">

        {/* Número de edificio WHQ */}
        <Field>
          <FieldLabel htmlFor={`numEdifWHQ-${edificioId}`}>
            Número de Edificio WHQ
          </FieldLabel>

          <Input
            id={`numEdifWHQ-${edificioId}`}
            type="number"
            min="1"
            value={datos.numEdifWHQ ?? ""}
            onChange={(e) =>
              actualizarCampo(
                "numEdifWHQ",
                e.target.value === ""
                  ? undefined
                  : Number(e.target.value)
              )
            }
          />
        </Field>


        {/* Nombre */}
        <Field>
          <FieldLabel htmlFor={`nombre-${edificioId}`}>
            Nombre del Edificio
          </FieldLabel>

          <Input
            id={`nombre-${edificioId}`}
            type="text"
            value={datos.nombre}
            onChange={(e) =>
              actualizarCampo(
                "nombre",
                e.target.value
              )
            }
          />
        </Field>


        {/* Número de pisos */}
        <Field>
          <FieldLabel htmlFor={`numPisos-${edificioId}`}>
            Número de Pisos
          </FieldLabel>

          <Input
            id={`numPisos-${edificioId}`}
            type="number"
            min="1"
            value={datos.numPisos}
            onChange={(e) =>
              manejarNumeroPisos(
                e.target.value
              )
            }
            required
          />
        </Field>


        {/* Categoría de ocupación */}
        <Field>
          <FieldLabel>
            Categoría de Ocupación
          </FieldLabel>

          <Select
            value={datos.catOcupacion}
            onValueChange={(valor) =>
              actualizarCampo(
                "catOcupacion",
                valor ?? ""
              )
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccione una categoría" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {categoriasOcupacion
                  .filter(
                    (item) =>
                      item.value !== ""
                  )
                  .map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>


        {/* Área total */}
        <Field>
          <FieldLabel htmlFor={`area-${edificioId}`}>
            Área Total de Suelo
          </FieldLabel>

          <Input
            id={`area-${edificioId}`}
            type="number"
            min="0"
            step="0.01"
            value={
              datos.totalAreaSuelo === 0
                ? ""
                : datos.totalAreaSuelo
            }
            onChange={(e) =>
              actualizarCampo(
                "totalAreaSuelo",
                e.target.value === ""
                  ? 0
                  : Number(e.target.value)
              )
            }
          />
        </Field>


        {/* Año construcción */}
        <Field>
          <FieldLabel htmlFor={`anioConstruccion-${edificioId}`}>
            Año de Construcción Original
          </FieldLabel>

          <Input
            id={`anioConstruccion-${edificioId}`}
            type="number"
            value={
              datos.anioConsOriginal === 0
                ? ""
                : datos.anioConsOriginal
            }
            onChange={(e) =>
              actualizarCampo(
                "anioConsOriginal",
                e.target.value === ""
                  ? 0
                  : Number(e.target.value)
              )
            }
          />
        </Field>


        {/* Última remodelación */}
        <Field>
          <FieldLabel htmlFor={`anioRemodelacion-${edificioId}`}>
            Año de la Última Remodelación Grande
          </FieldLabel>

          <Input
            id={`anioRemodelacion-${edificioId}`}
            type="number"
            value={
              datos.anioUltRemoGrande === 0
                ? ""
                : datos.anioUltRemoGrande
            }
            onChange={(e) =>
              actualizarCampo(
                "anioUltRemoGrande",
                e.target.value === ""
                  ? 0
                  : Number(e.target.value)
              )
            }
          />
        </Field>


        {/* Condición de mantenimiento */}
        <Field>
          <FieldLabel>
            Condición de Mantenimiento
          </FieldLabel>

          <Select
            value={datos.condMantenimiento}
            onValueChange={(valor) =>
              actualizarCampo(
                "condMantenimiento",
                valor ?? ""
              )
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccione una condición" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {condiciones.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>


        {/* Condición del edificio */}
        <Field>
          <FieldLabel>
            Condición del Edificio
          </FieldLabel>

          <Select
            value={datos.condEdif}
            onValueChange={(valor) =>
              actualizarCampo(
                "condEdif",
                valor ?? ""
              )
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccione una condición" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {condiciones.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>


        {/* Remodelación proyectada */}
        <Field>
          <FieldLabel htmlFor={`anioProyectado-${edificioId}`}>
            Año de Remodelación Proyectada
          </FieldLabel>

          <Input
            id={`anioProyectado-${edificioId}`}
            type="number"
            value={
              datos.anioRemoProyectada === 0
                ? ""
                : datos.anioRemoProyectada
            }
            onChange={(e) =>
              actualizarCampo(
                "anioRemoProyectada",
                e.target.value === ""
                  ? 0
                  : Number(e.target.value)
              )
            }
          />
        </Field>

      </form>

    </div>
  );
}