import { Injectable } from '@angular/core';
import { Usuario } from '../shared/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  private lista: Usuario[] = [
    new Usuario("otavio", "otavio@gmail.com", "otavio", "123"),
    new Usuario("vinicius", "vinicius@gmail.com", "vinicius", "123"),
    new Usuario("camilly", "camilly@gmail.com", "camilly", "123"),
    new Usuario("1", "1", "1", "1"),
  ]


  getListaProdutos(){
    return this.lista
 }
 addProduto(usuario: Usuario){
  this.lista.push(usuario)
  console.log(this.lista)
 }
}
