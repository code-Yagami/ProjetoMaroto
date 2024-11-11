import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [],
  templateUrl: './input-component.component.html',
  styleUrl: './input-component.component.scss'
})
export class InputComponentComponent {
  @Input() idInput: string = '';
  @Input() nameInput: string = '';
  @Input() placeholderInput: string = '';
  @Input() typeInput: string = '';
}
