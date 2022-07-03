import { ProdutosService } from 'src/app/services/produtos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfilComponent } from './perfil/perfil.component';
import { ProdutoComponent } from './home/produto/produto.component';
import { ModalFiltroComponent } from './home/modal-filtro/modal-filtro.component';
import { CarrinhoComponent } from './home/carrinho/carrinho.component';
import { CarrinhoService } from './services/carrinho.service';
import { ReservaComponent } from './home/reserva/reserva.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideBarComponent,
    HomeComponent,
    ProdutoComponent,
    PerfilComponent,
    ModalFiltroComponent,
    CarrinhoComponent,
    ReservaComponent,
    DetalhesProdutoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
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
      }
      ]),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CarrinhoService, ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
