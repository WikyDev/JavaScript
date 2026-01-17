//* Operadores Aritmeticos
let a = 10;
let b = 5;

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicacion
console.log(a / b); // Division

console.log(a % b); // Modulo       
console.log(a ** b); // Exponente

a++; // Incremento
b--; // Decremento

//* Operadores de Asignacion
let variable = 4
variable += 2
console.log(variable) // 6
variable *= 3
console.log(variable) // 18

//* Operadores de Comparacion
console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que
console.log(a == b) // Igualdad por valor
console.log(a == 6)
console.log(a == "6")
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(a === 6)
console.log(a === "6")
console.log(a != 6) // Desigualdad por valor
console.log(a !== "6") // Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

//* Operadores Logicos
// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

//* Operador Ternario
let edad = 18
let puedeVotar = (edad >= 18) ? "Si puede votar" : "No puede votar"
console.log(puedeVotar)