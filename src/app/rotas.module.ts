import { ProdutoListaComponent } from './home/produto-lista/produto-lista.component';
import { DevolucoesComponent } from './pedidos/devolucoes/devolucoes.component';
import { ConferenciaComponent } from './pedidos/conferencia/conferencia.component';
import { EntregasComponent } from './pedidos/entregas/entregas.component';
import { HistoricoComponent } from './pedidos/historico/historico.component';
import { VerificarTelComponent } from './logins/verificar-tel/verificar-tel.component';
import { LoginComponent } from './logins/login/login.component';
import { CadastroComponent } from './logins/cadastro/cadastro.component';
import { PosLoginComponent } from './pos-login/pos-login.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './pos-login/side-bar/side-bar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DetalhesProdutoComponent } from './home/produto/detalhes-produto/detalhes-produto.component';
import { TelefoneComponent } from './logins/telefone/telefone.component';
import { ConfirmarComponent } from './pedidos/confirmar/confirmar.component';
import { ModalPedidosComponent } from './pedidos/modal-pedidos/modal-pedidos.component';
import { ModalDevolucaoComponent } from './pedidos/modal-devolucao/modal-devolucao.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { ContasComponent } from './contas/contas.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: PosLoginComponent,
        canActivate: [], children: [{
          path: '',
          component: HomeComponent,
          canActivate: []
        },
        {
          path: 'pedidos',
          component: PedidosComponent,
          canActivate: []
        },
        {
          path: 'devolucoes',
          component: DevolucoesComponent,
          canActivate: []
        },
        {
          path: 'perfil',
          component: PerfilComponent,
          canActivate: []
        },
        {  
          path: 'detalhes-produto',
          component: DetalhesProdutoComponent,
          canActivate: []
        },
        {  
          path: 'sidebar',
          component: SideBarComponent,
          canActivate: []
        },
        {  
          path: 'historico',
          component: HistoricoComponent,
          canActivate: []
        },
        {
          path: 'entregas',
          component: EntregasComponent,
          canActivate:[]
        },
        {
          path: 'solicitacoes',
          component: SolicitacoesComponent,
          canActivate:[]
        },
        {
          path: 'contas',
          component: ContasComponent,
          canActivate:[]
        },
        {
          path: 'conferencia',
          component: ConferenciaComponent,
          canActivate:[]
        },
      ]
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      },
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'telefone',
        component: CadastroComponent
      },
      {
        path: 'verificar-tel',
        component: VerificarTelComponent
      },
      {
        path: '',
        component: HomeComponent,
        canActivate: [],
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: []
      },
      {
        path: 'cadastro',
        component: CadastroComponent,
        canActivate: []
      },
      {
        path: 'cadastro/telefone',
        component: TelefoneComponent,
        canActivate: []
      },
      {
        path: 'cadastro/telefone/verificar',
        component: VerificarTelComponent,
        canActivate: []
      },
      {
        path: 'confirmar',
        component: ConfirmarComponent,
        canActivate: []
      },
      {
        path: 'modalPedidos',
        component: ModalPedidosComponent,
        canActivate: []
      },
      {
        path: 'modalDevolucao',
        component: ModalDevolucaoComponent,
        canActivate: []
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: []
      },
      {
          path: 'historico',
          component: HistoricoComponent,
          canActivate: []
      },
      {
          path: 'produto-lista',
          component: ProdutoListaComponent,
          canActivate: []
      }


      ])
  ],
  exports: [RouterModule]
})
export class RotasModule { }
