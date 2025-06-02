// forma 1
// const {saludo, prueba} = require("./funciones");

// forma 2
import { saludar, prueba } from "./assets/js/funciones.js";

console.log(saludar());
console.log(prueba, "<--- modulo propio importado");

// const { format } = require("date-fns");
import { format } from "date-fns";
import fs from "fs";

const fechaActual = new Date();

const fechaFormato = format(fechaActual, "yyyy/MM/dd");

console.log(fechaActual);
console.log(fechaFormato);

const tareas = `
1. Pasear al perro
2. Sacar la basura
3. Codear
4. Hacer ejercicio
`;

fs.writeFileSync("tareas.txt", tareas);

const lectura = fs.readFileSync("tareas.txt", "utf-8");
console.log(lectura);
