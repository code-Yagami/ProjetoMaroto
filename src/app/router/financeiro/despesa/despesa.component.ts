import { Component, input } from '@angular/core';
import { LayoutComponent } from "../../../components/layout/layout.component";
import { RouterLink } from '@angular/router';
import { CardComponent } from "../../../components/form-components/card/card.component";
import { TableComponent } from '../../../components/form-components/table/table.component';
import { NovaDespesaComponent } from './modals/nova-despesa/nova-despesa.component';

@Component({
  selector: 'app-despesa',
  standalone: true,
  imports: [LayoutComponent, RouterLink, CardComponent, TableComponent, NovaDespesaComponent],
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
