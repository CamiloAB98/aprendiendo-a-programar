/**
 * Operadores aritméticos en JavaScript
 */

// Suma: suma dos valores numéricos
let suma = 5 + 3; // 8
suma += 10;
// Resta: resta el segundo valor al primero
let resta = 10 - 4; // 6

// Multiplicación: multiplica dos valores
let multiplicacion = 6 * 7; // 42

// División: divide el primer valor por el segundo
let division = 20 / 4; // 5

// Módulo: obtiene el residuo de una división
let modulo = 10 % 3; // 1

// Exponenciación: eleva el primer valor a la potencia del segundo
let exponente = 2 ** 3; // 8

// Negación unaria: cambia el signo de un número
let negacion = -5; // -5


const resultado = document.getElementById("resultado");
resultado.innerHTML =
	"Suma: " + suma + "<br>" +
	"Resta: " + resta + "<br>" +
	"Multiplicación: " + multiplicacion + "<br>";