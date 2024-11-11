import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { ButtonComponentComponent } from "../../../components/form-components/button-component/button-component.component";
import { ModalFormComponent } from '../../../components/form-components/modal-form/modal-form.component'
import { InputComponentComponent } from "../../../components/form-components/input-component/input-component.component";
import { TextareaComponentComponent } from "../../../components/form-components/textarea-component/textarea-component.component";

@Component({
  selector: 'app-adiantamentos',
  standalone: true,
  imports: [HeaderComponent, ButtonComponentComponent, ModalFormComponent, InputComponentComponent, TextareaComponentComponent],
  templateUrl: './adiantamentos.component.html',
  styleUrl: './adiantamentos.component.scss'
})
export class AdiantamentosComponent {

  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  onModalConfirm() {
    // Lógica a ser executada ao confirmar o modal
    console.log('Modal confirmado!');
  }
}
