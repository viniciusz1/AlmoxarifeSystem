import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem('usuario');
    localStorage.removeItem('senha');
  }

  listaUsuario = [
    {
    usuario: "otavio",
    senha: "123"
  },
  {
    usuario: "vinicius",
    senha: "123"
  },
  {
    usuario: "camilly",
    senha: "123"
  }
  
  ]

  usuario = "";
  senha = "";

  login(){
    let usuarios =  this.listaUsuario.find(lista => lista.usuario == this.usuario && lista.senha == this.senha);
    console.log(usuarios)
  }

  

}
