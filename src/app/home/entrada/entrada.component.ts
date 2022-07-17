import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/shared/produto.model';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  constructor(private prod: ProdutosService,
    private router: ActivatedRoute,
    private route: Router) { }

  lista:Produto[] = []
  nomeProduto=""
  estoqueQuantidade=0
  novaQuantidade=0
  pesquisaProduto = ""
  codigo = 0;
  ngOnInit(): void {
    this.lista = this.prod.getListaProdutos()  
    this.router.params.subscribe(e => {
      this.codigo = parseInt(e['id'])
      this.mostrarProduto(parseInt(e['id']))
      this.novaQuantidade = 0
    }
    )
  }

  mostrarProduto(index: number){
    this.route.navigate(['home/entrada/',index])
    let produto = this.prod.getIdProduto(index)
    this.nomeProduto = produto.nome as string
    this.estoqueQuantidade = produto.quantidade as number
  }
  atualizarQuantidade(){
    this.prod.changeQuantidadeProduto(this.codigo, this.novaQuantidade)
  }
}
