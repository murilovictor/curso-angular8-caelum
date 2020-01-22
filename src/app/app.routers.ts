import { Routes, RouterModule } from '@angular/router';

import { CaixaDeEntradaComponent } from './module/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './module/cadastro/cadastro.component';

const rotas: Routes =  [
    {path: '', component: LoginComponent},
    {path: 'inbox', component: CaixaDeEntradaComponent},
    {path: 'cadastro', component: CadastroComponent}
]

export const ModuleRoteamento = RouterModule.forRoot(rotas);