

import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule}  from '@angular/forms';
import { HttpClient, HttpClientModule, HttpInterceptor } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuarioComponent } from './componente/usuario/usuario.component';



export const appRouts: Routes = [

  //Rotas
  {path : 'home', component : HomeComponent}, //home
  {path : 'login', component : LoginComponent}, //login
  {path: '', component : LoginComponent},
  {path: 'userList', component : UsuarioComponent}

];

export const routes : ModuleWithProviders<any>  = RouterModule.forRoot(appRouts);




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
