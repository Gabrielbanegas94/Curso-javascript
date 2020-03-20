import {Injectable} from '@angular/core';
//importar el modelo para el objeto zapatilla
import {Zapatilla} from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas : Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('Rebbok clasicc','rebook','verde canario',80,false),
            new Zapatilla('Nike Air','Nike','gris',100,true),
            new Zapatilla('clasicc','adidas','violeta',50,false),
            new Zapatilla('Underground','Under Armour','blancas',70,true),
            new Zapatilla('Nike Air','Nike','gris',100,true),
        ];
    }
    getTexto()
    {
        return "hola mundo desde un servicio";
    }
    getZapatillas(): Array<Zapatilla>{
   return this.zapatillas;
    }
}