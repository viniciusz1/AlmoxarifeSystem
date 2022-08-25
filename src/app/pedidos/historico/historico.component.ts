import { Component, OnInit } from '@angular/core';
import { EntradasService } from 'src/app/services/entradas.service';
import { HistoricoService } from 'src/app/services/historico.service';
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
    private entradasService: EntradasService) { }
    pesquisaPedido = ""
  listaEntradas:Pedido[] = [new Pedido()]
  listaPedidos: Pedido[] = []
  ngOnInit(): void {
    this.listaEntradas = this.historicoService.getPedido()
    this.historicoService.historicosChange.subscribe((pedidos) =>
    this.listaEntradas = pedidos
    )
    this.listaPedidos = this.historicoService.getPedido();
    console.log(this.listaEntradas)
  }
  exibicao = true
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
