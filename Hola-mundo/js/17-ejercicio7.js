'use strict'
/*
Tabla de multiplicar de un numero ingrsado por pantalla
*/

var numero = parseInt(prompt("de que numero quieres la tabla",1));

for(var i=1 ; i<=10 ; i++)
{

    var mult = numero * i;

    document.write( numero + " x "+ i + " = " + mult + "<br/>");
    
}

