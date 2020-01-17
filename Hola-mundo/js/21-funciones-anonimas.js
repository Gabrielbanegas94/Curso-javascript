'use strict'
//Funciones anonimas---no tiene nombre y lo guardo en una variable
///funcion callback--se ejecuta una dentro de otra
function sumame( numero1 , numero2 , sumaYmuestra, sumaPORdos)
{
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPORdos(sumar);
     return sumar;
}
//funciones anonimas usadas como callback
sumame(5,7,(dato) =>{//funciones escritas con flechas solo para callback
    console.log("la suma es: "+ dato);
},
(dato)=>{
    console.log("la suma por dos es: "+ (dato*2));

});
