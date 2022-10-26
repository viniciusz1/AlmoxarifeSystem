import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../shared/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  private lista: Usuario[] = [
    new Usuario("otavio", "otavio@gmail.com", "otavio", "123", "admin"),
    new Usuario("vinicius", "vinicius@gmail.com", "vinicius", "123", "admin"),
    new Usuario("camilly", "camilly@gmail.com", "camilly", "123", "admin"),
    new Usuario("1", "1@", "1", "1", "admin"),
  ]

  mudarSenha(senha: string){
    return this.http.put(`http://localhost:8080/login/${localStorage.getItem('EMAIL')}`, {'senha': senha})
  }

  alterarUsuario(usuario: Usuario){
    return this.http.put(`http://localhost:5000/usuario/${localStorage.getItem('EMAIL')}`, {'nome': usuario.nome, 'telefone': usuario.telefone, 'senha': usuario.senha, 'usuario': usuario.usuario, 'email': usuario.email,  'nivelAcesso': usuario.nivelAcesso})
  }

  login(usuario: string, senha: string){
    return this.http.post<Usuario>("http://localhost:8080/login", {'usuario': usuario, 'senha': senha})
  }
  
  getUser(){
    return this.http.get(`http://localhost:8080/${localStorage.getItem('EMAIL')}`)
  }

  getListaUser(){
    return this.lista
 }
 addUser(usuario: Usuario){
  return this.http.post("http://localhost:5000/usuarios", usuario)
 }
 setUser(usuario: string, telefone: string){
  let index =  this.lista.findIndex(listas => listas.usuario == usuario);
  let us = this.lista[index];
  let user = new Usuario(us.nome as string, us.email as string, us.usuario as string, us.senha as string, telefone);
  this.lista[index] = user;
  console.log(this.lista)
 }

}
