import { Pedido } from './../shared/pedido.model';
import { PedidosService } from './../services/pedidos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private pedidosService: PedidosService) { }

  lista: Pedido[] =  []

  ngOnInit(): void {
    this.lista=this.pedidosService.getPedido()
  }

}
