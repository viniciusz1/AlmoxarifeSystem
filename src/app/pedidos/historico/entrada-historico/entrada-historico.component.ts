import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { EntradasService } from 'src/app/services/entradas.service';
import { Produto } from 'src/app/shared/produto.model';
interface Entrada{
  codigo: number,
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
  @Input() paginas = 3
  constructor(private router: Router,
    private entradaService: EntradasService) { }
  listaEntradas: Entrada[] = []

  url = ""
  modo = ""
  titulo = ""
  textoBotao = ""
  cs(){
    console.log(this.url)
  }
  ngOnInit(): void {
    this.url = this.router.url
    if(this.url == "/home/devolucoes"){
      this.modo = 'devolucoes'
      this.titulo = "DEVOLUÇÕES"
      this.textoBotao = "Devolver"
    }else{
      this.modo = 'entregas'
      this.titulo = "ENTREGAS"
      this.textoBotao = "Entregar"
    }
  this.listaEntradas = this.entradaService.getEntrada()
    console.log(this.listaEntradas)
  }

}
