import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';
import { HttpClient } from '@angular/common/http';
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {
  constructor(private http: HttpClient) { }
  getListaProdutosFiltrado(search: string){
    return this.http.get<Produto[]>(`http://127.0.0.1:5000/produtos/${search}`);
  }
   getListaProdutos(){
      return this.http.get<Produto[]>('http://127.0.0.1:5000/produtos')
   }
   getIdProduto(codigo: string){
    let url = "http://127.0.0.1:5000/produto/" + codigo

    // console.log(url)
    // console.log(codigo)
    return this.http.get<Produto>(url)
   }
   addProduto(produto: Produto){
      return this.http.post('http://127.0.0.1:5000/produtos', {
        "nome": produto.nome,
        "quantidadeTotal": produto.quantidadeTotal,
        "quantidadeReservada": 0,
        "classificacao": produto.classificacao,
        "localidade": produto.localidade,
        "opcaoUso": produto.opcaoUso,
        "descricao": produto.descricao,
        "imagem": produto.imagem
    })
   }

   

   isDefined<T>(val: T | undefined | null): val is T {
    return val !== undefined && val !== null;
  }

   changeProduto(produto: Produto){    
    return this.http.put(`http://127.0.0.1:5000/produto/${produto.codigo}`, {
      "nome": produto.nome,
      "quantidadeTotal": produto.quantidadeTotal,
      "quantidadeReservada": produto.quantidadeReservada,
      "classificacao": produto.classificacao,
      "localidade": produto.localidade,
      "opcaoUso": produto.opcaoUso,
      "descricao": produto.descricao,
      "imagem": produto.imagem
  })
  }
}
