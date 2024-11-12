import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../../../components/header/header.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterLink } from '@angular/router';
import { NovoDespesaComponent } from './crud/novo-despesa/novo-despesa.component';

@Component({
  selector: 'app-despesa',
  standalone: true,
  imports: [HeaderComponent, SharedModule, FormsModule, CommonModule, RouterLink, NovoDespesaComponent],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.scss'
})
export class DespesaComponent {
  dataInicio: Date | null = null;
  dataFinal: Date | null = null;
  numero: number | null = null;
  status: string | null = '';
  colaborador: string | null = '';

  statusOptions = [
    'Todos',
    'Redigido',
    'Autorizado coordenador',
    'Autorizado Gerência',
    'Autorizado Gerência regional',
    'Aprovado para pagamento',
    'Pago',
    'Reprovada'
  ];
  router: any;

  openNovo() {
    this.router.navigate(['/pderp/financeiro/despesas/novo']);  }

}
