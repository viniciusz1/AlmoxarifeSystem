import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-historico',
  templateUrl: './pedido-historico.component.html',
  styleUrls: ['./pedido-historico.component.css']
})
export class PedidoHistoricoComponent implements OnInit {
  @Input() lista: { pedido: string; Professor: string; 
    Produtos: string; Data: string; DataDev: string; status: string; } = 
    {pedido: "1", Professor: "2", Produtos: "3", Data: "2", DataDev: "2", status: "!"}
  constructor() { }

  ngOnInit(): void {
  }

}
