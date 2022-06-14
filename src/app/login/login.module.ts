import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
        canActivate: []
      }
    ]),
  ]
})
export class LoginModule { }
