//form de inicio de pdf con fechas y datos.
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
import { Field, FieldGroup, FieldLabel } from "@/src/components/ui/field";
import { useEvaluacion } from "@/src/context/evaluacion-context";

const unidadesM = [
  { label: "Metrico", value: "Metrico" },
  { label: "Imperial", value: "Imperial" },
];
const clima = [
  { label: "Templado", value: "Templado" },
  { label: "Tropical", value: "Tropical" },
  { label: "Seco", value: "Seco" },
  { label: "Frio", value: "Frio" },
  { label: "Costero", value: "Costero" },
];
const oficina = [
  { label: "LDC", value: "LDC" },
  { label: "RDC", value: "RDC" },
];

const usos = [
  { label: "Salón de Asambleas", value: "Salón de asambleas" },
  { label: "Sucursal", value: "Sucursal" },
  { label: "Bodega de Construcción", value: "Bodega de Construcción" },
  { label: "Bodega de Asambleas", value: "Bodega de Asambleas" },
  { label: "Salón del Reino", value: "Salón del Reino" },
  { label: "Salón del Reino(Sencillo)", value: "Salón del Reino(Sensillo)" },
  { label: "Oficina Remota del LDC", value: "Oficina Remota del LDC" },
  { label: "Depósito de Literatura", value: "Depósito de Literatura" },
  {
    label: "Oficina Remota de Traducción",
    value: "Oficina Remota de Traducción",
  },
  { label: "Residencia", value: "Residencia" },
  { label: "Centro Educativo", value: "Centro Educativo" },
  { label: "Bodega", value: "Bodega" },
];

export default function Datos() {
  const { datosGenerales, setDatosGenerales, sincronizarEdificios } =
    useEvaluacion();

  function actualizarDatos(cambios: Partial<typeof datosGenerales>) {
    setDatosGenerales({
      ...datosGenerales,
      ...cambios,
    });
  }

  function manejarNumeroEdificios(valor: string) {
    if (valor === "") {
      actualizarDatos({
        numeroEdificios: undefined,
      });

      sincronizarEdificios(0);

      return;
    }

    const cantidad = Math.max(0, Number(valor));

    sincronizarEdificios(cantidad);
  }

  return (
    <form className="p-2 gap-3 grid md:grid-cols-2">
      {/* Fechas */}
      <FieldGroup className="max-w-full pb-6 align-baseline">
        <div className="flex flex-column-2 md:flex-column-1 gap-3">
          <Field>
            <FieldLabel htmlFor="fechaEvaluacion">
              Fecha Evaluación
              <span className="text-destructive">*</span>
            </FieldLabel>

            <Input
              type="date"
              id="fechaEvaluacion"
              value={datosGenerales.fechaEvaluacion ?? ""}
              onChange={(e) =>
                actualizarDatos({
                  fechaEvaluacion: e.target.value,
                })
              }
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="year">
              Año en curso
              <span className="text-destructive">*</span>
            </FieldLabel>

            <Input
              type="number"
              min="2026"
              id="year"
              placeholder="Ingrese el año"
              value={datosGenerales.anioEnCurso ?? ""}
              onChange={(e) =>
                actualizarDatos({
                  anioEnCurso: e.target.value,
                })
              }
              required
            />
          </Field>
        </div>
      </FieldGroup>

       {/* direccion del sitio */}
      <Field>
        <FieldLabel htmlFor="direccion">
          Dirección
          <span className="text-destructive">*</span>
        </FieldLabel>

        <Input
          type="text"
          id="direccion"
          placeholder="Ingrese la dirección"
          value={datosGenerales.direccionSitio ?? ""}
          onChange={(e) =>
            actualizarDatos({
              direccionSitio: e.target.value,
            })
          }
          required
        />
      </Field>

      {/* Oficina */}
      <Field>
        <FieldLabel htmlFor="oficina">
          Oficina
          <span className="text-destructive">*</span>
        </FieldLabel>

        <Select
          value={datosGenerales.oficina ?? ""}
          onValueChange={(valor) =>
            actualizarDatos({
              oficina: valor ?? undefined,
            })
          }
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Seleccione una" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {oficina.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>

      {/* Clima y unidad */}
      <FieldGroup className="max-w-full gap-4 pb-6">
        <div className="flex flex-column-2 gap-3 md:flex-column-1">
          <Field>
            <FieldLabel htmlFor="clima">
              Clima
              <span className="text-destructive">*</span>
            </FieldLabel>

            <Select
              value={datosGenerales.clima ?? ""}
              onValueChange={(valor) =>
                actualizarDatos({
                  clima: valor ?? undefined,
                })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Clima" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  {clima.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          {/* Unidad de medida */}
          <Field>
            <FieldLabel htmlFor="uMedida">
              Unidad de medida
              <span className="text-destructive">*</span>
            </FieldLabel>

            <Select
              value={datosGenerales.unidadMedida ?? ""}
              onValueChange={(valor) =>
                actualizarDatos({
                  unidadMedida: valor ?? undefined,
                })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Unidad de medida" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  {unidadesM.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </div>
      </FieldGroup>

      {/* Uso principal */}
      <FieldGroup className="max-w-full gap-4 pb-6">
        <Field>
          <FieldLabel htmlFor="usoPrincipal">
            Uso Principal
            <span className="text-destructive">*</span>
          </FieldLabel>

          <Select
            value={datosGenerales.usoPrincipal ?? ""}
            onValueChange={(valor) =>
              actualizarDatos({
                usoPrincipal: valor ?? undefined,
              })
            }
            required
          >
            <SelectTrigger>
              <SelectValue className="w-2xl" placeholder="Seleccione uno" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {usos.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
      </FieldGroup>

      {/* Número de edificios */}
      <Field>
        <FieldLabel htmlFor="numEdif">
          Número de Edificios en el Sitio
          <span className="text-destructive">*</span>
        </FieldLabel>

        <Input
          type="number"
          id="numEdif"
          min="1"
          placeholder="Ingrese la cantidad"
          value={datosGenerales.numeroEdificios ?? ""}
          onChange={(e) => manejarNumeroEdificios(e.target.value)}
          required
        />
      </Field>

      {/* Descripción */}
      <Field>
        <FieldLabel htmlFor="descripcionEvaluacion">
          Descripción breve de la evaluación
        </FieldLabel>

        <Input
          type="text"
          id="descripcionEvaluacion"
          value={datosGenerales.descripcionEvaluacion ?? ""}
          onChange={(e) =>
            actualizarDatos({
              descripcionEvaluacion: e.target.value,
            })
          }
        />
      </Field>
    </form>
  );
}
