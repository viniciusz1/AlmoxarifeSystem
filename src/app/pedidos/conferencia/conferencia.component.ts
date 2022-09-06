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
  quantidadeDevolvida=0
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
          this.botao='Histórico'
          this.entregas = 2;
        }
        this.id = e[1].path;
      }
    )
    if(this.entregas == 1){
     this.pedidos.getEntregasbyCodigo(parseInt(this.id))
      .subscribe({next: (e) => {
        this.pedido = e[0]
      }})    
    }else if(this.entregas == 0){ 
      this.pedidos.getDevolucoesbyCodigo(parseInt(this.id))
      .subscribe({next: (e) => {
        this.pedido = e[0]
      }})     
    }else if(this.entregas == 2){
      this.pedido = this.historicoService.getPedidobyIndex(parseInt(this.id))
    }
  }
  exibicaoModal = false
  changeModal(){
    this.exibicaoModal = !this.exibicaoModal
  }
  //1 = entregas
  //2 = historico
  //0 = devolucoes
  confirmarPedido(){
    if(this.entregas == 1){
      this.pedidos.realizarEntrega(this.pedido)
      // this.router.navigate(['/home/entregas'])
    }else if(this.entregas == 0){
      this.pedidos.realizarDevolucao(parseInt(this.id))
      this.router.navigate(['/home/devolucoes'])
    }
  }
}
