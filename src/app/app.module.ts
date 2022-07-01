import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';
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
import { ProdutoComponent } from './produto/produto.component';
import { ModalFiltroComponent } from './home/modal-filtro/modal-filtro.component';
import { CarrinhoComponent } from './home/carrinho/carrinho.component';
import { CarrinhoService } from './services/carrinho.service';
import { ReservaComponent } from './home/reserva/reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideBarComponent,
    HomeComponent,
    ConfirmarComponent,
    ModalPedidosComponent,
    ModalDevolucaoComponent
    ProdutoComponent,
    PerfilComponent,
    ModalFiltroComponent,
    CarrinhoComponent,
    ReservaComponent
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
      }
    ]),
    LoginsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CarrinhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
