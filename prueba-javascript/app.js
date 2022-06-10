/*
- author: jakepy
* por @PLATZI
TODO: ¡Es hora de poner a prueba cuánto sabes sobre JavaScript!
*/

// > Variables y operaciones

// ! 1) Responde las siguientes preguntas
/*
?    1- ¿Qué es una variable y para qué sirve?
?    2 - ¿Cuál es la diferencia entre declarar e inicializar una variable?
?    3 - ¿Cuál es la diferencia entre sumar números y concatenar strings?
?    4 - ¿Cuál operador me permite sumar o concatenar?


! respuestas:
- 1) Es un espacio en memoria, que me permite guardar un valor, con un tipo de dato espesifico.
- 2) Cuando declaramos la variable solo ponemos el nombre, mas no definimos su valor, y cuando la inicializamos ponemos su valor y el tipo de dato.
- 3) La mas notoria son los tipos integers y strings, cuanso sumamos integers es matematicas, mas con string seria concatenar unil las cadenas de caracteres.
- 4) Para sumar como para concatenar se utilisa el mismo operador el +.
*/

//! 2) Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
/* 

*    Nombre -> String
*    Apellido -> String
*    Nombre de usuario en Platzi -> String
*    Edad -> Entero
*    Correo electrónico -> String
*    Mayor de edad -> entero
*    Dinero ahorrado -> Flotante
*    Deudas -> FLotante
*/

//! 3) Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
//*****************************************************************************************************
var nombre = "Juan";
var apellido = "perdomo";
var nombreUsuario = "juanperdomo";
var edad = 19;
var email = "j4kyjak3@protonmail.com";
var mayorEdad = 19;
var dineroAhorrado = 100.0;
var deudas = 50.0;
//*****************************************************************************************************

// ! 4) Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior
//*****************************************************************************************************
/* 
?    Nombre completo (nombre y apellido)
?    Dinero real (dinero ahorrado menos deudas)
*/
var nombreCompleto = nombre + " " + apellido;
var dineroReal = dineroAhorrado - deudas;
//*****************************************************************************************************

// > Funciones
// ! 1) Responde las siguientes preguntas en la sección de comentarios
/* 
?    1) ¿Qué es una función?
?    2) ¿Cuándo me sirve usar una función en mi código?
?    3) ¿Cuál es la diferencia entre parámetros y argumentos de una función?



! respuesta
- 1) Es un bloque de codigo que nos permite resibir parametros y tener alguna funcionalidad con ellos
- 2) Cuando se vuelve repetitivo, o cuando necesito crear un metodo especifico, para sierta funcionalidad
- 3) los parametros los nombres de variable que recive la funcion, los argumento son los datos que recivira al momento de usarse la funcion
    - pueden ser numeros, string e incluso otrs funciones.
*/

//! Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
//*****************************************************************************************************
const name = "Juan Esteban";
const lastname = "Perdomo Santos";
const completeName = name + lastname;
const nickname = "jakepy";

console.log(
  "Mi nombre es " +
    completeName +
    ", pero prefiero que me digas " +
    nickname +
    "."
);

//*****************************************************************************************************
// ! solucion

function perfilEstudiante(nombre, apellido = "perdomo", nombreCompleto, apodo) {
  console.log(
    `Mi nombre es: ${nombre} y mi nombre completo es ${nombreCompleto} pero puedes llamarme: ${apodo}`
  );
}

console.log(perfilEstudiante(nombre, undefined, completeName, nickname));
//*****************************************************************************************************

// > Condicionales

//! 1) Responde las siguientes preguntas en la sección de comentarios
/* 
?    ¿Qué es una condicional?
?    ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
?    ¿Puedo combinar funciones y condicionales?


! respuesta

- 1) Es una estructura de contro que nos valida si una condicion es falsa o verdadera
- 2) Existe varias los if else, else if, el operador ternario, switch. el unico con diferencias es que el switch va por casos
- 3) Si, pero siempre y cuando no hayan if anidados jsjsjs.
*/
// ! 2) Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if

//*****************************************************************************************************

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}

// ! Respuesta

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlux") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
} else {
  console.log("Compra una suscripcion a platzi");
}

if (tipoDeSuscripcion === "Fee") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}
//*****************************************************************************************************

// > Ciclos

/*
! 1) Responde las siguientes preguntas en la sección de comentarios


?    ¿Qué es un ciclo?
?    ¿Qué tipos de ciclos existen en JavaScript?
?    ¿Qué es un ciclo infinito y por qué es un problema?
?    ¿Puedo mezclar ciclos y condicionales?


! Respuesta

- 1) Son secuencias de instrucciones que se ejecutara repetidas veces hasta que una condicion deje de cumplirse
- 2) existen varios pero los mas comunes son for, for of, while, do while. Etc...
- 3) Es cuando una condicion siempre esta en true, ocacionando un infinite loop, el problema de esto es que puede ocacionar caida de memoria ram.
- 4) Si, Para vilidar cosas al momente de la interacion.
*/

//! 2) Replica el comportamiento de los siguientes ciclos for utilizando ciclos while

for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}

//! Con While
var i = 0;
while (i <= 4) {
  console.log(`El valor de i es: ${i}`);
  i++;
}

var i = 10;
while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}

/* 
! 3) Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
*/

//! Respuesta
var i = 0;
while (i < 4) {
  var pregunta = Number(prompt("Cuantos es 2 + 2: "));
  if (pregunta === 4) {
    console.log("felicitaciones...");
    break;
  } else {
    console.log("Intentalo de nuevo...");
  }
}

// > Listas

// ! 1) Responde las siguientes preguntas en la sección de comentarios
/* 

?    ¿Qué es un array?
?    ¿Qué es un objeto?
?    ¿Cuándo es mejor usar objetos o arrays?
?    ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

!! Respuesta
- 1) Es un tipo de dato objeto, que sirve para generar una lista de elementosm datos etc...
- 2) Es un tipo de dato objeto tambien y  se utiliza para guardar datos, utilizando clave y valor (key, value)
- 3) Usar arrays funcionara cuando queremos una lista de cosas, y un objeto cuando queremos datos mas descriptivos. Por ejemplo hacer una peticion a una base de datos y traer en formato json los tatos.
-4) Si es posible en culquiera de las dos formas, e incluso en los objetos se puede crear metodos.
*/

// ! 2) Crea una función que pueda recibir cualquier array como parámetro e inprima su primer elemento
function primerElemnto(array) {
  return array[0];
}

// ! 3) Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

var mifuncion = function (array) {
  return array.map((item) => {
    console.log(item);
  });
};

//! 4) Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
var miObjectFunction = function (objetos) {
  for (i in objetos) {
    console.log(`La key del su objeto es ${i} y si valor es ${objetos[i]}`);
  }
};