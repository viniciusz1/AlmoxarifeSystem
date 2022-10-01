import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Produto } from 'src/app/shared/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';

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
  disabledQuantidade = false
  disabled = false
  modo = ""
  // user = "admin"
  // user = "atendente"
  user = "supervisor"
  // user = "professor"

 


    

  onSubmit() {
    if (this.modo == "cadastrar") {
      console.log(this.prod.addProduto(
        new Produto(this.nome as string,
          this.quantidade as number,
          this.classificacao as string,
          this.localidade as string,
          this.opcaoUso as string,
          this.descricao as string,
          0))
        .subscribe({
          next(e) {
            console.log(e)
          },
          error(err) {
            console.log(err)
          }

        }
        )
      )
    } else if (this.modo == "editar") {
      this.prod.changeProduto(new Produto(this.nome as string,
        this.quantidade as number,
        this.classificacao as string,
        this.localidade as string,
        this.opcaoUso as string,
        this.descricao as string,
        this.informacoes.codigo as number,
        this.imagem as string,
        0,
        this.informacoes.quantidadeReservada as number
        ))
        .subscribe(e => console.log(e))
      // this.router.navigate(['/home/produtos'])
    }

  }

  constructor(private prod: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { 
    }

public upload(event: Event): void {
  let list = (event.target as HTMLInputElement).files?.item(0)
  const urlToBlob = window.URL.createObjectURL(list as Blob) 
  this.imagem = this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob); 
}
  teste(){

  }
  darEntrada() {
    this.router.navigate(['/home/entrada/', this.codRota])
  }
  list: Produto = new Produto
  imagem?: SafeResourceUrl= ""


  opcaoUso?=''
  nome?=''
  quantidade?=0
  classificacao?=''
  localidade?=''
  descricao?=''

  mostrarDados() {
    this.imagem = this.informacoes.imagem
    this.nome = this.informacoes.nome
    this.quantidade = this.informacoes.quantidadeTotal
    this.classificacao = this.informacoes.classificacao
    this.localidade = this.informacoes.localidade
    this.opcaoUso = this.informacoes.opcaoUso
    this.descricao = this.informacoes.descricao
  }

  ngOnInit(): void {
    this.route.url.subscribe(
      url => {
        if (url[0].path == "cadastrar-produto") {
          this.botao = "Cadastrar produto"
          this.modo = "cadastrar"

        } else if (url[0].path == "editar-produto") {
          this.disabledQuantidade = true
          this.modo = "editar"
          this.codRota = url[1].path
          this.botao = "Editar produto"
          this.mostrarDados()
        } else if (url[0].path == "detalhes-produto") {
          this.disabled = true
          this.disabledQuantidade = true
          this.modo = "detalhar"
          this.codRota = url[1].path
          this.botao = "Detalhes-produto"
          this.mostrarDados()
        }
        this.codRota = url[1].toString()
      }
    )
    if (this.modo != "cadastrar") {
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
}