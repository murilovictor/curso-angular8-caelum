import { InboxViewComponent } from './inbox-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const rotas: Routes = [
  { path: '', redirectTo: 'view', component: InboxViewComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rotas)
  ],
  exports: [
    RouterModule
  ]
})
export class InboxViewRoutingModule { }
