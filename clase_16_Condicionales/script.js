/* -------------------------- IF ---- ELSE -------------------------- */

// let grados = Number(prompt("Cuántos grados hace en tu ciudad?"));
// if (grados > 30) {
//   alert("Que calor!! Hacete unos mates");
// }

// let porcionesDeTorta = Number(prompt("Cuántas porciones de torta hay?"));
// let invitados = parseInt(prompt("Cuántos invitados hay?"));
// let cantidadDePorcionesPorInvitado = porcionesDeTorta / invitados;
// console.log(typeof porcionesDeTorta);
// console.log(typeof invitados);
// console.log(cantidadDePorcionesPorInvitado);

// if (cantidadDePorcionesPorInvitado >= 1) {
//   alert("Hay suficientes porciones para cada invitado");
// } else {
//   alert("No hay suficientes porciones para cada invitado");
// }

// let parOImpar = Number(prompt("Decime un número y te digo si es par o impar"));

// if (parOImpar % 2 === 0) {
//   alert("El número es par");
// } else {
//   alert("El número es impar");
// }

// if (false) {
//   alert("Aqui si entro con true");
// } else if (false) {
//   alert("Aqui entro con un true");
// } else if (true) {
//   alert("Aqui entro con un true");
// } else if (false) {
//   alert("Aqui entro con un true");
// } else if (false) {
//   alert("Aqui entro con un true");
// } else {
//   alert("Aqui entro con un false");
// }

// let px = Number(
//   prompt("Ingresa un numero de pixeles y te digo a que viewport pertenece")
// );

/* <576 XS 
>576 SM 
>768 MD 
>962 XL  */

/* El ORDEN que escriben los condicionales es MUY IMPORTANTE!!! */

/* if (px <= 576) {
  alert(`${px} pixeles equivalen al tamaño de pantalla XS`);
} else if (px > 576) {
  alert(`${px} pixeles equivalen al tamaño de pantalla SM`);
} else if (px > 768) {
  alert(`${px} pixeles equivalen al tamaño de pantalla MD`);
} else if (px > 962) {
  alert(`${px} pixeles equivalen al tamaño de pantalla XL`);
} else {
  alert(`${px} No equivale a ningun valor`);
} */

// if (px <= 576) {
//   alert(`${px} pixeles equivalen al tamaño de pantalla XS`);
// } else if (px > 962) {
//   alert(`${px} pixeles equivalen al tamaño de pantalla XL`);
// } else if (px > 768) {
//   alert(`${px} pixeles equivalen al tamaño de pantalla MD`);
// } else if (px > 576) {
//   alert(`${px} pixeles equivalen al tamaño de pantalla SM`);
// } else {
//   alert(`${px} No equivale a ningun valor`);
// }

/* EJEMPLOS */

// let clima = prompt("Que tipo de clima hay? lluvioso, nublado o soleado?");
// let temperatura = Number(prompt("Qué temperatura hace?"));

// if ((clima === "soleado" || clima === "nublado") && temperatura > 20) {
//   alert("Podés salir a dar un paseo!");
// } else if ((clima === "lluvioso" || clima === "nublado") && temperatura < 20) {
//   alert("Quedate en casa tomando un café");
// } else {
//   alert("Debes ingresar un valor válido!!");
// }

/* -------------------------- TERNARIO -------------------------- */

/* CONDICION ? TRUE : FALSE */

let parImpar = Number(
  prompt("Decime un número y te digo si es par o impar (CON TERNARIO)")
);

/* if (parImpar % 2 === 0) {
  alert("El número es par");
} else {
  alert("El número es impar");
} */

parImpar % 2 === 0 ? alert("El número es par") : alert("El número es impar");

/* EJERCICIOS */

/* 1) Declarar la variable finDeSemana y asignarle como valor un día de la semana UTILIZANDO TERNARIOS.

Luego implementar un condicional que compare la igualdad de finDeSemana con los días "Sábado" y "Domingo", y si es verdadero que muestre por consola "¡Hoy no se trabaja!". Si es falso, que muestre "Aún falta para el finde" */

/* 2) Pedir al usuario que indique su destino de viaje preferido a través del número correspondiente, de la siguiente lista de lugares:
1- Canadá
2- España
3- Bariloche
4- Japón
Para esto, utilizar prompt y la estructura condicional IF / ELSE IF / ELSE. Para cada número, mostrar por consola lo siguiente:
1- "Un excelente destino para aprender a esquiar"
2- "Hermoso destino para recorrer calles con adoquines"
3- "Muy buen destino para realizar excursiones en el hielo!"
4- "Precioso destino para conocer cientos de tiendas, una al lado de la otra"
Si el usuario no elige un número dentro de los indicados, que el mensaje sea "Debes elegir un número entre el 1 y el 4".
 */
