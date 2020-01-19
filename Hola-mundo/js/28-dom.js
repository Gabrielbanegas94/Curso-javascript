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


var valor;
for(valor in todoslosdivs)
{
   if(typeof todoslosdivs[valor].textContent == 'String')
   {
    var parrafo = document.createElement("p");//crea un parrafo
    var texto = document.createTextNode(todoslosdivs[valor].textContent);//valor de cada uno de los divs
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
   }
}
//console.log(contenidoentexto);

