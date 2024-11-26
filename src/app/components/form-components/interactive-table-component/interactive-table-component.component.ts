import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interactive-table-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interactive-table-component.component.html',
  styleUrl: './interactive-table-component.component.scss'
})
export class InteractiveTableComponentComponent {
  @Input() headers: string[] = [];
  @Input() dados: any[] = [];
  @Input() chaves: string[] = [];

  @Output() visualizar = new EventEmitter<any>();
  @Output() editar = new EventEmitter<any>();
}
