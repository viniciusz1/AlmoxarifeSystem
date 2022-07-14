import { CarrinhoService } from './../../services/carrinho.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/shared/produto.model';
@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {
  @Input() produto: Produto = new Produto("1", "2","3","4", "5", "6", 7);

  abreDetalhesProduto(){
    this.router.navigate(['/detalhes-produto'])
  }
  
  
  constructor(private router: Router,
    private carrinhoService: CarrinhoService) { }

    adicionarCarrinho(){
      this.carrinhoService.addProduto(this.produto)
    }

  ngOnInit(): void {
  }

}
