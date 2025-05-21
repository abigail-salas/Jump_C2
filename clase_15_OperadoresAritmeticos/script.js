/* ----------------------- OPERADORES ----------------------- */

/* =======> DE ASIGNACION <======= */

let letra = "a";
letra = "b";

/* =======> DE COMPARACION <======= */

/* →→→→ DE IGUALDAD ←←←← */

/* SIMPLE */

12 == 12;
// devuelve ---> true
"hola" == "hola";
// devuelve ---> true
"hola" == "Hola";
// devuelve ---> false
"78" == 78;
// devuelve ---> true

/* ESTRICTA ---> Compara el VALOR y el TIPO DE DATO ingresado */

15 === 15;
// devuelve ---> true
"HOLA" === "HOLA";
// devuelve ---> true
"HOLA" === "hola";
// devuelve ---> false
"456" === 456;
// devuelve ---> false

/* →→→→ DE DESIGUALDAD ←←←← */

/* SIMPLE */

56 != 56;
// devuelve ---> false
"hola" != "hola";
// devuelve ---> false
"hola" != "Hola";
// devuelve ---> true
15 != 78;
// devuelve ---> true
"89" != 89;
// devuelve ---> false

/* ESTRICTA */

"89" !== 89;
// devuelve ---> true
56 !== 56;
// devuelve ---> false
15 !== 78;
// devuelve ---> true
"hola" !== "Hola";
// devuelve ---> true

/* =======> ARTIMETICOS <======= */

/* →→→→ SUMAR DE A 1 ←←←← */

let numero = 0;
numero++;
// devuelve ---> 0
numero++;
// devuelve ---> 1
numero++;
// devuelve ---> 2
numero;
// devuelve ---> 3

/* →→→→ RESTAR DE A 1 ←←←← */

numero = 10;
numero--;
// devuelve ---> 10
numero--;
// devuelve ---> 9
numero--;
// devuelve ---> 8
numero;
// devuelve ---> 7

/* →→→→ SUMA, RESTA, MULTIPLICA, ETC EN BASE AL VALOR DADO ←←←← */

numero = 100;
numero += 10;
// devuelve ---> 110
numero += 10;
// devuelve ---> 120
numero += 10;
// devuelve ---> 130
numero;
// devuelve ---> 130
numero -= 5;
// devuelve ---> 125
numero -= 5;
// devuelve ---> 120
numero -= 5;
// devuelve ---> 115
numero -= 5;
// devuelve ---> 110
numero *= 2;
// devuelve ---> 220
numero *= 2;
// devuelve ---> 440
numero /= 2;
// devuelve ---> 220

/* =======> LOGICOS <======= */

/* →→→→ OR || ←←←← */

true || true;
// devuelve ---> true
true || false;
// devuelve ---> true
false || true;
// devuelve ---> true
false || false;
// devuelve ---> false

/* →→→→ AND && ←←←← */

true && true;
// devuelve ---> true
true && false;
// devuelve ---> false
false && true;
// devuelve ---> false
false && false;
// devuelve ---> false

/* =======> DE NEGACION <======= */

!true;
// devuelve ---> false
!false;
// devuelve ---> true

/* ----------------------- ALERTAS ----------------------- */

alert("Soy una alerta"); // Tiene solo un boton de "Aceptar"
confirm("Acepta los terminos y condiciones"); // Tiene botones de "Aceptar" y "Cancelar"
let nombre = prompt("Decime como te llamas"); // Tiene una entrada donde el usuario puede escribir algo. Tiene botones de "Aceptar" y "Cancelar"

/* ----------------------- EJERCICIOS ----------------------- */

let a = 5;
let b = "5";
let resultado = !(a === b) || (a < 10 && b == 5);
/* !(5 === "5") || (5 < 10 && "5" == 5);
!(false) || (true && true);
!false || true;
true || true;
true */

let usuario = "admin";
let password = "1234";
let acceso =
  !(usuario === "admin" && password === "1234") || password.length < 4;
/* !("admin" === "admin" && "1234" === "1234") || "1234".length < 4;
!(true && true) || 4 < 4;
!true || false;
false || false;
false; */

let x = 4;
let y = 10;
let respuesta = !(x > 2 && y < 15) && !(x === 4 || y !== 10);
/* !(4 > 2 && 10 < 15) && !(4 === 4 || 10 !== 10);
!(true && true) && !(true || false);
!true && !true;
false && false;
false; */
