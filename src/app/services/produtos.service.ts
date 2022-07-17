import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  private lista: Produto[] =
  [new Produto ("Resistor Elétrico1", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico2", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 2),
  new Produto ("Resistor Elétrico3", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 3),
  new Produto ("Resistor Elétrico4", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 11),
  new Produto ("Resistor Elétrico5", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 4),
  new Produto ("Resistor Elétrico6", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 51),
  new Produto ("Resistor Elétrico7", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 6),
  new Produto ("Resistor Elétrico8", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 7),
  new Produto ("Resistor Elétrico9", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 8),
  new Produto ("Resistor Elétrico0", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 9),
  new Produto ("Resistor Elétrico10", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 0),
  new Produto ("Resistor Elétrico11", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 221),]

   getListaProdutos(){
      return this.lista
   }
   getIdProduto(id: number){
    return this.lista[id]
   }
   addProduto(produto: Produto){
    if(!produto.codigo){
      produto.codigo = this.lista.length + 1
    }    
    this.lista.push(produto)
    console.log(this.lista)
   }
   changeQuantidadeProduto(codigo: number, quantidade:number){
    let index = this.lista.findIndex(lista => lista.codigo == codigo);
    if(this.isDefined(this.lista[index].quantidade) && !isNaN(quantidade)){
      let a = this.lista[index].quantidade as number
      let b = +quantidade
      this.lista[index].quantidade = a + b
    }
   }

   isDefined<T>(val: T | undefined | null): val is T {
    return val !== undefined && val !== null;
  }

   changeProduto(index: number, produto: Produto){
    // let index = this.lista.findIndex(lista => lista.codigo == produto.codigo);
    // this.lista[index] = produto;
    this.lista[index] = produto
  }
  constructor() { }
}
