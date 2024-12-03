import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {


  @Input() columns: { header: string, key: string }[] = []; // Colunas com nomes de exibição e chaves
  @Input() tableData: any[] = [];  // Dados da tabela
  @Input() showEditButton: boolean = false; // Controla a exibição do botão Editar
  @Input() editButtonTitle: string = 'Editar'; // Título do botão Editar
  @Input() showDeleteButton: boolean = false; // Controla a exibição do botão Deletar
  @Input() deleteButtonTitle: string = 'Deletar'; // Título do botão Deletar
  @Input() showViewButton: boolean = false; // Controla a exibição do botão Visualizar
  @Input() viewButtonTitle: string = 'Visualizar'; // Título do botão Visualizar

  router: any;

  onEdit(row: any) {
    console.log('Editando:', row);
    this.router.navigate(['/pderp/colaboradores/manutencao-colaboradores/editar-curriculo']);
  }

  onDelete(row: any) {
    console.log('Deletando:', row);
  }

  onView(row: any) {
    console.log('Visualizando:', row);
  }
  

  
}
