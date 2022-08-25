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
    this.lista = this.pedidos.getDevolucoes()
    this.url = this.router.url
    if(this.url == "/home/devolucoes"){
      this.modo = 'devolucoes'
      this.titulo = "DEVOLUÇÕES"
      this.textoBotao = "Devolver"
    }else{
      this.modo = 'entregas'
      this.titulo = "ENTREGAS"
      this.textoBotao = "Entregar"
    }
  }

  exibicao = true
  mudarParaEntregas(){
    this.exibicao = false
  }
  mudarParaDevolucoes(){
    this.exibicao=true
  }
  filtroState = false
  mudaFiltro(){
    this.filtroState = !this.filtroState;
  }


}
