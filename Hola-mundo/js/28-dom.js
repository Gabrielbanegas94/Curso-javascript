'use strict'
//DOM

//con id concreto
//var caja = document.getElementById("caja");
var caja=document.querySelector("#caja");
caja.innerHTML="texto desde la caja js";
caja.style.background= "red";
caja.style.padding= "20px";
caja.className="hola";

/*function cambiacolor(color, cambio=true)
{
    if(cambio==true)
    {
     caja.style.background=color;
    }
}*/

//conseguir por su etiqueta
var todoslosdivs= document.getElementsByTagName("div");//crea un array de divs

//var contenidoentexto=todoslosdivs[2];

//contenidoentexto.innerHTML="otro valor";//meto contendio

var seccion= document.querySelector("#miseccion");
var valor;
for(valor in todoslosdivs)
{
    
    if(typeof todoslosdivs[valor].textContent=="string")
    {
    var parrafo = document.createElement("p");//crea un parrafo
    var texto = document.createTextNode(todoslosdivs[valor].textContent);//valor de cada uno de los divs
    parrafo.append(texto);
    seccion.append(parrafo);
    }
   
}
//console.log(contenidoentexto);

//***********por class */
var divRojos= document.getElementsByClassName("rojo");
var divAmarillos= document.getElementsByClassName("amarillo");
console.log(divAmarillos);
divAmarillos[0].style.background = "yellow";
var div;
for(div in divRojos){
    if( divRojos[div].className=="rojo"){

        divRojos[div].style.background="red";
    }
}
//usamos query selector
var id = document.querySelector("#encabezado");
console.log(id);
//*** */
var claseRojo = document.querySelectorAll("div.rojo");///sellecciona todos los elementos con div y clase rojo
console.log(claseRojo);
console.log(divRojos);