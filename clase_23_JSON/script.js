// const fs = require("fs");

let datos = [
  { marca: "samsung", objeto: "Lavarropa" },
  { marca: "xiaomi", objeto: "Reloj" },
  { marca: "motorola", objeto: "Celular" },
  { marca: "apple", objeto: "Auriculares" },
];

let datosConvertidos = JSON.stringify(datos);

// console.log(typeof datosConvertidos);
// console.log(datosConvertidos);

// fs.writeFileSync("datos.json", datosConvertidos);

let celuJson = `{
"Marca":"Samsung",
"Modelo":"Galaxy Z Fold 4"
}`;

let jsonConvertido = JSON.parse(celuJson);

// console.log(jsonConvertido, "<--- jsonConvertido");

localStorage.setItem("nombre", "Maria");
localStorage.setItem("esValido", true);
localStorage.setItem("unNumero", 20);

let nombre = localStorage.getItem("nombre");
let esValido = localStorage.getItem("esValido");

console.log(nombre, "<--- nombre en localStorage");
console.log(esValido, "<--- esValido en localStorage");

sessionStorage.setItem("seleccionados", [1, 2, 3]);
sessionStorage.setItem("esValido", false);
sessionStorage.setItem("email", "info@email.com");

let lista = sessionStorage.getItem("seleccionados");
let bandera = sessionStorage.getItem("esValido");
let email = sessionStorage.getItem("email");

console.log(lista, "<--- lista en sessionStorage");
console.log(bandera, "<--- bandera en sessionStorage");
console.log(email, "<--- email en sessionStorage");
