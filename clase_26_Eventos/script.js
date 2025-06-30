let titulo = document.querySelector("h1");

titulo.onmouseout = function () {
  console.log("Quitaste el mouse");
};

titulo.addEventListener("mouseout", function () {
  console.log("Quitaste el mouse con addEventListener");
});

let nombreYApellido = document.querySelector("#nombre");

/* nombreYApellido.onkeydown = function (e) {
  alert(`Se presionó la tecla: ${e.key}`);
}; */

/* nombreYApellido.onkeypress = function (e) {
  alert(`Se presionó la tecla: ${e.key}`);
}; */

window.addEventListener("load", function () {
  let nombre = document.querySelector("#name");

  nombre.addEventListener("focus", function () {
    console.log("Entraste al input");
  });
});

const formulario = document.querySelector("form.registro");
const inputNombre = document.getElementById("nombre");
const ulErrores = document.querySelector("#lista-errores");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let errores = [];

  //validaciones

  if (inputNombre.value.trim() === "") {
    errores.push("El campo nombre debe estar completo");
  } else if (inputNombre.value.trim().length < 3) {
    errores.push("El campo nombre debe tener un minimo de 3 caracteres");
  }

  ulErrores.innerHTML = "";

  if (errores.length > 0) {
    errores.forEach((error) => {
      const li = document.createElement("li");

      li.innerHTML = error;

      ulErrores.appendChild(li);
    });
  }
});
