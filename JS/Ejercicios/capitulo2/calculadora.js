const sumar = (num1, num2) => parseInt(num1 + num2);
const restar = (num1, num2) => parseInt(num1 - num2);
const multiplicar = (num1, num2) => parseInt(num1 * num2);
const dividir = (num1, num2) => parseInt(num1 / num2);

alert('Bienvenido a la calculadora');
let operacion = prompt('Ingrese el número de la operacion que desea realizar: 1. sumar, 2. restar, 3.multiplicar, 4.dividir');

let numero1 = parseInt(prompt('Ingrese el primer número'));
let numero2 = parseInt(prompt('Ingrese el segundo número'));

if (operacion == 1) {
    alert(`El resultado de la suma es: ${sumar(numero1, numero2)}`);
} else if (operacion == 2) {
    alert(`El resultado de la resta es: ${restar(numero1, numero2)}`);
} else if (operacion == 3) {
    alert(`El resultado de la multiplicación es: ${multiplicar(numero1, numero2)}`);
} else if (operacion == 4) {
    alert(`El resultado de la división es: ${dividir(numero1, numero2)}`);
} else {
    alert('Operación no válida');
}