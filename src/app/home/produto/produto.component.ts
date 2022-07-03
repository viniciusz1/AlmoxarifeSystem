import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/produto.model';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input() produto: Produto = new Produto("1", "2","3","4", "5", "6", 7);

  constructor() { }

  ngOnInit(): void {
  }

}
