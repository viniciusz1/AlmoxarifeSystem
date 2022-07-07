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
import { LoginComponent } from './logins/login/login.component';
import { CadastroComponent } from './logins/cadastro/cadastro.component';
import { TelefoneComponent } from './logins/telefone/telefone.component';
import { VerificarTelComponent } from './logins/verificar-tel/verificar-tel.component';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { ModalPedidosComponent } from './modal-pedidos/modal-pedidos.component';
import { ModalDevolucaoComponent } from './modal-devolucao/modal-devolucao.component';
import { PerfilComponent } from './perfil/perfil.component';

import { ModalFiltroComponent } from './modal-filtro/modal-filtro.component';
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
    EntregasComponent
    PerfilComponent,
    CarrinhoComponent,
    ReservaComponent,
    DetalhesProdutoComponent,
    PosLoginComponent
  ],
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
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
        path: 'entregas',
        component: PedidosComponent,
        canActivate:[]
      }
    ]),
    LoginsModule,
    FormsModule,
    BrowserAnimationsModule,
    RotasModule
  ],
  providers: [CarrinhoService, ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
