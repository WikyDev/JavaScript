// 1. Escribe un comentario en una línea
/*Comentario*/
// 2. Escribe un comentario en varias líneas

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myString = "Funcionó"
let myNumber = 26
let myBoolean = false
let undefinedHola = undefined
let simbolo = Symbol("??")
let largo = 123456789123456789n
let myNull = null
// 4. Imprime por consola el valor de todas las variables
console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(undefinedHola)
console.log(simbolo)
console.log(largo)
console.log(myNull)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myBoolean)
console.log(typeof undefinedHola)
console.log(typeof simbolo)
console.log(typeof largo)
console.log(typeof myNull)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myString = "Andres"
myNumber = 27
myBoolean = true
undefinedHola = undefined
simbolo = Symbol("!!")
largo = 98765432198765432177n
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myString = 27
myNumber = "Andres"
myBoolean = "true"
undefinedHola = null
simbolo = "Symbol(!!)"
largo = 98765432198765432177n
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const nombre = "Wilson"
const edad = 27
const booleano = true
const indefinido = undefined
const simbolo2 = Symbol("$$")
const nulo = null
const numeroLargo = 4562316879846511n
// 9. A continuación, modifica los valores de las constantes
const nombre2 = {otro : "Carlos"}
//!Esta es una de las formas en las que se puede cambiar el valor de una constante
nombre2.otro = "Pepe"
console.log(nombre2.otro)
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
