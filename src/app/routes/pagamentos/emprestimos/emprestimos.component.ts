import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { ButtonComponentComponent } from "../../../components/form-components/button-component/button-component.component";
import { InputComponentComponent } from "../../../components/form-components/input-component/input-component.component";
import { TextareaComponentComponent } from "../../../components/form-components/textarea-component/textarea-component.component";
import { ModalFormComponent } from '../../../components/form-components/modal-form/modal-form.component'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-emprestimos',
  standalone: true,
  imports: [HeaderComponent,ButtonComponentComponent,ModalFormComponent,TextareaComponentComponent,InputComponentComponent,CommonModule,FormsModule],
  templateUrl: './emprestimos.component.html',
  styleUrl: './emprestimos.component.scss'
})
export class EmprestimosComponent {
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

  status: string | null = '';

  statusOptions = [
    'Boleto',
    'Conta Fornecedor',
  ];

}
