import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

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

  login(){
    let usuarios =  this.usuariosService.getListaProdutos().find(lista => lista.usuario == this.usuario && lista.senha == this.senha);
    if(usuarios){
      localStorage.setItem('USUARIO', this.usuario);
      localStorage.setItem('SENHA', this.senha);
      this.router.navigate(['/home'])
    }else{
      alert('Usuário não cadastrado!');
    }
  }

  

}
