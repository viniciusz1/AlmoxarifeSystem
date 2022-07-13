import { Injectable } from '@angular/core';
import { Pedido } from '../shared/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  pedidos: Pedido[] = []
  addPedido(pedido: Pedido){
    this.pedidos.push(pedido)
  }
  removePedido(index: number){
    this.pedidos.splice(index, 1)
  }
  getPedido(){
    return this.pedidos;
  }
  constructor() { }
}
