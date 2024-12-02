import { Component } from '@angular/core';

import { ButtonComponentComponent } from '../../../components/form-components/button-component/button-component.component';
import { CardComponent } from '../../../components/form-components/card/card.component';
import { PaginationComponent } from '../../../components/form-components/pagination/pagination.component';
import { SelectComponentComponent } from '../../../components/form-components/select-component/select-component.component';
import { TableComponent } from '../../../components/form-components/table/table.component';
import { InputComponentComponent } from './../../../components/form-components/input-component/input-component.component';

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [InputComponentComponent, CardComponent, SelectComponentComponent, TableComponent, ButtonComponentComponent, PaginationComponent],
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
    { nome: 'x', autor: 'A', editora: 'João', edição: 'A', status: 'Disponível'},
    { nome: 'y', autor: 'B', editora: 'João', edição: 'B', status: 'Não Disponível'}
  ];

  showEdit = true; // Controle de exibição dos botões
  showDelete = true;
  showView = true;
  editButtonTitle = 'Visualizar'; // Título personalizado para o botão Editar
  deleteButtonTitle = 'Lista Espera'; // Título personalizado para o botão Deletar
  viewButtonTitle = 'Solicitar';


  
}
