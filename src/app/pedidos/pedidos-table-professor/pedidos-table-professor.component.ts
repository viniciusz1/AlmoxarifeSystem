import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pedido } from 'src/app/shared/pedido.model';

@Component({
  selector: 'app-pedidos-table-professor',
  templateUrl: './pedidos-table-professor.component.html',
  styleUrls: ['./pedidos-table-professor.component.css']
})
export class PedidosTableProfessorComponent implements OnInit {
  @Output() modal = new EventEmitter<number>();
  @Input() lista: Pedido[] = []
  constructor() { }
  changeModal(codigo: number | undefined){
    this.modal.emit(codigo)
  }
  ngOnInit(): void {
  }


}
