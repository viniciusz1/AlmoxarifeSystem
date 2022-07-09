import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Produto } from 'src/app/shared/produto.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  @Output() fechaReserva = new EventEmitter<boolean>();
  listaCarrinho: Produto[] = [];
  fecharReserva(){
    this.fechaReserva.emit(false)
  }
  constructor(private car: CarrinhoService) { }

  ngOnInit(): void {
    this.listaCarrinho = this.car.getLista();
  }

}
