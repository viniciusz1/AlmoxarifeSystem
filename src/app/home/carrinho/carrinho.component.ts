import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Produto } from 'src/app/shared/produto.model';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  @Output() fechaCarrinho = new EventEmitter<boolean>();
  @Output() reserva = new EventEmitter<boolean>();
  carrinho = true;
  listaCarrinho: Produto[] = [];
  mensagemPrevia = "Adicione algum Item ao carrinho!"
  carrinhoVazio = true;
  listaQtd: number[] = []

  clicouModal() {
    this.fechaCarrinho.emit(false)
  }
  changeQuantidade(type: string, produto: Produto){
    if(type == "add"){
      produto.qtdCart!  += 1
    }else{
      produto.qtdCart! -= 1
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

  ngOnInit(): void {
    this.car.changeList.subscribe({
      next: (e: Produto[]) => {
        this.listaCarrinho = e
        this.verificaVazio()
      }
    })
    if(this.listaCarrinho.length == 0){
      this.listaCarrinho = this.car.getLista()
      this.verificaVazio()
    }
  }

}
