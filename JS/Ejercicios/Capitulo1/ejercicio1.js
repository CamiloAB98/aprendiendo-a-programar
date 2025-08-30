dineroCofla = prompt("¿Cofla, cuánto dinero tienes?");
dineroRoberto = prompt("¿Roberto, cuánto dinero tienes?");
dineroPedro = prompt("¿Pedro, cuánto dinero tienes?"); 

// Convertir a número
dineroCofla = parseFloat(dineroCofla);
dineroRoberto = parseFloat(dineroRoberto);
dineroPedro = parseFloat(dineroPedro);
dineroTotal = dineroCofla + dineroRoberto + dineroPedro;

//Resolvemos el ejercicio sin funciones, solo para practicar condicionales if else

//COFLA
if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, compra el helado de agua");
    alert(`Y te sobran ${dineroCofla - 0.6}`);
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert(`Cofla, compra el helado de crema y te sobran ${dineroCofla - 1}`);
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla, compra el helado de heladix");
    alert(`Y te sobran ${dineroCofla - 1.6}`);
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla, compra el helado de heladovich");
    alert(`Y te sobran ${dineroCofla - 1.7}`);
}   
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla, compra el helado de helardo");
    alert(`Y te sobran ${dineroCofla - 1.8}`);
}
else if (dineroCofla >= 2.9) {
    alert("Cofla, compra el helado con confites o el pote de 1/4kg");
    alert(`Y te sobran ${dineroCofla - 2.9}`);
}   
else {alert("No te alcanza para ningun helado")}

//ROBERTO
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, compra el helado de agua");
    alert(`Y te sobran ${dineroRoberto - 0.6}`);
}   
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, compra el helado de crema");
    alert(`Y te sobran ${dineroRoberto - 1}`);
}     
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, compra el helado de heladix");
    alert(`Y te sobran ${dineroRoberto - 1.6}`);
}  
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto, compra el helado de heladovich");
    alert(`Y te sobran ${dineroRoberto - 1.7}`);
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9)
{
    alert("Roberto, compra el helado de helardo");
    alert(`Y te sobran ${dineroRoberto - 1.8}`);
}   
else if (dineroRoberto >= 2.9) {
    alert("Roberto, compra el helado con confites o el pote de 1/4kg");
    alert(`Y te sobran ${dineroRoberto - 2.9}`);
}  
else {alert("No te alcanza para ningun helado")}


//PEDRO
if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, compra el helado de agua");
    alert(`Y te sobran ${dineroPedro - 0.6}`);
}   
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, compra el helado de crema");
    alert(`Y te sobran ${dineroPedro - 1}`);
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, compra el helado de heladix");
    alert(`Y te sobran ${dineroPedro - 1.6}`);
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, compra el helado de heladovich");
    alert(`Y te sobran ${dineroPedro - 1.7}`);
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, compra el helado de helardo");
    alert(`Y te sobran ${dineroPedro - 1.8}`);
}
else if (dineroPedro >= 2.9) {
    alert("Pedro, compra el helado con confites o el pote de 1/4kg");
    alert(`Y te sobran ${dineroPedro - 2.9}`);
}
else {alert("No te alcanza para ningun helado")}

//SIMPLIFICAMOS LO ANTERIOR CON FUNCIONES, CREAMOS UNA FUNCIÓN QUE RECIBA EL NOMBRE Y DINERO Y RECOMIENDE EL HELADO, REUTILIZAMOS LA FUNCIÓN PARA CADA PERSONA
function recomendarHelado(nombre, dinero) {
    if (dinero >= 0.6 && dinero < 1) {
        alert(`${nombre}, compra el helado de agua`);
        alert(`Y te sobran ${dinero - 0.6}`);
    } else if (dinero >= 1 && dinero < 1.6) {
        alert(`${nombre}, compra el helado de crema y te sobran ${dinero - 1}`);
    } else if (dinero >= 1.6 && dinero < 1.7) {
        alert(`${nombre}, compra el helado de heladix`);
        alert(`Y te sobran ${dinero - 1.6}`);
    } else if (dinero >= 1.7 && dinero < 1.8) {
        alert(`${nombre}, compra el helado de heladovich`);
        alert(`Y te sobran ${dinero - 1.7}`);
    } else if (dinero >= 1.8 && dinero < 2.9) {
        alert(`${nombre}, compra el helado de helardo`);
        alert(`Y te sobran ${dinero - 1.8}`);
    } else if (dinero >= 2.9) {
        alert(`${nombre}, compra el helado con confites o el pote de 1/4kg`);
        alert(`Y te sobran ${dinero - 2.9}`);
    } else {
        alert(`${nombre}, no te alcanza para ningun helado`);
    }
}

// Uso:
recomendarHelado("Cofla", dineroCofla);
recomendarHelado("Roberto", dineroRoberto);
recomendarHelado("Pedro", dineroPedro);