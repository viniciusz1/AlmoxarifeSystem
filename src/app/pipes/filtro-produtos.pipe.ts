import { Produto } from 'src/app/shared/produto.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProdutos'
})
export class FiltroProdutosPipe implements PipeTransform {

  transform(listaProdutos: Produto[], search: string): any {
    if(listaProdutos != undefined){
      if(listaProdutos && search)
      return listaProdutos.filter(e => e.nome?.toUpperCase().startsWith(search.toUpperCase()))
      
    }
      
        
        
    return listaProdutos
  }

}
