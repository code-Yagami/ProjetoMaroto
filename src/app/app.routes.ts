import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { DespesaComponent } from './router/financeiro/despesa/despesa.component';
import { SenhaComponent } from './router/administracao-acesso/senha/senha.component';
import { InicioComponent } from './router/inicio/inicio/inicio.component';
import { AniversariosComponent } from './router/relatorios/aniversarios/aniversarios.component';
import { AniversariantesComponent } from './router/colaboradores/aniversariantes/aniversariantes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pderp/login', pathMatch: 'full' },
  { path: 'pderp/login', component: LoginComponent },

  {
    path: 'pderp',
    component: LayoutComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'financeiro/despesas', component: DespesaComponent },
      { path: 'acesso/senha', component: SenhaComponent },
      { path: 'relatorios/aniversarios', component: AniversariosComponent },
      { path: 'colaboradores/aniversariantes', component: AniversariantesComponent },
    ]
  }
];
