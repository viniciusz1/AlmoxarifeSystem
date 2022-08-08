import { Injectable } from '@angular/core';
import { Produto } from '../shared/produto.model';
interface Entrada{
  codigo: number,
  professor: string,
  produto: Produto,
  quantidade: number,
  data: Date
}
@Injectable({
  providedIn: 'root'
})

export class EntradasService {
  listaEntradas: Entrada[] = [{codigo: 1, professor:'junior', produto: new Produto ("Resistor Elétrico", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 1, "https://s4.static.brasilescola.uol.com.br/img/2017/01/resistor.jpg"),
quantidade:1, data: new Date()},
{codigo: 1, professor:'junior', produto: new Produto ("Resistor Elétrico", 1, "Material Elétrico", "produto", "Descartável", "Descrição", 1, "https://s4.static.brasilescola.uol.com.br/img/2017/01/resistor.jpg"),
quantidade:1, data: new Date()}]
  addEntrada(entrada: Entrada){
    this.listaEntradas.push(entrada)
  } 
  getEntrada(){
    return this.listaEntradas
  }
  constructor() { }
}
