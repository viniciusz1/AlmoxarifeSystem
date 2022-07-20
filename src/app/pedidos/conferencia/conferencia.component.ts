import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from 'src/app/shared/pedido.model';
import { HistoricoService } from 'src/app/services/historico.service';

@Component({
  selector: 'app-conferencia',
  templateUrl: './conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class ConferenciaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private pedidos: PedidosService,
    private router: Router,
    private historicoService: HistoricoService) { }
  entregas = 0
  id = ""
  pedido: Pedido = new Pedido()
  botao = ''

  ngOnInit(): void {
    this.route.url.subscribe(
      e => {
        if(e[0].path == "entregas"){
          this.botao = 'Relizar entrega'
          this.entregas = 1;
        }else if(e[0].path == "devolucoes"){ 
          this.botao = 'Relizar devolução'
          this.entregas = 0;
        }else if(e[0].path == "historico"){
          this.entregas = 2;
        }
        this.id = e[1].path;
      }
    )
    if(this.entregas == 1){
      this.pedido = this.pedidos.getEntregasbyIndex(parseInt(this.id));
    }else if(this.entregas == 0){ 
      this.pedido = this.pedidos.getDevolucoesbyIndex(parseInt(this.id));
    }else if(this.entregas == 2){
      this.pedido = this.historicoService.getPedidobyIndex(parseInt(this.id))
    }
  }
  //1 = entregas
  //2 = historico
  //0 = devolucoes
  confirmarPedido(){
    if(this.entregas == 1){
      this.pedidos.realizarEntrega(parseInt(this.id))
      this.router.navigate(['/home/entregas'])
    }else if(this.entregas == 0){
      this.pedidos.realizarDevolucao(parseInt(this.id))
      this.router.navigate(['/home/devolucoes'])
    }
  }
}
