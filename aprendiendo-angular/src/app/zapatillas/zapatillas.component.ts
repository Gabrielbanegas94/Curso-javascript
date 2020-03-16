import {Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';//..es para salir y  buscar en otra carpeta

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class zapatillasComponent implements OnInit{

    public titulo:string ="componente de zapatillas";
    public zapatillas : Array<Zapatilla>;

    constructor()
    {
        this.zapatillas = [
            new Zapatilla('Rebbok clasicc','rebook','verde canario',80,true),
            new Zapatilla('Nike Air','Nike','gris',100,true),
            new Zapatilla('clasicc','adidas','violeta',50,true)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);

    }

}
