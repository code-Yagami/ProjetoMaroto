import { Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';

import { DespesaComponent } from './router/financeiro/despesa/despesa.component';
import { SenhaComponent } from './router/administracao-acesso/senha/senha.component';
import { InicioComponent } from './router/inicio/inicio/inicio.component';
import { AniversariosComponent } from './router/relatorios/aniversarios/aniversarios.component';
import { AniversariantesComponent } from './router/colaboradores/aniversariantes/aniversariantes.component';
import { AdiantamentosComponent } from "./router/pagamentos/adiantamentos/adiantamentos.component";
import { EmprestimosComponent } from './router/pagamentos/emprestimos/emprestimos.component';
import { ManutencaoColaboradoresComponent } from './router/colaboradores/manutencao-colaboradores/manutencao-colaboradores.component';
import { HoleritesComponent } from './router/colaboradores/holerites/holerites.component';
import { LivrosComponent } from './router/biblioteca/livros/livros.component';
import { CdComponent } from './router/biblioteca/cd/cd.component';
import { EditarCurriculoComponent } from './router/colaboradores/manutencao-colaboradores/editar-curriculo/editar-curriculo.component';
import { DadosFinanceirosComponent } from './router/colaboradores/manutencao-colaboradores/editar-curriculo/dados-financeiros/dados-financeiros.component';
import { CargosPretendidosComponent } from './router/colaboradores/manutencao-colaboradores/editar-curriculo/editar-cargos-pretendidos/cargos-pretendidos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pderp/login', pathMatch: 'full' },
  { path: 'pderp/login', component: LoginComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'pderp/inicio', component: InicioComponent },
      { path: 'pderp/acesso/senha', component: SenhaComponent },
      { path: 'pderp/financeiro/despesas', component: DespesaComponent },
      { path: 'pderp/pagamentos/emprestimos', component: EmprestimosComponent },
      { path: 'pderp/pagamentos/adiantamentos', component: AdiantamentosComponent },
      { path: 'pderp/relatorios/aniversarios', component: AniversariosComponent },
      { path: 'pderp/colaboradores/aniversariantes', component: AniversariantesComponent },
      { path: 'pderp/colaboradores/manutencao-colaboradores', component: ManutencaoColaboradoresComponent },
      { path: 'pderp/colaboradores/holerites', component: HoleritesComponent},
      { path: 'pderp/biblioteca/cd', component: CdComponent },
      { path: 'pderp/biblioteca/livros', component: LivrosComponent},
      { path: 'pderp/colaboradores/manutencao-colaboradores/editar-curriculo', component: EditarCurriculoComponent},
      { path: 'pderp/colaboradores/manutencao-colaboradores/editar-curriculo/dados-financeiros', component: DadosFinanceirosComponent},
      { path: 'pderp/colaboradores/manutencao-colaboradores/cargos-pretendidos', component: CargosPretendidosComponent},
    ]
  }
];
