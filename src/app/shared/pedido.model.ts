import { Produto } from 'src/app/shared/produto.model';
export class Pedido{
    public nomeProfessor?: string;
    public listaProdutos?: Produto[];
    public dataEntrega?: Date;
    public dataDevolucao?: Date;
    public codigo?: number;
    public status?: number;

    constructor()
    constructor(nomeProfessor: string, listaProdutos: Produto[], dataEntrega: Date, dataDevolucao: Date, 
    codigo: number,status: number)
    constructor(nomeProfessor?: string, listaProdutos?: Produto[],dataEntrega?: Date,dataDevolucao?: Date, 
    codigo?:number, status?: number){
            this.nomeProfessor = nomeProfessor;
            this.listaProdutos = listaProdutos;
            this.dataEntrega = dataEntrega;
            this.dataDevolucao = dataDevolucao;
            this.codigo = codigo;
            this.status = status;
    }

}
