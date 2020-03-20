import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../services/peticiones.service';
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
 public user:any;
 public userID:number;
 public fecha:any;
  constructor(
    private _peticionesService:PeticionesService
  ) {
    this.userID=1;
   }

  ngOnInit() {
    this.fecha=new Date(2019,5,20);
      this.cargaUsuario();
  }
  cargaUsuario(){
    this.user=false;  
    this._peticionesService.getUser(this.userID).subscribe(
      result=> {
         this.user=result.data;
      },
      error=>{
       console.log(<any>error); 
      } 
        );//recogo la peticion ajax
  }

}
