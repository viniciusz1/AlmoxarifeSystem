import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/shared/pedido.model';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-devolucoes',
  templateUrl: './devolucoes.component.html',
  styleUrls: ['./devolucoes.component.css']
})
export class DevolucoesComponent implements OnInit {


  constructor(private router: Router,
    private pedidos: PedidosService) {
  }

  lista: Pedido[] = []
  ngOnInit(): void { 
    this.lista = this.pedidos.getDevolucoes()
  }

}
