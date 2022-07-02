import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  lista:{}[] = []

   getListaProdutos(){
      return this.lista
   }
   addProduto(produto: {}){
    this.lista.push(produto)
   }
  constructor() { }
}
