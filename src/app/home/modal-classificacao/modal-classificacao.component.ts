import { Component, OnInit } from '@angular/core';
import { ClassificacaoService } from 'src/app/services/classificacao.service';
import { Classificacao } from 'src/app/shared/classificacao.model';

@Component({
  selector: 'app-modal-classificacao',
  templateUrl: './modal-classificacao.component.html',
  styleUrls: ['./modal-classificacao.component.css']
})
export class ModalClassificacaoComponent implements OnInit {

  constructor(
    private classificacaoService: ClassificacaoService
  ) { }

  modo = "adicionar"
  nomeClassificacao = ""
  classificacao_editar: Classificacao = new Classificacao();
  classificacoes: Classificacao[] = [];
  ngOnInit(): void {
    this.carregarDados()
  }
  carregarDados() {
    this.classificacaoService.getAllClassificacoes()
      .subscribe({
        next: (e) => {
          console.log(e)
          this.classificacoes = e
        }
      })
  }
  adicionarClassificacao() {
    if (this.nomeClassificacao != "") {
      let classe: Classificacao = new Classificacao(this.nomeClassificacao)
      this.classificacaoService.addClassificacao(classe).subscribe(
        {
          next: (e) => {
            this.classificacoes.push(e as Classificacao)
          },
          error: (err) => {
            console.log(err)
          }
        }
      )
      this.nomeClassificacao = "";
    }
  }

  mudarModo(classe: Classificacao) {
    if (this.modo == "adicionar") {
      this.modo = "editar"
      this.nomeClassificacao = classe?.nome as string;
      this.classificacao_editar = classe
    } else {
      this.modo = "adicionar"
      this.nomeClassificacao = ""
      this.classificacao_editar = new Classificacao();
    }
  }

  removerClassificacao(codigo: number | undefined) {
    this.classificacaoService.deleteClassificacao(codigo).subscribe(
      {
        next: (e) => {
          this.classificacoes.splice(this.classificacoes.findIndex(e => e.codigo == codigo), 1)
        },
        error: (err) => {
          console.log(err)
        }
      }
    );
  }

  editarClassificacao() {
    this.classificacao_editar.nome = this.nomeClassificacao;
    this.classificacaoService.putClassificacao(this.classificacao_editar).subscribe(
      {
        next: (e) => {
          console.log("olha")
          console.log(e)
          this.carregarDados();
          this.modo = "adicionar"
          this.nomeClassificacao = ""
        },
        error: (err) => {
          console.log(err)
        }
      }
    );
  }
}
