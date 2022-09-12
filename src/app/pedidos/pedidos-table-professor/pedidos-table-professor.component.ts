import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pedido } from 'src/app/shared/pedido.model';

@Component({
  selector: 'app-pedidos-table-professor',
  templateUrl: './pedidos-table-professor.component.html',
  styleUrls: ['./pedidos-table-professor.component.css']
})
export class PedidosTableProfessorComponent implements OnInit {
  @Output() modal = new EventEmitter<boolean>();
  @Input() lista: Pedido[] = []
  constructor() { }
  changeModal(){
    this.modal.emit()
  }
  ngOnInit(): void {
  }

}
