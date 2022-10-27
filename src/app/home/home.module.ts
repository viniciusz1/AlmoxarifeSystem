import { MatFormFieldModule } from '@angular/material/form-field';
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
import { EntradaComponent } from './entrada/entrada.component';
import { ExportsModule } from '../shared/exports/exports.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModelChangeDebouncedDirective } from '../directives/debounced.directive';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatSortModule} from '@angular/material/sort';

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
    EntradaComponent,
    NgModelChangeDebouncedDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RotasModule,
    ReactiveFormsModule,
    ExportsModule,
    NgxSliderModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatChipsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatSortModule,
  ],
  exports:[
    HomeComponent,
    ProdutoComponent,
    ModalFiltroComponent,
    ModalSenhaComponent,
    CarrinhoComponent,
    ReservaComponent,
    ProdutoListaComponent,
    DetalhesProdutoComponent,
  ]
})
export class HomeModule { }
