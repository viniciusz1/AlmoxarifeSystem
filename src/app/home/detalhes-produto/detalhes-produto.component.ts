import { Produto } from 'src/app/shared/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {


  codRota = "";
  informacoes = new Produto()
  botao = ""
  cadastrarProduto = ""
  select = ""
  disabled = true
  modo = ""
  // user = "admin"
  // user = "atendente"
  user = "supervisor"
  // user = "professor"

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
    if (this.modo == "cadastrar") {
      console.log(this.prod.addProduto(
        new Produto(this.detalhesForm.value.nome as string,
          this.detalhesForm.value.quantidade as number,
          this.detalhesForm.value.classificacao as string,
          // this.detalhesForm.value.localidade as string, 
          this.detalhesForm.value.opcaoUso as string,
          this.detalhesForm.value.descricao as string,
          "sdfasdfsdafsdfafa")))
    } else if (this.modo == "editar") {
      this.prod.changeProduto(new Produto(this.detalhesForm.value.nome as string,
        this.detalhesForm.value.quantidade as number,
        this.detalhesForm.value.classificacao as string,
        this.detalhesForm.value.localidade as string,
        this.detalhesForm.value.opcaoUso as string,
        this.detalhesForm.value.descricao as string,
        +this.codRota,
        this.imagem as string))
      this.router.navigate(['/home/produtos'])
    }

  }

  darEntrada() {
    this.router.navigate(['/home/entrada/', this.codRota])
  }
  list:Produto = new Produto
  imagem?= ""

  teste(){
    console.log(this.list)
    console.log(this.informacoes)
  }


  mostrarDados(){
    this.imagem = this.informacoes.imagem
    this.detalhesForm.controls['quantidade'].disable()
    this.detalhesForm.patchValue({
      nome: this.informacoes.nome,
      opcaoUso: this.informacoes.opcaoUso,
      quantidade: this.informacoes.quantidadeTotal,
      classificacao: this.informacoes.classificacao,
      localidade: this.informacoes.localidade,
      descricao: this.informacoes.descricao
    })
  }

  ngOnInit(): void {
    this.route.url.subscribe(
      url => {
        if (url[0].path == "cadastrar-produto") {
          this.botao = "Cadastrar produto"
          this.modo = "cadastrar"
        } else if (url[0].path == "editar-produto") {
          this.modo = "editar"
          this.codRota = url[1].path
          this.botao = "Editar produto"  
          this.mostrarDados()        
        } else if (url[0].path == "detalhes-produto") {
          this.modo = "detalhar"
          this.codRota = url[1].path
          this.botao = "Detalhes-produto"
          this.mostrarDados()
        }
         this.codRota = url[1].toString()
      }
    )
    this.prod.getIdProduto(this.codRota)
    .subscribe(
      (res) => {
          this.informacoes = res
          this.mostrarDados()
          console.log(this.informacoes)
      }
    )   
  }
}
