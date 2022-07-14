import { Produto } from 'src/app/shared/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit{
  select = ""
  constructor(private prod: ProdutosService,
    private router: Router,
    private route: ActivatedRoute) { }


  detalhesForm = new FormGroup({
    opcaoUso: new FormControl(''),
    nome: new FormControl(''),
    quantidade: new FormControl(''),
    classificacao: new FormControl(''),
    localidade: new FormControl(''),
    descricao: new FormControl(''),
  });

  onSubmit() {

    let produto = new Produto()
    this.prod.changeProduto(produto)
  }
  rota = "";
  informacoes = new Produto()
  botao = ""
  cadastrarProduto = ""

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.rota = params['tipo']
      if (this.rota == undefined) {
        this.botao = "Cadastrar produto"
      } else {
        this.botao = "Editar produto"
      }
    })
    
    this.informacoes = this.prod.getIdProduto(parseInt(this.rota))
    this.detalhesForm.patchValue({
      nome: this.informacoes.nome,
      opcaoUso: this.informacoes.opcaoUso,
      quantidade: this.informacoes.quantidade,
      classificacao: this.informacoes.classificacao,
      localidade: this.informacoes.localidade,
      descricao: this.informacoes.descricao
    })

  }

}
