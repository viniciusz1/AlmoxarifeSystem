import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        canActivate: []
      }
    ]),
    FormsModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
