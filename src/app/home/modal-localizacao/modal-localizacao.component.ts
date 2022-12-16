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
    private localizacaoService: LocalizacaoService,
  ) { }
  modo = "adicionar"
  nomeLocalizacao = ""
  local_editar: Localidade = new Localidade();
  ngOnInit(): void {
    this.carregarDados()
  }
  carregarDados() {
    this.localizacaoService.getAllLocalizacoes()
      .subscribe({
        next: (e) => {
          console.log(e)
          this.localidades = e
        }
      })
  }
  adicionarLocalizacao() {
    if (this.nomeLocalizacao != "") {
      let localidade: Localidade = new Localidade(this.nomeLocalizacao)
      this.localizacaoService.addLocalizacao(localidade).subscribe(
        {
          next: (e) => {
            this.localidades.push(e as Localidade)
          },
          error: (err) => {
            console.log(err)
          }
        }
      )
      this.nomeLocalizacao = "";
    }
  }

  mudarModo(local: Localidade) {
    if (this.modo == "adicionar") {
      this.modo = "editar"
      this.nomeLocalizacao = local?.nome as string;
      this.local_editar = local
    } else {
      this.modo = "adicionar"
      this.nomeLocalizacao = ""
      this.local_editar = new Localidade();
    }
  }

  removerLocalizacao(codigo: number | undefined) {
    this.localizacaoService.deleteLocalizacao(codigo).subscribe(
      {
        next: (e) => {
          this.localidades.splice(this.localidades.findIndex(e => e.codigo == codigo), 1)
        },
        error: (err) => {
          console.log(err)
        }
      }
    );
  }

  editarLocalizacao() {
    this.local_editar.nome = this.nomeLocalizacao;
    this.localizacaoService.putLocalizacao(this.local_editar).subscribe(
      {
        next: (e) => {
          console.log("olha")
          console.log(e)
          this.carregarDados();
          this.modo = "adicionar"
          this.nomeLocalizacao = ""
        },
        error: (err) => {
          console.log(err)
        }
      }
    );
  }
}
