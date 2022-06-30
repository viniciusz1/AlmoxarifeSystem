import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginsModule } from './logins/logins.module';
import { LoginComponent } from './logins/login/login.component';
import { CadastroComponent } from './logins/cadastro/cadastro.component';
import { TelefoneComponent } from './logins/telefone/telefone.component';
import { VerificarTelComponent } from './logins/verificar-tel/verificar-tel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        canActivate: [],
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: []
      },
      {
        path: 'cadastro',
        component: CadastroComponent,
        canActivate: []
      },
      {
        path: 'cadastro/telefone',
        component: TelefoneComponent,
        canActivate: []
      },
      {
        path: 'cadastro/telefone/verificar',
        component: VerificarTelComponent,
        canActivate: []
      }
    ]),
    LoginsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
