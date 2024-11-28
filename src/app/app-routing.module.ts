import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AniversariosComponent } from './router/relatorios/aniversarios/aniversarios.component';
import { AniversariantesComponent } from './router/colaboradores/aniversariantes/aniversariantes.component';
import { CdComponent } from './router/biblioteca/cd/cd.component';

const routes: Routes = [
  { path: '', redirectTo: '/relatorios/aniversarios', pathMatch: 'full' },

  { path: 'relatorios/aniversarios', component: AniversariosComponent },

  { path: 'colaboradores/aniversariantes', component: AniversariantesComponent },

  { path: 'biblioteca/cd', component: CdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
