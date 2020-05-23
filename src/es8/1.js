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
