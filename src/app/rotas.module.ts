import { VerificarTelComponent } from './logins/verificar-tel/verificar-tel.component';
import { LoginComponent } from './logins/login/login.component';
import { CadastroComponent } from './logins/cadastro/cadastro.component';
import { PosLoginComponent } from './pos-login/pos-login.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './pos-login/side-bar/side-bar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ConferenciaComponent } from './conferencia/conferencia.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PosLoginComponent,
        canActivate: [], children: [{
          path: '',
          component: HomeComponent,
          canActivate: [],
        },
        {
          path: 'perfil',
          component: PerfilComponent,
          canActivate: []
        },
        {  
          path: 'detalhes-produto',
          component: DetalhesProdutoComponent,
          canActivate: []
        },
        {  
          path: 'sidebar',
          component: SideBarComponent,
          canActivate: []
        },
        {
          path: 'realizar',
          component: ConferenciaComponent,
          canActivate: []
        }
      ]
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'telefone',
        component: CadastroComponent
      },
      {
        path: 'verificar-tel',
        component: VerificarTelComponent
      },
      

      ]),
  ],
  exports: [RouterModule]
})
export class RotasModule { }
