import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DespesaComponent } from './router/financeiro/despesa/despesa.component';

export const routes: Routes = [

  { path: '', redirectTo: 'pderp/inicio', pathMatch: 'full' },
  { path: 'pderp/inicio', component: LayoutComponent },

  { path: 'pderp/financeiro/despesas',
    component: DespesaComponent},


];
