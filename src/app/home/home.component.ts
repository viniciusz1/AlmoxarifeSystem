import { PedidosService } from './../services/pedidos.service';
import { Produto } from './../shared/produto.model';
import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { ElementSchemaRegistry } from '@angular/compiler';

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
  pesquisaProduto = "";
  filtroEspecializado: Produto = new Produto()
  exibicao = true; // false == bloco ! == lista

  exibicaoLista(){
    this.exibicao = true;
  }
  exibicaoCard(){
    this.exibicao = false;
  }
  mudarModalReserva(arg: boolean | Event){
    this.modalReserva = !this.modalReserva;
  }
  executarFiltroEspecializado(evento: Produto){
    this.filtroEspecializado = evento
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
