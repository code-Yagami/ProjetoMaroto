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

  
}
