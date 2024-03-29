import { CarrinhoService } from './../../services/carrinho.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/shared/produto.model';
import Swal from 'sweetalert2';

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
  rota = ""
  quantidadeCarrinho = 0
  corCodigo = "275577"

  abreDetalhesProduto() {
    this.router.navigate(['/detalhes-produto'])
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
    console.log(this.quantidadeCarrinho)
    this.carrinhoService.addProduto(new Produto(this.listaProdutos[index].nome as string,
      this.listaProdutos[index].quantidade as number,
      this.listaProdutos[index].classificacao as string,
      this.listaProdutos[index].localidade as string,
      this.listaProdutos[index].opcaoUso as string,
      this.listaProdutos[index].descricao as string,
      this.listaProdutos[index].codigo as number,
      this.listaProdutos[index].imagem as string,
      this.quantidadeCarrinho as number))
    Swal.fire({
      position: 'bottom-end',
      imageUrl: this.listaProdutos[index].imagem,
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
