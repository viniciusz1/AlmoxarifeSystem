import { FiltroEspecializadoProdutosPipe } from './pipes/filtro-especializado-produtos.pipe';
import { FiltroProdutosPipe } from './pipes/filtro-produtos.pipe';
import { PedidosModule } from './pedidos/pedidos.module';
import { PerfilAdminComponent } from './contas/perfil-admin/perfil-admin.component';
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
import { PerfilComponent } from './perfil/perfil.component';
import { ModalFiltroComponent } from './home/modal-filtro/modal-filtro.component';
import { ModalSenhaComponent } from './perfil/modal-senha/modal-senha.component';
import { ProdutoComponent } from './home/produto/produto.component';
import { CarrinhoComponent } from './home/carrinho/carrinho.component';
import { CarrinhoService } from './services/carrinho.service';
import { ReservaComponent } from './home/reserva/reserva.component';
import { DetalhesProdutoComponent } from './home/produto/detalhes-produto/detalhes-produto.component';
import { PosLoginComponent } from './pos-login/pos-login.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { ContasComponent } from './contas/contas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideBarComponent,
    HomeComponent,
    ProdutoComponent,
    ModalFiltroComponent,
    ModalSenhaComponent,
    PerfilComponent,
    PerfilComponent,
    CarrinhoComponent,
    ReservaComponent,
    DetalhesProdutoComponent,
    PosLoginComponent,
    SolicitacoesComponent,
    ContasComponent,
    PerfilAdminComponent,
    FiltroProdutosPipe,
    FiltroEspecializadoProdutosPipe
  ],
  imports: [ 
    BrowserModule,
    LoginsModule,
    FormsModule,
    BrowserAnimationsModule,
    RotasModule,
    PedidosModule
  ],
  providers: [CarrinhoService, ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
