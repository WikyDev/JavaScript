//?Uso del Let*/
let nombre = "Juan";
let apellido = "Pérez";
console.log("let");
console.log("Nombre: " + nombre + " Y Apellido " + apellido);
console.log("-------------------------------");

//?Constantes (Cons): Es una variable que no va a cambiar su valor durante el flujo de ejecución*/
console.log("Constantes");
const PI = 3.1416;
console.log("El valor de PI es: " + PI);
//!PI = 3.14; // Esto generará un error porque no se puede reasignar una constante/

//TODO: Aquí se muestra como los valores COMPUESTOS si pueden cambiar el valor de una variable const los 
//TODO: cuales son: Object, Array, Function, Map, Set, class, etc.
const lista = {
    nombre: "Wilson",
    edad: 30
};

console.log(lista);

const frutas = [
    "mango",
    "fresa",
    "piña"
];
console.log(frutas);

lista.ciudad = "Cali";
frutas.push("manzana");

console.log(lista);
console.log(frutas);

//?Cadenas de texto (String)*/
const a = String("Hola");
const b = new String("Mundo");
console.log(a);
console.log(b);
console.log(a.toUpperCase()); /*Método para convertir a mayúsculas*/

//?Template String: Recomienda el uso de comillas invertidas (``), para interpolar*/
//?ya que es mejor que concatenar con el (+) y ayuda al momento de usar Frameworks*/
let inter = `Ejemplo: ${a} ${b}`;
console.log("Template String\n" + inter);

//?Números: Variables de números*/
let numero1 = 10;
let numero2 = new Number(20);
let numero3 = 30.5;


