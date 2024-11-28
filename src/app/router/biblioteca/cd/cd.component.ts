import { InputComponentComponent } from './../../../components/form-components/input-component/input-component.component';
import { Component } from '@angular/core';
import { CardComponent } from '../../../components/form-components/card/card.component';
import { SelectComponentComponent } from '../../../components/form-components/select-component/select-component.component';
import { TableComponent } from '../../../components/form-components/table/table.component';

@Component({
  selector: 'app-cd',
  standalone: true,
  imports: [InputComponentComponent, CardComponent, SelectComponentComponent, TableComponent],
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CdComponent {
  statusOptions = [
    'Disponível',
    'Não Disponível',
    'Em Atraso',
  ];

  tipoOptions = [
    'Aplicações',
    'Desenvolvimento',
    'Servidores',
    'Sistema Operacional',
    'Outros',
  ];
}
