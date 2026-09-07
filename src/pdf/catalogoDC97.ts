import { catalogoCostos as catalogoEdificio } from "../features/evaluacion/data/elementosEdif";
import { catalogoCostos as catalogoPiso } from "../features/evaluacion/data/elementosPiso";
import { catalogoCostos as catalogoSitio } from "../features/evaluacion/data/elementosSitio";

export type SeccionCatalogo = "sitio" | "edificio" | "piso";

export interface ElementoCatalogo {
    numero: number;
    nombre: string;
    seccion: SeccionCatalogo;
}

const convertirElementos = (
    elementos: { numero: number; nombre: string }[],
    seccion: SeccionCatalogo
): ElementoCatalogo[] =>
    elementos.map(({ numero, nombre }) => ({
        numero,
        nombre,
        seccion,
    }));

export const CATALOGO_SITIO = convertirElementos(catalogoSitio, "sitio");

export const CATALOGO_EDIFICIO = convertirElementos(catalogoEdificio, "edificio");

export const CATALOGO_PISO = convertirElementos(catalogoPiso, "piso");

export const CATALOGO_DC97 = {
    sitio: CATALOGO_SITIO,
    edificio: CATALOGO_EDIFICIO,
    piso: CATALOGO_PISO,
};
