//TIPOS DE DATOS
//BOOL
let esCasado:boolean = false;
//esCasado = 12; //ERROR
let msg:string;

msg = esCasado ? 'casado': 'No casado';
console.log(msg);
esCasado = obtenerEstadoCivil(true);
msg = esCasado ? 'casado': 'No casado';
console.log(msg);


function obtenerEstadoCivil(state:boolean): boolean{
    return state;
}