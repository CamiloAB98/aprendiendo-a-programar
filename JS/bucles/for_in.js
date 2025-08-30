// Bucle for...in en JavaScript


let persona = { nombre: 'Ana', edad: 25, ciudad: 'Madrid' };

let animales = ['perro', 'gato', 'pez']; //for...in también puede usarse con arrays, pero no es lo ideal.


for (animal in animales){
    console.log(animal); // Muestra los índices: 0, 1, 2
}

for (clave in persona) {
  console.log(clave + ": " + persona[clave]);
}

for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}

//for...in itera sobre las claves de un objeto, permitiendo acceder a sus valores mediante la clave.
