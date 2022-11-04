import { Component, OnInit } from '@angular/core';
import { LocalizacaoService } from 'src/app/services/localizacao.service';
import { Localidade } from '../../shared/localidade.model';

@Component({
  selector: 'app-modal-localizacao',
  templateUrl: './modal-localizacao.component.html',
  styleUrls: ['./modal-localizacao.component.css']
})
export class ModalLocalizacaoComponent implements OnInit {
  localidades: Localidade[] = []

  constructor(
    private localizacaoService : LocalizacaoService,
  ) { }
  modo = "adicionar"
  nomeLocalizacao = ""
  ngOnInit(): void {
     this.carregarDados()
  }
  carregarDados(){
    this.localizacaoService.getAllLocalizacoes()
    .subscribe({next: (e) => {
      console.log(e)
      this.localidades = e
    }}) 
  }
  adicionarLocalizacao(){
    if(this.nomeLocalizacao != ""){
      let localidade: Localidade = new Localidade(this.nomeLocalizacao)
      this.localizacaoService.addLocalizacao(localidade).subscribe()
      this.nomeLocalizacao = "";
    }
  }

  mudarModo(){
    if(this.modo == "adicionar"){
      this.modo = "editar"
    }else{
      this.modo = "adicionar"
    }
  }

  removerLocalizacao(codigo: number | undefined){
      this.localizacaoService.deleteLocalizacao(codigo).subscribe(
        {
          next: (e) => {
          this.localidades.splice(this.localidades.findIndex(e => e.codigo == codigo), 1)
        },
      error: (err)=>{
        console.log(err)
      }
      }
      );
    }
}
