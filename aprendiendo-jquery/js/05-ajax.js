$(document).ready(function () {
    //LOAD incrusta el elemento dentro de un div con peticiones
    //$("#datos").load("https://reqres.in/");
    //get y post

    $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
        console.log(response);
        response.data.forEach((element, index) => {
            $("#datos").append("<p>" + element.first_name +" " + element.last_name+ "</p>");
        });

    });

   


    var formulario=$("#formulario");

    formulario.submit(function(e){
        e.preventDefault();

        var usuario={
            name: $('input[name="name"]').val(),
            web : $('input[name="web"]').val()
       }
       console.log(usuario);
      /* $.post($(this).attr("action"),usuario,function(response){///recoge la url del atributo action
        console.log(response);
   
       });*/

       $.ajax({
           type: 'POST',
           url: $(this).attr("action"),
           data :usuario,
           beforeSend: function(){
             console.log("enviando usuario...");
           },
           success: function(response){
               console.log(response);
           },
           error:function() {
               console.log("ocurrio un error");
           },
           timeout:1000

       });
       return false

    });
});