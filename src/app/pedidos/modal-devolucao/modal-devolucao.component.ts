import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-devolucao',
  templateUrl: './modal-devolucao.component.html',
  styleUrls: ['./modal-devolucao.component.css']
})
export class ModalDevolucaoComponent implements OnInit {
  @Output() fecharModal: EventEmitter<boolean> = new EventEmitter()
  constructor() { }
  closeModal(){
    this.fecharModal.emit()
  }
  ngOnInit(): void {
  }

}
