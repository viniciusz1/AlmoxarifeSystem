export class Usuario {
    public nome: string;
    public nivelAcesso: string;
    public email: string;
    public usuario: string;
    public senha: string;
    public telefone?: string;

  constructor(nome: string, email: string, usuario: string, senha: string, nivelAcesso: string, telefone?: string) {
    this.nivelAcesso = nivelAcesso;
    this.nome = nome;
    this.email = email;
    this.usuario = usuario;
    this.senha = senha;
    this.telefone = telefone
  }
  
  }