var bicicleta= {
   color:"rojo",
   modelo: "bmx",
   frenos: "de disco",
   velocidadMax: "60km",
   cambiarcolor: function(nuevo_color){
       this.color=nuevo_color;
       console.log(this);
   }

};
bicicleta.cambiarcolor("azul");