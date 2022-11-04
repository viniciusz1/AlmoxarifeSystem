import { EventEmitter, Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {


  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key) as string);
    }
    return this.lista;
  }

  public changeList: EventEmitter<Produto[]> = new EventEmitter();

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }


  tamanhoCarrinho = new EventEmitter<number>()
  private lista: Produto[] = []

  removeLista(index: number) {
    this.lista.splice(index, 1)
    this.changeList.emit(this.lista.slice())
    this.tamanhoCarrinho.emit(this.lista.length)
    this.set('lista', this.lista)
  }
  verificaSeJaTem(codigo: number | undefined) {
    return this.lista.some(e => e.codigo == codigo)
  }
  getLength() {
    return this.lista.length
  }
  getLista() {
    if (this.lista.length != 0) {
      this.tamanhoCarrinho.emit(this.lista.length)
      return this.lista
    }
    this.lista = this.get('lista')
    this.tamanhoCarrinho.emit(this.lista.length)
    return this.lista
  }
  
  addProduto(produto: Produto) {
    if (produto.qtdCart as number <= 0) {
      throw new Error("Adicione uma quantidade ao produto")
    }
    if(!this.lista){
      this.lista = []
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
              this.set('lista', this.lista)
            } else {
              throw new Error("Quantidade insuficiente em estoque!")
            }
          }
        })
      } else {
        this.lista.push(produto)
        this.changeList.emit(this.lista.slice())
        this.set('lista', this.lista)
      }
    } else {
      throw new Error("Quantidade insuficiente em estoque!")
    }
    this.tamanhoCarrinho.emit(this.lista.length)
  }
}
