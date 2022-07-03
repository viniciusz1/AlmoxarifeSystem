import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  select = ""
  constructor() { }

  onSubmit(form: NgForm){
    console.log(this.select)
    console.log(form)
  }

  ngOnInit(): void {
  }

}
