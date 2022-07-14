import { EventEmitter, Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  tamanhoCarrinho = new EventEmitter<number>()
  private lista: Produto[] = [
    new Produto ("vinicius", "criou", "Um", "produto", "adsçf", "fdosai", 1)
  ]

  removeLista(index: number){
    this.lista.splice(index, 1)
    this.tamanhoCarrinho.emit(this.lista.length)
  }
  getLength(){
    return this.lista.length
  }
   getLista(){
      return this.lista
   }
   addProduto(produto: Produto){
    this.lista.push(produto)
    this.tamanhoCarrinho.emit(this.lista.length)
   }
  constructor() { }
}
