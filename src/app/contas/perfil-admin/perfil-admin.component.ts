import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/shared/usuario.model';

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrls: ['./perfil-admin.component.css']
})
export class PerfilAdminComponent implements OnInit {
  @Input() user: Usuario | undefined;
  @Output() estadoPerfil = new EventEmitter<boolean>();
  constructor() { }
  nivelacesso? = ""
  usuario? = ""
  email? = ""

  setData(){
    this.nivelacesso= this.user?.nivelAcesso;
    this.usuario=this.user?.usuario;
    this.email=this.user?.email;
  }

  ngOnInit(): void {
    this.setData()
  }

}
