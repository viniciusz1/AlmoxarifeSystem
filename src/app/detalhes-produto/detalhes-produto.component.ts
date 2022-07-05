import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  select = ""
  constructor(private prod: ProdutosService,
    private router: Router) { }

  onSubmit(form: NgForm){
    this.prod.addProduto(form.value)
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}
