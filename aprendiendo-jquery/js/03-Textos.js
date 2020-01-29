$(document).ready(function () {

    ReloadLinks();
    $("#add_button").click(function(){
    $("#menu").append('<li><a href="'+ $("#add_link").val() + '"></a></li>');
    $("#add_link").val('');///pone en blanco el input
     ReloadLinks();   
    });
   
});

 function ReloadLinks(){
    $("a").each(function(index){
        var that= $(this);
        var enlace=  $(this).attr("href");//agrega al atributo
        that.attr("target","_blank");
        that.text(enlace);
        });
 }