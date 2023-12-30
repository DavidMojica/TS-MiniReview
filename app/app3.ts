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
