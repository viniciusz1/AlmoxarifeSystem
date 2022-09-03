import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { Pedido } from '../shared/pedido.model';
import { Produto } from '../shared/produto.model';
import { HistoricoService } from './historico.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedidos: Pedido[] = []
  devolucoes: Pedido[] = []
  entregas: Pedido[] = []

  constructor(private historicoService: HistoricoService,
    private http: HttpClient) { }

  realizarEntrega(pedido: Pedido){
    return this.http.post('http://127.0.0.1:5000/reservas', pedido)
  }
  realizarDevolucao(index: number){
    this.devolucoes.splice(index, 1)
  }
  addEntrega(pedido: Pedido){
    this.entregas.push(pedido)
    this.addPedido(pedido)
  }
  
  addPedido(pedido: Pedido){
    this.historicoService.addPedido(pedido)
    this.pedidos.push(pedido)
    console.log(this.pedidos)
  }


  removePedido(index: number){
    this.pedidos.splice(index, 1)
  }
  getPedido(){
    this.http.get<Pedido[]>('http://127.0.0.1:5000/reservas')
    .subscribe((e)=>{
      return e
    })
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
  getDevolucoesByDate(dataBuscada: Date){
    let listaRetornada: Pedido[] = []
    this.devolucoes.forEach((e)=>{
      if((e.dataReserva?.getDate() == dataBuscada.getDate())){
        listaRetornada.push(e)
      }
    })
    return listaRetornada
  }
  getEntregasByDate(dataBuscada: Date){
    let listaRetornada: Pedido[] = []
    this.entregas.forEach((e)=>{
      if((e.dataReserva?.getDate() == dataBuscada.getDate())){
        listaRetornada.push(e)
      }
    })
    return listaRetornada
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
}
