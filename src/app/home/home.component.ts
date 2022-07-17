import { ActivatedRoute } from '@angular/router';
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
  constructor(private car: CarrinhoService,
     private prod: ProdutosService,
     private pedidosService: PedidosService,
     private router: ActivatedRoute) { }

  modal = false;
  modalReserva = false;
  state = "fechado";
  carState = "fechado";
  lista: Produto[] = [];
  pesquisaProduto = "";
  filtroEspecializado: Produto = new Produto()
  exibicao = false; // false == bloco ! == lista
  numeroCarrinho = 1

  

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

  titulo = ""
  rota = "";
  home = true
  
  ngOnInit(): void {  
    this.lista = this.prod.getListaProdutos()  
    this.router.params.subscribe(params => {
    this.rota = params['id'];
    if(this.rota == 'produtos'){
      this.titulo = 'Edição'
      this.home = false
    }else{
      this.titulo = 'Home'
      this.home = true
    }
    })
    this.car.tamanhoCarrinho.subscribe(
      (e) => this.numeroCarrinho = e
    )
  }
}
