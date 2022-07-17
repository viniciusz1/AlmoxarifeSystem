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


  rota = "";
  informacoes = new Produto()
  botao = ""
  cadastrarProduto = ""
  select = ""
  disabled = true
  modo = ""

  constructor(private prod: ProdutosService,
    private router: Router,
    private route: ActivatedRoute) { }


  detalhesForm = new FormGroup({
    opcaoUso: new FormControl(''),
    nome: new FormControl(''),
    quantidade: new FormControl(0),
    classificacao: new FormControl(''),
    localidade: new FormControl(''),
    descricao: new FormControl(''),
  });

  onSubmit() {
    if(this.modo == "cadastrar"){
      this.prod.addProduto(
        new Produto(this.detalhesForm.value.nome as string, 
          this.detalhesForm.value.quantidade as number, 
          this.detalhesForm.value.classificacao as string,
          this.detalhesForm.value.localidade as string, 
          this.detalhesForm.value.opcaoUso as string,
          this.detalhesForm.value.descricao as string,
          123))
          this.router.navigate(['/home/produtos'])
    }else if(this.modo == "editar"){
        this.prod.changeProduto(parseInt(this.rota), new Produto(this.detalhesForm.value.nome as string, 
          this.detalhesForm.value.quantidade as number, 
          this.detalhesForm.value.classificacao as string,
          this.detalhesForm.value.localidade as string, 
          this.detalhesForm.value.opcaoUso as string,
          this.detalhesForm.value.descricao as string,
          123))
          this.router.navigate(['/home/produtos'])
    }
    
  }


  ngOnInit(): void {
    this.route.url.subscribe(
      url => {
        if(url[0].path == "cadastrar-produto"){
          this.botao = "Cadastrar produto"
          this.modo = "cadastrar"
        }else if(url[0].path == "editar-produto"){ 
          this.modo = "editar"
          this.rota = url[1].path
          this.botao = "Editar produto"
          this.informacoes = this.prod.getIdProduto(parseInt(this.rota))
          this.detalhesForm.patchValue({
            nome: this.informacoes.nome,
            opcaoUso: this.informacoes.opcaoUso,
            quantidade: this.informacoes.quantidade,
            classificacao: this.informacoes.classificacao,
            localidade: this.informacoes.localidade,
            descricao: this.informacoes.descricao
          })
        }else if(url[0].path == "detalhes-produto"){
          this.modo = "detalhar"
          this.rota = url[1].path
          this.botao = "Detalhes-produto"
          this.detalhesForm.disable();
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
    )
    
    
    

  }

}
