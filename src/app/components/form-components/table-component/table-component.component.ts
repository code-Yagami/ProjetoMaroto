import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.scss'
})
export class TableComponentComponent {
  @Input() headers: string[] = [];
  @Input() dados: any[] = [];
  @Input() chaves: string[] = [];
}
