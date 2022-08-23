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
        'width': '400px',
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
  carrinho = true;
  stateTxt= "fechado";
  listaCarrinho:Produto[] = [];
  mensagemPrevia = "Adicione algum Item ao carrinho!"
  carrinhoVazio = false

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
  // pressionou(){
  //   for(let i in this.listaCarrinho){
  //     if(this.listaQtd[i] > this.listaCarrinho[i].quantidade!){
  //       this.listaQtd[i] = this.listaCarrinho[i].qtdCart as number
  //     }
  //   }
  // }
  listaQtd: number[]  = []
  ngOnInit(): void {
    this.listaCarrinho = this.car.getLista();
    
    this.car.tamanhoCarrinho.subscribe(
      e => {
        if(e != 0){
          this.carrinhoVazio = false
          for(let i in this.listaCarrinho){
            this.listaQtd[i] = this.listaCarrinho[i].qtdCart as number
          }
        }
      }
    )
    if(this.listaCarrinho.length == 0){
      this.carrinhoVazio = true
    }
  }

}
