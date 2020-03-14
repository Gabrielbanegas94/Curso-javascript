import {Component } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl:'./videojuego.component.html'//le paso el archivo html donde lo cargo

})

export class VideoJuegoComponent{

  public titulo:string;
  public listado:string;
    constructor()
    {
      this.titulo= "componente de videojuegos";
      this.listado = "listado de los juegos mas populares";
        console.log("se ha cargado el componente: Videojuego.component.ts");
    }

}