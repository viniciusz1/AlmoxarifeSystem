import { Produto } from 'src/app/shared/produto.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(listaProdutos: Produto[], search: string): any {
    console.log(listaProdutos)
    if(search == "1" ){
      listaProdutos = listaProdutos.sort((a, b)=> a.quantidadeTotal as number  + b.quantidadeTotal!)
    }
    if(search == "2"){
      listaProdutos = listaProdutos.sort((a, b)=> a.quantidadeTotal as number - b.quantidadeTotal!)
    }
    return listaProdutos;
  }
}
