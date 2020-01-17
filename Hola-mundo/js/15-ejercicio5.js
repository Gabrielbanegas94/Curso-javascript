'use strict'
//mostrar divisores de un numero introducido por teclado

var numero = parseInt(prompt("ingrese un numero" ,1));

for( var i = 1; i <= numero ; i++)
{
    if(numero % i ==0){

        console.log("Divisor: "+ i);
    }
}

