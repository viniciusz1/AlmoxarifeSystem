import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProdutoComponent } from './produto/produto.component';
import { ModalFiltroComponent } from './modal-filtro/modal-filtro.component';
import { ModalSenhaComponent } from '../perfil/modal-senha/modal-senha.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RotasModule } from '../rotas.module';
import { FiltroProdutosPipe } from '../pipes/filtro-produtos.pipe';
import { FiltroEspecializadoProdutosPipe } from '../pipes/filtro-especializado-produtos.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    ProdutoComponent,
    ModalFiltroComponent,
    ModalSenhaComponent,
    CarrinhoComponent,
    ReservaComponent,
    ProdutoListaComponent,
    DetalhesProdutoComponent,
    FiltroProdutosPipe,
    FiltroEspecializadoProdutosPipe,

  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RotasModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    ProdutoComponent,
    ModalFiltroComponent,
    ModalSenhaComponent,
    CarrinhoComponent,
    ReservaComponent,
    ProdutoListaComponent,
    DetalhesProdutoComponent
  ]
})
export class HomeModule { }
