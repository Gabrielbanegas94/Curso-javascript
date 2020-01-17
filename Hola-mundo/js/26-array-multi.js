'use strict'

var categorias = ["terror", "comedia", "accion"];
var peliculas =["hellowen", "jojo rabbit", "1917"];

var cine = [categorias,peliculas];

//console.log(cine);
/*var elemento ="";
/*while(elemento != "acabar")
{
    peliculas.push(elemento);//añade elemento al array
    elemento =prompt("Introduce la pelicula");

}*/

/*do{
    elemento =prompt("Introduce la pelicula");
    peliculas.push(elemento);

}while(elemento != "acabar")
peliculas.pop();

*/
var indice = peliculas.indexOf("jojo rabbit");
if(indice > -1)
{
    peliculas.splice(indice,1);//averiguamos del indice una vez encontrado
}

var peliculaString=peliculas.join();//convierte las peliculas a texto
console.log(peliculaString);
