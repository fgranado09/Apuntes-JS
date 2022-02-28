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






