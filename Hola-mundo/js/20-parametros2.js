'use strict'
//paraemtros rest y spread

function listadoFrutas(fruta1, fruta2 ,...resto_de_frutas)//rest
{
    console.log("fruta 1: ", fruta1);
    console.log("fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}
listadoFrutas("naranja", "sandia","pera", "melon", "coco");
var frutas= ["naranja","manzana"];

listadoFrutas(...frutas, "sandia","pera", "melon", "coco");//spread