export class Produto {
    public nome?: string;
    public quantidade?: number;
    public classificacao?: string;
    public localidade?: string;
    public opcaoUso?: string;
    public descricao?: string;
    public codigo?: number;
    public imagem?: string;
    public qtdCart?: number;

    constructor()
    constructor(nome: string, quantidade: number, classificacao: string, localidade: string, opcaoUso: string,descricao: string, codigo: number)
    constructor(nome: string, quantidade: number, classificacao: string, localidade: string, opcaoUso: string,descricao: string, codigo: number, imagem: string)
    constructor(nome: string, quantidade: number, classificacao: string, localidade: string, opcaoUso: string,descricao: string, codigo: number, imagem: string, qtdCart: number)
    constructor(nome?: string, quantidade?: number, classificacao?: string, localidade?: string, opcaoUso?: string,descricao?: string, codigo?: number, imagem?: string, qtdCart?: number) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.classificacao = classificacao;
    this.localidade = localidade;
    this.opcaoUso = opcaoUso;
    this.descricao = descricao;
    this.codigo = codigo;
    this.imagem = imagem;
    this.qtdCart = qtdCart
  }
  
  }
