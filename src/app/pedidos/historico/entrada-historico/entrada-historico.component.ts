import { Entrada } from './../../../shared/entrada.model';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { EntradasService } from 'src/app/services/entradas.service';
import { Produto } from 'src/app/shared/produto.model';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-entrada-historico',
  templateUrl: './entrada-historico.component.html',
  styleUrls: ['./entrada-historico.component.css']
})
export class EntradaHistoricoComponent implements OnInit {
  @Input() paginas = 3
  @Input() entradaOuSaida = ""

  constructor(
    private entradaService: EntradasService) { }
  listaEntradas: Entrada[] = []

  sortData(sort : Sort){

  }
  ngOnInit(): void {
    if (this.entradaOuSaida == 'entradas') {
      this.entradaService.getEntrada()
        .subscribe(
          {
            next: (x) => {
              this.listaEntradas = x
              console.log(x)
            },
            error: (err) => console.log(err)
          }
        )
    } else if (this.entradaOuSaida == 'saidas') {
      this.entradaService.getEntrada()
        .subscribe(
          {
            next: (x) => {
              this.listaEntradas = x
              console.log(x)
            },
            error: (err) => console.log(err)
          }
        )
    }
  }

}
