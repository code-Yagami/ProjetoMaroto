import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CardComponent } from '../../../components/form-components/card/card.component';
import { TableComponent } from '../../../components/form-components/table/table.component';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { NovaDespesaComponent } from './modals/nova-despesa/nova-despesa.component';
import { NumberComponentComponent } from "../../../components/form-components/number-component/number-component.component";
import { DataComponentComponent } from "../../../components/form-components/data-component/data-component.component";
import { InteractiveTableComponentComponent } from "../../../components/form-components/interactive-table-component/interactive-table-component.component";
import { SelectComponentComponent } from '../../../components/form-components/select-component/select-component.component';
import { InputComponentComponent } from '../../../components/form-components/input-component/input-component.component';

@Component({
  selector: 'app-despesa',
  standalone: true,
  imports: [LayoutComponent, RouterLink, CardComponent, TableComponent, NovaDespesaComponent, NumberComponentComponent, DataComponentComponent, InteractiveTableComponentComponent, SelectComponentComponent, InputComponentComponent],
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
  isModalVisible = false;

  openNovo() {
    this.router.navigate(['/pderp/financeiro/despesas/nova-despesa']);  }



}
