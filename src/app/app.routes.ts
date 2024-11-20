import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DespesaComponent } from './router/financeiro/despesa/despesa.component';

export const routes: Routes = [

  { path: '', redirectTo: 'pderp/inicio', pathMatch: 'full' },
  { path: 'pderp/inicio', component: HomeComponent },

  { path: 'pderp/financeiro/despesas',
    component: DespesaComponent},


];
