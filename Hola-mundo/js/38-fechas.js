'use strict'
var fecha = new Date();
var year= fecha.getFullYear();
var mes =fecha.getMonth();
var dia =fecha.getDay();
var hora=fecha.getHours();

var TextoHora = `
el año es : ${year}
el mes es: ${mes+1}
el dia es : ${dia}
la hora es :${hora}
`;
console.log(TextoHora);
console.log(Math.random());