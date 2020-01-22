'use strict'
//bom-browser object model
function getbom(){
console.log(screen.innerHeight);
console.log(window.innerWidth);
console.log(window.location);//mustra url

}
function redirect(url){///me redirige al url que le ponga 

    window.location.href= url;
}

function abrirventana(url)
{
    window.open(url,"","width = 400,height = 300");
}
getbom();