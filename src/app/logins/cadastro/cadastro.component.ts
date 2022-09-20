import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
  }

  nome = "";
  email = "";
  usuario = "";
  senha = "";
  confirmar = "";
  modal = false;

  modalOpen() {
    this.modal = !this.modal
  }

  cadastrar() {
    if (this.nome != "" && this.email != "" && this.usuario != "" && this.senha != "" && this.confirmar != "") {
      const user = this.email.substring(0, this.email.indexOf("@"));
      const dominio = this.email.substring(this.email.indexOf("@") + 1, this.email.length);
      if ((user.length >= 1) && (dominio.length >= 3) && (user.search("@") == -1) &&
        (dominio.search("@") == -1) && (user.search(" ") == -1) && (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        if (dominio == "edu.sc.senai.br") {
          this.cadastro();
        } else {
          this.modal = true;
        }
      } else {
        alert('Email Invalido')
      }
    } else {
      alert("Todos os campos devem estar preenchidos!")
    }
  }

  cadastro() {
    let verificar = this.usuarioService.getListaUser().
      find(lista => lista.usuario == this.usuario || lista.email == this.email);
    if (!verificar) {
      this.usuarioService.addUser({ nome: this.nome, email: this.email, usuario: this.usuario, senha: this.senha, nivelAcesso: "professor" })
        .subscribe({
          next: (e) => {
            console.log(e)
            localStorage.setItem("USER", this.usuario);
          }, error: (e) => {
            console.log(e)
          }
        }
        )

      this.router.navigate(['/'])
    } else {
      alert("usuario ou email em uso!")
    }
  }

  limpar() {
    this.nome = "";
    this.email = "";
    this.usuario = "";
    this.senha = "";
    this.confirmar = "";
  }

}
