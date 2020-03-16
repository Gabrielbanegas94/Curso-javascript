import {Component, OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl:'./videojuego.component.html'//le paso el archivo html donde lo cargo

})

export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy{

  public titulo:string;
  public listado:string;
    constructor()
    {
      this.titulo= "componente de videojuegos";
      this.listado = "listado de los juegos mas populares";
       // console.log("se ha cargado el componente: Videojuego.component.ts");
    }

    ngOnInit(){
       //  console.log("OnInit ejecutado");

    }

    ngDoCheck(){
     // console.log("Docheck ejecutado");
    }

    ngOnDestroy(){
     // console.log("Ondestroy ejectuado");
    }

    cambiarTitulo(){
      this.titulo ="nuevo titulo del componente";
    }
}