import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }
  alteraSenha = false;
  modificaAlteraSenha(){
    this.alteraSenha = !this.alteraSenha
  }
  ngOnInit(): void {
  }

}
