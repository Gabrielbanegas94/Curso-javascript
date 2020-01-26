'use strict';
//Peticiones(ajax) y fetch a serivicios / api rest
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor =document.querySelector("#profesor");
GetUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
        return GetJanet();

    })
    .then(data => data.json())
    .then(janet => {
        mostrarUsuario(janet.data);
         return GetInfo()
    })
    .then(data =>{
     div_profesor.innerHTML=data;
    })
    .catch(error => {//captura error
        console.log(error);
    });
    //*** */
function GetUsuarios() {
    return fetch("https://reqres.in/api/users");//accede a un servicio remoto
}

function GetJanet() {
    return fetch("https://reqres.in/api/users/2");//accede a un servicio remoto
}

function GetInfo()//crea una promesa desde cero
{
    var profesor = {
        nombre : "gabriel",
        apellido :"banegas",
        url : "https://www.facebook.com/gabrieiliin"
    };

    return new Promise((resolve,reject)=>{
        var profesor_string= JSON.stringify(profesor);

        if(typeof profesor_string !='string') return reject('error');

        return resolve(profesor_string);
    });
   
}
//**** */
function listadoUsuarios(usuarios) {
    usuarios.map((users, i) => {
        let nombre = document.createElement("h2");

        nombre.innerHTML = i + users.first_name + " " + users.last_name;
        div_usuarios.append(nombre);
        document.querySelector(".loading").style.display = "none";
    });
}
//**** */
function mostrarUsuario(users) {
console.log(users);
    let nombre = document.createElement("h2");
    let avatar = document.createElement("img");

    nombre.innerHTML = users.first_name + " " + users.last_name;
    avatar.src= users.avatar;
    div_janet.append(nombre);
    div_janet.append(avatar);
    document.querySelector(".loading").style.display = "none";


}