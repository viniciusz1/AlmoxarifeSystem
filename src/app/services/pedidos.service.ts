import { Injectable } from '@angular/core';
import { Pedido } from '../shared/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedidos: Pedido[] = []
  addPedido(pedido: Pedido){
    this.pedidos.push(pedido)
  }
  getPedido(){
    return this.pedidos;
  }
  constructor() { }
}
