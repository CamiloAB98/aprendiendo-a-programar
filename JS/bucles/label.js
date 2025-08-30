// Ejemplo de uso de label con bucles anidados

array1 = ["Pedro", "Pablo", "Maria"]
array2 = ["Juan", "Julian", array1]


finArray: // etiqueta llamada 'finArray'
for (let array in array2) {
    if (array == 2) {
        for (let array of array1) {
            console.log(array)
            break finArray; // Sale del bucle externo usando la etiqueta
        }
    } else {
        console.log(array2[array])
    }
}



outerLoop: // etiqueta llamada 'outerLoop'
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            // Sale del bucle externo usando la etiqueta
            break outerLoop;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

console.log('Fin del bucle');