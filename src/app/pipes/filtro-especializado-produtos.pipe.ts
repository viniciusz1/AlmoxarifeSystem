import { Produto } from 'src/app/shared/produto.model';
import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'filtroEspecializadoProdutos'
})
export class FiltroEspecializadoProdutosPipe implements PipeTransform {

  transform(listaProdutos: Produto[], filtragem: Produto): Produto[] {
    
    const classificacao = listaProdutos.map(e => e.classificacao.startsWith(filtragem.classificacao))
    // console.log(filtragem.classificacao, listaProdutos[0].classificacao)
    let codigo: boolean[] = []
    let desbug = 0
    if(!(filtragem.codigo == 1 && desbug == 0)){
      
      console.log("filtragem.codigo")
    }
    const descricao = listaProdutos.map(e => e.descricao.startsWith(filtragem.descricao))
    const localidade = listaProdutos.map(e => e.localidade.startsWith(filtragem.localidade))
    const nome = listaProdutos.map(e => e.nome.startsWith(filtragem.nome))
    const opcaoUso = listaProdutos.map(e => e.opcaoUso.startsWith(filtragem.opcaoUso))
    // console.log(filtragem.opcaoUso, listaProdutos[0].opcaoUso)
    const quantidade = listaProdutos.map(e => e.quantidade.startsWith(filtragem.quantidade))
    const novaLista = []
    console.log("classificacao:", classificacao,"codigo", codigo,"descricao", 
    descricao, "localidade",localidade, "nome",nome, "opcaoUso",opcaoUso,"quantidade", quantidade)
    for(let i = 0; i < listaProdutos.length; i++){
      if(classificacao[i] && codigo[i] && descricao[i] && localidade[i] && nome[i] && opcaoUso[i] && quantidade[i]){
        novaLista.push(listaProdutos[i])
      }
    }

    return novaLista
  }

}
