import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private cesta: CarrinhoService,
     private prod: ProdutosService,
     private pedidosService: PedidosService,
     private router: ActivatedRoute,
     private route: Router) { }

  modal = false;
  modalReserva = false;
  state = "fechado";
  cestaState = "fechado";
  lista: Produto[] = [];
  pesquisaProduto = "";
  filtroEspecializado: Produto = new Produto()
  exibicao = true; // false == bloco ! == lista
  numeroCesta = 0
  titulo = ""
  rota = "";
  home = true
  
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
  openCesta(){
    this.cestaState = "aberto"
    console.log(this.state)
  }
  closeCesta(param: boolean | Event){
    this.cestaState = "fechado"
  }

  abreDetalhesProduto(codigo: number) {
    this.route.navigate(['/home/detalhes-produto/',codigo])
  }
  
  ngOnInit(): void {  
    this.prod.getListaProdutos()
    .subscribe(e => {
      this.lista = e
    })
    console.log(this.lista)
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
    this.cesta.tamanhoCesta.subscribe(
      (e) => this.numeroCesta = e
    )
  }
}
