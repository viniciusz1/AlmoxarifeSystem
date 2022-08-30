import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {
  perfilState = false

  mudarPerfilState(){
    this.perfilState = !this.perfilState
  }
  pesquisaConta = ""
  lista = [
    {
      nome: "Carlinhos Rech",
      email: "carlinhos@edu.sesisenai.org.br"    
    },
    {
      nome: "Camilly Vitoria da Rocha Goltz",
      email: "camilly_goltz@estudante.sesisenai.org.br"
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
