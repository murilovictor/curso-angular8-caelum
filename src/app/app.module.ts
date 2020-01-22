import { ModuleRoteamento } from './app.routers';
import { CadastroComponent } from './module/cadastro/cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CaixaDeEntradaComponent } from './module/caixa-de-entrada/caixa-de-entrada.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    CaixaDeEntradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuleRoteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
