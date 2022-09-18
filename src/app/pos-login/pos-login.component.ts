import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-pos-login',
  templateUrl: './pos-login.component.html',
  styleUrls: ['./pos-login.component.css']
})
export class PosLoginComponent implements OnInit {

  constructor(private router: Router) { 
  }
  numeroCarrinho=0
  pesquisaProduto=''
  titulo="home"
  openCart(){

  }
  modalOpen(teste: boolean){

  }
  ngOnInit(): void {
    this.router.events.pipe(
      filter((e: any): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((evt: RouterEvent) => {
      if (evt instanceof NavigationEnd) {
      }
    })
  }

}
