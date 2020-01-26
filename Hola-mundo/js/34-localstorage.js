'use strict'
//local storage guarda a modo de seccion

//comprobar disponibilidad en local storage
if(typeof(Storage) !== 'undefined')
{
    console.log("local storage compatible");
}else{
    console.log("incompatible con local storage");
}
//guardar datos
localStorage.setItem("titulo", "curso js");
///recuperar elemento
document.querySelector("#peliculas").innerHTML=localStorage.getItem("titulo");
//guardar objetos
var usuario = {
 nombre: "gabriel banegas",
 email: "banegasgabriel@gmail.com",
 edad : 25
};
localStorage.setItem("usuario",JSON.stringify(usuario));//convierte el objeto a un JSON string para guardar en el local storage
//recuperar el objeto
var userjs= JSON.parse(localStorage.getItem("usuario"));//convierto el valor en objeto usable por JS

console.log(userjs);
document.querySelector("#datos").append(" "+ userjs.email);//al usarlo como objeto me permite hacer lo que quiera con el

localStorage.removeItem("usuario");