import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

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

  getUsuario(){
    this.usuarioService.getUser()
    .subscribe({next: (e) =>{
      console.log(e)
    },
    error: (err) => {
      alert(err.error.message)
    }
  })
  }

  ngOnInit(): void {
    this.getUsuario()
  }

}
