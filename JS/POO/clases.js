class animal {
    constructor(especie, edad, color) { // Creamos un constructor que recibe parámetros, en este caso especie, edad y color.
        this.especie = especie; // con this creamos una propiedad del objeto
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo (){
        document.write(this.info + "<br>")
    } //dentro de una clase no podemos crear funciones tipo flecha. Una funcion dentro de una clase se le llama metodo
}

//Instanciación de la clase
let perro = new animal('perro', 5, 'marrón'); // Creamos un objeto llamado perro a partir de la clase animal
let gato = new animal('gato', 3, 'blanco'); // Creamos un objeto llamado gato a partir de la clase animal

perro.verInfo();
gato.verInfo();

console.log(perro);
console.log(gato);