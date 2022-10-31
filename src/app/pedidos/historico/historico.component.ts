import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/shared/pedido.model';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  constructor() { }

  pesquisaPedido = ""
  listaEntradas: Pedido[] = [new Pedido()]
  listaPedidos: Pedido[] = []
  modelChanged = new Subject<string>();
  filtroState = false
  lengthProdutos=0
  exibicao = 'pedidos'

  ngOnInit(): void {
  }

  changed() {
    this.modelChanged.next(this.pesquisaPedido);
  }
  
  mudarParaEntradas() {
    this.exibicao = 'entradas'
  }
  mudarParaPedidos() {
    this.exibicao = 'pedidos'
  }
  mudarParaSaidas() {
    this.exibicao = 'saidas'
  }
  mudaFiltro() {
    this.filtroState = !this.filtroState;
  }

}
