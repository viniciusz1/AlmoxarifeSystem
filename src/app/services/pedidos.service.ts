import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { Pedido } from '../shared/pedido.model';
import { Produto } from '../shared/produto.model';
import { HistoricoService } from './historico.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedidos: Pedido[] = [new Pedido("Jubileu", [new Produto ("Resistor Elétrico1", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico2", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico3", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 1),], new Date(), new Date(), 1, 1)]
  
  entregas: Pedido[] = [new Pedido("Jubileu", [new Produto ("Resistor Elétrico1", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico2", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico3", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 1),], new Date(), new Date(), 1, 1)];
  devolucoes: Pedido[] = [];



  realizarEntrega(index: number){
    this.devolucoes.push(this.entregas[index])
    this.entregas.splice(index, 1)
  }
  realizarDevolucao(index: number){
    this.devolucoes.splice(index, 1)
  }

  addPedido(pedido: Pedido){
    this.historicoService.addPedido(pedido)
    this.pedidos.push(pedido)
  }
  removePedido(index: number){
    this.pedidos.splice(index, 1)
  }
  getPedido(){
    return this.pedidos.slice();
  }
  getPedidobyCode(codigo: number){
    return this.pedidos.filter(e => e.codigo == codigo)
  }
  getPedidobyIndex(index: number){
    return this.pedidos[index]
  }
  getEntregasbyIndex(index: number){
    return this.entregas[index]
  }
  getEntregas(){
    return this.entregas.slice();
  }
  getDevolucoes(){
    return this.devolucoes.slice();
  }
  getDevolucoesbyIndex(index: number){
    return this.devolucoes[index]
  }
  constructor(private historicoService: HistoricoService) { }
}
