import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-select-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-component.component.html',
  styleUrl: './select-component.component.scss'
})
export class SelectComponentComponent {
  @Input() listaRender!: string[] | null;
  @Output() seleciona = new EventEmitter<string>();

  onSelecionado(event: Event) {
    const valorSelecionado = (event.target as HTMLSelectElement).value;
    this.seleciona.emit(valorSelecionado);
  }
}
