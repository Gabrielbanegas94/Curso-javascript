'use strict'

//funciones

function porConsola(numero1 , numero2)
{

    console.log( "suma:" + (numero1 + numero2));
        console.log( "mult:" + (numero1 * numero2));
        console.log( "resta: " + (numero1 - numero2));
        console.log( "division: " + (numero1 / numero2));
        console.log("**************");
}

function porPantalla(numero1 , numero2)
{
    document.write( "suma:" + (numero1 + numero2) + "<br/>");
    document.write( "mult:" + (numero1 * numero2)+ "<br/>");
    document.write( "resta: " + (numero1 - numero2)+ "<br/>");
    document.write( "division: " + (numero1 / numero2)+ "<br/>");
    document.write("**************");
}

function calculadora(numero1 , numero2 , mostrar =false)//parametro de manera opcional
{
    if(mostrar == false)
    {
         porConsola(numero1,numero2);
    }
    else{
       porPantalla(numero1,numero2);
    }
    
    return true;
}


/*for( var i = 0 ; i<=10 ; i ++)
{
    console.log(i);
    calculadora(i,8);
}*/

calculadora(7,8);
calculadora(10,8,true);