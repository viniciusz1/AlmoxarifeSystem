import { Component, OnInit } from '@angular/core';
import { EntradasService } from 'src/app/services/entradas.service';
import { HistoricoService } from 'src/app/services/historico.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from 'src/app/shared/pedido.model';
import { Produto } from 'src/app/shared/produto.model';
interface Entrada{
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

  constructor(private historicoService: HistoricoService,
    private entradasService: EntradasService,
    private pedidosService: PedidosService) { }
    pesquisaPedido = ""
  listaEntradas:Pedido[] = [new Pedido()]
  listaPedidos: Pedido[] = []
  ngOnInit(): void {
    this.historicoService.historicosChange.subscribe((pedidos) =>
    this.listaEntradas = pedidos
    )
    this.pedidosService.getPedido()
    .subscribe({next: (e) => this.listaEntradas = e})
    this.pedidosService.getPedido()
    .subscribe({next: (e) => this.listaPedidos = e})
  }
  exibicao = false
  mudarParaEntradas(){
    this.exibicao = false
  }
  mudarParaPedidos(){
    this.exibicao=true
  }
  filtroState = false
  mudaFiltro(){
    this.filtroState = !this.filtroState;
  }

}
