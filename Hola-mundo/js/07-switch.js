'use strict'

//switch

var edad = 1000;
var imprime="";

switch(edad){
    case 18:
        imprime = "acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "eres adulto";
    break;
    case 40:
        imprime = "crisis 40";
    break;
    case 75:
        imprime = "anciano";
    break;
     default:
         imprime = "edad neutra";
}

console.log(imprime);