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
    usuario: "Otavio",
    senha: "123"
  },
  {
    usuario: "Vinicius",
    senha: "123"
  },
  {
    usuario: "Camilly",
    senha: "123"
  }
  
  ]

  usuario = "";
  senha = "";

  login(){
    let usuarios =  this.listaUsuario.find(lista => lista.usuario == this.usuario && lista.senha == this.senha);
    if(usuarios){
      console.log("aaa")
    }else{
      console.log("bbb")
    }
  }

  

}
