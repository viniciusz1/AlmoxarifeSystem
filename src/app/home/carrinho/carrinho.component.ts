import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
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
      transition('aberto => fechado', [
        animate('3s')
      ]),
    ]),
  ]
})
export class CarrinhoComponent implements OnInit {

  @Output() fechaCarrinho = new EventEmitter<boolean>();
  @Output() reserva = new EventEmitter<boolean>();
  @Input('state') state = "aberto";
  carrinho = true;
  stateTxt = "fechado";
  listaCarrinho: Produto[] = [];
  mensagemPrevia = "Adicione algum Item ao carrinho!"
  carrinhoVazio = true;

  clicouModal() {
    this.fechaCarrinho.emit(false)
  }

  changeStatus() {
    if (this.state == "fechado") {
      this.state = "aberto"
    } else {
      this.state = "fechado"
    }
  }
  abreReserva() {
    this.reserva.emit(false)
  }
  constructor(private car: CarrinhoService) {
  }

  lixo(i: number) {
    this.car.removeLista(i)
  }
  verificaVazio(){
    if(this.listaCarrinho.length == 0){
      this.carrinhoVazio = true
    }else{
      this.carrinhoVazio = false
    }
  }

  listaQtd: number[] = []
  ngOnInit(): void {
    this.car.changeList.subscribe({
      next: (e: Produto[]) => {
        this.listaCarrinho = e
        this.verificaVazio()
      }
    })

  }

}
