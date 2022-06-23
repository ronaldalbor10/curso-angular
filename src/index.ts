

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