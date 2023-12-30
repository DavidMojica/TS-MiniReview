console.log('App2: objects');
//-----------Clases-------------//
class Persona {
    private nombre: string;
    private apellido: string;
    protected edad: number;
    public fechaNacimiento: Date;

    constructor(nombre: string, apellido: string, edad: number, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaNacimiento = fechaNacimiento;
    }
}

let p = new Persona("Pedro", "Sanchez", 23, new Date("2020-05-20"));

//Herencia

class Estudiante extends Persona{
    numeroCarnet:number;
    constructor(nombre: string, apellido: string, edad: number, fechaNacimiento: Date, numeroCarnet: number) {
        super(nombre, apellido, edad, fechaNacimiento);
        this.numeroCarnet = numeroCarnet;
    }
}

class Empleado extends Persona{
    numeroSeguridad:number;
    constructor(nombre: string, apellido: string, edad: number, fechaNacimiento: Date, numeroSeguridad: number){
        super(nombre, apellido, edad, fechaNacimiento);
        this.numeroSeguridad = numeroSeguridad;
    }
}