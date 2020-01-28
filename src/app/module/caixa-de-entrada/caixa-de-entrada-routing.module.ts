import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';


const caixaDeEntradaRoutes: Routes = [
  { path: '', component: CaixaDeEntradaComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(caixaDeEntradaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CaixaDeEntradaRoutingModule { }
