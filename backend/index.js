'use strict'

var mongoose= require('mongoose');///carga el modulo de mongoose
///genero la coneccion a la base de datos
var app =require('./app');
var port = 3700;
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/Portafolio')
     .then(()=>{
           console.log("coneccion exitosa para todes");
           app.listen(port , ()=> {
           
            console.log("el servidor corre como alla url 3700");

           });

     })
     .catch(err=> console.log(err));