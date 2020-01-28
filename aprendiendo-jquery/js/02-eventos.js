$(document).ready(function () {
    //mouseover y mouseout
    var caja = $("#caja");
    /*caja.mouseover(function(){
        $(this).css("background","red");
    });
    caja.mouseout(function(){
        $(this).css("background","green");//this hace referencia a caja
    });*/
    function cambiaRojo() {
        $(this).css("background", "red");

    }

    function cambiaVerde() {
        $(this).css("background", "green");

    }
    //hover
    caja.hover(cambiaRojo,cambiaVerde);
    //click, doble click
    caja.click(function(){
        $(this).css("background","blue")
                .css("color","white");
    });
    caja.dblclick(function(){
        $(this).css("background","pink")
                .css("color","yellow");
    });
   var nombre=$("#nombre");
    nombre.focus(function(){
       $(this).css("border","2px solid green");
    });

    nombre.blur(function(){
        $(this).css("border","1px solid grey");
        $("#datos").text( $(this).val()).show();//selleciona el valor y lo muestra
     });
});