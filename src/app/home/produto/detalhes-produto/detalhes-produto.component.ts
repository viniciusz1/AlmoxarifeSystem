import { Produto } from 'src/app/shared/produto.model';
import { ProdutosService } from '../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
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
    this.prod.addProduto()
  }
  rota = "";
  informacoes = new Produto()


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.rota = params['tipo']
    })
    
    this.informacoes = this.prod.getIdProduto(parseInt(this.rota))
    console.log(this.informacoes)
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
