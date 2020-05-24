/* Aplanar matrices */
let array = [1, 2, 3, [1, 2, 3, [(1, 2, 3)]]];
/* Con array.flat podemos devolver una matriz con
cualquier submatriz aplanada, recibe la profundidad 
como argumento*/
console.log(array.flat(1));
/* 
[
  1,     2, 3,
  1,     2, 3,
  [ 3 ]
] */
console.log(array.flat(2));
/* 
[
  1, 2, 3, 1,
  2, 3, 3
] */

let array = [1, 2, 3, 4, 5];
console.log(array.flatMap((value) => [value, value * 2]));
/* 
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]
 */
/* va a mapear cada uno de los elementos, y lo que
retornamos son dos cosas, nuestro valor seguido del valor 
x 2
 */

/* trimStart elimina los espacios en blanco de 
un string ubicado al principio */
let helloMundo = "    hello world";
console.log(helloMundo.trimStart());

/* trimEnd elimina los espacios en blanco de 
un string ubicado al final */
let helloMundo = "hello world      ";
console.log(helloMundo.trimEnd());
