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
  @Input() produto: Produto = new Produto("1", "2", "3", "4", "5", "6", 7);
  @Input() indiceProduto = 0
  
  abreDetalhesProduto() {
    this.router.navigate(['/detalhes-produto'])
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
      console.log(this.rota)
    })
  }

}
