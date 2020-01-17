'use strict'
/*mostrar los impares entre dos numeros ingresado */

var numero1 = parseInt(prompt("ingrese el primer numero: ", 0));
var numero2 = parseInt(prompt("ingrese el segundo numero: ", 0));

while(numero1<numero2)
{
    
    if(numero1 % 2 !=0)
    {
        console.log("el " + numero1 + " es impar");
    }
    numero1++;
}