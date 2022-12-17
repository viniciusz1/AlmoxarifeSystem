import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Classificacao } from 'src/app/shared/classificacao.model';
import { Pedido } from 'src/app/shared/pedido.model';
import { Produto } from 'src/app/shared/produto.model';
import { Usuario } from 'src/app/shared/usuario.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  panelOpenState = false
  constructor(
    private pedidosService: PedidosService,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
  ) { }
  selected: Date = new Date()
  entregas: Pedido[] = []
  devolucoes: Pedido[] = []
  pedido: Pedido = new Pedido()
  mudou() {
    this.pedidosService.getEntregasByDate(this.selected)
      .subscribe({
        next: (e) => {
          console.log(this.selected)
          this.entregas = e
        }, error: (err) => { console.log(err) }
      })
    this.pedidosService.getDevolucoesByDate(this.selected)
    .subscribe({
      next: (e) => {
        console.log(this.selected)
        this.devolucoes = e
      }, error: (err) => { console.log(err) }
    })
  }
  ngOnInit(): void {
    this._locale = 'pt-br';
    this._adapter.setLocale(this._locale);
    this.mudou()
    this.entregas.push(this.pedido);
    this.entregas.push(this.pedido);
    this.entregas.push(this.pedido);
    this.entregas.push(this.pedido);
    this.devolucoes.push(this.pedido)
  }

}
