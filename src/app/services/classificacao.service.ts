import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classificacao } from '../shared/classificacao.model';

@Injectable({
    providedIn: 'root'
})
export class ClassificacaoService {

    constructor(
        private http: HttpClient) { }

    addClassificacao(classificacao: Classificacao) {
        return this.http.post('http://localhost:8080/classificacao', {
            "nome": classificacao.nome
        })
    }

    getAllClassificacoes() {
        return this.http.get<Classificacao[]>('http://localhost:8080/classificacao')
    }

    deleteClassificacao(codigo: number | undefined){
        return this.http.delete('http://localhost:8080/classificacao/'+ codigo)
    }

    putClassificacao(classificacao: Classificacao) {
        return this.http.put('http://localhost:8080/classificacao', {
            "nome": classificacao.nome,
            "codigo": classificacao.codigo
        })
    }

}