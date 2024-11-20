import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  data = [
    { id: 1, name: 'João', role: 'Desenvolvedor', email: 'joao@example.com' },
    { id: 2, name: 'Maria', role: 'Designer', email: 'maria@example.com' },
    { id: 3, name: 'José', role: 'Gerente', email: 'jose@example.com' },
  ];

  // Funções para os botões
  onEdit(id: number) {
    console.log('Editando item', id);
  }

  onDelete(id: number) {
    console.log('Deletando item', id);
  }

  onView(id: number) {
    console.log('Consultando item', id);
  }
}
