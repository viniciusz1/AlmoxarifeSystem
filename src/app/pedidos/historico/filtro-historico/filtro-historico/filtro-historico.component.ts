import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-historico',
  templateUrl: './filtro-historico.component.html',
  styleUrls: ['./filtro-historico.component.css']
})
export class FiltroHistoricoComponent implements OnInit {
  @Output() mudarFiltro = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
