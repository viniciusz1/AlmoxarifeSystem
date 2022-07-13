import { Injectable } from '@angular/core';
import { Pedido } from '../shared/pedido.model';
import { Produto } from '../shared/produto.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedidos: Pedido[] = [new Pedido("Jubileu", [new Produto ("Resistor Elétrico1", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico2", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico3", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),], new Date(), new Date(), 1, 1)]
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
