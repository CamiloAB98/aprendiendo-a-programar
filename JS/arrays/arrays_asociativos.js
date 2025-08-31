// Ejemplo de array asociativo (objeto) en JavaScript

const persona = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Ingeniero'
};

console.log('Objeto persona:', persona); // Muestra todo el objeto
console.log('Nombre:', persona.nombre); // Acceso usando notación de punto
console.log('Edad:', persona[edad]); // Acceso usando notación de corchetes

// Recorrer las propiedades del objeto
for (let clave in persona) {
  console.log(`${clave}: ${persona[clave]}`); // Muestra cada clave y su valor 
}
