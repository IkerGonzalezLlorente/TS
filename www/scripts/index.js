import { Tools } from "./parametros.js";
import { Visible } from "./visibilidad.js";
function registrarEvento(evnt) {
    return `Este evento con id ${evnt.id} es titulado ${evnt.title} y tiene los siguientes asistentes:
                ${evnt.asistentes.toString()}`;
}
console.log(registrarEvento({
    id: 2,
    title: "Cena de navidad",
    asistentes: ["Papa", "Mama", "Yo"]
}));
let data = new Tools("Iker");
let prueba = new Visible("Iker");
prueba.nombre;
