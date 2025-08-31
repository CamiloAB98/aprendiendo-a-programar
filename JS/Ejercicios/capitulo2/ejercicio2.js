let alumnosTotales = [];

for (let j = 0; j < 19; j++) {
    alumnosTotales[i] = [prompt(`Nombre del alumno No. ${j + 1}`), 0]; // creamos un array dentro de otro array, dentro de alumnosTotales creamos [nombre, ausencias] 
}

const registroAsistencia = (nombre, p) => {
    let asiste = prompt(nombre);
    if (asiste != "p" || asiste != "P") {
        alumnosTotales[i][1]++; //seleccionamos el primer elemento del arreglo alumnosTotales y le sumamos 1 a las ausencias que es la posicion 1 de el array interno
    }
}


for (let j = 0; j < 30; j++) {
    for (alumno in alumnosTotales) {
        registroAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}: <br> 
    ______Presencias: ${alumnosTotales[alumno][1]} <br>
    ______Ausencias: ${30 - alumnosTotales[alumno][1]} <br>`;
    if (30 - alumnosTotales[alumno][1] >= 18) {
        resultado += "________Estado: Reprobado <br>";
    }else {
        resultado += "________Estado: Aprobado <br>";
    }
}
    document.write(resultado);