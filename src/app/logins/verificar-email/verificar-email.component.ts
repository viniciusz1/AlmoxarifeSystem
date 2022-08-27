import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-verificar-email',
  templateUrl: './verificar-email.component.html',
  styleUrls: ['./verificar-email.component.css']
})
export class VerificarEmailComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit(): void {
    // this.repeat();
  }

  sout = 0;
  modal = false;

  mask(){
    console.log(1)
    // if(!isNaN(this.sout)){
    //   // let teste = this.sout + "";
    //   this.sout = this.sout/10;
    // }
  }
  
  verificar(){
    this.modal = true;
  }

  modalOpen() {
    this.modal = !this.modal
  }  

// fim = 30;
// repeat(){
//   if (this.fim < 0) return
//   var meuInterval = setInterval(() => {
//     this.fim --;
//     if(this.fim <= 0){
//       clearInterval(meuInterval);
//     }
//   }, 1000);
  
// };

// verificar(){
//   console.log(1)
//         let user = localStorage.getItem("USER") as string;
//         let telefone = localStorage.getItem("TELEFONE") as string;
//         console.log(user)
//         if(user && telefone){
//           this.usuarioService.setUser(user , telefone);
//           localStorage.setItem("USUARIO", user)
//           let senha = this.usuarioService.getListaUser().find(lista => lista.usuario == user)?.senha as string;
//           localStorage.setItem("SENHA", senha)
//           this.router.navigate(['/home']);
//         }
// }






}
