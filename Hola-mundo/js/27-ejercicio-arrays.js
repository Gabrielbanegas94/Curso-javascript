'use strict'

/*
1. pida 6 numeros por pantalla y guardar en array
2.mostrar el array entero en el cuerpo y consola
3.ordenar y mostrar
4.invertir y mostrar
5.mostrar cuantos elementos tiene el array
6.busqueda de un valor introducido por el usuaro, que nos diga si lo encuentra y su indice
*/
function mostrarArray(elementos , textocustom="") {

    document.write("<h1> el array tiene "+ textocustom+ "</h1>");
    document.write("<ul>");
    for (let valor in elementos) {
        document.write("<li>" + numeros[valor] + "</li>");

    };
    document.write("</ul>");
}
//var numeros= new Array(6);//crea array con 6
var numeros = [];//crea array vacio
for (var i = 0; i <= 5; i++) {
    //numeros[i] = parseInt(prompt("ingrese 6 numeros",0));
    numeros.push(parseInt(prompt("ingrese 6 numeros", 0)));
}
//por consola



/*for(var i=0 ; i <=(numeros.length-1) ; i++)
{
    document.write("<li>" + numeros[i] + "</li>");
}*/


//mostrar en cuerpo
mostrarArray(numeros);

console.log(numeros);

//ordenar y mostrar 
numeros.sort((a,b)=>{return a-b;});//ordena de forma numerica acendente

mostrarArray(numeros, "ordenados");

//invertir
numeros.reverse();

mostrarArray(numeros, "revertido");

//cuantos elementos tiene
var cantidad_elementos= numeros.length;
document.write("<h1> cantidad_elementos : "+ cantidad_elementos + "</h1>");

///busqueda
var busqueda = parseInt(prompt("ingrese ingrese numero a buscar", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion  && posicion !=-1)
{
   document.write("<h1> encontrado </h1>");
   document.write("la posicion es: " + posicion);

}
else
{
    document.write("<h1> NO encontrado </h1>");
}



