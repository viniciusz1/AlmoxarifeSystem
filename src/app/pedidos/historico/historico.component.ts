import { Component, OnInit } from '@angular/core';
import { HistoricoService } from 'src/app/services/historico.service';
import { Pedido } from 'src/app/shared/pedido.model';
@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  constructor(private historicoService: HistoricoService) { }

  lista = []

  ngOnInit(): void {
    // this.lista = this.historicoService.getPedido()
  }

}
