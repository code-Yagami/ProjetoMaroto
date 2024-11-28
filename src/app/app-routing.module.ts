import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AniversariosComponent } from './router/relatorios/aniversarios/aniversarios.component';
import { AniversariantesComponent } from './router/colaboradores/aniversariantes/aniversariantes.component';

const routes: Routes = [
  { path: '', redirectTo: '/relatorios/aniversarios', pathMatch: 'full' },

  { path: 'relatorios/aniversarios', component: AniversariosComponent },

  { path: 'colaboradores/aniversariantes', component: AniversariantesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
