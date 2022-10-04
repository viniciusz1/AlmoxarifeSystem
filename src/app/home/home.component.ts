import { Observable, Subject } from 'rxjs';
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

    this.modelChanged
      .pipe(
        debounceTime(500))
      .subscribe(() => {
        if(this.pesquisaProduto == ""){
          this.pegarListaProdutos()
        }else{
          this.prod.getListaProdutosFiltrado(this.pesquisaProduto)
          .subscribe({next: (e)=> {
            this.lista = e;
          }});
        }
      })
  }
  teste(){
    this.prod.teste(1,1,'sçflka')
  }
  changed() {
    this.modelChanged.next(this.pesquisaProduto);
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
  modelChanged = new Subject<string>();

  onDataTableChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  exibicaoLista() {
    this.exibicao = true;
  }
  exibicaoCard() {
    this.exibicao = false;
  }
  mudarModalReserva(arg: boolean | Event) {
    this.modalReserva = !this.modalReserva;
  }
  executarFiltroEspecializado(evento: Produto) {
    this.filtroEspecializado = evento
  }
  modalOpen(arg: boolean | Event) {
    this.modal = !this.modal
  }
  openCart() {
    this.carState = "aberto"
  }
  closeCart(param: boolean | Event) {
    this.carState = "fechado"
  }

  abreDetalhesProduto(codigo: number) {
    this.route.navigate(['/home/detalhes-produto/', codigo])
  }
  pegarListaProdutos(){
    this.prod.getListaProdutos()
    .subscribe(e => {
      this.lista = e
    })
  }
  pesquisaProduto = ""
  ngOnInit(): void {
    this.pegarListaProdutos();
    this.router.params.subscribe(params => {
      this.rota = params['id'];
      if (this.rota == 'produtos') {
        this.titulo = 'Edição'
        this.home = false
      } else {
        this.titulo = 'Home'
        this.home = true
      }
    })
    this.car.tamanhoCarrinho.subscribe(
      (e) => this.numeroCarrinho = e
    )

    //debounceTime
  }

}
