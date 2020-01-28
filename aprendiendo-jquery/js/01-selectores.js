$(document).ready(function(){
//Selector id
 $("#rojo").css("background","red")
             .css("color","white");

 $("#amarillo").css("background","yellow")
                 .css("color","blue");
                        
$("#verde").css("background","green")
           .css("color","yellow");
//Selector clase
var mi_clase= $(".zebra").css("padding","5px");

$(".sinborde").click(function(){
    $(this).addClass("zebra");
   });

   ///selectores de etiqueta
   var parrafos =$("p");
    parrafos.click(function () {
        if(!($(this).hasClass("grande")))//si tieene la clase
        {
            $(this).addClass("grande");//quita la clase

        } else{
            $(this).removeClass("grande");
        }
    });

   ///selectires de atributo
   $('[title="google"]').css("background","green");//sellecciona el atributo con google 
   $('[title="facebook"]').css("background","blue");
  //otros
 // $('p,a').addClass('margen-superior');
 var busqueda=$("#caja").find(".resaltado");
 console.log(busqueda);

 
});