import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Localidade } from './../shared/localidade.model';

@Injectable({
    providedIn: 'root'
})
export class LocalizacaoService {

    constructor(
        private http: HttpClient) { }

    addLocalizacao(localidade: Localidade) {
        return this.http.post('http://localhost:8080/localizacao', {
            "nome": localidade.nome
        })
    }

    getAllLocalizacoes() {
        return this.http.get<Localidade[]>('http://localhost:8080/localizacao')
    }

    deleteLocalizacao(codigo: number | undefined){
        return this.http.delete('http://localhost:8080/localizacao/'+ codigo)
    }

}

