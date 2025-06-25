let paises = document.getElementsByClassName("paises");

console.log(paises[0]);
console.log(paises[1]);
console.log(paises[2]);
console.log(paises[3]);

let divs = document.getElementsByTagName("div");

console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);

// Creamos el nuevo elemento ↓↓↓
let nuevoP = document.createElement("p");

// Insertamos contenido dentro ↓↓↓
nuevoP.innerHTML = "Texto agregado";

// Lo agregamos al HTML ↓↓↓
document.body.appendChild(nuevoP);

/* Eliminar un elemento */
let contenido = document.getElementById("prueba");

contenido.parentNode.removeChild(contenido);

/* Acceder a los valores de un input */
let nombreInput = document.querySelector("#nombre");
nombreInput.value = "agregando contenido";

/* ---------------- EVENTOS ---------------- */

let botonSaludo = document.querySelector("#saludo");

botonSaludo.addEventListener("click", () => {
  alert("Presinaste el boton de saludar!!!!");
});

let pintarFondo = document.querySelector("#pintarFondo");

pintarFondo.addEventListener("click", () => {
  let elemento = document.querySelector("body");
  elemento.style.backgroundColor = "black";
});

let pintarLetras = document.querySelector("#pintarLetras");

pintarLetras.addEventListener("click", () => {
  let elemento = document.querySelector("body");
  elemento.style.color = "white";
});

let mouse = document.querySelector("#mouse");

mouse.addEventListener("mouseover", () => {
  mouse.style.backgroundColor = "red";
});

/* ejemplo */

const listaDeInvitados = document.querySelector("#invitados");
const invitadosInput = document.querySelector("#nuevo-invitado");
const btnAgregar = document.querySelector("#agregar-invitado");

const invitados = [
  { id: 1, nombre: "Jhonny Deep" },
  { id: 2, nombre: "Brad Pitt" },
  { id: 3, nombre: "Leo Dicaprio" },
  { id: 4, nombre: "Pedro Pascal" },
];

btnAgregar.addEventListener("click", () => {
  const nuevoId = invitados[invitados.length - 1].id + 1;

  const nuevoInvitado = { id: nuevoId, nombre: invitadosInput.value };
  invitados.push(nuevoInvitado);

  invitadosInput.value = "";

  render();
});

function render() {
  let html = "";
  for (const element of invitados) {
    html += `<li>${element.nombre}  <button onclick="borrar(${element.id})">X</button></li>`;
  }

  listaDeInvitados.innerHTML = html;
}

function borrar(id) {
  const index = invitados.findIndex((e) => e.id === id);
  invitados.splice(index, 1);

  render();
}
