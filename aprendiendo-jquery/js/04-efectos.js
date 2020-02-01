$(document).ready(function () {
    var caja = $("#caja");
    $("#mostrar").hide();

    $("#mostrar").click(function () {
        $(this).hide();

        $("#ocultar").show();

        caja.fadeTo("fast", 1);


    });


    $("#ocultar").click(function () {

        $(this).hide();
        $("#mostrar").show();
        caja.fadeTo("fast", 0);///efecto de transicion


    });

    $("#todo-en-uno").click(function () {

        caja.slideToggle("fast");///oculta y muestra en un solo boton
    });

    $("#animame").click(function () {
        caja.animate(//crea animaciones personalizadas
            {
                marginLeft: "500px",
                fontSize: "40px",
                height: "110px",
            }
            , "slow")
            .animate(
                {
                    borderRadius: "900px",
                    marginTop: "50px"
                }, "slow")
            .animate(
                {
                    marginLeft: "0px",
                    borderRadius: "0px"
                }, "slow")
            .animate(
                {
                    marginTop: "0px",
                    borderRadius: "100px"
                }, "slow")
            .animate(
                {
                    marginLeft: "500px",
                    fontSize: "40px",
                    height: "110px",
                }, "slow")

            ;

    });




});