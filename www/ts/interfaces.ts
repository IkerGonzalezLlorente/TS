interface Coche2{

    getMatricula: () => String;
}

class Coche3 implements Coche2{

    public getMatricula(): String{
        return "";
    }
}