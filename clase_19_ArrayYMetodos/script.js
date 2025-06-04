let nombre1 = "Rebeca";
let nombre2 = "Laura";
let nombre3 = "Catalina";
let nombre4 = "Abigail";

/* ------------------------------ ARRAYS ------------------------------ */

let nombres = ["Rebeca", "Laura", "Catalina", "Abigail"];

/* Acceder a los elementos */

nombres[0];
// devuelve ---> 'Rebeca'
nombres[2];
// devuelve ---> 'Catalina'
nombres[3];
// devuelve ---> 'Abigail'

/* Cantidad de elementos */

nombres.length;
// devuelve ---> 4

/* ------------------------------ METODOS DE ARREGLOS ------------------------------ */

let numeros = [1, 2, 3, 4, 5];

/* AGREGAR ELEMENTOS */

// METODO array.push(parametro) ===> Agrega un elemento al final del array
numeros.push("metodo push");
// queda en ---> [1, 2, 3, 4, 5, 'metodo push']

// METODO array.unshift(parametro) ===> Agrega un elemento al inicio del array
numeros.unshift("metodo unshift");
// queda en ---> ['metodo unshift', 1, 2, 3, 4, 5, 'metodo push']

/* ELIMINAR ELEMENTOS */

// METODO array.pop() ===> QUITA el último elemento del array (se puede guardar el elemento eliminado en una variable)
let popELiminado = numeros.pop();
console.log(popELiminado, "<---- popEliminado");
// queda en ---> ['metodo unshift', 1, 2, 3, 4, 5]

// METODO array.shift() ===> QUITA el primer elemento del array (se puede guardar el elemento eliminado en una variable)
let shiftELiminado = numeros.shift();
console.log(shiftELiminado, "<---- shiftELiminado");
// queda en ---> [1, 2, 3, 4, 5]

// METODO array.splice(posicion, cantidadDeElementoABorrar) ===> Quita diferentes elementos del array (se puede guardar el elemento eliminado en una variable)
let spliceELiminado = numeros.splice(2, 2);
console.log(spliceELiminado, "<---- spliceELiminado");
// queda en ---> [1, 2, 5]

/* BUSCAR SU POSICION */

// METODO array.findIndex(callback) ===> Verifica la posicion de un elemento del array mediante una funcion y nos devuelve su indice (si no encuentra el elemento, devuelve -1)
let indexFind = numeros.findIndex((e) => e === 5);
console.log(indexFind, "<---- findIndex");
// devuelve ---> 2

// METODO array.indexOf(parametro) ===> Verifica la posicion de un elemento del array y nos devuelve su indice (si no encuentra el elemento, devuelve -1)
let ofIndex = numeros.indexOf(4);
console.log(ofIndex, "<---- indexOf");
// devuelve ---> -1

/* UNIR LOS ELEMENTOS */

// METODO array.join(separacion) ===> Une todos los elementos del array en un string
let unirJoin = numeros.join("-");
console.log(unirJoin, "<---- join");
// devuelve ---> 1-2-5

/* COPIAR ELEMENTOS DE UN ARREGLO */

// METODO array.slice(desdeDonde, hastaDonde) ===> Crea una copia del array sin modificar el original
let copiaSlice = nombres.slice(1, 3);
console.log(copiaSlice, "<---- slice");
// devuelve ---> ['Laura', 'Catalina']

/* ------------------------------ METODOS DE STRING ------------------------------ */

let oracion = "Lorem-ipsum-dolor-sit-amet-consectetur";
// METODO array.split(parametro) ===> Separa el string mediante el valor dado y devuelve un array
let separarSplit = oracion.split("-");
console.log(separarSplit, "<---- split");
// devuelve ---> ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur']

let espacios = "    ejemplo con espacios          ";
// METODO array.trim() ===> Eliminar los espacios al principio y final del string
let eliminaEspacios = espacios.trim();
console.log(eliminaEspacios, "<---- trim");
// devuelve ---> 'ejemplo con espacios'

let frase = "Estoy estudiando html";
// METODO array.replace(coincidencia, reemplazo) ===> Reemplaza la palabra dada con su coincidencia
let reemplazo = frase.replace("html", "javascript");
console.log(reemplazo, "<---- replace");
// devuelve ---> Estoy estudiando javascript
