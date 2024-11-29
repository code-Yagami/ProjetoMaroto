import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { DespesaComponent } from './router/financeiro/despesa/despesa.component';
import { SenhaComponent } from './router/administracao-acesso/senha/senha.component';
import { InicioComponent } from './router/inicio/inicio/inicio.component';
import { AdiantamentosComponent } from './router/pagamentos/adiantamentos/adiantamentos.component';
import { LivrosComponent } from './router/biblioteca/livros/livros.component';
import { CdComponent } from './router/biblioteca/cd/cd.component';
import { AniversariosComponent } from './router/relatorios/aniversarios/aniversarios.component';
import { AniversariantesComponent } from './router/colaboradores/aniversariantes/aniversariantes.component';
import { CdComponent } from './router/biblioteca/cd/cd.component';
import { AdiantamentosComponent } from "./router/pagamentos/adiantamentos/adiantamentos.component";
import { EmprestimosComponent } from './router/pagamentos/emprestimos/emprestimos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pderp/login', pathMatch: 'full' },
  { path: 'pderp/login', component: LoginComponent },

  {
    path: 'pderp',
    component: LayoutComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'acesso/senha', component: SenhaComponent },
      { path: 'financeiro/despesas', component: DespesaComponent },
      { path: 'pagamentos/emprestimos', component: EmprestimosComponent },
      { path: 'pagamentos/adiantamentos', component: AdiantamentosComponent },
      { path: 'relatorios/aniversarios', component: AniversariosComponent },
      { path: 'colaboradores/aniversariantes', component: AniversariantesComponent },
      { path: 'biblioteca/cd', component: CdComponent },
      { path: 'pderp/biblioteca/livros', component: LivrosComponent},

    ]
  }
];
