import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css']
})
export class SolicitacoesComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator | undefined

  constructor(
    private usuarios: UsuariosService,
  ) { }
  
  pesquisaUser = "";

  lengthUsuarios = 1;
  lista: Usuario[] = [new Usuario("Camilly", "camilly@gmail.com", "camilly", "123", "Professor", "(47) 99222-2222")];

  ngOnInit(): void {
    
  }

  sortData(sort: Sort){

  }

  pegarListaProdutos() {
    this.usuarios.getListaUsuarios(
      this.paginator?.pageIndex as number,
      this.paginator?.pageSize as number,
      this.pesquisaUser as string, "")
      .subscribe(e => {
        this.lista = e
      })
  }

}
