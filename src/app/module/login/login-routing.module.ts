import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const loginRouting: Routes = [
  { path: '', component: LoginComponent }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(loginRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
