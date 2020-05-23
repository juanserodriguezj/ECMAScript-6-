/* Llego el momento de hablar de clases, 
que en sintesis es una forma en la que nosotros 
vamos a manejar una sintaxis mas clara para manejar
objetos y la herencia dentro de Javascript. 
Esto nos permitira aplicar POO aplicada a este lenguaje.
*/
/* Para declarar una clase usamos la palabra reservada
class seguido del nombre de la clase */
class Calculator {
  /* El constructor es unMetodo para iniciarlizar 
  nuestra clase */
  constructor() {
    /* Aca es donde vamos a asignar las variables
    que van a estar disponibles en el scope global */
    this.valueA = 0;
    this.valueB = 0;
    /* Aca ya estamos construyendo, asignado variables
    que van a estar dentro de mi scope por que van a
    ser dos elementos que vamos a necesitar */
  }
  /* Aca voy a declarar un metodo que en este caso
  va hacer uso de los elementos valueA y valueB */
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
/* Recapitulando, lo que tenemos es una clase que tiene
un constructor el cual esta asignando dentro del scope
global las dos variables (valueA valueB), despues
tengo mi metodo al que le voy a pasar dichas variables
para poder sumarlas y estoy asignando estas variables
previamente constridas a las que recibo y al final las sumo
para retornar este elemento*/
const calc = new Calculator();
console.log(calc.sum(9, 1));
/* la ejecucion la podemos encontrar de diferentes 
maneras, creamos una nueva clase y la guardamos 
en una constante a la que llamamos calc y con
console.log la contante calc y el metodo sum puedo
hacer la operacion de suma y mostrarla en la consola*/

/* Continuando con novedades en ecmascript6 vamos a 
encontrar palabras reservadas como import o export 
que hace parte del trabajo con modulos.
Para trabajar con modulos es necesario crear un
nuevo archivo, para simular un modulo y en este archivo
puedo tener logica separada de mi app principal. 
podemos crear una constante donde guardaremos un arrow
funtion para ejecutar alguna logica. La parte importante
es que con la palabra reservada export puedo hacer visible
esa logica a mi app principal.*/

/* en el nuevo archivo llamado module.js
const hello = () => {
  return "hello";
};
export default hello:
*/
/* Ahora lo puedo llamar a donde yo lo necesite con
la palabra import en mi archivo principal */

/* en mi archivo principal
import {hello} from './module'
*/

/* De esta forma yo puedo traer esa logica que separe
a mi archivo principal y poderla utilizar haciendo el 
llamado de la funcion hello(); que declaramos en el 
archivo llamado module */

/* 
------------- Generators -------------
Es una funcion especial que retorna una serie de valores
segun el algoritmo definido, su sintaxis es especial 
y va de la siguiente manera.
*/
function* holaMundo() {
  /* Segun el algoritmo es como va a devolver los 
  valores,  */
  if (true) {
    yield "hello, ";
  }
  if (true) {
    yield "world ";
  }
  /* ejecutar un valor yield me va permitir retornar
  el segundo elemento cuando sea ejecutado el siguiente valor
   */
}
/* Como la voy a ejecutar ?
creo una contante donde la igualo al holaMundo() que 
acabamos de crear y ahora yo puedo utilizar el valor next 
para mostrarme el siguente valor y asi por cada uno de
los steps que pueda tener el algoritmo */
const genratorHello = holaMundo();
console.log(genratorHello.next().value);
//hello,
console.log(genratorHello.next().value);
//world
console.log(genratorHello.next().value);
// undefined
/* Hasta aqui conoces las caracteristicas añadidas 
a ecmascript6 que salio en 2015 */
