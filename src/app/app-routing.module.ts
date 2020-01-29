import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const rotas: Routes = [
  {
    path: 'cadastro', 
    loadChildren: () => import('./module/cadastro/cadastro.module')
    .then(module => module.CadastroModule)
  }, 
  {
    path: 'inbox', 
    canActivate: [AuthGuard], 
    loadChildren: () => import('./module/caixa-de-entrada/caixa-de-entrada.module')
    .then(module => module.CaixaDeEntradaModule)
  },
  {
    path: 'login', loadChildren: () => import('./module/login/login.module')
    .then(module => module.LoginModule)
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'login'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
