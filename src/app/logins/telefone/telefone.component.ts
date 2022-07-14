import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-telefone',
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.css']
})
export class TelefoneComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
  }

  telefone = "";
  ver = 1;

  enviar(){
    let telefone2: number = +this.telefone;
    console.log("telefone", typeof(telefone2), telefone2);
    console.log("ver", typeof(this.ver))
    if(!isNaN(telefone2)){
      if(this.telefone.length == 11){
        let user = localStorage.getItem("TELEFONE") as string;
        this.usuarioService.setUser(user , this.telefone);
      }
    }else{
      alert('É necessario usar apenas numeros!')
    }

  }
  

}
