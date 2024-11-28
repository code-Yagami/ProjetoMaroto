import { InputComponentComponent } from './../../../components/form-components/input-component/input-component.component';
import { Component } from '@angular/core';
import { CardComponent } from '../../../components/form-components/card/card.component';
import { SelectComponentComponent } from '../../../components/form-components/select-component/select-component.component';
import { TableComponent } from '../../../components/form-components/table/table.component';

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [InputComponentComponent, CardComponent, SelectComponentComponent, TableComponent],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.scss'
})
export class LivrosComponent {

  statusOptions = [
    'Disponível',
    'Não Disponível',
    'Em Atraso',
  ];

  tableData = [
    { Nome: 'x', Autor: 'John Doe', Editora: 'João', Edição: '2.000', Status: 'Active'},
    { Nome: 'y', Autor: 'John Doe', Editora: 'João', Edição: '2.000', Status: 'Active'}
  ];

}
