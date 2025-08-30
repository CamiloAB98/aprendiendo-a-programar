// Ejemplo de array en JavaScript

const frutas = ['Manzana', 'Banana', 'Naranja'];

console.log('Array de frutas:', frutas);
console.log('Primera fruta:', frutas[0]);
console.log('Cantidad de frutas:', frutas.length);

// Recorrer el array
frutas.forEach((fruta, index) => {
  console.log(`Fruta ${index + 1}: ${fruta}`);
});
