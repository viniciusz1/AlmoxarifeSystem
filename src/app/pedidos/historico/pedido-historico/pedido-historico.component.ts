import { Component, Input, OnInit } from '@angular/core';
import { Pedido } from 'src/app/shared/pedido.model';
import { Produto } from 'src/app/shared/produto.model';
@Component({
  selector: 'app-pedido-historico',
  templateUrl: './pedido-historico.component.html',
  styleUrls: ['./pedido-historico.component.css']
})
export class PedidoHistoricoComponent implements OnInit {
  @Input() lista: Pedido = new Pedido()
  constructor() { }

  ngOnInit(): void {
  }

}
