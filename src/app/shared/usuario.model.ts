export class Usuario {
    public nome: string;
    public email: string;
    public usuario: string;
    public senha: string;

  constructor(nome: string, email: string, usuario: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.usuario = usuario;
    this.senha = senha;
  }
  
  }