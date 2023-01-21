export class Tools{
    public static mostrarFechaActual: () => string; 
    public name: string;

    constructor(name: string){
        this.name = name;
        Tools.mostrarFechaActual = () => {
            return new Date().toISOString();
        }
    }

    public devolverEstadoCajaHerramientas(): string{
        return this.name;
    }

}