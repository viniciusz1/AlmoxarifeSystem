import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private pedidosService: PedidosService) { }
  selected = new Date()
  ngOnInit(): void {
  }

}
