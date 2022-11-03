import { Component, Input, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Pedido } from 'src/app/shared/pedido.model';
import { Produto } from 'src/app/shared/produto.model';

@Component({
  selector: 'app-devolucoes-table',
  templateUrl: './devolucoes-table.component.html',
  styleUrls: ['./devolucoes-table.component.css']
})
export class DevolucoesTableComponent implements OnInit {
  @Input() lista: Pedido[] = []
  @Input() textoBotao = ""
  @Input() modo = ""
  @Input() url = ""
  constructor() { }

  ngOnInit(): void {
  }
  sortData(sort: Sort){
    console.log("teste")
  }

}
