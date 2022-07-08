import { PerfilAdminComponent } from './perfil-admin/perfil-admin.component';
import { DevolucoesComponent } from './devolucoes/devolucoes.component';
import { RotasModule } from './rotas.module';
import { ProdutosService } from 'src/app/services/produtos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './pos-login/nav/nav.component';
import { SideBarComponent } from './pos-login/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginsModule } from './logins/logins.module';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { ModalPedidosComponent } from './modal-pedidos/modal-pedidos.component';
import { ModalDevolucaoComponent } from './modal-devolucao/modal-devolucao.component';
import { PerfilComponent } from './perfil/perfil.component';

import { ModalFiltroComponent } from './home/modal-filtro/modal-filtro.component';

import { ModalSenhaComponent } from './modal-senha/modal-senha.component';

import { HistoricoComponent } from './historico/historico.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { EntregasComponent } from './entregas/entregas.component';
import { ProdutoComponent } from './home/produto/produto.component';

import { CarrinhoComponent } from './home/carrinho/carrinho.component';
import { CarrinhoService } from './services/carrinho.service';
import { ReservaComponent } from './home/reserva/reserva.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { PosLoginComponent } from './pos-login/pos-login.component';

import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { ContasComponent } from './contas/contas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideBarComponent,
    HomeComponent,
    ConfirmarComponent,
    ModalPedidosComponent,
    ModalDevolucaoComponent,
    ProdutoComponent,
    ModalFiltroComponent,
    ModalSenhaComponent,
    PerfilComponent,
    HistoricoComponent,
    PedidosComponent,
    EntregasComponent,
    PerfilComponent,
    CarrinhoComponent,
    ReservaComponent,
    DetalhesProdutoComponent,
    PosLoginComponent,
    SolicitacoesComponent,
    ContasComponent,
	DevolucoesComponent,
    PerfilAdminComponent
  ],
  imports: [ 
    BrowserModule,
    LoginsModule,
    FormsModule,
    BrowserAnimationsModule,
    RotasModule
  ],
  providers: [CarrinhoService, ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
