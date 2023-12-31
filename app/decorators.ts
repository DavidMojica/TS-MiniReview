//Decoradores: Funciones que implementan metadatos a una clase propiedad o metodos.
//tsconfig "experimentalDecorators": true, uncomment

//Decoradores de clases:
function DecoradorClase(target:Function){
    target.prototype.Saludar = function(){
        console.log("hola") ;
    }
}

function DecoradorMetodo(esModificable:boolean){
    return function(target:any, propiedad:string, descriptor:PropertyDescriptor){
        descriptor.writable = esModificable;
    }
}

function DecoradorPropiedad(esModificable:boolean){
    return function(target:any, propiedad:string): any{
        let descriptor: PropertyDescriptor = {
            writable:esModificable
        }
        return descriptor;
    }
}

@DecoradorClase
class Person {
    @DecoradorPropiedad(true)
    _nombre:string;
    constructor(nombre:string) {
        this._nombre = nombre;
    }

    @DecoradorMetodo(false)
    EnviarMensaje():void{
        console.log("Enviando mensaje");
    }
}

let people = new Person("Juan");
console.log(people);
people.Saludar();
people.EnviarMensaje();

