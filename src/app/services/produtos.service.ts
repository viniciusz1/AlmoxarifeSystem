import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  private lista: Produto[] = [new Produto ("vinicius", "criou", "Um", "produto", "adsçf", "fdosai", 1)]

   getListaProdutos(){
      return this.lista
   }
   addProduto(produto: Produto){
    this.lista.push(produto)
    console.log(this.lista)
   }
  constructor() { }
}
