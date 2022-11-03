import { ModalClassificacaoComponent } from './../modal-classificacao/modal-classificacao.component';
import { ModalLocalizacaoComponent } from './../modal-localizacao/modal-localizacao.component';
import { Localidade } from './../../shared/localidade.model';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable, startWith } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Produto } from 'src/app/shared/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
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
  user = "supervisor"


  constructor(private prod: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog) {

      this.prod.getAllLocalizacoes()
      .subscribe({
        next: e => {
          for(let i of e){
            this.allLocalidades.push(i)
          }
        }
      })

    this.filteredLocalidade = this.localidadeCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allLocalidades.slice())),
    );
  }


  listaLocalizacao: Localidade[] = []
  abrirModalLocalizacao(){
    this.dialog.open(ModalLocalizacaoComponent)
  }
  abrirModalClassificacao(){
    this.dialog.open(ModalClassificacaoComponent)
  }


  separatorKeysCodes: number[] = [ENTER, COMMA];
  localidadeCtrl = new FormControl('');
  filteredLocalidade: Observable<Localidade[]>;
  localidades: Localidade[] = [];
  allLocalidades: Localidade[] = [];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement> = {} as ElementRef;;


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    let local = this.allLocalidades.find(e => e.nome == value)
    if(local){
      if(this.verificarExistenciaLocal(local)){
        return
      }
      this.localidades.push(local)
    }
    event.chipInput!.clear();
    this.localidadeCtrl.setValue(null);
  }

  remove(item: Localidade): void {
    const index = this.localidades.findIndex(e => e.nome == item.nome);
    if (index >= 0) this.localidades.splice(index, 1);
  }
  verificarExistenciaLocal(local: Localidade){
    return this.localidades.find(e => e.nome == local.nome)
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    let local = this.allLocalidades.find(e => e.nome == event.option.viewValue)
    if(local){
      if(this.verificarExistenciaLocal(local)){
        return
      }
      this.localidades.push(local);
    } 
    this.fruitInput.nativeElement.value = '';
    this.localidadeCtrl.setValue(null);
  }

  private _filter(value: string): Localidade[] {
    const filterValue = value.toLowerCase();
    return this.allLocalidades.filter(local => local.nome.toLowerCase().includes(filterValue));
  }






  onSubmit() {
    if (this.modo == "cadastrar") {
      console.log(this.prod.addProduto(
        new Produto(this.nome as string,
          this.quantidade as number,
          this.classificacao as string,
          this.localidades,
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
        this.localidades,
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
    this.router.navigate(['/home'])

  }



  public upload(event: Event): void {
    let list = (event.target as HTMLInputElement).files?.item(0)
    const urlToBlob = window.URL.createObjectURL(list as Blob)
    this.imagem = this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob);
  }
  teste() {

  }
  darEntrada() {
    this.router.navigate(['/home/entrada/', this.codRota])
  }
  list: Produto = new Produto
  imagem?: SafeResourceUrl = ""


  opcaoUso?= ''
  nome?= ''
  quantidade?= 0
  classificacao?= ''
  descricao?= ''

  mostrarDados() {
    this.imagem = this.informacoes.imagem
    this.nome = this.informacoes.nome
    this.quantidade = this.informacoes.quantidadeTotal
    this.classificacao = this.informacoes.classificacao
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