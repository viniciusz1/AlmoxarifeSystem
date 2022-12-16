import { ModalClassificacaoComponent } from './../modal-classificacao/modal-classificacao.component';
import { ModalLocalizacaoComponent } from './../modal-localizacao/modal-localizacao.component';
import { Localidade } from './../../shared/localidade.model';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER, K } from '@angular/cdk/keycodes';
import { Observable, startWith } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Produto } from 'src/app/shared/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Dialog } from '@angular/cdk/dialog';
import { LocalizacaoService } from 'src/app/services/localizacao.service';
import { ClassificacaoService } from 'src/app/services/classificacao.service';
import { Classificacao } from 'src/app/shared/classificacao.model';
import { HttpClient } from '@angular/common/http';

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

  Dialog: MatDialog | undefined = undefined;


  constructor(
    private prod: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private local: LocalizacaoService,
    private classe: ClassificacaoService,
    private http: HttpClient
    ) {
      if(this.disabled){
        this.classificadaCtrl.disabled;
      }
      this.local.getAllLocalizacoes()
      .subscribe({
        next: e => {
          for(let i of e){
            this.allLocalidades.push(i)
          }
        }
      })

      this.Dialog = dialog
      this.Dialog.afterAllClosed.subscribe(e => {
        this.local.getAllLocalizacoes()
      .subscribe({
        next: e => {
          this.allLocalidades = [];
          for(let i of e){
            this.allLocalidades.push(i)
          }
        }
      })
      })

      this.classe.getAllClassificacoes()
      .subscribe({
        next: e => {
          for(let i of e){
            this.allClassificacoes.push(i)
          }
        }
      })

      this.Dialog = dialog
      this.Dialog.afterAllClosed.subscribe(e => {
        this.classe.getAllClassificacoes()
      .subscribe({
        next: e => {
          this.allClassificacoes = [];
          for(let i of e){
            this.allClassificacoes.push(i)
          }
        }
      })
      })

    this.filteredLocalidade = this.localidadeCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allLocalidades.slice())),
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
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

  classificadaCtrl = new FormControl('');
  classificadas: Classificacao[] = [];
  allClassificacoes: Classificacao[] = [];
  classificacao?= "";
  testeImage: FileList | undefined = undefined;

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

  verificarExistenciaClasse(classif: Classificacao){
    return this.classificadas.find(e => e.nome == classif.nome)
  }

  selectedClasse(event: MatAutocompleteSelectedEvent): void {
    let classif = this.allClassificacoes.find(e => e.nome == event.option.viewValue)
    if(classif){
      if(this.verificarExistenciaClasse(classif)){
        return
      }
    }

    this.classificadaCtrl.setValue(event.option.value.nome);
  }

  private _filter(value: string): Localidade[] {
    const filterValue = value.toLowerCase();
    return this.allLocalidades.filter(local => local.nome?.toLowerCase().includes(filterValue));
  }




  onSubmit() {
    if (this.modo == "cadastrar") {
      const formData: FormData = new FormData();
      formData.append('file',this.testeImage?.item(0) as Blob);
      formData.append('nome', this.nome as string);
      formData.append('quantidadeTotal', this.quantidade?.toString() as string);
      formData.append('classificacao', JSON.stringify({'codigo': 1, 'nome': 'rtwe'}));
      formData.append('localizacoes', JSON.stringify(this.localidades));
      formData.append('opcaoUso', this.opcaoUso as string);
      formData.append('descricao', this.descricao as string);
      console.log(formData.getAll('classificacao'))
      this.http.post("http://localhost:8080/produtos", formData)
      .subscribe({
        next: e => {
          console.log(e)
        },
        error: e => {
          console.error(e)
        }
      })
    } else if (this.modo == "editar") {
      this.prod.changeProduto(new Produto(this.nome as string,
        this.quantidade as number,
        this.allClassificacoes.find(e => e.nome == this.classificadaCtrl.value as string) as Classificacao,
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
    this.openSnackBar("Produto Editado com sucesso!", "ok")
    }
   // this.router.navigate(['/home'])

  }


  public upload(event: Event): void {
    let list = (event.target as HTMLInputElement).files
    this.testeImage = list as FileList;
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
  descricao?= ''

  mostrarDados() {
    this.imagem = this.informacoes.imagem
    this.nome = this.informacoes.nome
    this.quantidade = this.informacoes.quantidadeTotal
    this.classificacao = this.informacoes.classificacao?.nome
    if(this.informacoes.opcaoUso == "Descartavel"){
      this.opcaoUso = "0"
    }else{
      this.opcaoUso = "1"
    }
    this.descricao = this.informacoes.descricao
    this.localidades = this.informacoes.localizacoes as Localidade[]
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
