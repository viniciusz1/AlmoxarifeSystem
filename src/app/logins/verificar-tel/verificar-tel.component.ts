import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-verificar-tel',
  templateUrl: './verificar-tel.component.html',
  styleUrls: ['./verificar-tel.component.css']
})
export class VerificarTelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
//  setTimeout(()=>{                           //<<<---using ()=> syntax
    // this.messageSuccess = false;
// }, 3000);
  
fim = 30;
repeat(){
  if (this.fim < 0) return
  setInterval(() => {
    this.fim --;
  }, 1000);
};






}
