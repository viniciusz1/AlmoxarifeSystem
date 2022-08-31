import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-modal-pedidos',
  templateUrl: './modal-pedidos.component.html',
  styleUrls: ['./modal-pedidos.component.css']
})
export class ModalPedidosComponent implements OnInit {
  @Output() fecharModal:EventEmitter<boolean> = new EventEmitter()
  constructor() { }

  closeModal(){
    this.fecharModal.emit()
  }
  ngOnInit(): void {
  }

  listaProdutos = [
    {Produto: "Resistor 1k Ohns",
     Estoque: "45",
     Quantidade: "5"},
     {Produto: "Resistor 2K",
     Estoque: "145",
     Quantidade: "5"},
     {Produto: "Resistor 2K",
     Estoque: "145",
     Quantidade: "5"},
     {Produto: "Resistor 2K",
     Estoque: "145",
     Quantidade: "5"},
     {Produto: "Resistor 2K",
     Estoque: "145",
     Quantidade: "5"},
     
     
  ]

}


