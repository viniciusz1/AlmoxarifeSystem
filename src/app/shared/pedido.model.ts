import { Produto } from 'src/app/shared/produto.model';
export class Pedido{
    public nomeProfessor: string;
    public listaProdutos: Produto[];
    public dataReserva: Date;
    public dataDevolucao: Date;
    public codigo: number;
    public status: number;

    constructor(nomeProfessor: string,
        listaProdutos: Produto[],
        dataReserva: Date,
        dataDevolucao: Date,
        codigo: number,
        status: number){
            this.nomeProfessor = nomeProfessor;
            this.listaProdutos = listaProdutos;
            this.dataReserva = dataReserva;
            this.dataDevolucao = dataDevolucao;
            this.codigo = codigo;
            this.status = status;
    }

}
