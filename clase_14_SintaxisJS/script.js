/* ---------- VALORES PRIMITIVOS ---------- */

/* Number */
(3 + 2) * 3 + 1; // devuelve ------> 16
3 + 2 * 3 + 1; // devuelve -----> 10

/* String */
// TODO lo que esté entre comillas "" SIEMPRE va a ser un String
("Hola, cómo estás?");
("123");

/* Boolleans */
true;
false;

/* Valores Vacios */
null;
undefined;

/* ---------- MENSAJE DE CONSOLA ---------- */

console.log("Soy un mensaje de consola");
console.log(159753);

/* ---------- VARIABLES ---------- */

/* let */
// Se declara una sola vez y despues puede cambiar su valor pero NO VOLVER A DECLARAR

let numero = 300;
console.log(numero, "<---- Esto es la variable numero");

let nombre = "Rosario"; //Declarando la variable
console.log(nombre, "<--- Primer valor en nombre");

nombre = "Martina"; // Modificando el valor
console.log(nombre, "<--- Segundo valor en nombre");

/* const */
// NO PUEDE modificar su valor

const fija = "esto no se puede modificar";
console.log(fija, "<-- primer valor");

/* fija = "otro valor";
console.log(fija, "<-- segundo valor"); */

/* ---------- CONCATENACION ---------- */

let nombreCompleto = "Veronica Rebolleda";
console.log("Hola " + nombreCompleto);

let primerNum = "14";
let segundoNum = 16;

console.log(primerNum + segundoNum); // devuleve ----> 1416

let edad = 24;
let apellido = "Salas";
let primerNombre = "Abigail";

console.log(
  "Hola, mi nombre es " +
    primerNombre +
    " y mi apellido es " +
    apellido +
    ". Tengo " +
    edad +
    " años de edad."
);

/* ---------- TEMPLATE LITERL ---------- */

console.log(
  `Hola, mi nombre es ${primerNombre} y mi apellido es ${apellido}. Tengo ${edad} años de edad.`
);

let nombreCom = `${primerNombre} ${apellido}`;
// let nombreCom = primerNombre + " " + apellido
console.log(nombreCom);
