import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    trigger('teste', [
      state('aberto', style({
        'width': '210px',
        'text-align': 'left'
      })),
      state('fechado', style({
        'width': '60px'
      })),
      transition('aberto <=> fechado', [
        animate('100ms')
      ]),
    ]),
    trigger('letras', [
      state('aberto', style({
        'width': '210px',
        'text-align': 'left',
        transform: 'translateX(100px)'
      })),
      state('fechado', style({
        'width': '60px'
      })),
      transition('fechado => aberto', [
        animate('2000ms')
      ]),
    ])
  ]
})
export class SideBarComponent implements OnInit {

  constructor() { }


  state = "fechado";
  stateTxt= "fechado";

  changeStatus(){
    if(this.state == "fechado"){
      this.state = "aberto"
    }else{
      this.state = "fechado"
    }
    let estado = this.state;

    setTimeout(function(){      
      if(estado == "fechado"){
        estado = "aberto"
      }else{
        estado = "fechado"
      }
    },400)
  }
  
  ngOnInit(): void {
  }

}
