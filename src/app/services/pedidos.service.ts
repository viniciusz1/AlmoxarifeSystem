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
    return this.http.put(`http://127.0.0.1:5000/entregas/${pedido.codigo}`, null)
  }
  realizarDevolucao(pedido: Pedido){
    return this.http.put(`http://127.0.0.1:5000/devolucoes/${pedido.codigo}`, null)
  }
  addEntrega(listaProdutos: {codigoProduto: number | undefined; quantidade: number | undefined; }[], dataEntrega: Date, dataDevolucao: Date, usuarioEmail: string | null){    
    console.log({listaProdutos, dataEntrega, dataDevolucao, usuarioEmail})
    return this.http.post('http://127.0.0.1:5000/pedidos',{listaProdutos, dataEntrega, dataDevolucao, usuarioEmail})
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
    return this.http.get<Pedido[]>('http://127.0.0.1:5000/pedidos')
  }
  getPedidobyCode(codigo: number){
    return this.pedidos.filter(e => e.codigo == codigo)
  }
  getPedidobyIndex(index: number){
    return this.pedidos[index]
  }
  getEntregasbyCodigo(codigo: number){
    return this.http.get<Pedido[]>('http://127.0.0.1:5000/entregas/'+codigo)
  }
  getDevolucoesByDate(dataBuscada: Date){
    return this.http.get<Pedido[]>(`http://127.0.0.1:5000/dashboard-devolucao/${dataBuscada.getFullYear()+"-"+(dataBuscada.getMonth()+1)+"-"+ dataBuscada.getDate()}`)
  }
  getEntregasByDate(dataBuscada: Date){
    return this.http.get<Pedido[]>(`http://127.0.0.1:5000/dashboard-entrega/${dataBuscada.getFullYear()+"-"+(dataBuscada.getMonth()+1)+"-"+ dataBuscada.getDate()}`)
  }

  getEntregas(){
    return this.http.get<Pedido[]>('http://127.0.0.1:5000/entregas/q')
  }
  getDevolucoes(){
    return this.http.get<Pedido[]>('http://127.0.0.1:5000/devolucoes/q')
  }
  getDevolucoesbyCodigo(codigo: number){
    return this.http.get<Pedido[]>('http://127.0.0.1:5000/devolucoes/'+codigo)
  }
}
