import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { ButtonComponentComponent } from "../../../components/form-components/button-component/button-component.component";
import { TextareaComponentComponent } from "../../../components/form-components/textarea-component/textarea-component.component";
import { ModalFormComponent } from '../../../components/form-components/modal-form/modal-form.component'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { InputComponentComponent } from '../../../components/form-components/input-component/input-component.component';

@Component({
  selector: 'app-emprestimos',
  standalone: true,
  imports: [HeaderComponent,ButtonComponentComponent,TextareaComponentComponent,ModalFormComponent,CommonModule,FormsModule,InputComponentComponent],
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

    console.log('Modal confirmado!');
  }

  tipoDePagamento: string | null = '';
  parcela: number | null = null;
  motivo: string | null = '';

  PagamentosOptions = [
    'Boleto',
    'Conta Fornecedor',
  ];

  parcelaOptions: number[] = Array.from({ length: 36 }, (_, i) => i + 1);

  motivoOptions = [
    'Notebook',
    'Outros',
  ];

}
