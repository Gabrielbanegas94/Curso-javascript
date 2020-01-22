'use strict'
window.addEventListener("load", ()=>{
    function intervalo()
    {
        var tiempo = setInterval(()=>{
            console.log("set interval ejecutado");
            var encabezado = document.querySelector("h1");
             if(encabezado.style.fontSize == "50px")
             {
                encabezado.style.fontSize= "20px";
             }
             else{
                encabezado.style.fontSize= "50px";
             }
            
        },1000);//ejecuta dado un intervalo de tiempo 500 esta en milisegundos
    return tiempo;
    }

var tiempo = intervalo();

var stop =document.querySelector("#stop");
stop.addEventListener("click",()=>
{
    alert("haz parado el intervalo en buble");
   clearInterval(tiempo);//frena el timer
  });

var iniciar =document.querySelector("#iniciar");

 iniciar.addEventListener("click",()=>
{
alert("haz emepezado el buble");
intervalo();
 });

  });

///settimeout se ejecuta una vez sola