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
  @Input() produto: Produto = new Produto();
  @Input() indiceProduto: number = 0;
  rota = ""
  abreDetalhesProduto(){
    this.router.navigate(['/detalhes-produto'])
  }
  corCodigo="275577"
  mudarCor(){
    if(this.corCodigo == '#275577'){
      this.corCodigo = '#000'
    }
  }
  constructor(private router: Router,
    private carrinhoService: CarrinhoService,
    private route: ActivatedRoute) { }

    adicionarCarrinho(){
      if(!this.carrinhoService.verificaSeJaTem(this.produto.codigo)){
        this.carrinhoService.addProduto(this.produto)
        this.mudarCor()
        Swal.fire({
          position: 'bottom-end',
          imageUrl: this.produto.imagem,
          imageHeight: '100px',
          imageWidth:'100px',
          timerProgressBar: true,
          html:
          'Produto <b>'+ this.produto.nome+'</b> adicionado ao carrinho!',
          color: 'black',
          showConfirmButton: false,
          background: '#dbdbdb',
          backdrop: `
          transparent
          `,
          
          width:'200px',
          heightAuto: false,
          timer: 1500
        })
      }else{
        Swal.fire({
          position: 'bottom-end',
          icon: 'error',
          imageHeight: '100px',
          imageWidth:'100px',
          timerProgressBar: true,
          html:
          'Produto <b>'+ this.produto.nome+'</b> já está em seu carrinho!',
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
      }
    }
    
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.rota = params['id'];
    })
  }

}
