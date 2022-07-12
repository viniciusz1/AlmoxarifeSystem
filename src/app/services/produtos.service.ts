import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  private lista: Produto[] = 
  [new Produto ("Resistor Elétrico1", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico2", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico3", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico4", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico5", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico6", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico7", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico8", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico9", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico0", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico10", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),
  new Produto ("Resistor Elétrico11", "1", "Material Elétrico", "produto", "Descartável", "Descrição", 1),]

   getListaProdutos(){
      return this.lista
   }
   addProduto(produto: Produto){
    this.lista.push(produto)
    console.log(this.lista)
   }
  constructor() { }
}
