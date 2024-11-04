import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { InicioComponent } from "./routes/inicio/inicio.component";
import { SenhaComponent } from "./routes/administracao-acesso/senha/senha.component";

export const routes: Routes = [
  { path: '', redirectTo: 'pderp/login', pathMatch: 'full' },
  { path: 'pderp/login', component: LoginComponent },
  { path: 'pderp/inicio', component: InicioComponent },
  { path: 'pderp/acesso/senha', component: SenhaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
