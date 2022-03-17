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

// Sort - Reordena un array segun criterio que definamos 

const numeros = [ 40, 1, 5, 200 ];
numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ] de manera ascendente
numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ] de manera decreciente 


const items = [
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Squirtle', price: 60 }
    
  ]
items.sort((a, b) => {
    if (a.name > b.name) {
        return 1; // De manera creciente
    }
    if (a.name < b.name) {
        return -1; // De manera decreciente 
    }
    // a es igual a b
    return 0;
})


// EJEMPLOS APLICADOS

const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}]

const buscado = productos.find(producto => producto.id === 3)
console.log(buscado) //{id: 3, producto: "Pan", precio: 50}

const existe = productos.some(producto => producto.nombre === “Harina”)
console.log(existe ) // false

const baratos = productos.filter(producto => producto.precio < 100)
console.log(baratos)
// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const listaNombres = productos.map(producto => producto.nombre)
console.log(listaNombres);
//[“Arroz”, “Fideo”, “Pan”, “Flan”]

// MATH -- Contenedor de herramientas y metodos para realizar operaciones matematicas

console.log( Math.E ) // 2.718281828459045 EULER
console.log( Math.PI ) // 3.141592653589793 PI

// Los métodos de Math.min() y Math.max() reciben una serie de argumentos numéricos y devuelven aquel de valor máximo o mínimo, según corresponda:

console.log( Math.max(55, 13, 0, -25, 93, 4) ) // 93
console.log( Math.min(55, 13, 0, -25, 93, 4) ) // -25

// También se pueden referenciar los valores de infinito positivo o negativo a través de la variable global Infinity, de tipo number:

console.log( Math.max(55, Infinity, 0, -25, 93, 4) ) // Infinity
console.log( Math.min(55, 13, 0, -Infinity, 93, 4) ) // -Infinity

// CEIL, FLOOR Y ROUND -- Sirven para redondear un valor numerico a un numero entero cercano 

const pi = Math.PI // 3.141592653589793

// CEIL: devuelve el entero mayor o igual más próximo
console.log( Math.ceil(pi) ) // 4

// FLOOR: devuelve el entero más cercano redondeado hacia abajo
console.log( Math.floor(pi) ) // 3

// ROUND: retorna el valor de un número redondeado al entero más cercano
console.log( Math.round(pi) ) // 3

// SQUARE ROOT -- Retorna la raiz cuadrada de un numero. Si se le envia un numero negativo, el metodo retorna NaN

Math.sqrt(9) // 3
Math.sqrt(2) // 1.414213562373095
Math.sqrt(1)  // 1
Math.sqrt(-1) // NaN

// RANDOM -- Genera un numero pseudo-aleatorio entre 0 y 1, siendo 0 limite inclusivo y el 1 exclusivo.

console.log( Math.random() ) // 0.6609867980868442
console.log( Math.random() ) // 0.09291446900104305
console.log( Math.random() ) // 0.6597817047013095

// Para generar números aleatorios dentro de un rango deseado, distinto de 0-1, podemos multiplicar su resultado por el rango esperado. A la vez podemos sumar el límite inferior si lo necesitamos:

// números entre 0 y 10
console.log( Math.random() * 10 )
// números entre 0 y 50
console.log( Math.random() * 50)
// números entre 20 y 50
console.log( Math.random() * 30 + 20 )

// REDONDEO -- Al usar Math.round, esta función retornará números aleatorios en el rango de 0-100 inclusive. Si usara Math.ceil los números irían de 1 a 100, ya que siempre redondeará hacia arriba; y si usa Math.floor el rango sería de 0 a 99.


const generadorNumero = () => {
    return Math.round( Math.random() * 100 )
}

console.log( generadorNumero() )

// PONER TODO LO DE OPERACIONES MATEMATICAS

// DATE -- Nos genera la fecha y tiempo actual 

console.log( new Date() )
// Fri Dec 17 2021 11:35:08 GMT-0300 (hora estándar de Argentina)

// La convención con la que trabaja Javascript para construir fechas cuenta los meses a partir del 0 (0 = enero, 11 = diciembre) y los días a partir del 1:

console.log(new Date(2020, 1, 15))
// Sat Feb 15 2020 00:00:00 GMT-0300 (hora estándar de Argentina)

const casiNavidad = new Date(2021, 11, 25, 23, 59, 59)
console.log(casiNavidad)
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)

//También puede crear una fecha a partir de un string con formato específico:

const casiNavidad = new Date("December 25, 2021 23:59:59")
console.log(casiNavidad)
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)

const hoy = new Date("December 17, 2021")

console.log(hoy.getFullYear()) // 2021
console.log(hoy.getMonth()) // 11  (diciembre)
console.log(hoy.getDay()) // 5  (viernes)

// PRESENTACION DEL VALOR SINGULAR - Presenta fecha con distintos formatos posibles de tipo string

const hoy = new Date("December 17, 2021")

console.log( hoy.toDateString() ) // Fri Dec 17 2021
console.log( hoy.toLocaleString() ) // 17/12/2021 00:00:00
console.log( hoy.toLocaleDateString() ) // 17/12/2021
console.log( hoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina)
