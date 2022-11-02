import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private usuarioService: UsuariosService) { }
  alteraSenha = false;
  modificaAlteraSenha(){
    this.alteraSenha = !this.alteraSenha
  }
  usuario? = ""
  email? = ""
  nome? = ""
  nivelAcesso? = ""
  telefone? = ""
  senha? = ""
  disabled = true
  alteraPerfil(){
    this.disabled = !this.disabled
  }

  mandarAlteracaoUsuarioDB(){
    this.usuarioService.alterarUsuario(
      new Usuario(
        this.usuario as string, 
        this.email as string, 
        this.nome as string, 
        this.telefone as string, 
        this.senha as string
        )
      )
    .subscribe({
      next: (e) => {
        // alert("Usuários alterado")
        console.log(e)
      },
      error: (err) => {
        console.log(err.error.message)
      }
    })
  }

  sendValuesToModel(user: Usuario){
    this.usuario = user.usuario
    this.email = user.email
    this.nome = user.nome
    this.telefone = user.telefone
    this.nivelAcesso = user.nivelAcesso
    this.senha = user.senha
  }

  getUsuario(){
    this.usuarioService.getUser()
    .subscribe({next: (e) =>{
      this.sendValuesToModel(e)
    },
    error: (err) => {
      // alert(err.error.message)
    }
  })
  }

  ngOnInit(): void {
    this.getUsuario()
  }

}
