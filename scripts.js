let numeroUsuario = parseInt(prompt('Ingrese el numero hasta el que desea contar'))

/*for(desde; hasta; actualizacion)*/

for (let i = 0; i < numeroUsuario; i++){ 
    console.log("Este es el ciclo N: " + i)
}
/*Actualización tambien se puede escribir como i++*/


for (let i = 0; i < 10; i + 1){ 
    console.log("Este es el ciclo N: " + i)
}
/*Actualización tambien se puede escribir como i++*/

for (let i = 0; i < numeroUsuario; i++){ 
    if(i > 10){
        break;
    }
    console.log("Este es el ciclo N: " + i)
}
/*Hace un break dada la condicion*/

for (let i = 0; i < numeroUsuario; i++){ 
    if(i == 10){
        continue;
    }
    console.log("Este es el ciclo N: " + i)
}
/*Saltea cierto numero*/

/*Variable*/
let numero = 0;

/*Dos maneras de escribirlo*/
numero + numero + 1;
numero += 10;

/*Dos maneras de escribirlo*/
i += 1
i++

i -= 1
i-- 

/*Evaluando casos*/
let colorUsuario = prompt('Ingrese un color: ')

switch(colorUsuario){
    case 'rojo':
        console.log('Tu color es el Rojo')
        break;
    case 'azul':
        alert('Azul es un gran color')
        break;
    case 'amarillo':
        console.log('Que color interesante')
        break;
    default:
        console.log('No pensamos en el color:' + colorUsuario)
        break;
}

// FUNCIONES -------------------------------------------------------------------------------------------------------------------------

function saludar() {
    console.log("¡Hola estudiantes!");
}
saludar()

//Funciones con parametros
function saludar(nombre) {
    console.log("¡Hola " + nombre + "!");
}
saludar("Pablo")

//Ejemplo con Prompt
function saludar(nombre) {
    console.log("¡Hola " + nombre + "!");
}
let nombreUsuario = prompt("Ingrese su nombre")

saludar(nombreUsuario)

//Ejemplo con Prompt (Nro 2)
function saludar(nombre, apellido, edad) {
    console.log("¡Hola " + nombre + " " + apellido + "!" + "Tenes " + edad + " años");
}
let nombreUsuario = prompt("Ingrese su nombre")
let apellidoUsuario = prompt("Ingrese su apellido")
let edadUsuario = prompt ("Ingrese su edad")

saludar(nombreUsuario, apellidoUsuario, edadUsuario)

//Resultado de funcion con RETURN

function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);
console.log(resultado)

//Funciones con switch

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "*"));

// OBJETOS -----------------------------------------------------------------------------------------------------------------

const nombreMouseA = {
    nombre: "M1",
    stock: 12,
    precio: 369,
}

console.log(nombreMouseA)

//Funciones Constructoras

function Producto (nombreValor, stockValor, precioValor){
    this.nombre = nombreValor;
    this.stock = stockValor; 
    this.precio = precioValor;
}

const productoB = new Producto("Teclado", 12, 445)
const productoC = new Producto("Mousepad", 12, 690)

function Producto (nombreValor, stockValor, precioValor){
    this.nombre = nombreValor;
    this.stock = stockValor; 
    this.precio = precioValor;
    this.venta = function(cantidadComprada){
        this.stock -= cantidadComprada
        alert("Se vendieron: " + cantidadComprada + " unidades")
    }
}

// Metodos en objetos JS

let apellido = "Aguero"
apellido.length // Cuenta los caracteres
apellido.toUpperCase // Pasa los caracteres a mayusculas
apellido.toLowerCase // Pasa los caracteres a minuscula

// Operador in y for...in

const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}

// Clases

class Persona{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this. edad = edad;
        this.calle = calle;
    }
    hablar(){
        console.log("Hola soy " + this.nombre)
    }
}

const persona1 = new Persona ("Homero", 39, "Av siempre viva 742")

