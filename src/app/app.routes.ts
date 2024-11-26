import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DespesaComponent } from './router/financeiro/despesa/despesa.component';
import { NovaDespesaComponent } from './router/financeiro/despesa/modals/nova-despesa/nova-despesa.component';
import { SenhaComponent } from './router/administracao-acesso/senha/senha.component';
import { InicioComponent } from './router/inicio/inicio/inicio.component';
import { AdiantamentosComponent } from './router/pagamentos/adiantamentos/adiantamentos.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'pderp/inicio', pathMatch: 'full' },
      { path: 'pderp/financeiro/despesas', component: DespesaComponent },
      { path: 'pderp/acesso/senha', component: SenhaComponent },
      { path: 'pderp/pagamento/andiantamentos', component: AdiantamentosComponent}
    ]
  }
];
