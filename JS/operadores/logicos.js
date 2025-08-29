// Operadores lógicos en JavaScript
// AND (&&)
let andEjemplo = (true && false); // false
// OR (||)
let orEjemplo = (true || false); // true
// NOT (!)
let notEjemplo = !true; // false

const resultadoLogicos = document.getElementById('resultadoLogicos');
resultadoLogicos.innerHTML = `
  <strong>Operadores Lógicos:</strong><br>
  AND (true && false): ${andEjemplo}<br>
  OR (true || false): ${orEjemplo}<br>
  NOT (!true): ${notEjemplo}<br>
`;

