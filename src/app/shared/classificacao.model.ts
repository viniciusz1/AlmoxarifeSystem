export class Classificacao {
    nome?: string;
    codigo?: number;
    constructor(nome?: string, codigo?: number)
    constructor(nome: string, codigo?: number)
    constructor(nome: string, codigo: number) {
      this.nome = nome;
      this.codigo = codigo;
    }
  }