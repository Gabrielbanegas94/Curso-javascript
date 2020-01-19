'use strict'


//var caja = document.getElementById("caja");
var caja=document.querySelector("#caja");
caja.innerHTML="texto desde la cajaj js";
caja.style.background= "red";
caja.style.padding= "20px";
caja.className="hola";

function cambiacolor(color)
{
    caja.style.background=color;
}
cambiacolor("green");
console.log(caja);