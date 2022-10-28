import { Produto } from 'src/app/shared/produto.model';
import { Usuario } from './usuario.model';
export class Pedido{
    public usuario?: Usuario;
    public listaProdutos?: Produto[];
    public dataEntrega?: Date;
    public dataDevolucao?: Date;
    public codigo?: number;
    public status?: number;

    constructor()
    constructor(usuario: Usuario, listaProdutos: Produto[], dataEntrega: Date, dataDevolucao: Date, 
    codigo: number,status: number)
    constructor(usuario?: Usuario, listaProdutos?: Produto[],dataEntrega?: Date,dataDevolucao?: Date, 
    codigo?:number, status?: number){
            this.usuario = usuario;
            this.listaProdutos = listaProdutos;
            this.dataEntrega = dataEntrega;
            this.dataDevolucao = dataDevolucao;
            this.codigo = codigo;
            this.status = status;
    }

}
