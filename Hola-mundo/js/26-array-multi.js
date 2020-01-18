'use strict'

var categorias = ["terror", "comedia", "accion"];
var peliculas =["hellowen", "habia una vez en hollywood", "buenos muchahcos", "amelie", "taxi driver"];

var cine = [categorias,peliculas];
/*var alfabetico =peliculas.sort();//ordena en orden alfabetico
var en_reverso = peliculas.reverse();

console.log("en reverso <br/>");
console.log(en_reverso);*/

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
var cadena = "peras,bananas,manzanas";
var cadena_array = cadena.split(",");// lo convierte la cadena en array
console.log(cadena_array);
