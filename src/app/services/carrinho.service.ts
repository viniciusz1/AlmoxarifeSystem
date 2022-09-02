import { EventEmitter, Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  tamanhoCarrinho = new EventEmitter<number>()
  private lista: Produto[] = []

  removeLista(index: number) {
    this.lista.splice(index, 1)
    this.tamanhoCarrinho.emit(this.lista.length)
  }
  verificaSeJaTem(codigo: number | undefined) {
    return this.lista.some(e => e.codigo == codigo)
  }
  getLength() {
    return this.lista.length
  }
  getLista() {
    return this.lista
  }
  addProduto(produto: Produto) {
    if(produto.qtdCart as number <= 0){
      throw new Error("Adicione uma quantidade ao produto")
    }
    if (produto.quantidadeTotal! >= produto.qtdCart!) {
      if (this.lista.some(e => e.codigo == produto.codigo)) { //Se já existir esse produto no carrinho..
        this.lista.find(e => {
          let a = +e.qtdCart!
          let b = +produto.qtdCart!
          let qtd = +e.quantidadeTotal!
          if (e.codigo == produto.codigo) {
            if ((a + b) <= qtd) {
              e.qtdCart = a + b
            } else {
              throw new Error("Quantidade insuficiente em estoque!")
            }
          }
        })
      } else {
        this.lista.push(produto)
      }
    }else{
      throw new Error("Quantidade insuficiente em estoque!")
    }
    this.tamanhoCarrinho.emit(this.lista.length)
  }
  constructor() { }
}
