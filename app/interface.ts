//PROPIEDADES DE SOLO LECTURA INTERFACES
interface IFigura{
    alto:number,
    ancho:number,
}
let figura:IFigura = {alto:23, ancho: 23}


interface IPunto{
    x:number,
    y:number,
}
let punto:IPunto = {x:34, y:56}

//Extending interfaces
interface IMath{
    total?:number,
    Sumar(a:number, b:number):number,
    Restar(a:number, b:number):number
}

//Clase que va a implementar la interfaz
//La clase debe cumplir con las 2 funciones de la interfaz.
class Utility implements IMath{
    Sumar(a:number, b:number):number{
        return a+b;
    }
    Restar(a: number, b: number): number {
        return a-b
    }
}

interface IFigura1{
    color:string
}
interface IFigura2 extends IFigura1{
    alto:number
}

let figura2 = {} as IFigura2;
figura2.color = "#fff";