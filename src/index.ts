


console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

//Clase 14 Tipos de datos y conceptos generales


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

//Clase 15 Objetos arreglos e interfaces

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

//Clase 16 Funciones 

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

//Clase 17 Funciones on objetos y argumentos

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

//Clase 18 Tarea sobre objetos e interfaces

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

// Clase 19 Desestructuración

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;

}

interface Detalles {
    autor:string;
    anio:number;
}

const reproductor: Reproductor = {
    volumen:12,
    segundo:20,
    cancion:'El triste',
    detalles: {
        autor:'Hector Lavoe',
        anio: 1970
    }
}

// Desestructuración en una sola linea
//const {cancion, detalles:{ autor, anio} } =  reproductor ;

// Desestructuración recomendada
const {cancion, detalles} =  reproductor ;
//const {autor, anio } = detalles;

//cambio de nombre de variable en Destructuración
const {autor:autorDetalle, anio } = detalles;

console.log('La cancion seleccionada es:',cancion);
console.log('El autor de la cancion es:',autorDetalle);
console.log('La cancion es del año:',anio);

// Clase 20 Desestructuración de arreglos 

const lenguajes: string[] = ["Java", "PHP", "C++"];

//para destrcturar arreglos se realiza con [] y las variables se asignan por el orden del arreglo

const [] = lenguajes;
console.log('El lenguaje 1 es:',lenguajes[0]);
console.log('El lenguaje 2 es:',lenguajes[1]);
console.log('El lenguaje 3 es:',lenguajes[2]);

// Clase 21 Desestructuración de argumentos

interface Producto {
    desc: string;
    valor: number;
}

const portatil: Producto = {
    desc:'Computadora portatil HP Probook',
    valor: 120
}

const Computadora: Producto = {
    desc:'Computadora All in One',
    valor: 200
}


function CalculaISV(productos: Producto[]):[number, number] {
    let total = 0;

    
    //productos.forEach((producto)=>{
    productos.forEach(({valor})=>{    
        //total +=producto.valor;
        total +=valor;
    });
    
 

    return [total,total * 1.19];
}

const articulos = [portatil,Computadora];

const [total, ISV] = CalculaISV(articulos);

console.log('Total:',total);
console.log('ISV:',ISV);

//Clase 22 Importaciones y exportaciones 
import { Producto2, CalculaISV2 } from "./export";
const carritoCompras: Producto2[] = [
    { 
        nombre: 'telefono',
        precio: 150
    },
    { 
        nombre: 'tablet',
        precio: 70
    },
    { 
        nombre: 'computadora',
        precio: 300
    }
];

const [total2, ISV2] = CalculaISV2(carritoCompras);
console.log('Total:',total2);
console.log('ISV:',ISV2);

//Clase 23 Clases Basicas

class personaNormal {
    constructor(
        public nombre: string,
        public direccion:string
    ){}
}

class Heroe extends personaNormal {
    alterEgo : string;
    edad: number;
    //nombreReal:string;

    //Consttructor es una funcon que se llama automaticamente al instanciar un objeto de la clase
    constructor(alterEgo: string, 
                edad:number, 
                // O se puede instanciar el atributo dentro del constructor
                public nombreReal:string )
    
    {
        super(nombreReal,'St. 10 Av 92');
        this.alterEgo =alterEgo;
        this.edad = edad;
        //this.nombreReal = nombreReal;
    }
}
const irmoman = new Heroe('IronMan',30,'Tony Stark');
console.log(irmoman);