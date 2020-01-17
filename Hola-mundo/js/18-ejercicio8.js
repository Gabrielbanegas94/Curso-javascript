'use strict'

/*
-calculadora que pide dos numeros por pantalla
-vuelva a pedir si metemos uno mal
-mostrar en el body de la pagina, en una alerta y por consola resultado de sumar , multiplicar y dividir
esas dos cifras
*/

var numero1 = parseInt(prompt("Introduce el primer numero" , 0));
var numero2 = parseInt(prompt("Introduce el segundo numero" , 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2))
{

    numero1 = parseInt(prompt("Introduce el primer numero" , 0));
    numero2 = parseInt(prompt("Introduce el segundo numero" , 0));
}

var resultado = "la suma es: " + (numero1 + numero2) + "<br/>" +
                 "la resta es: " + (numero1 - numero2) + "<br/>" +
                 "la multiplicacion es: " + (numero1*numero2) + "<br/>"+
                 "la division es: " + (numero1 / numero2);

//*******necesita barra n para mostar por alert */
var resultadoCMD = "la suma es: " + (numero1 + numero2) + "\n" +
                 "la resta es: " + (numero1 - numero2) + "\n" +
                 "la multiplicacion es: " + (numero1*numero2) + "\n"+
                 "la division es: " + (numero1 / numero2);
alert(resultadoCMD);
document.write(resultado);
console.log(resultadoCMD);