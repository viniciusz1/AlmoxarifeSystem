import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
//https://levelup.gitconnected.com/angular-server-side-pagination-and-filtering-2206ce8279d1
export class ProdutosService {
  constructor(private http: HttpClient) { }

  teste(page: number, size: number, search: string){
    console.log("here");
    console.log("2here");
    console.log("h3ere");
    console.log("he4re");
    console.log("her5e");
    console.log("here6");
    console.log("here");
    console.log("here");
    
      let params = new HttpParams()
        .set('page', 1)
        .set('size', 2);
      if (3==3) params = params.set('search', 3);
      return this.http.get('http://127.0.0.1:5000/produtos', { params })
        .subscribe(e=>{
          console.log(e)
        })
  }

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
