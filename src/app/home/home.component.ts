import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from './../services/pedidos.service';
import { Produto } from './../shared/produto.model';
import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private car: CarrinhoService,
     private prod: ProdutosService,
     private pedidosService: PedidosService,
     private router: ActivatedRoute,
     private route: Router) { 
     }

  modal = false;
  modalReserva = false;
  state = "fechado";
  carState = "fechado";
  lista: Produto[] = [];
  filtroEspecializado: Produto = new Produto()
  exibicao = false; // false == bloco ! == lista
  numeroCarrinho = 0
  titulo = ""
  rota = "";
  home = true
  ordenarCampo = ""
  page: number = 1;
  count: number = 0;
  tableSize: number = 21;

  
  onDataTableChange(event: any){
    this.page = event;
  }
  onTableSizeChange(event: any){
    this.tableSize = event.target.value;
    this.page = 1;
  }

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
  }
  closeCart(param: boolean | Event){
    this.carState = "fechado"
  }

  abreDetalhesProduto(codigo: number) {
    this.route.navigate(['/home/detalhes-produto/',codigo])
  }

  // onChangeOrdenar(){
  //   console.log(this.ordenarCampo)
  // }
  pesquisaProduto=""
  ngOnInit(): void {  
    this.prod.getListaProdutos()
    .subscribe(e => {
      console.log(e)
      this.lista = e
    })
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

    //debounceTime
  }
  buscarFiltrado(){
    this.prod.getListaProdutosFiltrado(this.pesquisaProduto).subscribe(e => {
      this.lista = e
    })
    
  }
}
