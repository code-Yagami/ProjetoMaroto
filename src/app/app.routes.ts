import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { DespesaComponent } from './router/financeiro/despesa/despesa.component';
import { NovaDespesaComponent } from './router/financeiro/despesa/modals/nova-despesa/nova-despesa.component';
import { SenhaComponent } from './router/administracao-acesso/senha/senha.component';
import { InicioComponent } from './router/inicio/inicio/inicio.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'pderp/login', pathMatch: 'full'},
      { path: 'pderp/inicio', component: InicioComponent},
      { path: 'pderp/financeiro/despesas', component: DespesaComponent },
      { path: 'pderp/acesso/senha', component: SenhaComponent }
    ]
  }
];
