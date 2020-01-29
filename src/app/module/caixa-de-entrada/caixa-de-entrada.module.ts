import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SheredModule } from 'src/app/components/shered.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { EmailService } from 'src/app/services/email.service';



@NgModule({
  declarations: [
    CaixaDeEntradaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SheredModule,
    CaixaDeEntradaRoutingModule
  ],
  providers: [
    EmailService
  ]
})
export class CaixaDeEntradaModule { }
