import { Routes } from '@angular/router';
import { InicioComponent } from './routes/inicio/inicio.component';
import { SenhaComponent } from './routes/senha/senha.component';

export const routes: Routes = [
  {
    path: 'pderp/inicio',
    component: InicioComponent,
  },
  {
    path: 'pderp/acesso/senha',
    component: SenhaComponent
  }
];
