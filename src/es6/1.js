/* Parametros por defecto, nosotros podemos establecer
algunos valores que podemos pasarle a una funcion por
defecto*/
//Como se hacia antes de ecmascript 6
function newFunction(name, age, coutry) {
  var name = name || "sebastian";
  var age = age || 27;
  var country = country || "COL";
  console.log(name, age, country);
}
/* De esta forma se establecian estos puntos */

// Como se haca despues de ecmascript 6
function newFunction2(name = "sebastian", age = 27, country = "COL") {
  console.log(name, age, country);
}
/* una vez que yo tengo estos valores yo estoy estableciendolos
por defecto por medio de una asignacion. Teniendo 
en cuenta esto yo lo puedo ejecutar de dos formas
distintas una con parmetro y otra sin ellos  */

newFunction2();
//Toma los valores por defecto
newFunction2("Oscar", 32, "MX");
//toma estos paramentros

/* Como vamos a trabajar en el proyecto, vamos a
instalar un paquete que nos permite hacerlo de una manera
mas ordenada. Code runner nos permite correr bloques
de codigo dentro de nuestro proyecto.*/

/* Vamos a trabajar con otra asignacion que son los
templete literals que nos permitiran separar o unir 
segun sea el caso varios elementos */
//ejemplo antes ecmascript6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + "" + world;
console.log(epicPhrase);

// ejemplo despues ecmascript6
let hola = "Hola";
let mundo = "puto";
let epicPhrase2 = `${hola} ${mundo}`;
console.log(epicPhrase2);
/* Usando las comillas francesas podemos concatenar 
cuanto elementos necesitemos. */
