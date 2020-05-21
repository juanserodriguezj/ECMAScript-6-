/* Continuando con el aprendizaje de ecamascript6 
vamos a ver la propiedad de objetos mejorada */
let name = "sebas";
let age = 27;

/* Anteriormente lo que nosotros haciamos para crear
un nuevo objeto y poder trabajar con nuestros elementos
teniamos que crear un obtjo al que le decia que una
caracteristica era igual a esa misma caracteristica */
obj = { name: name, age: age };
console.log(obj);
/* Y de esta forma yo podia acceder a estos elementos
y podia crear un objeto con estos valores establecidos */

// ecmascript6
/* Ahora en ecmascript6 hay una forma mas amigable y facil de hacer,
lo que voy a hacer es solamente decirle a obj2 
name y age y automaticamente va a tomar la llave y el 
valor de los elementos. */
obj2 = { name, age };
console.log(obj2);

/* --------------- Arrow Functions ---------------*/
/* Vamos a ir otra de las caracteristicas mas famosas
de acmascript6 y son las funciones de tipo flecha, 
estas funciones vienen a solventar un problema particular
o a trabajar con dos elementos, una sintaxis mas reducida
y un this no vinculado.*/
const names = [
  { name: "luisa", age: 29 },
  { name: "luis", age: 40 },
];
/* Si yo queria iterar por cada uno de estos elementos
para mostrarlos en la consola utilizaria el metodo 
map y normalmente lo que hago es pasarle una funcion 
donde voy a tener el valor individual de estos elementos
y luego lo imprimo.*/
let listOfNames = names.map(function (item) {
  /* Lo que normalmente hariamos es pasarle una funcion
anonima y luego ya recibiamos este elemento dentro de esta
funcion */
  console.log(item.name);
  /* Por cada uno de los elementos de este arreglo 
imprimiria en consola el nombre. Esto imprimiria 
luisa luis */
});

/* Las arrow functions son funciones anonimas,
como lo hacer con ellas pues: */
let listOfNames2 = names.map((item) => console.log(item.name));
/* declaramos una variable donde guardamos el arreglo
pero en vez de pasar la funcion anonima vamos directamente
a establecer el valor que necesitamos y directamente
con => nosotros vamos a establecer que es una funcion
anonima que va a retornar algo, como se puede ver la
sintaxis es mas amigable entendible y nos ahorra un poco
de codigo */

/* otra forma de arrow functions es con una const */
const listOfNames3 = (name, age, country) => {
  //bloque de codigo que establesco para listOfNames3
  console.log("...");
};
/* otra forma en la que podemos encontrar las arrow
functions es cuando yo solo estoy pasando un unico 
parametro */
const listOfNames4 = (name) => {
  console.log("...");
};
/* Yo puedo utilizar una nueva funcion y me va a permitir
recibe un valor y yo multiplico ese numero por si mismo
y al final esto me lo retorna, ya no tengo que agregar
corchetes, returns. Lo que estoy haciendo es asignarlo
directamente*/
const square = (num) => num * num;
/* Esta es una de las ventajas que tienen las arrow
function para empezar a trabajar donde simplificamos 
nuestro codigo, lo hacemos mas amigable y podemos avanzar
sin ningun inconveniente. */

/* --------------- Promesas ---------------*/
/* Vamos a trabajar el asincronismo, lo que significa
que JS no puede ejecutar muchos elementos al mismo 
tiempo, si no que ejecuta elemento por elemento.
Para manejar el asincronismo hay que tener claro que
dos eventos no van a suceder al mismo tiempo si no 
que en una serie de situaciones segun sea el caso,
llamar a una API  han incorporado las promesas que vienen
a reparar los problemas de algo llamado el
callbackhell que son ejecuciones en cascada que no 
son escalables y podiamos anidar hasta 20 llamadas
o elementos y llegaba a complicar mucho*/
/* Con las promesas hay que entender que en algun
momento va a pasar algo que estas estableciendo.*/
const hellopromise = () => {
  /* Retorno una nueva promesa con dos elementos
  que normalmente necesita resolve para aceptar la promesa
  o reject para rechazarla  */
  return new Promise((resolve, reject) => {
    /* Vamos a establecer una validacion, la promesa 
    tiene la espera de una logica que nosotros vamos
    a resolver */
    if (true) {
      resolve("hey todo funciona!!");
    } else {
      reject("Ups algo salio mal!!");
    }
  });
};

/* Vamos a ejecutar nuestra promesa */
hellopromise()
  /* Ahora disponemos de un valir llamado then que 
nos permite obtener esa respuesta y la vamos a ejecutar
con un arrow function a un console.log */
  .then((response) => console.log(response))
  /* En caso que fuera rechazada con catch obtenemos
  el error y mostrarlo en consola. */
  .catch((error) => console.log(error));
