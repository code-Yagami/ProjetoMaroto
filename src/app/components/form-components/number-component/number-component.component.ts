import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './number-component.component.html',
  styleUrl: './number-component.component.scss'
})
export class NumberComponentComponent {

  @Input() label: string = 'Número:';
  @Input() value?: number;
  @Input() placeholder: string = '';

  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value ? Number(input.value) : undefined;
  }
}
