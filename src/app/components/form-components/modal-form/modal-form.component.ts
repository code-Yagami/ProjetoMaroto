import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponentComponent } from "../button-component/button-component.component";

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [CommonModule, ButtonComponentComponent],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.scss'
})
export class ModalFormComponent {

  @Input() isVisible = false;
  @Input() title: string = 'Modal Título';
  @Input() closeButtonText: string = 'Fechar';
  @Input() confirmButtonText: string = 'Confirmar';

  @Output() confirm = new EventEmitter<void>();
  @Output() closeEvent = new EventEmitter<void>();

  close() {
    this.isVisible = false;
    this.closeEvent.emit();
  }

  onConfirm() {
    this.confirm.emit();
    this.close();
  }

}
