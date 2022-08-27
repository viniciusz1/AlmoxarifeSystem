import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-userEmail',
  templateUrl: './userEmail.component.html',
  styleUrls: ['./userEmail.component.css']
})
export class userEmailComponent implements OnInit {

  @Output() fechaModal = new EventEmitter<boolean>();

  FecharModal(){
    this.fechaModal.emit(false)
  }

  constructor(
    private router: Router,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    
  }

  usuario = "";
  ex = false;

  Enviar(){
    if(this.usuario != ""){
    let lista = this.usuarioService.getListaUser();
    for(let user in lista){
      if(lista[user].usuario == this.usuario){
        this.router.navigate(["/verificar"])
        this.ex = true;
      }
    }
    if(!this.ex){
      alert("usuário não encontrado!")
    }
    
  }else{
    alert("É necessario prencher o campo!")
  }
    
  }
}