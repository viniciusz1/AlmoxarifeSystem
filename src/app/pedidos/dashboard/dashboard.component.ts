import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from 'src/app/shared/pedido.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private pedidosService: PedidosService,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    ) { }
  selected: Date = new Date()
  entregas: Pedido[] = []

  mudou(){
  this.entregas = this.pedidosService.getByDate(this.selected)
  }
  ngOnInit(): void {
    this._locale = 'pt-br';
    this._adapter.setLocale(this._locale);
    this.entregas = this.pedidosService.getByDate(this.selected)
  }

}
