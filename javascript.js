let objeto = {
    nombre: "Rodrigo",
    edad: 20,
}
let colores = ["rojo", "verde", "azul"];

console.log(objeto);
console.log(colores);

objeto.email = "Rodrifolkdjd@gmail.com"; //agregar una propiedad y valor al objeto
colores.push("naranja"); //agregar un valor al array

//var = dejar obsoleto y remplasarlo por let
//let = se usa cuando el valor de tu variable va a cambiar 
//const = se usa cuando el valor de tu variable no va a cambiar 

//los valores PRIMITIVOS como (string, number, boolean, null, undefined, nan) declarados con let const se pueden cambiar el valor
// los valores primitivos declarados con const no se puede cambiar su valor

// los valores COMPUESTOS como ({},[],function(){}, class{},etc) declarados con let se pueden cambiar su su valor
//los valores compuestos declarados con const se puede cambiar su valor por que los valores compuestos hacen referencia no al valor si no a lo que lo contine como los circhetes{}, etc.

//--------------------------------------------------------------------------

let nome = "Rodri";
let apellido = "Laime";
let saludo = new String("Hola Mundo");
let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusamus officia ullam voluptates, odio minus dolorum eius. Expedita dolorum nobis rem? Sunt, perspiciatis quia atque harum consequatur maiores natus nostrum."

console.log(
    nome.length,
    apellido.length,
    saludo.length,
    nome.toUpperCase(), //todo en mayuscula
    apellido.toLowerCase(), //toso en minuscula
    lorem.includes("amet"), //te indica si existe la palabra amet en lorem con true o false
    lorem.trim(), //borra los espacios vacios
    lorem.split(" "), //cada que encuentre un espacio en blanco lo separa, genera un arreglo
);

//las PROPIEDADES son caracteristicas atributos
//Los METODOS son acciones o funciones que me van a permitir ejecutar algo
//propiedad->apelldio.length<-metodo 


//----------------------------------------------------------------------

let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

console.log(a,b);
console.log(c.toFixed(1)); //redondea los numeros decimales, le pasamos la cantidad de decimales que necesitamos.
console.log(c.toFixed(5));
console.log(parseInt(c)); //regresa unicamente el entero sin decimal
console.log(typeof c, typeof d); //indica de que tipo de naturalesa, o dato es una variableç
console.log(a + b); //suma los numeros 
console.log(c + d); // concatena el numero con el string
console.log(c + parseInt(d)); //suma los numeros pero al c le quita el decimal
console.log(c + parseFloat(d)); //suma los numeros y al c no le quita el decimal
console.log(c + Number.parseInt(d)); //pertenece al constructor Number
console.log(c + Number.parseFloat(d)); //pertenece al constructor Number

//----------------------------------------------------------------

let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false); //creamos valores boleanos a partir del constructor Boolean

console.log(verdadero, falso, v, f);
console.log(typeof verdadero, typeof falso);


//------------------------------------------------------------
let indefinido;
console.log(indefinido); //arroja un undefined
//undefined: indica que no se a inicializado una variable y que el valor esta ausente. Este se lo establece el navegador

let nulo = null;
console.log(nulo);//arroja null
//null es un valor especial que indica la ausencia de un valor. Este se lo establece intencionalmente el programador

let noEsUnNumero = "hola" * 1.2;
console.log(noEsUnNumero); //arroja NAN
//NAN: Not a Number que significa No es un Numero

//--------FUNCION-DECLARATIVA-Y-EXPRESIVA-------------------------------------


funcionDeclarada();
function funcionDeclarada (){
    console.log("Esto es una funcion declarada y puede invocarse en cualquier parte de nuestro codigo, incluco antes antes de que la funcion sea declarada.");
}
funcionDeclarada();


const funcionExpresiva = () => {
    console.log("Esto es una funcion expresiva, es decir, una funcion que se le asigna como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dira que no esta inicializada");
}

funcionExpresiva();

//-----------------------------------------------------------------

const q = [1,"hola", ["a", "b", "c", [1,2,3]]];

console.log(q);
console.log(q.length);
console.log(q[2]); //posicion 3 del array
console.log(q[2][0]); //posicion 3 del array, posicion 1 del array dentro del array
console.log(q[1][0][2]);////posicion 2 del array, posicion 1 del array dentro del array, posicion 3 del array dentro del array en otro array.

const w = Array.of("x","y","z",9,8,7);//metodo.of nos permite llenar elementos
console.log(w);

const t = Array(100).fill(false); //permite agregar la cantidad que desees de elementos.
console.log(t);

const color = ["Azul", "Naranja", "Gris"];
color.push("Negro");//agrega un elemento al final del array
console.log(color);

color.pop(); //elimina el ultimo elemento del array
console.log(color);

color.forEach((element, index) => { //el primer parametro recorre el valor y el segundo parametro es el indice o posicion que ocupa ese elemento dentro del array.Recoore un array
    console.log(`<li id="${index}">${element}</li>`); //concatenamos los parametros y los valores
})

//---------------------------------------------------------------
let y = new String("Hola"); //con new String inicializamos una nueva variable de tipo string. 

const u = new Object(); //inicializamos una variable de tipo objeto
console.log(u);

const Rodrigo = { //declaramos un objeto
    sexo: "Masculino",
    hovi: ["Estudiar", "Comer", "Vivir"], //le pasamos un array como propiedad
    soltero: true,
    contacto:{ //le pasamos un objeto como propiedad
        email: "rodrgisdjvsl@gmail",
        movil: "271983985"
    },
    saludar:function(){ //le pasamos una funcion como propiedad
        console.log("Hola")
    },
    decirMiNombre: function (){
        console.log(`Hola soy de sexo ${this.sexo} y mi hovi es ${this.hovi[0]} y me puedes seguir como ${this.contacto.email} en twitter.`);
    }
}
console.log(Rodrigo); //se imprime llamando al objeto
console.log(Rodrigo["sexo"]); // el objeto y entre parentesis la propiedad
console.log(Rodrigo.soltero);// el objeto punto y la propiedad
console.log(Rodrigo.hovi); // el objeto punto y propiedad array
console.log(Rodrigo.hovi[1]);//posicion 2 del array
console.log(Rodrigo.contacto); // el objeto y objeto interno
console.log(Rodrigo.contacto.email); //el objeto punto objeto interno punto y propiedad
Rodrigo.saludar(); //mandamos llamar la funcion que esta dentro del objeto
Rodrigo.decirMiNombre(); 


//propiedad interesantes
console.log(Object.keys(Rodrigo)); //keys es un metodo del prototipo objeto que permite listar todas las llaves del objeto. Muestra las propiedades sin su valor
console.log(Object.values(Rodrigo)); // lista todos los valores pero sin su keys
console.log(Rodrigo.hasOwnProperty("nombre")); //permite saver si existe alguna propiedad y te responde con un true o false