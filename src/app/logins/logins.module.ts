import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TelefoneComponent } from './telefone/telefone.component';
import { VerificarTelComponent } from './verificar-tel/verificar-tel.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    TelefoneComponent,
    VerificarTelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginsModule { }
