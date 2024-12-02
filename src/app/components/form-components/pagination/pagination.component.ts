import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  @Input() totalItems: number = 0; // Total de itens
  @Input() pageSize: number = 10; // Tamanho da página
  @Output() pageChange = new EventEmitter<number>(); // Emite a página selecionada

  currentPage: number = 1; // Página atual
  totalPages: number = 0; // Total de páginas
  pages: number[] = []; // Array com as páginas

  ngOnInit(): void {
    this.calculateTotalPages();
    this.updatePages();
  }

  // Calcula o total de páginas
  private calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  }

  // Atualiza as páginas visíveis
  private updatePages(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Navega para a página selecionada
  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return; // Ignora se a página for inválida
    }
    this.currentPage = page;
    this.pageChange.emit(this.currentPage); // Emite o evento com a página selecionada
  }

  // Navega para a página anterior
  goToPrevious(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  // Navega para a próxima página
  goToNext(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }
}
