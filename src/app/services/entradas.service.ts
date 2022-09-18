import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';
interface Entrada{
  codigo: number,
  data: Date
  nomeProduto: string,
  produtoCodigo: number,
  quantidade: number,
}
@Injectable({
  providedIn: 'root'
})

export class EntradasService {
  listaEntradas: Entrada[] = []

  darEntradaDeQuantidadeProduto(codigoProduto: number, quantidade:number){
    if(!isNaN(quantidade)){
      let data = new Date()
      return this.http.post('http://127.0.0.1:5000/entradas', {codigoProduto, quantidade, data})
    }
    return
   }

  addEntrada(entrada: Entrada) {
    this.listaEntradas.push(entrada)
  }
  getEntrada() {
    return this.http.get<Entrada[]>('http://127.0.0.1:5000/entradas')
  }
  constructor(private http: HttpClient) { }
}
