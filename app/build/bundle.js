console.log("Typescript");
//Para ejecutar TS hay que compilar el archivo mediante la consola.
//tsc app.ts
//Modo observador: Reflejar automaticamente los cambios en el archivo TS.
//tsc app -w
//Inicializar el archivo tsconfig
//tsc --init
//Seleccionar ruta de salida para la compilación de archivos:
//tsconfig -> outDir:  "./build"
//Para no darle sobrecarga al servidor, hay que evitar llamar muchos archivos scripts.  La solucion es outFile
//tsconfig ->outFile: ".build/bundle.js". "module" : "none"
//Incluir y excluir modulos
//Usar include y exclude en el tsconfig luego tsc
//Para cambiar el tipo de salida en el bundle, se puede configurar el emascript
//"target": "ES6",   "target": "ES5", etc
console.log('App2');
//Listas
let lista = ["Pepe1", "Pedro", "huevon"];
for (const i of lista) {
    console.log(i);
}
//TIPOS DE DATOS
let msg;
//BOOL
let esCasado = false;
//esCasado = 12; //ERROR
msg = esCasado ? 'casado' : 'No casado';
console.log(msg);
esCasado = obtenerEstadoCivil(true);
msg = esCasado ? 'casado' : 'No casado';
console.log(msg);
function obtenerEstadoCivil(state) {
    return state;
}
//NUMBER: INT - FLOAT ETC
let numero = 12.9;
let edad = 18;
msg = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(msg);
function obtenerEdad(num) {
    return num;
}
//String
let nombre = "Dough";
let apellido = "Narval";
let resultado = nombre + " " + apellido;
console.log(resultado);
//Metodos
//Mayusculas y minusculas
resultado = resultado.toUpperCase();
resultado = resultado.toLowerCase();
//Caracter en la posicion
let chartIndex = resultado.charAt(1); //o
//arrays
//array de numeros
let numbers = [1, 0, 10, 2];
//array de strings
let names = ["pedro", "illo", "juan"];
//array de varios tipos de datos
let misc = [1, true, 2, false, -1];
//tuplas
let datos;
datos = ["a", 2];
console.log(datos[0].toUpperCase());
//Enum: Nos permite almacenar un conjunto de constantes con valor definido.
var Estado;
(function (Estado) {
    Estado[Estado["activo"] = 0] = "activo";
    Estado[Estado["inactivo"] = 1] = "inactivo"; //1
})(Estado || (Estado = {}));
console.log(Estado.activo);
var TiposDeUsuarios;
(function (TiposDeUsuarios) {
    TiposDeUsuarios[TiposDeUsuarios["supremo"] = 1] = "supremo";
    TiposDeUsuarios[TiposDeUsuarios["coordinadorSaludMental"] = 10] = "coordinadorSaludMental";
    TiposDeUsuarios[TiposDeUsuarios["psicologo"] = 20] = "psicologo";
})(TiposDeUsuarios || (TiposDeUsuarios = {}));
console.log(TiposDeUsuarios.coordinadorSaludMental);
//Any: Variable que admite cualquier tipo de dato
let cualquierValor;
cualquierValor = "Cualquier valor";
console.log(cualquierValor.length);
cualquierValor = false;
console.log(cualquierValor);
//void funciones que no retornan nada like c#
function Stats(armor, life) {
    console.log(armor, life);
}
//Null & undefined desactivar strict
let monto = null;
//Type Assertions: Casteos, conversiones de tipo de dato
let val = "Hi im a string";
let res = val.length;
let res2 = val.length;
