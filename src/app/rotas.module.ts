import { PerfilAdminComponent } from './perfil-admin/perfil-admin.component';
import { DevolucoesComponent } from './devolucoes/devolucoes.component';
import { EntregasComponent } from './entregas/entregas.component';
import { HistoricoComponent } from './historico/historico.component';
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
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';


import { ConferenciaComponent } from './conferencia/conferencia.component';

import { TelefoneComponent } from './logins/telefone/telefone.component';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { ModalPedidosComponent } from './modal-pedidos/modal-pedidos.component';
import { ModalDevolucaoComponent } from './modal-devolucao/modal-devolucao.component';
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
                    path: 'home',
                    component: HomeComponent,
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
                    path: 'entregas',
                    component: EntregasComponent,
                    canActivate: [],
                    
                    
                },
                {
                    path: 'devolucoes',
                    component: DevolucoesComponent,
                    canActivate: []                 
                    
                },
                {
                    path: 'perfil-admin',
                    component: PerfilAdminComponent,
                    canActivate: []                 
                    
                }
                ]
            },
            {
                path: '',
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
            }
      ])
  ],
  exports: [RouterModule]
})
export class RotasModule { }
