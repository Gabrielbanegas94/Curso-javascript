import {Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';//..es para salir y  buscar en otra carpeta

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class zapatillasComponent implements OnInit{

    public titulo:string ="componente de zapatillas";
    public zapatillas : Array<Zapatilla>;
    public marcas : string[];
    public color: string;

    constructor()
    {
        this.color="red";
        this.marcas =new Array();
        this.zapatillas = [
            new Zapatilla('Rebbok clasicc','rebook','verde canario',80,false),
            new Zapatilla('Nike Air','Nike','gris',100,true),
            new Zapatilla('clasicc','adidas','violeta',50,false),
            new Zapatilla('Underground','Under Armour','blancas',70,true),
            new Zapatilla('Nike Air','Nike','gris',100,true),
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
        this.GetMarcas();


    }
    GetMarcas(){
        this.zapatillas.forEach((zapatilla,index)=>{
            if(this.marcas.indexOf(zapatilla.marca)<0)
            {//si no esta en el array lo inserta por nombre de marca
            this.marcas.push(zapatilla.marca);//meto en el vector
            
               }
        });
        console.log(this.marcas);
    }

}
