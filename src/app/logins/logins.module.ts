import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { alterarSenhaComponent } from './alterarSenha/alterarSenha.component';
import { VerificarEmailComponent } from './verificar-email/verificar-email.component';
import { FormsModule } from '@angular/forms';
import { RotasModule } from '../rotas.module';
import { PedidosModule } from '../pedidos/pedidos.module';
import { userEmailComponent } from './userEmail/userEmail.component';



@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    alterarSenhaComponent,
    VerificarEmailComponent,
    userEmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RotasModule,
    PedidosModule
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginsModule { }
