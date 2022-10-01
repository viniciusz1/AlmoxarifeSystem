import { OrdenarPipe } from './../../pipes/ordenar.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroProdutosPipe } from 'src/app/pipes/filtro-produtos.pipe';



@NgModule({
  declarations: [
    FiltroProdutosPipe
    ,OrdenarPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FiltroProdutosPipe,
    OrdenarPipe
  ]
})
export class ExportsModule { }
