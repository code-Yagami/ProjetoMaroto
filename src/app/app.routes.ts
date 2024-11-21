import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DespesaComponent } from './router/financeiro/despesa/despesa.component';
import { NovaDespesaComponent } from './router/financeiro/despesa/modals/nova-despesa/nova-despesa.component';
import { SenhaComponent } from './router/administracao-acesso/senha/senha.component';

export const routes: Routes = [

  { path: '', redirectTo: 'pderp/inicio', pathMatch: 'full' },
  { path: 'pderp/inicio', component: LayoutComponent },

  { path: 'pderp/acesso/senha',
    component: SenhaComponent},


  { path: 'pderp/financeiro/despesas',
    component: DespesaComponent},
    { path: 'pderp/financeiro/despesas/nova-despesa',
      component: NovaDespesaComponent},


];
