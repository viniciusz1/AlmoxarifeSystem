import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';
import { Pedido } from 'src/app/shared/pedido.model';

@Component({
  selector: 'app-conferencia',
  templateUrl: './conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class ConferenciaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private pedidos: PedidosService,
    private router: Router) { }
  entregas = false
  id = ""
  pedido: Pedido = new Pedido()

  ngOnInit(): void {
    this.route.url.subscribe(
      e => {
        if(e[0].path == "entregas"){
          this.entregas = true;
        }else{
          this.entregas = false;
        }
        this.id = e[1].path;
      }
    )
    if(this.entregas){
      this.pedido = this.pedidos.getEntregasbyIndex(parseInt(this.id));
    }else{
      this.pedido = this.pedidos.getDevolucoesbyIndex(parseInt(this.id));
    }
  }
  confirmarPedido(){
    if(this.entregas){
      this.pedidos.realizarEntrega(parseInt(this.id))
      this.router.navigate(['/home/entregas'])
    }else{
      this.pedidos.realizarDevolucao(parseInt(this.id))
      this.router.navigate(['/home/devolucoes'])
    }
  }
}
