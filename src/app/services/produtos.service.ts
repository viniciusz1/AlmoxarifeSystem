import { Localidade } from './../shared/localidade.model';
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


  getSizeProducts() {
    return this.http.get<number>('http://localhost:8080/produtos/tamanho')
  }


  getListaProdutos(page: number, size: number, search: string, order: string) {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    if (search) params = params.set('search', search);
    if (order) params = params.set('sort', order)
    return this.http.get<Produto[]>('http://localhost:8080/produtos/filtro', { params })
  }

  getListaProdutosFiltrado(search: string) {
    return this.http.get<Produto[]>(`http://localhost:8080/produtos/${search}`);
  }

  getIdProduto(codigo: string) {
    let url = "http://localhost:8080/produtos/codigo/" + codigo

    // console.log(url)
    // console.log(codigo)
    return this.http.get<Produto>(url)
  }
  addProduto(form: FormData) {
    return this.http.post('http://localhost:8080/produtos', form)
  }



  //  isDefined<T>(val: T | undefined | null): val is T {
  //   return val !== undefined && val !== null;
  // }

  changeProduto(produto: Produto) {
    return this.http.put(`http://localhost:8080/produtos/${produto.codigo}`, {
      "nome": produto.nome,
      "quantidadeTotal": produto.quantidadeTotal,
      "quantidadeReservada": produto.quantidadeReservada,
      "classificacao": produto.classificacao,
      "localidade": produto.localizacoes,
      "opcaoUso": produto.opcaoUso,
      "descricao": produto.descricao,
      "imagem": produto.imagem
    })
  }
}
