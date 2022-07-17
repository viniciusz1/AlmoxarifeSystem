import { EventEmitter, Injectable } from '@angular/core';
import { Pedido } from '../shared/pedido.model';
import { Produto } from '../shared/produto.model';
@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  historicosChange = new EventEmitter<Pedido[]>()
  pedidos: Pedido[] = []
  
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
