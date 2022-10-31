import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-localizacao',
  templateUrl: './modal-localizacao.component.html',
  styleUrls: ['./modal-localizacao.component.css']
})
export class ModalLocalizacaoComponent implements OnInit {

  constructor() { }
  modo = "editar"
  nomeLocalizacao = ""
  ngOnInit(): void {
  }

}
