/**
 * Ejemplos de todas las formas de concatenar en JavaScript
 */

// 1. Usando el operador +
const nombre = "Juan";
const apellido = "Pérez";
const completo1 = nombre + " " + apellido;
console.log(completo1); // Juan Pérez

// 2. Usando el operador +=
let saludo = "Hola";
saludo += ", ";
saludo += nombre;
console.log(saludo); // Hola, Juan

// 3. Usando template literals (backticks)
const completo2 = `${nombre} ${apellido}`;
console.log(completo2); // Juan Pérez

// 4. Usando String.concat()
const completo3 = nombre.concat(" ", apellido);
console.log(completo3); // Juan Pérez

// 5. Concatenando arrays con .concat()
const arr1 = [1, 2];
const arr2 = [3, 4];
const arrConcatenado = arr1.concat(arr2);
console.log(arrConcatenado); // [1, 2, 3, 4]

// 6. Concatenando arrays con spread operator
const arrConcatenado2 = [...arr1, ...arr2];
console.log(arrConcatenado2); // [1, 2, 3, 4]

// 7. Usando Array.join() para unir elementos de un array en un string
const palabras = ["Hola", "mundo"];
const frase = palabras.join(" ");
console.log(frase); // Hola mundo

// 8. Usando Array.reduce() para concatenar
const letras = ["J", "S"];
const palabra = letras.reduce((acc, curr) => acc + curr, "");
console.log(palabra); // JS