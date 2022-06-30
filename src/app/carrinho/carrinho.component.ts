import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  animations: [
    trigger('teste', [
      state('aberto', style({
        'width': '230px',
        'text-align': 'left'
      })),
      state('fechado', style({
        'width': '60px'
      })),
      transition('aberto <=> fechado', [
        animate('100ms')
      ]),
    ]),
  ]
})
export class CarrinhoComponent implements OnInit {



  state = "fechado";
  stateTxt= "fechado";

  changeStatus(){
    if(this.state == "fechado"){
      this.state = "aberto"
      setTimeout(() => {
        this.stateTxt= "aberto";
      }, 85)
    }else{
      this.state = "fechado"
      this.stateTxt = "fechado"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
