import { ModuleRoteamento } from './app.routers';
import { CadastroComponent } from './module/cadastro/cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/login/login.component';
import { CaixaDeEntradaComponent } from './module/caixa-de-entrada/caixa-de-entrada.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormFieldDirective } from './components/form-group/form-field.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    CaixaDeEntradaComponent,
    FormGroupComponent,
    FormFieldDirective
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
