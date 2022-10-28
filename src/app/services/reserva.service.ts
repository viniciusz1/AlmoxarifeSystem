import { Usuario } from 'src/app/shared/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  getListaProfessores(){
    return this.http.get<Usuario[]>("http://localhost:8080/usuario/nivelAcesso/Professor")
  }
  constructor(private http: HttpClient) { }
}
