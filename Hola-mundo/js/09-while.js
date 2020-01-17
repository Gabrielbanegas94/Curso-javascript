'use strict'
//while
var year = 2018;

while(year != 1991)
{
    console.log("estamos en el año: "+ year);
    if(year ==2000)
    {
        break;//corta ejecucion del bucle
    }
    year --; ///no olvidar el incremento para que no haga infinito
}

//do while

var years = 30;

do{
alert("solo cuando sea diferente a 20");
 years --;
}while(years >25)