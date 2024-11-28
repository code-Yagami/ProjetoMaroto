import { Component } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { InputComponentComponent } from "../../../components/form-components/input-component/input-component.component";
import { ButtonComponentComponent } from "../../../components/form-components/button-component/button-component.component";
import { CardComponent } from "../../../components/form-components/card/card.component";
import { DataComponentComponent } from "../../../components/form-components/data-component/data-component.component";
import { NumberComponentComponent } from "../../../components/form-components/number-component/number-component.component";
import { TableComponent } from "../../../components/form-components/table/table.component";
@Component({
  selector: 'app-aniversarios',
  standalone: true,
  imports: [LayoutComponent, InputComponentComponent, ButtonComponentComponent, CardComponent, DataComponentComponent, NumberComponentComponent, TableComponent],
  templateUrl: './aniversarios.component.html',
  styleUrls: ['./aniversarios.component.scss']
})
export class AniversariosComponent {
openNovo() {
throw new Error('Method not implemented.');
}
  selectedCity: string = '';
  selectedMonth: string = '';

  cidades: string[] = [
    'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Porto Alegre',
    'Curitiba', 'Fortaleza', 'Recife', 'Manaus', 'Brasília', 'Belém', 'Goiânia'
  ];

  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
}
