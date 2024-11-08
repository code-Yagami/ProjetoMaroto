import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-component.component.html',
  styleUrl: './button-component.component.scss'
})
export class ButtonComponentComponent {
  @Input() textoBotao!: string;
  @Input() tipoBotao!: string;
}
