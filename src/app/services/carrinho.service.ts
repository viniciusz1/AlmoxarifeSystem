import { EventEmitter, Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  tamanhoCarrinho = new EventEmitter<number>()
  private lista: Produto[] = []

  removeLista(index: number){
    this.lista.splice(index, 1)
    this.tamanhoCarrinho.emit(this.lista.length)
  }
  verificaSeJaTem(codigo: number | undefined){
    return this.lista.some(e => e.codigo == codigo)
  }
  getLength(){
    return this.lista.length
  }
   getLista(){
      return this.lista
   }
   addProduto(produto: Produto){
    if(this.lista.some(e => e.codigo == produto.codigo)){ //Se já existir esse produto no carrinho..
      this.lista.find(e => {
        let a = e.quantidade as number
        let b = produto.quantidade as number
        console.log(a)
        console.log(b)
        if(e.codigo == produto.codigo){
          e.quantidade = a + b
        }
      })
    }else{

      this.lista.push(produto)
    }
    this.tamanhoCarrinho.emit(this.lista.length)
   }
  constructor() { }
}
