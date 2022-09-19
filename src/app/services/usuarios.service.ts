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
    new Usuario("1", "1@", "1", "1"),
  ]


  getListaUser(){
    return this.lista
 }
 addUser(usuario: Usuario){
  this.lista.push(usuario)
  console.log(this.lista)
 }
 setUser(usuario: string, telefone: string){
  let index =  this.lista.findIndex(listas => listas.usuario == usuario);
  let us = this.lista[index];
  let user = new Usuario(us.nome, us.email, us.usuario, us.senha, telefone);
  this.lista[index] = user;
  console.log(this.lista)
 }

}
