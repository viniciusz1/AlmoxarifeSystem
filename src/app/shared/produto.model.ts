import { Localidade } from "./localidade.model";
export class Produto {
    public nome?: string;
    public quantidadeTotal?: number;
    public classificacao?: string;
    public localidade?: Localidade[];
    public opcaoUso?: string;
    public descricao?: string;
    public codigo?: number;
    public imagem?: string;
    public qtdCart?: number;
    public quantidadeReservada?: number;

    constructor()
    constructor(nome: string, quantidadeTotal: number, classificacao: string, localidade: Localidade[], opcaoUso: string,descricao: string, codigo: number)
    constructor(nome: string, quantidadeTotal: number, classificacao: string, localidade: Localidade[], opcaoUso: string,descricao: string, codigo: number, imagem: string)
    constructor(nome: string, quantidadeTotal: number, classificacao: string, localidade: Localidade[], opcaoUso: string,descricao: string, codigo: number, imagem: string, qtdCart: number)
    constructor(nome: string, quantidadeTotal: number, classificacao: string, localidade: Localidade[], opcaoUso: string,descricao: string, codigo: number, imagem: string, qtdCart: number, quantidadeReservada: number)
    constructor(nome?: string, quantidadeTotal?: number, classificacao?: string, localidade?: Localidade[], opcaoUso?: string,descricao?: string, codigo?: number, imagem?: string, qtdCart?: number, quantidadeReservada?: number) {
    this.nome = nome;
    this.quantidadeTotal = quantidadeTotal;
    this.classificacao = classificacao;
    this.localidade = localidade;
    this.opcaoUso = opcaoUso;
    this.descricao = descricao;
    this.codigo = codigo;
    this.imagem = imagem;
    this.qtdCart = qtdCart;
    this.quantidadeReservada = quantidadeReservada;
  }
  
  }
