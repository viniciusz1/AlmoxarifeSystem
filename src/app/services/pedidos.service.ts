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
  realizarDevolucao(index: number){
    this.devolucoes.splice(index, 1)
  }
  addEntrega(professor: string, lista: {codigoProduto: number | undefined; quantidade: number | undefined; }[], dataEntrega: Date, dataDevolucao: Date){    

    return this.http.post('http://127.0.0.1:5000/reservas',{professor, lista, dataEntrega, dataDevolucao})
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
    return this.http.get<Pedido[]>('http://127.0.0.1:5000/reservas')
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
    let listaRetornada: Pedido[] = []
    this.devolucoes.forEach((e)=>{
      if((e.dataEntrega?.getDate() == dataBuscada.getDate())){
        listaRetornada.push(e)
      }
    })
    return listaRetornada
  }
  getEntregasByDate(dataBuscada: Date){
    let listaRetornada: Pedido[] = []
    this.entregas.forEach((e)=>{
      if((e.dataEntrega?.getDate() == dataBuscada.getDate())){
        listaRetornada.push(e)
      }
    })
    return listaRetornada
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
