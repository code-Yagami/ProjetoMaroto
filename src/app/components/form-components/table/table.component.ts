import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from "../pagination/pagination.component";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {


 @Input() columns: string[] = []; // Colunas definidas externamente
  @Input() tableData: any[] = [];  // Dados da tabela
  @Input() showEditButton: boolean = false; // Controla a exibição do botão Editar
  @Input() editButtonTitle: string = 'Editar'; // Título do botão Editar
  @Input() showDeleteButton: boolean = false; // Controla a exibição do botão Deletar
  @Input() deleteButtonTitle: string = 'Deletar'; // Título do botão Deletar
  @Input() showViewButton: boolean = false; // Controla a exibição do botão Visualizar
  @Input() viewButtonTitle: string = 'Visualizar'; // Título do botão Visualizar

  onEdit(row: any) {
    console.log('Editando:', row);
  }

  onDelete(row: any) {
    console.log('Deletando:', row);
  }

  onView(row: any) {
    console.log('Visualizando:', row);
  }
  

  
}
