import { Produto } from 'src/app/shared/produto.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEspecializadoProdutos'
})
export class FiltroEspecializadoProdutosPipe implements PipeTransform {

  transform(listaProdutos: Produto[], filtragem: {}): Produto[] {
    if(listaProdutos && filtragem)
      listaProdutos.filter(e => e.classificacao.startsWith(filtragem.classificacao))
      return listaProdutos

    return listaProdutos
  }

}
