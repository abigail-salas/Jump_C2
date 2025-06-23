let parrafos = document.querySelectorAll("p");
console.log(parrafos, "<---- parrafo");

let porId = document.getElementById("unico");
console.log(porId, "<---- id");

let ejemploHTML = document.querySelector(".ejemploHTML");
ejemploHTML.innerHTML = "modificando con innerHTML";

let ejemploTEXT = document.querySelector(".ejemploTEXT");
ejemploTEXT.innerText = "modificando con innerTEXT";

let ejemploDiferencia = document.querySelector(".ejemploDiferencia");

ejemploDiferencia.innerText += "<li>modificando con innerTEXT</li>";

ejemploDiferencia.innerHTML += "<li>modificando con innerHTML</li>";

/* ---------------------- IMPLEMENTANDO OBJETOS + DOM ---------------------- */

const articulo = {
  id: 351,
  titulo: "Programacion en la web",
  subtitulo: "Todos los tipos de lenguajes",
  descripcion:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quaerat!",
};

const sectionArticulo = document.querySelector(".articulos");

sectionArticulo.innerHTML = `
<article>
      <h3>${articulo.titulo}</h3>
      <h6>${articulo.subtitulo}</h6>
      <p>${articulo.descripcion}</p>
      <button><a href="/articulo/${articulo.id}">Ver más</a></button>
</article>
`;

/* ---------------------- IMPLEMENTANDO ARREGLO DE OBJETOS + DOM ---------------------- */

const productos = [
  {
    id: 1,
    nombre: "Teclado Redragon",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae.",
    precio: 20.0,
    imagen:
      "https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    nombre: "Mouse Logitech",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae.",
    precio: 15.0,
    imagen:
      "https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    nombre: "Monitor Samsung",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae.",
    precio: 20.0,
    imagen:
      "https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    nombre: "Microfono Redragon",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae.",
    precio: 17.0,
    imagen:
      "https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    nombre: "Parlantes LG",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae.",
    precio: 22.0,
    imagen:
      "https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    nombre: "Camara Logitech",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vitae.",
    precio: 14.0,
    imagen:
      "https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const contenedor = document.getElementById("productos");

let html = "";

for (const element of productos) {
  html += `
   <div class="card">
      <img src="${element.imagen}" alt="${element.nombre}" />
      <h2>${element.nombre}</h2>
      <p>${element.descripcion}</p>
      <p><strong>Precio:</strong>${element.precio}</p>
      <button>Comprar</button>
    </div>
    `;
}

contenedor.innerHTML = html;

