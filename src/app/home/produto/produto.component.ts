import { ProdutosService } from './../../services/produtos.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/shared/produto.model';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input() produto: Produto = new Produto();
  @Input() indiceProduto = 0
  @Input() cesta = false;

  abreDetalhesProduto() {
    this.router.navigate(['/home/detalhes-produto/',this.produto.codigo])
  }
  constructor(private router: Router,
    private cestaService: CarrinhoService,
    private route: ActivatedRoute
    ) { }
  corCodigo = '#275577'
  quantidadeCesta = 0
  mudarCor(){
    if(this.corCodigo == '#275577'){
      this.corCodigo = '#000'
    }
  }
  adicionarCesta() {
      this.mudarCor();
      try{
        this.cestaService.addProduto(new Produto(this.produto.nome as string, 
          this.produto.quantidade as number, 
          this.produto.classificacao as string,
          this.produto.localidade as string, 
          this.produto.opcaoUso as string, 
          this.produto.descricao as string, 
          this.produto.codigo as number,
          this.produto.imagem as string,
          this.quantidadeCesta as number))
          Swal.fire({
            position: 'bottom-end',
            imageUrl: this.produto.imagem,
            imageHeight: '100px',
            imageWidth:'100px',
            timerProgressBar: true,
            html:
            'Produto <b>'+ this.produto.nome+'</b> adicionado ao carrinho!',
            color: 'white',
            showConfirmButton: false,
            background: '#1f394f',
            backdrop: `
            transparent
            `,
            
            width:'200px',
            heightAuto: false,
            timer: 1500
          })
      }catch(err){
        alert(err)
      }
    
  }
  rota = ""
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.rota = params['id'];
    })
  }

}
