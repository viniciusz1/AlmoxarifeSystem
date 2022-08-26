import { EventEmitter, Injectable } from '@angular/core';
import { Pedido } from '../shared/pedido.model';
import { Produto } from '../shared/produto.model';
@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  historicosChange = new EventEmitter<Pedido[]>()
  pedidos: Pedido[] = [new Pedido("Jubileu", [new Produto ("Resistor Elétrico", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 1, "https://s4.static.brasilescola.uol.com.br/img/2017/01/resistor.jpg"),
  new Produto ("Prego", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 2, "data:image/png;base64,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"),
  new Produto ("Martelo", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 3,"https://toolsbr.fbitsstatic.net/img/p/real-steel-martelo-rip-claw-20-oz-175538/362995.jpg?w=480&h=651&v=no-change&qs=ignore"),
  ], new Date('2022-08-07 12:30:00'), new Date('2022-08-07 12:30:00'), 1, 1)]
  
  addPedido(pedido: Pedido){
    this.pedidos.push(pedido)
    this.historicosChange.emit(this.pedidos.slice())
  }
  removePedido(index: number){
    this.pedidos.splice(index, 1)
    this.historicosChange.emit(this.pedidos.slice())
  }
  getPedido(){
    return this.pedidos.slice();
  }
  getPedidobyIndex(index: number){

    return this.pedidos[index];
  }
  constructor() { }
}
