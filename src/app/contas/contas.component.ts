import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Subject } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../shared/usuario.model';

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
  @ViewChild('paginator') paginator: MatPaginator | undefined

  mudarPerfilState(index: number) {
    this.perfilState = !this.perfilState
  }
  pesquisaConta = ""
  lista: Usuario[] = [];

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.pegarListaContas()
  }

  modalOpen(arg: boolean | Event) {
    this.modal = !this.modal
  }
  sortData(sort: Sort) {


  }

  pegarListaContas() {
    this.usuarioService.getListaUsuarios(this.paginator?.pageIndex as number,
      this.paginator?.pageSize as number,
      this.pesquisaConta as string, "").subscribe(
        e => this.lista = e
      )
  }

  changed() {
    this.modelChanged.next(this.pesquisaProduto as string);
  }
}
