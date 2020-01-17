'use strict'

//Condicional IF
//Como en C
var edad = 19;
var nombre = "David Suarez";
/*operadores
 mayor >
 menor <
 mayor o igual >=
 menor o igal <=
 igual ==
 distinto !=
*/
if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");
    if (edad <= 33) {

        console.log('todavia sos millenial');
    }else if(edad >= 70){
        console.log("eres viejo");
    }else{
        console.log("no sos millenial");
    }
} else {
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}
/*operadores logicos
and = &&
or = ||
negacion = !
*/
var year= 2018;
//negacion
if(year != 2016)
{
    console.log("el año no es 2016 realmente es: "+year);
}
//AND
if(year >= 2000 && year <=2020 )
{
    console.log("estamos en la era actual");
}else{
    console.log("estamos en la post moderna");
}
//OR
if (year==2008 || (year >= 2018 && year==2028))
{
    console.log("el año termina en 8");
}else{
    console.log("año no registrado");
}