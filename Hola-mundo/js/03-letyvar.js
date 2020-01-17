'use strict'
//pruebas let y var
//prueba con var
var numero = 40;
console.log(numero);//40
if(true){
	var numero = 50;
	console.log(numero);//50
}
console.log(numero);//50
//prueba con let
var texto ="curso js";
console.log(texto);//el mismo

if(true){
	let texto = "curso laravel 5";//actua a nivel de bloque
	console.log(texto);
}
console.log(texto);