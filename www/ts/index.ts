import { Tools } from "./parametros.js";

// let cajaHerramientas: Tools = new Tools("cajaIker");
// console.log(cajaHerramientas.devolverEstadoCajaHerramientas());
// console.log(Tools.mostrarFechaActual());

type evento = {
    id: number,
    title: String,
    asistentes: Array<String>
}

function registrarEvento(evnt: evento): String{
    return `Este evento con id ${evnt.id} es titulado ${evnt.title} y tiene los siguientes asistentes:
                ${evnt.asistentes.toString()}`;
}


console.log(registrarEvento({
    id: 2,
    title: "Cena de navidad",
    asistentes: ["Papa","Mama","Yo"]
}));


