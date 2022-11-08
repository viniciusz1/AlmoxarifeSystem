// export interface Localidade {
//     'nome': string, 'codigo': number
//   }

export class Localidade {
  nome?: string;
  codigo?: number;
  constructor(nome?: string, codigo?: number)
  constructor(nome: string, codigo?: number)
  constructor(nome: string, codigo: number) {
    this.nome = nome;
    this.codigo = codigo;
  }
}

