'use strict'
window.addEventListener("load", () => {
var pelicula = {
     titulo : "batman vs superman",
     year : 2017,
     pais : "estados unidos"
};


var peliculas = [
    {titulo:"buenos muchachos", year: 1993, pais:"usa"},
    pelicula
];
var index;
var caja_peliculas= document.querySelector("#peliculas span");
for(index in peliculas){
    
        var parrafo= document.createElement("p");
        parrafo.append(peliculas[index].titulo);
        caja_peliculas.append(parrafo);
}
console.log(peliculas);


});