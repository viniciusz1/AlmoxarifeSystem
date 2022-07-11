import { Produto } from 'src/app/shared/produto.model';
import { Pipe, PipeTransform } from '@angular/core';

interface teste{
  nome: string,
  codigo: string,
  estoque: string,
  classificacao: string,
  opcaoUso: string
}

@Pipe({
  name: 'filtroEspecializadoProdutos'
})
export class FiltroEspecializadoProdutosPipe implements PipeTransform {

  transform(listaProdutos: Produto[], filtragem: Produto | teste): Produto[] {
    if(listaProdutos && filtragem.nome){
      
    }
    // let novo: teste = filtragem
    // if(listaProdutos && filtragem.nome)
    //   console.log(filtragem)
      // listaProdutos.filter(e => e.classificacao.startsWith())
      // return listaProdutos

    return listaProdutos
  }

}
