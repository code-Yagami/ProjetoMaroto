import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea-component',
  standalone: true,
  imports: [],
  templateUrl: './textarea-component.component.html',
  styleUrl: './textarea-component.component.scss'
})
export class TextareaComponentComponent {
  @Input() idInput: string = '';
  @Input() nameInput: string = '';
  @Input() placeholderInput: string = '';
}
