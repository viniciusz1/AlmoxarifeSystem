import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-classificacao',
  templateUrl: './modal-classificacao.component.html',
  styleUrls: ['./modal-classificacao.component.css']
})
export class ModalClassificacaoComponent implements OnInit {

  constructor() { }

  modo = "adicionar"
  nomeLocalizacao = ""
  ngOnInit(): void {
  }

}
