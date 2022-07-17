import { ProdutosService } from './../../services/produtos.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/shared/produto.model';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input() produto: Produto = new Produto();
  @Input() indiceProduto = 0
  @Input() carrinho = false;

  abreDetalhesProduto() {
    this.router.navigate(['/home/detalhes-produto/',this.produto.codigo])
    console.log(this.carrinho)
  }
  constructor(private router: Router,
    private carrinhoService: CarrinhoService,
    private route: ActivatedRoute
    ) { }
  adicionarCarrinho() {
    this.carrinhoService.addProduto(this.produto)
  }
  rota = ""
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.rota = params['id'];
    })
    console.log(this.produto.imagem)
  }

}
