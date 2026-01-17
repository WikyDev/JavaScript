//*Salida por consola
console.log("Hello, World!")

//*Tipos de Variables//Datos
//? var, aunque solo se usa en casos particulares 
var nombre = "Wilson"
console.log(nombre)

//? let, se usa para variables que pueden cambiar su valor
let edad = 30
console.log(edad)
edad = 31
console.log(edad)

//? const, se usa para valores que no cambian
const PI = 3.1416
console.log(PI)

//*Tipos de Datos
//? String
let ciudad = "Bogotá"
console.log(ciudad)

//? Number
let temperatura = 25.5
console.log(temperatura)

//? Boolean
let esDia = true
console.log(esDia)

//? Undefined
let direccion
console.log(direccion)

//? Null
let telefono = null
console.log(telefono)

//? Symbol
let id = Symbol("id")
console.log(id) 

//? bigint
let bigInt = BigInt(90071992547409910) // Otra forma de declarar un bigint
let bigNumber = 9007199254740991n // Forma literal de declarar un bigint
console.log(bigNumber)

console.log(typeof nombre)      // stringL
console.log(typeof temperatura) // number
console.log(typeof esDia)      // boolean
console.log(typeof direccion)  // undefined
console.log(typeof telefono)   // object (esto es un comportamiento especial de JavaScript)
console.log(typeof id)         // symbol
console.log(typeof bigNumber)  // bigint    