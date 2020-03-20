import {Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';//..es para salir y  buscar en otra carpeta
import {ZapatillaService} from '../services/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    //con providers le indico que es un servicio de mi componente
    providers: [ZapatillaService]
})

export class zapatillasComponent implements OnInit{

    public titulo:string ="componente de zapatillas";
    public zapatillas : Array<Zapatilla>;
    public marcas : string[];
    public color: string;
    public mi_marca: string;

    constructor(private _zapatillaService : ZapatillaService)
    {
        this.mi_marca ="Fila";
        this.color="blue";
        this.marcas =new Array();
      
    }

    ngOnInit(){
     this.zapatillas=this._zapatillaService.getZapatillas();//en este caso me provee de datos al componente
     alert(this._zapatillaService.getTexto());   
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

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index){
   this.marcas.splice(index,1);//le paso el indice a borrar y cuantos elementos quiero que elimine
    }

}
