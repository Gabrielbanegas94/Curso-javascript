'use strict'
//array o arreglos
var nombres = ["gabriel ", "mauro ", "julios", "miguel", 52 , true];

var lenguajes = new Array("PHP","GO", "JS","JAVA");

//var elemento = parseInt(prompt("ingreso que elemento del array quiere",0));

/*if(elemento >= nombres.length)
{
    alert("Introduzca el numero correcto menor que: " + nombres.length);

}
else{

    alert("el usuario sellecionado es: " + nombres[elemento]);
}*/

document.write("<h1> lenguajes de programacion </h1>");
document.write("<ul>");
/*for(var i=0 ; i < lenguajes.length; i++)
{
    document.write("<li>" + lenguajes[i] + "</li>");
}*/
lenguajes.forEach((elemento, indice, arr)=>{//recorre y muestra
    console.log(arr);
    document.write("<li>" + indice + " - " + elemento+ "</li>");
});

document.write("</ul");