import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  
  private lista: Produto[] = [new Produto ("vinicius", "criou", "Um", "produto", "adsçf", "fdosai", 1)]

  removeLista(index: number){
    this.lista.splice(index, 1)
  }
   getLista(){
      return this.lista
   }
   addProduto(produto: Produto){
    this.lista.push(produto)
   }
  constructor() { }
}
