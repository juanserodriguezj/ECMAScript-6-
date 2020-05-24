/* Hay que entender que caracteristicas fueron añadidas
en la version 8 de ecmascript, en junio del 2017
fue cuando incorporaron cambias interesantes a
Javascript, uno de ellos fue async/await. Otra 
caracteristicas fue object.entries*/
const data = {
  frontend: "sebastian",
  backend: "isabel",
  desing: "Ana",
};
/* Como voy a transformar esto objeto a una matriz, 
para esto voy a utilizar el nuevo disponible*/
const entries = Object.entries(data);
console.log(entries);
/* Para saber cuantos elementos hay en un arreglo */
console.log(entries.length);

/* Ahora vamos a hablar de object values el cual me 
devuelve los valores de un objeto a un arreglo */
const data = {
  frontend: "sebastian",
  backend: "isabel",
  desing: "Ana",
  /* estamos trailing commas, yo puedo poner una coma
  , dentro de mi objeto para poder establecer una forma
  en la cual es mas simple y amigable poder añadir mas
  elementos sin caer en algun error por que establece
  que despues puede haber un valor o no.
   */
};

const values = Object.values(data);
console.log(entries);
/* Mira como podemos transformar los valores de un
objeto a un arreglo de strings.  */
console.log(values.length);
/* Longitud de un arreglo */

/* Otro de los punto que se añadieron a esta version
de ecmascript es el padding. */
const string = "hello";
/* lo que vamos a hacer es como podemos agregar
o anteponer una cadena vacia a este string*/
console.log(string.padStart(7, "hi"));
/* padStart recibe dos elementos el primero es cuantos
elementos voy a tener osea el maximo de elementos que
va tener el string y cuales son esos caracteres que voy
a añadir*/
console.log(string.padEnd(7, "hi"));

/* ------------- async / await ------------- */
/* Vamos a hablr de una de las principales funcionalidades
agregadas en ecmascript8, vamos a entender sus caracteristicas
y por que es tan aceptada por los desarroladores  */

/* Vamos a crear una funcion despues adentro de ella
una promesa, depues de la promesa vamos a invocar
la funcion*/
// funcion
const helloWorld = () => {
  //promesa
  return new Promise((resolve, reject) => {
    true //valor a evaluar forzando que paso por el valor positvo
      ? setTimeout(() => resolve("Hello World"), 3000) //Respuesta afirmativa despues de 3 segundos
      : reject(new Error("Test Error")); //Respuesta negativa a la promesa
  });
};
/* De esta forma ya tenemos la promesa con la cual
vamos a trabajar las async/await, esas funciones 
que la agregan este valor nos indican que van a
comportarse de forma distinta y nos va permitir a 
nosotros ser mas claro a la hora de contruirlas y tambien
vamos a trabajar con el asyncronismo*/

/* Vamos a trabajar con ella y la logica que implica
usarlas, tenemmos una nueva contante que adentro tendra
una funcion que empieza con la palabra async y en la
logica tenemos otra constante que guarda el llamado
a la funcion creada anteriormente, con await vamos a
esperar que la promesa termine y luego lo imprime en
persona  */
const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};
helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
/* Es la forma correcta para implementar el
manejo de errores*/
