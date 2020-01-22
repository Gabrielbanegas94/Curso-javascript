'use strict'
///eventos del raton


window.addEventListener("load", ()=> {
    var boton = document.querySelector("#boton");
    
    function cambiarcolor(){
        var bg = boton.style.background;
       if(bg=="green")
       {
    
        boton.style.background= "red";
        
       }
       else{
        boton.style.padding = "30px";
        boton.style.border = "1px solid #ccc";
        boton.style.background="green";
       }
       return true;
    }
    //click
    boton.addEventListener("click",function(){
    cambiarcolor();
    });//captura el evento sin ensuciar el html
    //mouse over
    boton.addEventListener("mouseover",function()
    {
        boton.style.background= "lightblue";
    });
    
    boton.addEventListener("mouseout",function()
    {
        boton.style.background= "violet";
    });
    ///focus
    var input= document.querySelector("#campo_nombre");
    input.addEventListener("focus",function()
    {
        console.log("foco en el input");
    });
    ///blur igual que el del foco pero cuando salimos
    input.addEventListener("blur",function()
    {
        console.log("blur en el input");
    });
    ///keydown cuando pulsas una tecla
    input.addEventListener("keydown",function(event)
    {
        console.log("pulsando una tecla keydown", String.fromCharCode(event.keyCode));///toma la tecla que preciono
    
    });
    ///keypress cuando presione una tecla
    input.addEventListener("keypress",function(event)
    {
        console.log("pulsando una tecla keypress", String.fromCharCode(event.keyCode));///toma la tecla que preciono
    
    });
    ///keyup levanto el dedo de la tecla
    input.addEventListener("keyup",function(event)
    {
        console.log(" key up pulsando una tecla keypress", String.fromCharCode(event.keyCode));///toma la tecla que preciono
    
    });

    
});
///load me permite cargar mi script en el head del html en caso de manipular elementos del dom 