// ARRAYS -----------------------------------------------------------------------------------------------------------------------------

const nombres = ["Kun", "Lio", "Fideo" ]
for (let i = 0; i< 2; i++){
alert ("Hola " + nombres [i])
}

// Te va a dar la cantidad de objetos que haya dentro del array
const nombres = ["Kun", "Lio", "Fideo", "Pipi", "Pupi" ]
for (let i = 0; i< nombres.length; i++){
alert ("Hola " + nombres [i])
}

//Push
nombres.push ("Pedro")

// Push con prompt

const nombres = ["Kun", "Lio", "Fideo", "Pipi", "Pupi" ]

let usuario = prompt("Ingrese su nombre")

nombres.push (usuario)

// Push con prompt pero agrega al principio

const nombres = ["Kun", "Lio", "Fideo", "Pipi", "Pupi" ]

let usuario = prompt("Ingrese su nombre")

nombres.unshift(usuario)

// Sacar de la lista el ultimo elemento

const nombres = ["Kun", "Lio", "Fideo", "Pipi", "Pupi" ]

nombres.pop()

console.log(nombres)

// Sacar de la lista el primer elemento

const nombres = ["Kun", "Lio", "Fideo", "Pipi", "Pupi" ]

nombres.shift()

console.log(nombres)

// Sacar elementos de la lista

const nombres = ["Kun", "Lio", "Fideo", "Pipi", "Pupi" ]

nombres.splice(2,2) // Marca donde empieza y cuantos casilleros quiero eliminar

console.log(nombres)

// JOIN - Unir el string dependiendo el valor que pasamos por parametro

const nombres = ["Luis", "Ana", "Julia", "Juan"]

console.log( nombres.join(", ") ) 
// Luis, Ana, Julia

console.log( nombres.join("*") ) 
// Luis*Ana*Julia

// CONCAT - Combinar dos arrays en un unico array

const perros   = ["Pupy", "Ronnie"]


const gatos = ["Mishi", "Garfield", "Zuri"]
const mascotas = perros.concat(gatos)

console.log(mascotas)
// ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]

// SLICE - Copia de una parte del array dentro de un nuevo array, empieza por el inicio hasta el fin (que no lo incluye)

const nombres = ["Kun", "Lio", "Fideo", "Pipi", "Pupi" ]

const nuevoArray = nombres.slice (1, 3)

console.log(nuevoArray)

// INDEXOF - Obtenemos el indice de un elemento de un array

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

console.log( nombres.indexOf('Rita') ) // ⇒ 0
console.log( nombres.indexOf('Ana') ) // ⇒ 3
console.log( nombres.indexOf('Julieta') ) // ⇒ -1

// INCLUDES - Sirve para saber si un elemento existe o no existe. Devuelve un booleano en caso afirmativo o negativo.

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

console.log( nombres.includes('Rita') ) // ⇒ true
console.log( nombres.includes('Miguel') ) // ⇒ true
console.log( nombres.includes('Julieta') ) // ⇒ false

// REVERSE - Invierte el orden de los elementos dentro del array. Modifica el array original.

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

nombres.reverse()

console.log( nombres ) 
// ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']

// FUNCIONES CON ORDEN SUPERIOR --------------------------------------------------------------------------------------------------------------------------
function mayorQue (n){
    return (m) => m > n
}

// Otra manera de aplicar sería 

/* let mayorQueCien = (m) => m > 100 */

let mayorQueDiez = mayorQue(10)
let mayorQueCien = mayorQue (100)

console.log(mayorQueDiez(12)) // True
console.log (mayorQueDiez (8)) // False

function suma (a, b){
    return a + b 
}

suma(1, 2 )

// Otra forma de escribirlo sería

let suma = (a, b) => a + b

// RETORNAR FUNCIONES - 


