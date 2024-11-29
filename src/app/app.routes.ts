import { Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';

import { DespesaComponent } from './router/financeiro/despesa/despesa.component';
import { SenhaComponent } from './router/administracao-acesso/senha/senha.component';
import { InicioComponent } from './router/inicio/inicio/inicio.component';
import { AniversariosComponent } from './router/relatorios/aniversarios/aniversarios.component';
import { AniversariantesComponent } from './router/colaboradores/aniversariantes/aniversariantes.component';
import { AdiantamentosComponent } from "./router/pagamentos/adiantamentos/adiantamentos.component";
import { EmprestimosComponent } from './router/pagamentos/emprestimos/emprestimos.component';
import { LivrosComponent } from './router/biblioteca/livros/livros.component';
import { CdComponent } from './router/biblioteca/cd/cd.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pderp/login', pathMatch: 'full' },
  { path: 'pderp/login', component: LoginComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'pderp/inicio', component: InicioComponent },
      { path: 'pderp/acesso/senha', component: SenhaComponent },
      { path: 'pderp/financeiro/despesas', component: DespesaComponent },
      { path: 'pderp/pagamentos/emprestimos', component: EmprestimosComponent },
      { path: 'pderp/pagamentos/adiantamentos', component: AdiantamentosComponent },
      { path: 'pderp/relatorios/aniversarios', component: AniversariosComponent },
      { path: 'pderp/colaboradores/aniversariantes', component: AniversariantesComponent },
      { path: 'pderp/biblioteca/cd', component: CdComponent },
      { path: 'pderp/biblioteca/livros', component: LivrosComponent}
    ]
  }
];
