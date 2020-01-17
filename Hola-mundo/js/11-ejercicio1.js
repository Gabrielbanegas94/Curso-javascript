'use strict'
/*
Pide un numero y verifica cual es el mayor, el menor y son iguales
PLUS si los numeros no son numeros o son negativos o cero, que los vuelva a pedir
*/

var numero1 = parseInt(prompt("Introduce el primer numero" , 0));//parsearlo a int porque siempre toma un string
var numero2 = parseInt(prompt("Introduce el segundo numero" , 0));//parsearlo a int porque siempre toma un string

console.log(numero1);
console.log(numero2);

while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2))
{
    numero1 = parseInt(prompt("Introduce el primer numero" , 0));
    numero2 = parseInt(prompt("Introduce el segundo numero" , 0));
}
if(numero1 == numero2)
{
    alert("son iguales");
} else if (numero1 > numero2)
   {
       alert("el numero mayor es: " + numero1 );
       alert("el numero menor es: " + numero2 );
   }
   else if(numero2 > numero1)
   {
    alert("el numero mayor es: " + numero2 );
    alert("el numero menor es: " + numero1 );
   }
   else
   {
       alert("introduce numeros correctos");
   }
    
