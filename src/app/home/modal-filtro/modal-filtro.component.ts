import { Localidade } from './../../shared/localidade.model';
import { NgForm } from '@angular/forms';
import { Produto } from 'src/app/shared/produto.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-modal-filtro',
  templateUrl: './modal-filtro.component.html',
  styleUrls: ['./modal-filtro.component.css']
})
export class ModalFiltroComponent implements OnInit {
  @Output() fechaModal = new EventEmitter<boolean>();
  @Output() filtragem = new EventEmitter<Produto>();
  clicouModal(){
    this.fechaModal.emit(false)
  }
 
  value: number = 0;
  highValue: number = 500;
  options: Options = {
    floor: 0,
    ceil: 500,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      return '#fff';
    }
  };
  onSubmit(form: NgForm){
    console.log("OI")
   console.log(form)
  }
  ngOnInit(): void {
    
  }
  provisorio:Localidade[] = []
  filtrar(form: NgForm){
    this.filtragem.emit(new Produto(form.value.nome, form.value.estoque, form.value.classificacao, this.provisorio, form.value.opcaoUso, "", form.value.codigo))
  }
  constructor() { }



}
