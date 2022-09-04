/*-------------------OPERADORES----------------------*/
//operadores aritmeticos +, -, *, /, %, ().
let a = 5 + (5 - 10) * 3;

let modulo = 5 % 2; //operador %(modulo) nos permite devolver el reciduo de la divicion

console.log(modulo);

//operadores relacionales >, <, >=, <=, ==, ===, !=, !==.
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
console.log((9 === 9) || (9 === "9"));
console.log((9 === 9) && (9 === "9"));
console.log((9 === 9) && ("9" === "9"));

//--------Estructuras de control---------------------------------------------



