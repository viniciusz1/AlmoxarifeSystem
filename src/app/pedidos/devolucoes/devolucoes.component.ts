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

  pesquisaDevolucao=""
  constructor(private router: Router,
    private pedidos: PedidosService) {
  }
  url = ""
  lista: Pedido[] = []
  modo = 'devolucoes'
  textoBotao=""
  titulo=""
  pesquisaPedido = ""
  page = 1
  //1 - entrada, 2 - devulucao, 3 - histórico
  ngOnInit(): void { 
    this.url = this.router.url
    if(this.url == "/home/devolucoes"){
      this.modo = 'devolucoes'
      this.titulo = "DEVOLUÇÕES"
      this.textoBotao = "Devolver"
      this.pedidos.getDevolucoes()
      .subscribe({next: e => this.lista = e})
    }else{      
    this.pedidos.getEntregas()
    .subscribe({next: e =>{
      this.lista = e
      console.log(e)
    }})
      this.modo = 'entregas'
      this.titulo = "ENTREGAS"
      this.textoBotao = "Entregar"
    }
  }

  exibicao = true
  mudarParaEntregas(){
    this.router.navigate(['/home/entregas'])
    this.url = '/home/entregas'
    this.exibicao = false
  }
  mudarParaDevolucoes(){
    this.router.navigate(['/home/devolucoes'])
    this.url = '/home/devolucoes'
    this.exibicao=true
  }
  filtroState = false
  mudaFiltro(){
    this.filtroState = !this.filtroState;
  }


}
