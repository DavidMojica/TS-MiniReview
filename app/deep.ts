//Metodos y propiedad estática. Su valor no va a cambiar, es una clase que solo expone propiedades no procesa nada.
//Se accede directamente a traves de la clase 
class Utilidad{
    static pi:number = 3.1416;

    static calcularAreaDeCirculo(radio:number):number{
        return radio * radio * this.pi;
    }
}
let valstat = Utilidad.calcularAreaDeCirculo(23);

//Clases Abstractas.
//Una clase abstracta no puede ser instanciada direcatamente, las encargadas de hacer esto son las clases que
//heredan de la clase abstracta. Puede contener metodos abstractos y no abstractos. Deben de tener al menos 1 metodo abstracto.
abstract class Animal{
    abstract Ruido():void;
}

class Gato extends Animal{
    Ruido(): void {
        console.log("Miau");
    }
}

class Perro extends Animal{
    Ruido(): void {
        console.log("Guau");
    }
}
