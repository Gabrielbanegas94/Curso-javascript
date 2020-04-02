'use strict'

var mongoose= require('mongoose');///carga el modulo de mongoose
///genero la coneccion a la base de datos
var app =require('./app');
var port = 3700;
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/Portafolio')//1 conecta a la  base de datos
     .then(()=>{
           console.log("coneccion exitosa para todes");
           app.listen(port , ()=> {///le dice que hostee en este puerto
           
            console.log("el servidor esta hosteando en la url 3700");

           });

     })
     .catch(err=> console.log(err));