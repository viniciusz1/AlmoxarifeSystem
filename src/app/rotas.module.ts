import { PosLoginComponent } from './pos-login/pos-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';



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
          canActivate: []
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
        }]
      },
      
      ]),
  ],
  exports: [RouterModule]
})
export class RotasModule { }
