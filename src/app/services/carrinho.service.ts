import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  

  lista = []

   getLista(){
      return this.lista
   }
  constructor() { }
}
