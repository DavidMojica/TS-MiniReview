"use strict";
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
console.log('app3');
