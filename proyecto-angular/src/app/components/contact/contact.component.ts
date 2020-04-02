import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widhSlider:number;
  public anchuraToSlider:any;
  public captions:boolean;
  constructor() {
    this.captions=false;
   }

  ngOnInit() {
    
   
  }
  cargarSlider(){
    this.anchuraToSlider= this.widhSlider;
  }

  resetearSlider(){
    this.anchuraToSlider=false;

  }

}
