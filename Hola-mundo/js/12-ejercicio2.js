'use strict'
/*
usando un blucle mostrar la suma y la media de los numeros
hasta introducir un numero negativo y ahi muestra el resultado */

var suma = 0;
var contador = 0;

do{
   var numero = parseInt(prompt("introduce hasta que metas un negativo",0));
   
   if(isNaN(numero))
   {
       numero = 0;
   }else if(numero >= 0)
   {
       suma += numero;
       contador ++;
   }
     console.log(suma);
     console.log(contador);
}while(numero >= 0)

var media = suma / contador;
alert ("la suma de todos los numeros es : " +suma);
alert ("la media de todos los numeros es : " +media);
