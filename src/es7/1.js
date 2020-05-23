/* En ecmaScript7 han incluido dos cambios particulares
uno es el valor de include y otro es la operacion
de forma exponencial */
/* Est metodo include que trabaja sobre arreglos nos
va a permitir a nosotros saber si hay un elemento dentro
de esta valor*/
let numbers = [1, 2, 3, 7, 8, 9];
/* ahora vamos a validar si dentro de este arreglo se
encuentra un valor especifico, si esta incluido hacer
algo  */
if (numbers.includes(7)) {
  console.log("Si se encuentra el valor");
} else {
  console.log("No se encuentra el valor");
}
/* Teniendo estos elementos podemos saber si hay
una disponibilidad de un valor dentro de un determinado 
arreglo */

/* Otro de los puntos incorporados como vamos a 
elevar a la potencia, nosotros vamos a utilizar una 
estructura que necesitamos  */

let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);
