/* ----------------- FUNCIONES ----------------- */

function suma(a, b) {
  console.log(a, "<---- soy a");
  console.log(b, "<------ soy b");
  return a + b;
}

suma(10, 90);

// const nombreCompleto = prompt("Decime tu nombre completo");
// const edad = prompt("Decime tu edad");
// const ciudad = prompt("Decime donde vivis");
// const vocacion = prompt("Decime tu vocacion");

/* Nombre de los parametros */

// function presentacion(a, b, c, d) {
//   alert(
//     `Hola! Soy ${a} y tengo ${b} años de edad. Vivo en la ciudad de ${c} y me dedico a ${d}`
//   );
// }

/* por más que la palabra sea la misma en los parametros y en las constantes, NO HACEN REFERENCIA A LO MISMO */

function presentacion(nombreCompleto, edad, ciudad, vocacion) {
  alert(
    `Hola! Soy ${nombreCompleto} y tengo ${edad} años de edad. Vivo en la ciudad de ${ciudad} y me dedico a ${vocacion}`
  );
}

// presentacion(nombreCompleto, edad, ciudad, vocacion);

/* Orden de los parametros y argumentos */

/* Siempre debe respetar EL MISMO orden */

/* Si no escribimos los argumentos en mismo orden que los parametros, todo se mezcla */

// presentacion(30, "Salta", "Apicultor", "Carlos Medina");
// devuelve --> Hola! Soy 30 y tengo Salta años de edad. Vivo en la ciudad de Apicultor y me dedico a Carlos Medina

presentacion("Carlos Medina", 30, "Salta", "Apicultor");

/* ----- ARROW FUNCTION ----- */

// const resta = (a, b) => {
//   return a - b;
// };

/* Cuando están en la misma linea de codigo, tanto el return como las llaves estan IMPLICITAS en la funcion */

const resta = (a, b) => a - b;

console.log(resta(50, 400));

/* ----- CALLBACKS ----- */

function saludar(nombre) {
  alert("Hola " + nombre);
}

function procesarEntradaUsuario(callback) {
  let nombre = prompt("Por favor ingresa tu nombre.");
  callback(nombre);
}

procesarEntradaUsuario(saludar);