function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
    else if (op == "multiplicar"){
        return (a, b) => a * b
    } 
    else if (op == "dividir"){
        return (a, b) => a / b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")
let multiplicacion = asignarOperacion ("multiplicar")
let division = asignarOperacion ("dividir")

console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2
console.log (multiplicacion (2, 2 )) // 4
console.log (division (10, 2)) // 5

// RECIBIR FUNCIONES POR PARAMETRO 

function porCadaUno(arr, fn) { // Array y funcion
    for (const el of arr) {
        fn(el)
    }
}
// Por cada uno de los objetos de un array realiza una funcion

const numeros= [1, 2, 3, 4] // Declaro el array

porCadaUno(numeros, console.log) // Array y funcion 


let total = 0

function acumular(num) {
    total += num
}

porCadaUno(numeros, acumular)
console.log(total) // 10

// Arrow function - Definir directamente sobre el parametro aprovechando la sintaxis para realizar acciones más dinamicas

const duplicado = [] // Define array nuevo

porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2) // Toma los numeros del array "numeros" y agrega al array "duplicados" mediante el push y realiza la función de multiplicar los numeros que están dentro del array "numeros" 
})

console.log(duplicado) // [2, 4, 6, 8]

// METODOS DE BUSQUEDA Y TRANSFORMACIÓN 

// For each - Similar a lo anterior, itera sobre el array y por cada elemento ejecuta una función que enviemos por parametro, la cual recibe a su vez el elemento del array que esta recorriendo.

const numeros = [1, 2, 3, 4, 5, 6]

numeros.forEach( (num)=> {
    console.log(num)
} )

// Find - Recibe una funcion de comparacion por parametro. Captura el elemento que se está recorriendo y retorna true o false segun la comparación ejecutada. 

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]

const resultado = cursos.find((el) => el.nombre === "ReactJS") // (el) funciona como para darle al parametro un valor

const resultado2 = cursos.find((el) => el.nombre === "DW") // Si escribiera "Javascript" me traería en el segundo console.log la info del ARRAY "cursos" 

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined

// Filter - Funcion comparadora por parametro, y retorna un nuevo array con todos los elementos que cumplan esa condicion. Si no hay coincidencias retornara a un array vacío

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const resultado = cursos.filter((el) => el.nombre.includes('JS'))
const resultado2 = cursos.filter((el) => el.precio < 14000)

console.log(resultado)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */

console.log(resultado2) // []

// Some - Funciona igual que el find() recibiendo una funcion de busqueda. En vez de retornar el elemento encontrado, some () retorna true o false segun el resultado de la iteracion de busqueda 

console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos.some((el) => el.nombre == "VueJS")) 
// false

//  Map - Crea un nuevo array con todos los elementos del original transformados segun la operaciones de la funcion enviada por parametro. Tiene la misma cantidad de elementos pero almacenados son el return de la función.

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const nombres = cursos.map((el) => el.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]


// En el ejemplo, la funcion retoma la propiedad nombre de cada elemento y eso es lo que se almacena en el nueva array nombres.map() se utiliza mucho para transformación de arrays. Si quisiera aumentar el precio de todos los cursos en este ejemplo, puedo mapear y retomar una copia de los elementos con el precio modificado.

const actualizado = cursos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})

console.log(actualizado)
/* [
     { nombre: 'Javascript', precio: 18750 },
     { nombre: 'ReactJS', precio: 27500 },
     { nombre: 'AngularJS', precio: 27500 },
     { nombre: 'Desarrollo Web', precio: 20000 }
] */


// Reduce - El metodo nos permite obtener un unico valor tras iterar sobre el array. Funciona como metodo que resume el array a un unico valor de retorno.

const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21

// Con este caso podría sumar el precio de los productos elegidos.

const miCompra = [
    { nombre: 'Desarrollo Web', precio: 20000 },
    { nombre: 'Javascript', precio: 18750 },
    { nombre: 'ReactJS', precio: 27500 }
]

const total = miCompra.reduce((acc, el) => acc + el.nombre, 0)
console.log(total) // 66250