import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { DespesaComponent } from './router/financeiro/despesa/despesa.component';
import { SenhaComponent } from './router/administracao-acesso/senha/senha.component';
import { InicioComponent } from './router/inicio/inicio/inicio.component';
import { AdiantamentosComponent } from './router/pagamentos/adiantamentos/adiantamentos.component';
import { LivrosComponent } from './router/biblioteca/livros/livros.component';
import { CdComponent } from './router/biblioteca/cd/cd.component';
import { HoleritesComponent } from './router/colaboradores/holerites/holerites.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pderp/login', pathMatch: 'full'},
  { path: 'pderp/login', component: LoginComponent},
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'pderp/inicio', component: InicioComponent},
      { path: 'pderp/financeiro/despesas', component: DespesaComponent },
      { path: 'pderp/acesso/senha', component: SenhaComponent },
      { path: 'pderp/pagamentos/adiantamentos', component: AdiantamentosComponent},
      { path: 'pderp/biblioteca/livros', component: LivrosComponent},
      { path: 'pderp/biblioteca/cd', component: CdComponent},
      { path: 'pderp/colaboradores/holerites', component: HoleritesComponent}
    ]
  }
];
