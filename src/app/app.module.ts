import { FiltroEspecializadoProdutosPipe } from './pipes/filtro-especializado-produtos.pipe';
import { FiltroProdutosPipe } from './pipes/filtro-produtos.pipe';
import { PerfilAdminComponent } from './contas/perfil-admin/perfil-admin.component';
import { RotasModule } from './rotas.module';
import { ProdutosService } from 'src/app/services/produtos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './pos-login/nav/nav.component';
import { SideBarComponent } from './pos-login/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginsModule } from './logins/logins.module';
import { PerfilComponent } from './perfil/perfil.component';
import { CarrinhoService } from './services/carrinho.service';
import { PosLoginComponent } from './pos-login/pos-login.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { ContasComponent } from './contas/contas.component';
import { HistoricoService } from './services/historico.service';
import { ReactiveFormsModule } from '@angular/forms';
import CheckLogged from './checklogged';
import { HomeModule } from './home/home.module';
import { PedidosModule } from './pedidos/pedidos.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideBarComponent,
    PerfilComponent,
    PosLoginComponent,
    SolicitacoesComponent,
    ContasComponent,
    PerfilAdminComponent,
    FiltroProdutosPipe,
    FiltroEspecializadoProdutosPipe,
  ],
  imports: [ 
    BrowserModule,
    LoginsModule,
    FormsModule,
    BrowserAnimationsModule,
    RotasModule,
    ReactiveFormsModule,
    HomeModule,
    PedidosModule
  ],
  providers: [CarrinhoService, ProdutosService, CheckLogged, HistoricoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
