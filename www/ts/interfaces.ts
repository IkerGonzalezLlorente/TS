
interface metodosVehiculos{
    getMatricula: () => String;
    acelerar():boolean;
    frenarEnSeco: (bool: boolean) => string; 
}

class Vehiculo{
    mat: string;
    velocidadActual: number;
    constructor(mat: string, velocidadActual: number = 0){
        this.mat = mat;
        this.velocidadActual = velocidadActual;
    }
}

export class Coche extends Vehiculo implements metodosVehiculos{
    nombre: string;

    constructor(nombre:string, mat: string){
        super(mat);
        this.nombre = nombre;
    }

    getMatricula: () => string = () => {
        return super.mat;
    }
    
    acelerar(): boolean {
        return true;
    }

    frenarEnSeco: (bool: boolean) => string = (seguro) => {
        return seguro ? "Hemos frenado en seco" : "Se ha cancelado la operación...";
    }

    };

