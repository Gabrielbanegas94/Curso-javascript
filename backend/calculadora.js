var params= process.argv.slice(2);///tomo los argumentos y empieza con el indice nro 2
var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);
var plantilla=`
SUMA ES : ${numero1 + numero2}
`;

console.log(plantilla);
