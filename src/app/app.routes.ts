import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DespesaComponent } from './routes/financeiro/despesa/despesa.component';

export const routes: Routes = [

  { path: '', redirectTo: 'pderp/inicio', pathMatch: 'full' },
  { path: 'pderp/inicio', component: HomeComponent },

];
