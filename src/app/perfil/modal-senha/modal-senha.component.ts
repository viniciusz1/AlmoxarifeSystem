import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-senha',
  templateUrl: './modal-senha.component.html',
  styleUrls: ['./modal-senha.component.css']
})
export class ModalSenhaComponent implements OnInit {
  @Output() alterandoModal = new EventEmitter();
  constructor() { }
  fecharModal(){
    this.alterandoModal.emit()
  }

  ngOnInit(): void {
  }

}
