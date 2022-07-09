import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-filtro',
  templateUrl: './modal-filtro.component.html',
  styleUrls: ['./modal-filtro.component.css']
})
export class ModalFiltroComponent implements OnInit {
  @Output() fechaModal = new EventEmitter<boolean>();
  clicouModal(){
    this.fechaModal.emit(false)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
