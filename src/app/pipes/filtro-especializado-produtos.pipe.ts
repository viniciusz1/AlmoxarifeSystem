import { Produto } from 'src/app/shared/produto.model';
import { Pipe, PipeTransform } from '@angular/core';

//Código e nome do produto estão funcionais

@Pipe({
  name: 'filtroEspecializadoProdutos'
})
export class FiltroEspecializadoProdutosPipe implements PipeTransform {

  transform(listaProdutos: Produto[], filtragem?: Produto): Produto[] {
    // const codigo = listaProdutos.map(e => e.codigo == filtragem?.codigo)
    // const classificacao = listaProdutos.map(e => e.classificacao.startsWith(filtragem?.classificacao))
    // const descricao = listaProdutos.map(e => e.descricao.startsWith(filtragem.descricao))
    // const localidade = listaProdutos.map(e => e.localidade.startsWith(filtragem.localidade))
    // const nome = listaProdutos.map(e => e.nome.startsWith(filtragem.nome))
    // const opcaoUso = listaProdutos.map(e => e.opcaoUso.startsWith(filtragem.opcaoUso))
    // const quantidade = listaProdutos.map(e => e.quantidade.startsWith(filtragem.quantidade))
    // const novaLista = []

    // console.log(filtragem.codigo)
    // if(filtragem.codigo == -1){
    //   return listaProdutos
    // }
    
    // for(let i = 0; i < listaProdutos.length; i++){
      
      // if(!filtragem.codigo){
      //   codigo[i] = true
      // }
      // console.log("classificacao:", classificacao,"codigo", codigo,"descricao", 
      // descricao, "localidade",localidade, "nome",nome, "opcaoUso",opcaoUso,"quantidade", quantidade)
      // if(classificacao[i] && codigo[i] && descricao[i] && localidade[i] && nome[i] && opcaoUso[i] && quantidade[i]){
      //   novaLista.push(listaProdutos[i])
      // }
      return listaProdutos
    }

  }


