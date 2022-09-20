import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntradasService } from 'src/app/services/entradas.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/shared/produto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  constructor(private prod: ProdutosService,
    private entradaService: EntradasService,
    private router: ActivatedRoute,
    private route: Router) { }

  lista: Produto[] = []
  nomeProduto = ""
  estoqueQuantidade = 0
  novaQuantidade = 0
  pesquisaProduto = ""
  codigo = 0;
  imagem = ""
  tiraQuantidade = true

  atualizarProdutos() {
    this.prod.getListaProdutos()
      .subscribe({
        next: (e) => {
          this.lista = e
        },
        error: (err) => alert(err)
      }
      )
  }

  ngOnInit(): void {
    this.atualizarProdutos();

    this.router.params.subscribe(e => {
      this.codigo = parseInt(e['id'])
      this.mostrarProduto(parseInt(e['id']))
      this.novaQuantidade = 0
    }
    )
  }

  mostrarProduto(codigo: number | undefined) {
    let produto = this.lista.find(e => e.codigo == codigo)
    this.route.navigate(['home/entrada/', codigo])
    this.imagem = produto?.imagem as string
    this.nomeProduto = produto?.nome as string
    this.estoqueQuantidade = produto?.quantidadeTotal as number
  }

  atualizarQuantidade() {
    Swal.fire({
      title: 'Confirmar entrada',
      html: `Você está adicionando "${this.novaQuantidade}" quantidades <br> <b>Produto</b>: ${this.nomeProduto}`,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.entradaService.darEntradaDeQuantidadeProduto(this.codigo, this.novaQuantidade)
          ?.subscribe(
            {
              next: e => {
                console.log(e)
                this.atualizarProdutos();
              }
            }
          )
      }
    })
  }
}
