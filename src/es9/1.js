/* Caracteristicas de ecmascript9, la de ellas es el
operador de reposo el cual puede extraer las propiedades
de un objeto que todavia no se ha creado */
/* Creamos una contante donde guardamos un objeto
con algunas propiedades que le asignemos */
const obj = {
  name = 'sebastian',
  age = 23,
  country = 'COL',
}
/* Una vez tenemos el objeto ahora creamos usamos el
operador de reposo para separar los elementos, para
ello creamos una constante donde por "parametro"
asignamos el valor especifico que queremos sacar
del objeto y en el otro parametro dejamos todo lo 
demas, por lo que si observamos mas en especifico
en name guardamos obj.nam y en ...all guardamos 
obj.age y abj.country y para cerrar la variable 
tenemos que indicar de donde vamos a sacar esa informacion
que es este caso sera obj.*/
let {name, ...all} = obj;
/* en la impresion en consola podemos decidir que
mostrar ...all o name */
console.log(name, ...all); //aca mostramos todo el objeto
console.log(name); //aca mostramos solo el nombre
console.log(...all); //aca mostramos edad y pais

/* Utilizando las propiedades de propagacion vamos a
poder unir 1 ó 2 ó cuantos elemntos queramos de 
objetos a uno nuevo */
const obj = {
  name = 'sebas',
  age = 27,
}
/* usando los tres puntos ... podemos anidar los 
elementos del obj con el obj1 */
const obj1 = {
  ...obj,
  country = 'COL',
}
/* Y al mostrarlo en consola vemos que tenemos todos
los elementos de los dos objetos en uno solo obj1  */
console.log(obj1);

/* Otro punto interesante es promise.finally que nos permite
saber cuando a terminado el llamado 
y poder ejecutar algun logica de codigo segun sea el caso */

const helloWorld = ()=>{
  return new Promise ((resolve, reject) =>{
    (true)
    ? resolve('helloWorld')
    : reject(new error('test error'))
  })
};
/* Ya tenemos la promesa esta construida
y hasta aca todo normal */
helloWorld()
/* Lo que normalmente hacemos es poner el .then para 
una respuesta afirmativa */
  .then(response => console.log(response))
/* Lo que normalmente hacemos es poner el .catch para 
una respuesta negativa */  
  .catch(error => console.log(error))
/* Ahora usamos el .finally para ejecutar cualquier
bloque de codigo en este caso un aviso de cuando ya
 termino la ejecucion */  
  .finally(()=>console.log('Finalizo'));


/* Otro punto muy importante es la mejora que añadieron
a la hora de trabajar con REGEX y como podemos agrepar
bloques de REGEX y poder acceder a cada uno de ellos */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
/* Ahora lo que hacemos es el match sobre este regex
para saber si estan los datos establecidos */
const match = regexData.exec('2018-04-20');
/* Ahora lo que yo quiero entender, como esta contituido 
cada elemento segun lo que quiero tener aca.
Hicimos nuestros grupos y ahora yo quiero acceder 
a datos particulares, dias, mes, año */
const year = match[1]
/* Creo constantes para year, month y day y asignamos
que grupo le corresponde */
const month = match[2]
const day = match[3]

console.log(year, month, day);

