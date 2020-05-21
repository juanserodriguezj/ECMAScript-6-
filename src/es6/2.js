/* Continuando con las caracteristicas de ecmascript6
una que gusta bastante es la multilinea en strings */
// antes de ecmascript6
let lorem =
  "El arte supremo de la guerra \n" + " es someter al enemigo sin luchar";
/* De esta forma nosotro podemos tener multilineas,
aunque no sule ser la mejor opcion*/
// despues de ecmascript6
let lorem2 = `
La felicidad se puede hallar hasta en los más oscuros
momentos si somos capaces de usar bien la luz`;

console.log(lorem);
console.log(lorem2);

/* Desestructuración de elementos */
let person = {
  name: "juan",
  age: 27,
  country: "COL",
};
/* Lo que vamos a hacer ahora es como yo accedo a estos
elmentos de forma normal */
//Antes de ecmascript6
console.log(person.name, person.age, person.country);

/* Vamos a desestructurar esos elemento haciendo una
constante la cual abrimos entre llaves y poniendo
los datos de una persona en este caso */

//despues de ecmascript6
let { name, age, country } = person;
/* una vez tenemos los elementos tendremos que agregar
de donde los voy a requerir */
console.log(name, age, country);
/* una vez que estan estos elementos los puedo usar en la
consola. De esta forma puedo extraer los elementos que necesito */

/* Operador de propagacion que permite expandir varios 
elementos. Vamos a tener dos arreglos y lo que quiero es
unirlos en un solo elemento para poderlos presentar*/

let team1 = ["oscar", "julian", "ricardo"];
let tema2 = ["valeria", "jessica", "camila"];
/* Ahora que ya tenemos estos arreglos para utilizar
el operador creamos un tercer arreglo y dentro de
su contenido podremos traer los elementos y mostrarlos en 
uno solo con tresPuntos (...) y el nombre de los arreglos*/
let education = ["Juan", ...team1, ...tema2];
/* De esta forma yo puedo unir diferentes elementos
mas amigable*/
console.log(education);

/* Otro punto muy particular es que para declarar variables
no estoy usando var, en vez de ella usamos let y const 
let es una nueva forma en la que nosotros vamos a trabajar con
los elementos que queremos guardar en memoria */

/*let puede cambiar en el futuro pero solo esta
disponible en el scope, en el bloque de codigo que va 
a ser llamado*/

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global let";
}
/* Vamos a ver la diferencia entre cada una,
como var esta de forma global y let a esta altura
no podra ser accedida por que esta en otro scope,
en otro contexto */
console.log(globalVar);
console.log(globalLet);

/* Si queremos ver a let impresa en la consola tenemos
que escribir el console.log dentro de los corchetes
{
  let globalLet = "Global let";
  console.log(globalLet);
} */
