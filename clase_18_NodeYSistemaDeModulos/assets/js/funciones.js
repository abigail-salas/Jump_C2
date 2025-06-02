function saludar() {
  console.log("Hola! soy una funcion desde otro modulo");
}

let prueba = "prueba";

// forma 1
// module.exports = saludar, prueba;

// forma 2
export { saludar, prueba };
