import { PedidosService } from './../services/pedidos.service';
import { Produto } from './../shared/produto.model';
import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private car: CarrinhoService, private prod: ProdutosService, private pedidosService: PedidosService) { }
  modal = false;
  modalReserva: boolean = false;
  state = "fechado";
  carState = "fechado";
  lista: Produto[] = [];

  mudarModalReserva(arg: boolean | Event){
    this.modalReserva = !this.modalReserva;
  }
  modalOpen(arg: boolean | Event) {
    this.modal = !this.modal
  }
  openCart(){
    this.carState = "aberto"
    console.log(this.state)
  }
  closeCart(param: boolean | Event){
    this.carState = "fechado"
  }
  checando(){
    console.log(this.pedidosService.getPedido())
  }
  
  ngOnInit(): void {  
    this.lista = this.prod.getListaProdutos()  
    console.log(this.lista)
  }
}
