let numeros = [1, 2, 3, "hola", 4, "chau", 5, 6, 7, "musica", 8, 9, "otro"];

for (let i = 0; i < numeros.length; i++) {
  const element = numeros[i];
  console.log(element, "<----- e");
}

console.log("termine el ciclo");

let i = 0;
while (i < numeros.length) {
  const element = numeros[i];
  console.log(element, "<----- loopr infinito");

  i++;
}

for (const element of numeros) {
  console.log(element, "<---- for of");
}

let duplicar = numeros.map((e) => (typeof e === "number" ? e * 2 : e));
console.log(duplicar);
