let entradaGratis = false;

const mayoresDeEdad = (tiempo) => {
  let edad = prompt("Ingresa tu edad:");
    if (edad >= 18) { 
        alert("Eres mayor de edad, puedes pasar");
        if (tiempo >= 2 && tiempo < 7 && !entradaGratis) {
            alert("Eres el primer cliente despúes de las 2 AM, tienes entrada gratis");
            entradaGratis = true;
        }
    }  else {
        alert("Eres menor de edad, no puedes pasar");
    }
};