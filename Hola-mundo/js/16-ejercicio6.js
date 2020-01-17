'use strict'
/*si un numero es par o impar
1.ventana prompt
2. si no es valido que pida otra vez el numero
*/

var numero = parseInt(prompt("ingrese un numero",0));

while(numero <= 0 ||  isNaN(numero) )
{
    alert("numero incorrecto, vuelva a ingresar");
    numero = parseInt(prompt("Introduce numero correcto" , 0));
    
}

  if(numero % 2 == 0)
  {
      alert("su numero ingresado es par");
  }
   else
     {
         alert("su numero es impar");
     }

