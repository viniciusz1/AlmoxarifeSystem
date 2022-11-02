import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrls: ['./perfil-admin.component.css']
})
export class PerfilAdminComponent implements OnInit {

  @Output() estadoPerfil = new EventEmitter<boolean>();
  constructor() { }
  nivelacesso = ""
  usuario = ""
  email = ""
  telefone =""
  data = new Date()
  ngOnInit(): void {
  }

}
