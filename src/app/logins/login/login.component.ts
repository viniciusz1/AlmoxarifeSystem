import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/shared/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('USUARIO');
    localStorage.removeItem('SENHA');
  }

  usuario = "";
  senha = "";
  usuarios: Usuario = new Usuario()
  login() {
    this.usuariosService.login(this.usuario, this.senha)
      .subscribe({
        next: (x) => {
          this.usuarios = x
          localStorage.setItem('USUARIO', this.usuario);
          localStorage.setItem('EMAIL', this.usuarios.email as string);
          localStorage.setItem('SENHA', this.senha);
          localStorage.removeItem('lista');
          this.router.navigate(['/home'])
        },
        error(err) {
          alert(err.error.message)
        },
      }
      )
  }
}
