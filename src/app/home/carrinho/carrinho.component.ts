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
  @Output() fechaCesta = new EventEmitter<boolean>();
  @Output() reserva = new EventEmitter<boolean>();
  @Input('state') state = "aberto";
  cesta = true;
  stateTxt= "fechado";
  listaCesta:Produto[] = [];
  mensagemPrevia = "Adicione algum Item à Sacola!"
  cestaVazio = false

  clicouModal(){
    this.fechaCesta.emit(false)
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
  constructor(private cestinha: CarrinhoService) { 
  }

  lixo(i:number){
    this.cestinha.removeLista(i)
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
    this.listaCesta = this.cestinha.getLista();
    
    this.cestinha.tamanhoCesta.subscribe(
      e => {
        if(e != 0){
          this.cestaVazio = false
          for(let i in this.listaCesta){
            this.listaQtd[i] = this.listaCesta[i].qtdCart as number
          }
        }
      }
    )
    if(this.listaCesta.length == 0){
      this.cestaVazio = true
    }
  }

}
