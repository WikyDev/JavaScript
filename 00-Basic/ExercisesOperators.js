//!Ejercicios de Operators
// 1. Crea una variable para cada operación aritmética
let resultado = 5
let resultado2 = 4
let suma = 5+4
let resta = 5-4
let multiplicacion = 5*4
let division = 5/4
let modulo = 5%4
let exponente = 5**4
let incremento = resultado++
let decremento = resultado2--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let suma2 = suma += 2
let resta2 = resta -= 2
let multiplicacion2 = multiplicacion *= 2
let division2 = division /= 2
let modulo2 = modulo %= 2
let exponente2 = exponente **= 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let comparacion1 = suma === 11
console.log(comparacion1)
let comparacion2 = resta < 3
console.log(comparacion2)
let comparacion3 = multiplicacion >= 20
console.log(comparacion3)
let comparacion4 = division > 0
console.log(comparacion4)
let comparacion5 = modulo !== 0
console.log(comparacion5)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
let comparacion6 = suma !== 11
console.log(comparacion6)
let comparacion7 = resta >= 3
console.log(comparacion7)
let comparacion8 = multiplicacion < 20
console.log(comparacion8)
let comparacion9 = division <= 0
console.log(comparacion9)
let comparacion10 = modulo === 0
console.log(comparacion10)

// 5. Utiliza el operador lógico and
comparacion11 = (suma > 1 && resta < 10)
console.log(comparacion11)
// 6. Utiliza el operador lógico or
comparacion12 = (suma > 10 || resta < 10)
console.log(comparacion12)
// 7. Combina ambos operadores lógicos
comparacion13 = (suma > 1 && resta < 10 || multiplicacion > 10)
console.log(comparacion13)
// 8. Añade alguna negación
comparacion14 = !(suma < 20 && resta > 1)
console.log(comparacion14)
// 9. Utiliza el operador ternario
const ambiente = true
ambiente ? console.log("Llueve") : console.log("No llueve")
// 10. Combina operadores aritméticos, de comparáción y lógicas
let nuevo = (suma + resta) && (suma === 11)
console.log(nuevo)