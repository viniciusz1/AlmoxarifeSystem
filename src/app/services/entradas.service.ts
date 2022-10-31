import { Entrada } from './../shared/entrada.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';


@Injectable({
  providedIn: 'root'
})

export class EntradasService {
  listaEntradas: Entrada[] = []

  darEntradaDeQuantidadeProduto(produto: number, quantidade:number, usuario:string){
    if(!isNaN(quantidade)){
      let data = new Date()
      return this.http.post('http://localhost:8080/historico/entrada', 
      {"produto":{"codigo":produto}, "usuario":{"usuario": usuario}, "quantidade": quantidade, "data": data})
    }
    return
   }

  getEntrada() {
    return this.http.get<Entrada[]>('http://localhost:8080/historico/entrada')
  }
  constructor(private http: HttpClient) { }
}
