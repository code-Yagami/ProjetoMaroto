import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { PaginationComponent } from '../pagination/pagination.component';
=======
import { Router } from '@angular/router';
>>>>>>> feat/27-adicionar-link-no-botao-de-editar-tela-de-manuntencao-de-colaboradores-levando-para-a

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormsModule, CommonModule, PaginationComponent],
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
  @Input() editButtonLink: string = '';

  constructor(private router: Router) {}

  onEdit(row: any) {
    console.log('Editando:', row);
    if (this.editButtonLink) {
      this.router.navigate([this.editButtonLink]);
    }
  }

  onDelete(row: any) {
    console.log('Deletando:', row);
  }

  onView(row: any) {
    console.log('Visualizando:', row);
  }
  
  onPageChange(page: number): void {
    console.log('Página atual:', page);
    // Atualize os dados com base na página selecionada
  }
  
}
