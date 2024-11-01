<<<<<<< HEAD
import { Routes } from '@angular/router';
import { InicioComponent } from './routes/inicio/inicio.component';

export const routes: Routes = [
  {
    path: 'pderp/inicio',
    component: InicioComponent,
  },
];
=======
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";

export const routes: Routes = [
  { path: '', redirectTo: 'pderp/login', pathMatch: 'full' },
  { path: 'pderp/login', component: LoginComponent }
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule { }
>>>>>>> origin/feat/tela-login-leonardo
