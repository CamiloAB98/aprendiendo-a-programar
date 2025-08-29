// Operadores de comparación en JavaScript
// Igualdad (==)
let igualEjemplo = (5 == '5'); // true
// Estrictamente igual (===)
let estrictamenteIgualEjemplo = (5 === '5'); // false
// Desigualdad (!=)
let desigualEjemplo = (5 != '7'); // true
// Estrictamente desigual (!==)
let estrictamenteDesigualEjemplo = (5 !== '5'); // true
// Mayor que (>)
let mayorQueEjemplo = (10 > 5); // true
// Menor que (<)
let menorQueEjemplo = (3 < 7); // true
// Mayor o igual que (>=)
let mayorIgualEjemplo = (8 >= 8); // true
// Menor o igual que (<=)
let menorIgualEjemplo = (4 <= 3); // false

const resultadoComparacion = document.getElementById('resultadoComparacion');
resultadoComparacion.innerHTML = `
  <strong>Operadores de Comparación:</strong><br>
  Igualdad (5 == "5"): ${igualEjemplo}<br>
  Estrictamente igual (5 === "5"): ${estrictamenteIgualEjemplo}<br>
  Desigualdad (5 != "7"): ${desigualEjemplo}<br>
  Estrictamente desigual (5 !== "5"): ${estrictamenteDesigualEjemplo}<br>
  Mayor que (10 > 5): ${mayorQueEjemplo}<br>
  Menor que (3 < 7): ${menorQueEjemplo}<br>
  Mayor o igual que (8 >= 8): ${mayorIgualEjemplo}<br>
  Menor o igual que (4 <= 3): ${menorIgualEjemplo}<br>
`;
