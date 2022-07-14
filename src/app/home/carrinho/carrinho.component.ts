import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { state, style, trigger, transition, animate} from '@angular/animations';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Produto } from 'src/app/shared/produto.model';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  animations: [
    trigger('teste', [
      state('aberto', style({
        'width': '32vw',
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
  @Output() fechaCarrinho = new EventEmitter<boolean>();
  @Output() reserva = new EventEmitter<boolean>();
  @Input('state') state = "aberto";
  
  stateTxt= "fechado";
  listaCarrinho:Produto[] = [];

  clicouModal(){
    this.fechaCarrinho.emit(false)
  }
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
  abreReserva(){
    this.reserva.emit(false)
  }
  constructor(private car: CarrinhoService) { 
  }

  lixo(i:number){
    this.car.removeLista(i)
  }
  ngOnInit(): void {
    this.listaCarrinho = this.car.getLista();
  }

}
