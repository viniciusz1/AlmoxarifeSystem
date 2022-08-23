import { ProdutoListaComponent } from './home/produto-lista/produto-lista.component';
import { DevolucoesComponent } from './pedidos/devolucoes/devolucoes.component';
import { ConferenciaComponent } from './pedidos/conferencia/conferencia.component';
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
import { DetalhesProdutoComponent } from './home/detalhes-produto/detalhes-produto.component';
import { TelefoneComponent } from './logins/telefone/telefone.component';
import { ConfirmarComponent } from './pedidos/confirmar/confirmar.component';
import { ModalPedidosComponent } from './pedidos/modal-pedidos/modal-pedidos.component';
import { ModalDevolucaoComponent } from './pedidos/modal-devolucao/modal-devolucao.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { ContasComponent } from './contas/contas.component';
import { PerfilAdminComponent } from './contas/perfil-admin/perfil-admin.component';
import { FiltroHistoricoComponent } from './pedidos/historico/filtro-historico/filtro-historico/filtro-historico.component';
import { ModalFiltroComponent } from './home/modal-filtro/modal-filtro.component';
import CheckLogged from './checklogged';
import { EntradaComponent } from './home/entrada/entrada.component';
import { EntradaHistoricoComponent } from './pedidos/historico/entrada-historico/entrada-historico.component';
import { DashboardComponent } from './pedidos/dashboard/dashboard.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: PosLoginComponent,
        canActivate: [CheckLogged], children: [{
          path: '',
          component: HomeComponent,
          canActivate: []
        },
        {
          path: 'pedidos',
          component: PedidosComponent,
          canActivate: [CheckLogged]
        },
        {
          path: 'devolucoes',
          component: DevolucoesComponent,
          canActivate: [CheckLogged]
        },
        {
          path: 'devolucoes/:id',
          component: ConferenciaComponent,
          canActivate: [CheckLogged]
        },
        {
          path: 'perfil',
          component: PerfilComponent,
          canActivate: [CheckLogged]
        },
        {  
          path: 'detalhes-produto/:tipo',
          component: DetalhesProdutoComponent,
          canActivate: [CheckLogged],
          
        },
        {  
          path: 'editar-produto/:tipo',
          component: DetalhesProdutoComponent,
          canActivate: [CheckLogged],
          
        },
        {  
          path: 'entrada',
          component: EntradaComponent,
          canActivate: [CheckLogged],
          
        },
        {  
          path: 'entrada/:id',
          component: EntradaComponent,
          canActivate: [CheckLogged],
          
        },
        {  
          path: 'cadastrar-produto',
          component: DetalhesProdutoComponent,
          canActivate: [CheckLogged]
        },
        {  
          path: 'dashboard',
          component: DashboardComponent,
          canActivate: [CheckLogged]
        },
        {  
          path: 'sidebar',
          component: SideBarComponent,
          canActivate: [CheckLogged]
        },
        {  
          path: 'historico',
          component: HistoricoComponent,
          canActivate: [CheckLogged]
        },
        {  
          path: 'historico/:id',
          component: ConferenciaComponent,
          canActivate: [CheckLogged]
        },
        {
          path: 'entregas',
          component: DevolucoesComponent,
          canActivate:[CheckLogged]
        },
        {
          path: 'entregas/:id',
          component: ConferenciaComponent,
          canActivate: [CheckLogged]
        },
        {
          path: 'solicitacoes',
          component: SolicitacoesComponent,
          canActivate:[CheckLogged]
        },
        {
          path: 'contas',
          component: ContasComponent,
          canActivate:[CheckLogged]
        },
        {
          path: 'conferencia',
          component: ConferenciaComponent,
          canActivate:[CheckLogged]
        },
        {
          path: 'perfiladmin',
          component: PerfilAdminComponent,
          canActivate:[]
        },
        {
          path: 'filtro-historico',
          component: FiltroHistoricoComponent,
          canActivate: []
        },
        {
          path: 'modal-filtro',
          component: ModalFiltroComponent,
          canActivate: []
        },
        {
          path: 'rt',
          component: EntradaHistoricoComponent,
          canActivate: [],
          
        },
        {
          path: ':id',
          component: HomeComponent,
          canActivate: [],
        },
      ]},
      {
        path: '',
        component: LoginComponent,
        canActivate: [],
      },
      {
        path: 'cadastro',
        component: CadastroComponent,
        canActivate: [],
      },
      {
        path: 'cadastro/telefone',
        component: TelefoneComponent,
        canActivate: [],
      },
      {
        path: 'cadastro/telefone/verificar',
        component: VerificarTelComponent,
        canActivate: [],
      },
      {
        path: 'confirmar',
        component: ConfirmarComponent,
        canActivate: [],
      },
      {
        path: 'modalPedidos',
        component: ModalPedidosComponent,
        canActivate: [],
      },
      {
        path: 'modalDevolucao',
        component: ModalDevolucaoComponent,
        canActivate: [],
      },
      {
          path: 'historico',
          component: HistoricoComponent,
          canActivate: [],
      },
      {
          path: 'produto-lista',
          component: ProdutoListaComponent,
          canActivate: [],
      }
      ])
  ],
  exports: [RouterModule]
})
export class RotasModule { }
