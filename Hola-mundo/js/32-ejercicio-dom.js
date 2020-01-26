'use strict'
window.addEventListener("load", () => {
    
    console.log("dom cargado");
    
    var formulario = document.querySelector("#formulario");
    
    var box_dashed = document.querySelector(".dashed");

    box_dashed.style.display ="none";//no lo muestra
    
    formulario.addEventListener('submit', () => {
    
        console.log("evento capturado");
    
        var nombre = document.querySelector("#nombre").value;///toma el valor que tiene dentro
    
        var apellido = document.querySelector("#apellido").value;
    
        var edad = document.querySelector("#edad").value;
         //***validacion del formulario */
        if(nombre.trim()==null || nombre.trim().length==0 ||!isNaN(nombre))
        {
            alert("el nombre es incorrecto");
            document.querySelector("#error_nombre").innerHTML="el nombre no es valido";
            return false;
        }

      //************ */
        if(apellido.trim()==null || apellido.trim().length==0 || !isNaN(apellido))
        {
            alert("el apellido es incorrecto");
            return false;
        }
     //********************** */
        if(edad.trim()==null || edad <=0 || isNaN(edad) )
        {
            alert("la edad es incorrecta");
            return false;
        }

        var p_nombre= document.querySelector("#p_nombre span");
    
        var p_apellido= document.querySelector("#p_apellido span");
    
        var p_edad= document.querySelector("#p_edad span");
        
        box_dashed.style.display ="block";//cuando meto la info lo muestra
        
        p_nombre.innerHTML=nombre;
        p_apellido.innerHTML=apellido;
        p_edad.innerHTML=edad;
        /*var datos_usuario= [nombre,apellido,edad];
        var indice;
        for(indice in datos_usuario)
        {
            var parrafo=document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }
        */
       
        //return false;//para que no redirrecione
    });

});