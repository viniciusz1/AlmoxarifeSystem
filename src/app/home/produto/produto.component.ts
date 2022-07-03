import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/produto.model';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input() produto: Produto = new Produto("1", "2","3","5");

  constructor() { }

  ngOnInit(): void {
    console.log(this.produto)
  }

}
