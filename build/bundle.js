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
console.log('App2');
console.log('app3');
