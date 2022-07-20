import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroProdutosPipe } from 'src/app/pipes/filtro-produtos.pipe';



@NgModule({
  declarations: [
    FiltroProdutosPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    FiltroProdutosPipe
  ]
})
export class ExportsModule { }
