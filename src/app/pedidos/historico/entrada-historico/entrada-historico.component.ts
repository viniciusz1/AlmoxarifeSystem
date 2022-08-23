import { Component, OnInit } from '@angular/core';
import { EntradasService } from 'src/app/services/entradas.service';
import { Produto } from 'src/app/shared/produto.model';
interface Entrada{
  codigo: number,
  professor: string,
  produto: Produto,
  quantidade: number,
  data: Date
}
@Component({
  selector: 'app-entrada-historico',
  templateUrl: './entrada-historico.component.html',
  styleUrls: ['./entrada-historico.component.css']
})
export class EntradaHistoricoComponent implements OnInit {
  constructor(private entradaService: EntradasService) { }
  listaEntradas: Entrada[] = []
  ngOnInit(): void {
   
  this.listaEntradas = this.entradaService.getEntrada()
    
  }

}
