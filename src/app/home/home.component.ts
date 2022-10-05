import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from './../services/pedidos.service';
import { Produto } from './../shared/produto.model';
import { ProdutosService } from './../services/produtos.service';
import { AfterViewInit, Component, OnInit, Pipe, ViewChild } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { debounceTime } from "rxjs/operators";
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('paginator') paginator: MatPaginator | undefined

  constructor(private car: CarrinhoService,
    private prod: ProdutosService,
    private pedidosService: PedidosService,
    private router: ActivatedRoute,
    private route: Router) {

    this.modelChanged
      .pipe(
        debounceTime(500))
      .subscribe(() => {
          this.prod.getListaProdutos(this.page,this.paginator?.pageSize as number,this.pesquisaProduto, this.ordenarCampo)
          .subscribe({next: (e)=> {
            this.lista = e;            
          }});
      })
      

  }

  changed() {
    this.modelChanged.next(this.pesquisaProduto);
  }
  teste(){
    console.log(this.paginator?.pageIndex);
    
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
  modelChanged = new Subject<string>();

  onDataTableChange(event: any) {
    this.page = event;
    console.log(this.page);
    
    this.changed()
  }
  lengthProudutos = 0
  sizeProducts(){
    this.prod.getSizeProducts()
    .subscribe({next: (e) => {
      this.lengthProudutos = e
    }}
    )
  }

  ngAfterViewInit(): void {
    this.sizeProducts();
    this.pegarListaProdutos();
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
    this.prod.getListaProdutos(this.paginator?.pageIndex as number, this.paginator?.pageSize as number, this.pesquisaProduto, "")
    .subscribe(e => {
      this.lista = e
    })
  }
  pesquisaProduto = ""
  ngOnInit(): void {
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
  }

}
