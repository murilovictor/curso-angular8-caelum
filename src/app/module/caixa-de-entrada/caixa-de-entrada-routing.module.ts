import { InboxViewComponent } from './../inbox-view/inbox-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';


const caixaDeEntradaRoutes: Routes = [
  { path: '', component: CaixaDeEntradaComponent }, 
  {
    path: ':id', component: InboxViewComponent
  },
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
