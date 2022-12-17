import { CarrinhoService } from './../../services/carrinho.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/shared/produto.model';
import Swal from 'sweetalert2';
import { Sort } from '@angular/material/sort';
import { Classificacao } from 'src/app/shared/classificacao.model';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {
  @Input() listaProdutos: Produto[] = []
  @Input() indiceProduto: number = 0;
  @Input() tiraQuantidade = false
  @Input() dashboard: boolean = false
  @Output() produtoSelecionado: EventEmitter<number> = new EventEmitter()
  @Input() tableSize = 0
  @Input() page = 0
  @Input() count = 0

  rota = ""
  quantidadeCarrinho = 0
  corCodigo = "275577"

  abreDetalhesProduto() {
    this.router.navigate(['/detalhes-produto'])
  }

  sortData(sort: Sort) {
    console.log(sort)
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.rota = params['id'];
    })
  }

  mandaProdutoClicado(index:number){
    this.produtoSelecionado.emit(this.listaProdutos[index].codigo)
  }


  constructor(private router: Router,
    private carrinhoService: CarrinhoService,
    private route: ActivatedRoute) { }

  adicionarCarrinho(index: number) {
    this.carrinhoService.addProduto(new Produto(this.listaProdutos[index].nome as string,
      this.listaProdutos[index].quantidadeTotal as number,
      this.listaProdutos[index].classificacao as Classificacao,
      this.listaProdutos[index].localizacoes!,
      this.listaProdutos[index].opcaoUso as string,
      this.listaProdutos[index].descricao as string,
      this.listaProdutos[index].codigo as number,
      this.listaProdutos[index].imagem as File,
      this.quantidadeCarrinho as number))
    Swal.fire({
      position: 'bottom-end',
      imageUrl: 'this.listaProdutos[index].imagem',
      imageHeight: '100px',
      imageWidth: '100px',
      timerProgressBar: true,
      html:
        'Produto <b>' + this.listaProdutos[index].nome + '</b> adicionado ao carrinho!',
      color: 'black',
      showConfirmButton: false,
      background: '#dbdbdb',
      backdrop: `
          transparent
          `,

      width: '200px',
      heightAuto: false,
      timer: 1500
    })

  }



}
