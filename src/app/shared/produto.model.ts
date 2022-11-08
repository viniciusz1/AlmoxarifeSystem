import { Classificacao } from "./classificacao.model";
import { Localidade } from "./localidade.model";
export class Produto {
    public nome?: string;
    public quantidadeTotal?: number;
    public classificacao?: Classificacao;
    public localizacoes?: Localidade[];
    public opcaoUso?: string;
    public descricao?: string;
    public codigo?: number;
    public imagem?: string;
    public qtdCart?: number;
    public quantidadeReservada?: number;

    constructor()
    constructor(nome: string, quantidadeTotal: number, classificacao: Classificacao, localizacoes: Localidade[], opcaoUso: string,descricao: string, codigo: number)
    constructor(nome: string, quantidadeTotal: number, classificacao: Classificacao, localizacoes: Localidade[], opcaoUso: string,descricao: string, codigo: number, imagem: string)
    constructor(nome: string, quantidadeTotal: number, classificacao: Classificacao, localizacoes: Localidade[], opcaoUso: string,descricao: string, codigo: number, imagem: string, qtdCart: number)
    constructor(nome: string, quantidadeTotal: number, classificacao: Classificacao, localizacoes: Localidade[], opcaoUso: string,descricao: string, codigo: number, imagem: string, qtdCart: number, quantidadeReservada: number)
    constructor(nome?: string, quantidadeTotal?: number, classificacao?: Classificacao, localizacoes?: Localidade[], opcaoUso?: string,descricao?: string, codigo?: number, imagem?: string, qtdCart?: number, quantidadeReservada?: number) {
    this.nome = nome;
    this.quantidadeTotal = quantidadeTotal;
    this.classificacao = classificacao;
    this.localizacoes = localizacoes;
    this.opcaoUso = opcaoUso;
    this.descricao = descricao;
    this.codigo = codigo;
    this.imagem = imagem;
    this.qtdCart = qtdCart;
    this.quantidadeReservada = quantidadeReservada;
  }
  
  }
