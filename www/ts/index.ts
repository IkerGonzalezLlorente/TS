let tool = (num: number) => {
    console.log(num + 2);
};


tool(4);

let data: string;
data = "Hola";

class Prueba {
    private id: number | undefined;
    nombre: string;

    constructor(id: number | undefined){
        this.id = id;
        this.nombre = "Iker";
    }
}

let dataobj: Prueba = new Prueba(3);

