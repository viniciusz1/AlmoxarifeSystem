import { NgForm } from '@angular/forms';
import { Produto } from 'src/app/shared/produto.model';
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
 

  onSubmit(form: NgForm){
    console.log("OI")
   console.log(form)
  }
  
  filtrar(form: NgForm){
  
    this.filtragem.emit(new Produto(form.value.nome, form.value.estoque, form.value.classificacao, "", form.value.opcaoUso, "", form.value.codigo))
  }
  constructor() { }

  ngOnInit(): void {
  }

}
