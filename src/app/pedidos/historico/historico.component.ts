import { Component, OnInit } from '@angular/core';
import { EntradasService } from 'src/app/services/entradas.service';
import { HistoricoService } from 'src/app/services/historico.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from 'src/app/shared/pedido.model';
import { Produto } from 'src/app/shared/produto.model';
import { Subject } from 'rxjs'

interface Entrada {
  codigo: number,
  professor: string,
  produto: Produto,
  quantidade: number,
  data: Date
}
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
  ngOnInit(): void {
  }

  changed() {
    this.modelChanged.next(this.pesquisaPedido);
  }
  lengthProdutos=0
  exibicao = false
  mudarParaEntradas() {
    this.exibicao = false
  }
  mudarParaPedidos() {
    this.exibicao = true
  }
  filtroState = false
  mudaFiltro() {
    this.filtroState = !this.filtroState;
  }

}
