import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css']
})
export class SolicitacoesComponent implements OnInit {

  constructor() { }
  
  lista = [
    {
      nome: "Carlinhos Rech",
      email: "carlinhos@edu.sesisenai.org.br",
      Data: "02/02/2022"
    },
    {
      nome: "Carlinhos Rech",
      email: "carlinhos@edu.sesisenai.org.br",
      Data: "02/02/2022"
    }];

  ngOnInit(): void {
  }

}
