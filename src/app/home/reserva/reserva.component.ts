import { Pedido } from './../../shared/pedido.model';
import { PedidosService } from './../../services/pedidos.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Produto } from 'src/app/shared/produto.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HistoricoService } from 'src/app/services/historico.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  @Output() fechaReserva = new EventEmitter<boolean>();
  listaCarrinho: Produto[] = [];
  dataRetirada: Date = new Date();
  dataDevolucao: Date = new Date();
  professor: string = ""
  user= "atendente"
  // user= "professor"


  fecharReserva(){
    this.fechaReserva.emit(false)
  }
  addPedido(){
    let newList = []
    for(let i of this.listaCarrinho){
      newList.push({
        codigoProduto: i.codigo,
        quantidade: i.qtdCart 
      })      
    }
    this.pedidoService.addEntrega({pedido: [this.professor,  newList, this.dataRetirada, this.dataDevolucao]})
    .subscribe({next: e => console.log(e),
    error: x => console.log(x)})
    // this.fecharReserva()
  }
  constructor(private car: CarrinhoService,
    private pedidoService: PedidosService,
    private historicoService: HistoricoService) { }

  
  ngOnInit(): void {
    this.listaCarrinho = this.car.getLista();
    this.car.tamanhoCarrinho.subscribe(
      e => {
        if(e != 0){
        }
      }
    )
  }

}
