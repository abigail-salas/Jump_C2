let nombres = ["Lisa", "Lucia", "Veronica", "Luna", "Maria"];

let datos = [
  "Laira Rebolleda",
  34,
  "Tucuman",
  "Pintora",
  ["Salem", "Toto"],
  () => console.log("Hola, soy Laira"),
];

/* ------------------------------- OBJETOS ------------------------------- */

let datosObj = {
  nombreCompleto: "Laira Rebolleda",
  edad: 34,
  ciudad: "Tucuman",
  profesion: "Pintora",
  mascotas: ["Salem", "Toto"],
  saludo: () => console.log("Hola, soy Laira"),
};

/* --------> ACCEDER A LOS VALORES <-------- */
/* BRACKET NOTATION */
datosObj["ciudad"];
// devuelve --> 'Tucuman'
datosObj["mascotas"][0];
// devuelve --> 'Salem'
datosObj["saludo"]();
// devuelve --> Hola, soy Laira

/* DOT NOTATION */
datosObj.edad;
// devuelve --> 34
datosObj.saludo();
// devuelve --> Hola, soy Laira
datosObj.mascotas[1];
// devuelve --> 'Toto'

/* --------> AGREGAR VALORES <-------- */
/* BRACKET NOTATION */
datosObj["pasaTiempo"] = "andar en bici";

/* DOT NOTATION */
datosObj.colorFav = "Bordo";

/* --------> MODIFICAR VALORES <-------- */
/* BRACKET NOTATION */
datosObj["edad"] = 35;

/* DOT NOTATION */
datosObj.ciudad = "Misiones";

/* --------> RECORRER UN OBJETO <-------- */

let guardado = "nombreCompleto";
// console.log(datosObj[guardado], "<--- key en una variable");

// console.log(datosObj, "<---- OBJETO COMPLETO");

// for (const key in datosObj) {
//   console.log(key, "<----- key");
//   console.log(datosObj[key], "<---- values");

//   console.log(`${key}: ${datosObj[key]}`);
// }

/* ------------------------------- DOM (Document Object Model) ------------------------------- */

let parrafo = document.querySelector("p");

let titulo = document.querySelector("h1");

let menu = document.querySelector("nav");

let card = document.querySelector("#card");

let footer = document.querySelector(".footer");

/* --------> MANIPULAR EL DOM <-------- */

/* Agregar o modificar texto */

titulo.innerHTML = "Modificando el titulo mediante DOM";
card.innerHTML = "Agregando texto con DOM";

/* Modificar el CSS */

titulo.style.backgroundColor = "#575366";

parrafo.style.color = "#D1E3DD";

menu.style.fontFamily = "fantasy";

card.style.fontSize = "50px";

footer.style.border = "2px solid #e5fcf5";

let cuerpo = document.querySelector("body");
cuerpo.style.backgroundColor = "#201E1F";

/* EJEMPLO */

for (const key in datosObj) {
  let elemento = document.querySelector(".objeto");
  elemento.innerHTML += `<li>${datosObj[key]}</li>`;
}

/* ------------------------------- CONSTRUCTORES ------------------------------- */

function Persona(nombre, edad, calle) {
  this.nombreCompleto = nombre;
  this.edad = edad;
  this.calle = calle;
}

const personaUno = new Persona("Laira Catalina", 15, "Av. Sargento 35");
const personaDos = new Persona("Esteban Rojas", 35, "Av. Colque 35");
