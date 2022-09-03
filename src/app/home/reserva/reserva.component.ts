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
    this.pedidoService.addEntrega(new Pedido(this.professor, this.listaCarrinho, this.dataRetirada, this.dataDevolucao, 5, 1))
    this.fecharReserva()
  }
  constructor(private car: CarrinhoService,
    private pedidoService: PedidosService,
    private historicoService: HistoricoService) { }

  listaQtd: number[] = []
  
  ngOnInit(): void {
    this.listaCarrinho = this.car.getLista();
    this.car.tamanhoCarrinho.subscribe(
      e => {
        if(e != 0){
          for(let i in this.listaCarrinho){
            console.log(this.listaCarrinho[i].qtdCart)
            this.listaQtd[i] = this.listaCarrinho[i].qtdCart as number
          }
        }
      }
    )
    console.log(this.listaCarrinho)
    console.log(this.listaQtd)
  }

}
