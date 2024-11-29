import { Component } from '@angular/core';
import { CardComponent } from '../../../components/form-components/card/card.component';
import { TableComponent } from '../../../components/form-components/table/table.component';

@Component({
  selector: 'app-holerites',
  standalone: true,
  imports: [CardComponent, TableComponent],
  templateUrl: './holerites.component.html',
  styleUrl: './holerites.component.scss'
})
export class HoleritesComponent {


  tableData = [
    { mesDeReferencia: '07/2023', tipoHolerite: 'Mensal' },
    { mesDeReferencia: '10/2023', tipoHolerite: 'Mensal' }
  ];
}
