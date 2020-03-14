//tipo de dato perzonalizado
type letrasonumeros = string | number;
let cadena: letrasonumeros ="soy gabriel banegas";//para multiples datos
cadena= 12;
let numero: number =12;
let verdadero_falso : boolean =true;
//any toma cualquier tipo de valor
let cualquiera: any ="hola";
cualquiera="testeo propio";
//array
let lenguajes: Array<any> = ["1","PHP","GOLAND",2];
//let vs var let a nivel bloque
var numero1= 10;
var numero2 = 12;

if(numero1==10)
{
    let numero1 =44;
    var numero2 = 55;
    console.log(numero1,numero2);
}
console.log(numero1,numero2);
console.log(cadena, numero, cualquiera,lenguajes);