import { CarrinhoService } from './../../services/carrinho.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
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

  rota = ""
  quantidadeCarrinho = 0
  corCodigo = "275577"

  abreDetalhesProduto() {
    this.router.navigate(['/detalhes-produto'])
  }
  mudarCor() {
    if (this.corCodigo == '#275577') {
      this.corCodigo = '#000'
    }
  }

  constructor(private router: Router,
    private carrinhoService: CarrinhoService,
    private route: ActivatedRoute) { }

  adicionarCarrinho() {
    console.log(this.quantidadeCarrinho)
    // this.carrinhoService.addProduto(new Produto(this.produto.nome as string,
    //   this.produto.quantidade as number,
    //   this.produto.classificacao as string,
    //   this.produto.localidade as string,
    //   this.produto.opcaoUso as string,
    //   this.produto.descricao as string,
    //   this.produto.codigo as number,
    //   this.produto.imagem as string,
    //   this.quantidadeCarrinho as number))
    // this.mudarCor()
    // Swal.fire({
    //   position: 'bottom-end',
    //   imageUrl: this.produto.imagem,
    //   imageHeight: '100px',
    //   imageWidth: '100px',
    //   timerProgressBar: true,
    //   html:
    //     'Produto <b>' + this.produto.nome + '</b> adicionado ao carrinho!',
    //   color: 'black',
    //   showConfirmButton: false,
    //   background: '#dbdbdb',
    //   backdrop: `
    //       transparent
    //       `,

    //   width: '200px',
    //   heightAuto: false,
    //   timer: 1500
    // })

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.rota = params['id'];
    })
    console.log(this.tiraQuantidade)
  }

}
