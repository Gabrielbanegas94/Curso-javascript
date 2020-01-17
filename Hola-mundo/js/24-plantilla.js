'use strict'
//plantilla de texto

var nombre = prompt("ingrese nombre");
var apellido = prompt("ingrese apellido");

var texto = `
<h1>hola que tal</h1>
<h2>mi nombre es: ${nombre} </h2>
<h3> mi apellido es : ${apellido} </h3>
`;//crea la plantilla y le da formato con html 

document.write(texto);