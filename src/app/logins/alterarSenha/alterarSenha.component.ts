import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-alterarSenha',
  templateUrl: './alterarSenha.component.html',
  styleUrls: ['./alterarSenha.component.css']
})
export class alterarSenhaComponent implements OnInit {
  
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

  

  telefone = "";

  enviar(){
    let telefone2: number = +this.telefone;
    console.log("telefone", typeof(telefone2), telefone2);
    if(!isNaN(telefone2)){
      if(this.telefone.length == 11){
        localStorage.setItem("TELEFONE", this.telefone);
        this.router.navigate(['/cadastro/telefone/verificar'])
      }
    }else{
      alert('É necessario usar apenas numeros!')
    }

  }
  

}
