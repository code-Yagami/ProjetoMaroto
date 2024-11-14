import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-data-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-component.component.html',
  styleUrl: './data-component.component.scss'
})
export class DataComponentComponent {
  dateValue: string = ''; // Variável para armazenar o valor da data

  // Criando um EventEmitter para emitir a data para o componente pai
  @Output() dateChange = new EventEmitter<string>();

  // Método para enviar o valor da data para o componente pai
  getDate() {
    this.dateChange.emit(this.dateValue); // Emitir o valor da data para o componente pai
  }
}
