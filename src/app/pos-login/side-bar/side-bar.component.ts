import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    trigger('teste', [
      state('aberto', style({
        'width': '230px',
        'text-align': 'left'
      })),
      state('fechado', style({
        'width': '60px'
      })),
      transition('aberto <=> fechado', [
        animate('100ms')
      ]),
    ]),
  ]
})
export class SideBarComponent implements OnInit {

  constructor() { }

  // user = "atendente"
  // user = "supervisor"
  // user = "admin"
  user = "professor"
  state = "fechado";
  stateTxt= "fechado";
  usuario = localStorage.getItem("USUARIO");

  changeStatus(){
    if(this.state == "fechado"){
      this.state = "aberto"
      setTimeout(() => {
        this.stateTxt= "aberto";
      }, 85)
    }else{
      this.state = "fechado"
      this.stateTxt = "fechado"
    }
    console.log(this.state)
  }
  
  ngOnInit(): void {
    if(this.state == "fechado"){
      
    }
    if(this.usuario == "otavio"){
      this.user = "admin";
    }else if(this.usuario == "vinicius"){
      this.user = "supervisor"
    } else if(this.usuario == "camilly"){
      this.user = "atendente"
    }
  }
}
