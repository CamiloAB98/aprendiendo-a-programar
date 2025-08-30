// Ejemplos de condicionales en JavaScript

// if simple
let edad = 18;
if (edad >= 18) {
  console.log('Eres mayor de edad');
}

// if...else
let hora = 10;
if (hora < 12) {
  console.log('Buenos días');
} else {
  console.log('Buenas tardes');
}

// if...else if...else
let nota = 7;
if (nota >= 9) {
  console.log('Excelente');
} else if (nota >= 6) {
  console.log('Aprobado');
} else {
  console.log('Reprobado');
}

// Operador ternario
let esMayor = (edad >= 18) ? 'Sí' : 'No';
console.log(`¿Es mayor de edad? ${esMayor}`);

// Mostrar resultados en la página
const resultadoCondicionales = document.createElement('div');
resultadoCondicionales.innerHTML = `
  <strong>Condicionales en JavaScript:</strong><br>
  if simple (edad = 18): ${edad >= 18 ? 'Eres mayor de edad' : ''}<br>
  if...else (hora = 10): ${hora < 12 ? 'Buenos días' : 'Buenas tardes'}<br>
  if...else if...else (nota = 7): ${nota >= 9 ? 'Excelente' : (nota >= 6 ? 'Aprobado' : 'Reprobado')}<br>
  Operador ternario (edad = 18): ¿Es mayor de edad? ${esMayor}<br>
`;
document.body.appendChild(resultadoCondicionales);
