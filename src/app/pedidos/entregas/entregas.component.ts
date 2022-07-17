import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from 'src/app/shared/pedido.model';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pedidos: PedidosService
  ) {}


  lista: Pedido[] = []
  ngOnInit(): void { 
    this.lista = this.pedidos.getEntregas()
  }

}