// Ejemplo de funciones en JavaScript

// 1. Declarar una función simple
function saludar() {
  console.log('¡Hola desde una función!');
}

// Llamar a la función
saludar();

// 2. Función con parámetros
function sumar(a, b) {
  console.log(`La suma de ${a} y ${b} es ${a + b}`);
}

sumar(3, 5);

// 3. Función con return
function multiplicar(x, y) {
  return x * y;
}

let resultado = multiplicar(4, 6);
console.log(`El resultado de la multiplicación es: ${resultado}`);

// 4. Scope (ámbito de las variables)
let global = 'Soy global';

function mostrarScope() {
  let local = 'Soy local';
  console.log(global); // Puede acceder a la variable global
  console.log(local);  // Puede acceder a la variable local
}

mostrarScope();
// console.log(local); // Esto daría error porque 'local' solo existe dentro de la función

// 5. Función flecha (arrow function)
const saludarFlecha = () => {
  console.log('¡Hola desde una función flecha!');
};

saludarFlecha();
