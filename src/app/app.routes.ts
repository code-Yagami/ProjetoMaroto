import { Routes } from '@angular/router';
import { InicioComponent } from './routes/inicio/inicio.component';
import { SenhaComponent } from './routes/administracao-acesso/senha/senha.component';
import { LoginComponent } from './components/login/login.component';
import { DespesaComponent } from './routes/financeiro/despesa/despesa.component';
import { AdiantamentosComponent } from './routes/pagamentos/adiantamentos/adiantamentos.component';
import { EmprestimosComponent } from './routes/pagamentos/emprestimos/emprestimos.component';
import { AniversariosComponent } from './routes/relatorios/aniversarios/aniversarios.component';
import { AniversariantesComponent } from './routes/colaboradores/aniversariantes/aniversariantes.component';
import { NovoDespesaComponent } from './routes/financeiro/despesa/crud/novo-despesa/novo-despesa.component';



export const routes: Routes = [
  { path: '', redirectTo: 'pderp/login', pathMatch: 'full' },
  { path: 'pderp/login', component: LoginComponent },

  {
    path: 'pderp/inicio',
    component: InicioComponent,
  },
  {
    path: 'pderp/acesso/senha',
    component: SenhaComponent
  },
  {
    path: 'pderp/financeiro/despesas',
    component: DespesaComponent
  },{
    path: 'pderp/financeiro/despesas/novo',
    component: NovoDespesaComponent
  },
  {
    path: 'pderp/pagamentos/adiantamentos',
    component: AdiantamentosComponent
  },
  {
    path: 'pderp/pagamentos/emprestimos',
    component: EmprestimosComponent
  },
  {
    path: 'pderp/relatorios/aniversarios',
    component: AniversariosComponent
  },
  {
    path: 'pderp/colaboradores/aniversariantes',
    component: AniversariantesComponent
  }

];
