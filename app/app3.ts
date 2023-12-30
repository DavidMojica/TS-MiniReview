//TIPOS DE DATOS
let msg:string;
//BOOL
let esCasado:boolean = false;
//esCasado = 12; //ERROR

msg = esCasado ? 'casado': 'No casado';
console.log(msg);
esCasado = obtenerEstadoCivil(true);
msg = esCasado ? 'casado': 'No casado';
console.log(msg);

function obtenerEstadoCivil(state:boolean): boolean{
    return state;
}

//NUMBER: INT - FLOAT ETC
let numero:number = 12.9;

let edad:number = 18;
msg = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(msg);

function obtenerEdad(num:number): number{
    return num;
}

//String
let nombre:string = "Dough";
let apellido:string = "Narval";
let resultado:string = nombre + " " + apellido;
console.log(resultado);
//Metodos
//Mayusculas y minusculas
resultado = resultado.toUpperCase();
resultado = resultado.toLowerCase();
//Caracter en la posicion
let chartIndex: string = resultado.charAt(1); //o

//arrays
//array de numeros
let numbers: number[] = [1, 0, 10, 2];
//array de strings
let names: string[] = ["pedro", "illo", "juan"];
//array de varios tipos de datos
let misc: (boolean | number)[] = [1, true, 2, false, -1];

//tuplas
let datos:[string, number];
datos = ["a", 2];
console.log(datos[0].toUpperCase());

//Enum: Nos permite almacenar un conjunto de constantes con valor definido.
enum Estado{
    activo, //0
    inactivo //1
}
console.log(Estado.activo);

enum TiposDeUsuarios{
    supremo = 1,
    coordinadorSaludMental = 10,
    psicologo = 20,
}
console.log(TiposDeUsuarios.coordinadorSaludMental);

//Any: Variable que admite cualquier tipo de dato
let cualquierValor: any;
cualquierValor = "Cualquier valor";
console.log(cualquierValor.length);

cualquierValor = false;
console.log(cualquierValor);

//void funciones que no retornan nada like c#
function Stats(armor:number, life:number): void{
    console.log(armor, life)
}

//Null & undefined desactivar strict
let monto: number = null;

//Type Assertions: Casteos, conversiones de tipo de dato
let val: any = "Hi im a string";
let res: number = (<string> val).length;
let res2:number = (val as string).length;