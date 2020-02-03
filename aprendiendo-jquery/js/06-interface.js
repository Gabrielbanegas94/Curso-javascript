$(document).ready(function()
{
    ///mover elemento por la pagina
   $(".elemento").draggable();

   ///redimensionar
   $(".elemento").resizable();

   ///sellecionar elementos
  // $(".lista-sellecionable ").selectable();No puedo usar ambos metodos
   ///sellecionar y ordenar
   $(".lista-sellecionable ").sortable();

   $("#elemento-movido").draggable();
   $("#area").droppable({
       drop: function(){
           console.log("has soltado algo dentro");
       }
   });


});