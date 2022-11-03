import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {
  perfilState = false
  modal = false;
  modelChanged = new Subject<string>();
  pesquisaProduto = "";

  mudarPerfilState() {
    this.perfilState = !this.perfilState
  }
  pesquisaConta = ""
  lista = [
    {
      nome: "Carlinhos Rech",
      email: "carlinhos@edu.sesisenai.org.br"
    },
    {
      nome: "Camilly Vitoria da Rocha Goltz",
      email: "camilly_goltz@estudante.sesisenai.org.br"
    }];

  constructor() { }

  ngOnInit(): void {
  }

  modalOpen(arg: boolean | Event) {
    this.modal = !this.modal
  }

  pegarListaContas() {
    // this.lista.getListaUsuarios(
    //   this.paginator?.pageIndex as number,
    //   this.paginator?.pageSize as number,
    //   this.pesquisaUser as string, "")
    //   .subscribe(e => {
    //     this.lista = e
    //   })

  }

  changed() {
    this.modelChanged.next(this.pesquisaProduto as string);
  }
}
