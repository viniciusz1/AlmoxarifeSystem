export class Produto {
    public nome?: string;
    public quantidade?: string;
    public classificacao?: string;
    public localidade?: string;
    public opcaoUso?: string;
    public descricao?: string;
    public codigo?: number;

    constructor()
    constructor(nome: string, quantidade: string, classificacao: string, localidade: string, opcaoUso: string,descricao: string, codigo: number)
    constructor(nome?: string, quantidade?: string, classificacao?: string, localidade?: string, opcaoUso?: string,descricao?: string, codigo?: number) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.classificacao = classificacao;
    this.localidade = localidade;
    this.opcaoUso = opcaoUso;
    this.descricao = descricao;
    this.codigo = codigo;
  }
  
  }

new Produto()