//operadores aritmeticos +, -, *, /, %, ().
let a = 5 + (5 - 10) * 3;

let modulo = 5 % 2; //operador %(modulo) nos permite devolver el reciduo de la divicion

console.log(modulo);

//operadores relacionales o comparacion>, <, >=, <=, ==, ===, !=, !==, <>
//<>: valida que hambas partes sean diferentes

console.log(0 === flase); //devuelve falso por que uno es numero y otro es boolean

//operador de incremento y Decremento

let i = 1;
i += 3; //se suma
console.log(i);

//operador unario
i++; //++ significa +1
i--; //++ significa -1

//operadores logicos
/* 
! = Not: niega, es decir lo que es verdadero lo vuelve falso y viceversa
|| = Or: cuando tengo 2 o mas condiciones, con que una se cumpla, es decir sea verdadera, el Or validara
&& = And: cuando tengo 2 o mas condiciones, todas tienen que cumplirse, es decir ser verdadera, para que and valide
*/
console.log(!true);
console.log(9 === 9 || 9 === "9");
console.log(9 === 9 && 9 === "9");
console.log(9 === 9 && "9" === "9");

//--------Estructuras de control---------------------------------------------

/* --------------- */
let hora = 12;
if (hora >= 0 && hora <= 5) {
  console.log("dejame dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("buenos dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("buenas tardes");
} else {
  console.log("buenas noches");
}

if (hora > 0 && hora < 6) {
  console.log("dejame dormir");
} else if (hora > 5 && hora < 12) {
  console.log("buenos dias");
} else if (hora > 11 && hora < 19) {
  console.log("buenas tardes");
} else {
  console.log("buenas noches");
}

/* operador ternario similar a la condicion if pero solo aplica a una linea de codigo*/
let edad = 17;
let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(eresMayor);

/* switch cuando tengamos diferentes valores para una sola variable */
let dia = 2;
switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 3:
    console.log("Maertes");
    break;
  case 4:
    console.log("Miercoles");
    break;
  case 5:
    console.log("Jueves");
    break;
  case 6:
    console.log("Viernes");
    break;
  case 7:
    console.log("Sabado");
    break;
  default:
    console.log("El dia no existe");
    break;
}
