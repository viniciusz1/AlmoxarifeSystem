import { Component, Input, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from 'src/app/shared/pedido.model';

@Component({
  selector: 'app-pedidos-table',
  templateUrl: './pedidos-table.component.html',
  styleUrls: ['./pedidos-table.component.css']
})
export class PedidosTableComponent implements OnInit {
  @Input() pedidos:Pedido[] = []
  constructor(private pedidosService: PedidosService) { }
  ngOnInit(): void {
  }

}
