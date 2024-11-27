import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AniversariosComponent } from './router/relatorios/aniversarios/aniversarios.component';
import { AniversariosColaboradoresComponent } from './router/relatorios/aniversarios-colaboradores/aniversarios-colaboradores.component';

const routes: Routes = [
  { path: '', redirectTo: '/relatorios/aniversarios', pathMatch: 'full' },
  { path: 'relatorios/aniversarios', component: AniversariosComponent },
  { path: 'relatorios/aniversarios-colaboradores', component: AniversariosColaboradoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
