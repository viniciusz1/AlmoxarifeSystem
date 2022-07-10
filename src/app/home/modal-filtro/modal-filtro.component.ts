import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-filtro',
  templateUrl: './modal-filtro.component.html',
  styleUrls: ['./modal-filtro.component.css']
})
export class ModalFiltroComponent implements OnInit {
  @Output() fechaModal = new EventEmitter<boolean>();
  @Output() filtragem = new EventEmitter<{}>();
  clicouModal(){
    this.fechaModal.emit(false)
  }
 
  nome = ""
  codigo = "";
  estoque = ""
  classificacao = ""
  opcaoUso = ""

  
  filtrar(){
    let filtro = {
      nome: this.nome,
      codigo: this.codigo,
      estoque: this.estoque,
      classificacao: this.classificacao,
      opcaoUso: this.opcaoUso
      }
    this.filtragem.emit(filtro)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
