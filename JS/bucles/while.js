// Bucle while en JavaScript
let contador = 0;
while (contador < 5) {
    console.log(`Iteración while número: ${contador}`);
    contador++;
    if (contador === 3) {
        break; // Sale del bucle cuando contador es 3
    }
}
