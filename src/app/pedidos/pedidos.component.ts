import { Pedido } from './../shared/pedido.model';
import { Produto } from '../shared/produto.model';
import { PedidosService } from './../services/pedidos.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPedidosComponent } from './modal-pedidos/modal-pedidos.component';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(
    private pedidosService: PedidosService,
    private dialog: Dialog
    ) { }

  lista: Pedido[] =  []
  exibicaoModal = false
  produtosDaLista: Produto[] = []
  produtosString = ""

  changeModal(){
    this.dialog.open(ModalPedidosComponent, {panelClass: "tirarPadding"});
  }

  tooltip(index: number){
    this.produtosString=""
    this.produtosDaLista = this.lista[index].listaProdutos as Produto[]
    for(let i of this.produtosDaLista){
      this.produtosString += i.nome + ", "
    }
    this.produtosString = this.produtosString.substring(0,this.produtosString.length-2)
    console.log(this.produtosString)
  }
  removerPedido(index: number){
    this.pedidosService.removePedido(index)
  }
  ngOnInit(): void {
    this.pedidosService.getPedido()
      .subscribe({next: (e) => {
        this.lista = e
        console.log(e)
      }})
  }

}
