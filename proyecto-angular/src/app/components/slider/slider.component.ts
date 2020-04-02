import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura:number;//envio al componente contact html
  @Input('etiquetas') captions:boolean;

  constructor() { }

  ngOnInit() {

    $("#logo").click(function(e){
      e.preventDefault();
      $("header").css("background","green");
    });
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
  }
  

}


