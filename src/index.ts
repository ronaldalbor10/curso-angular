

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
// Definición de variables

// definicion de string
let cadena: string = "Esto es una cadena";

console.log(cadena);

// definicion de numero

let numero: number = 12389;

console.log(numero);

// definicion de una variable combinada 

let puedeSerCadenaOnumero: string | number = "Cadena";
 
console.log(puedeSerCadenaOnumero);

puedeSerCadenaOnumero = 120;

console.log(puedeSerCadenaOnumero);

// definicion de boolean

let boolean: boolean = false;


// definicion de Objetos, arreglos e interfaces

//definicion de arreglo any 
let arreglo1 = ['Cadena', 88, false];

// definicion de arreglo string de

let arreglo2: string[] = ['cadena','cadena2'];

// definicion de arreglo tipo de datos combinado

let arreglo3: (string | number | boolean)[] = ['cadena',2, true, false];

//definicion de interface para Objetos
interface Obj {
    prop1:  string;
    prop2:  number;
    prop3:  string[];
    prop4?: string;
}

//definicion de un objeto con interface

const objeto1: Obj = {
    prop1: "cadena",
    prop2: 10,
    prop3:['cadena2','cadena3']
}

objeto1.prop4 = 'propiedad 4';

console.table(objeto1);

// declaracion de funciones

function sumar(a: number, b: number):number{
    return a+b;
}

const resultado = sumar(10,30);

console.log(resultado);

//parametros requeridos, opcionales y los que tienen un valor por defecto
function multiplicar(a: number, b?: number ,c: number = 10){
    return a*c;
}

const resultado2 = multiplicar(10,30);

console.log(resultado2);

interface Personaje {
    nombre: string;
    vida: number;
    mostrarVida: ()=> void;
}

//declarar una funcion que no retorna valor

function sanar(personaje: Personaje, puntos: number):void{
    personaje.vida +=puntos;
    console.log(personaje);
}

const nuevoPersonaje: Personaje = {
    nombre:"Ronald",
    vida:80,
    mostrarVida(){
        console.log('Los puntos de vida del personaje es:',this.vida);
    }
}

sanar(nuevoPersonaje,20);

nuevoPersonaje.mostrarVida();

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
    nombre:"Spiderman",
    edad: 30,
    direccion:{
        calle:'Main St.',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' +this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);