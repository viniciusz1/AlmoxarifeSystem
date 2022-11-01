import { Produto } from 'src/app/shared/produto.model';
export interface Entrada{
    codigo: number,
    data: Date,
    produto: Produto,
    nomePessoa: string,
    quantidade: number,
  }