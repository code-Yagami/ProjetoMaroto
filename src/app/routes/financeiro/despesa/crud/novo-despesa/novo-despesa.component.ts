import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  ButtonComponentComponent,
} from '../../../../../components/form-components/button-component/button-component.component';
import {
  InputComponentComponent,
} from '../../../../../components/form-components/input-component/input-component.component';
import { ModalFormComponent } from '../../../../../components/form-components/modal-form/modal-form.component';
import { HeaderComponent } from '../../../../../components/header/header.component';

@Component({
  selector: 'app-novo-despesa',
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule,
    CommonModule,
    RouterLink,
    NovoDespesaComponent,
    InputComponentComponent,
    ButtonComponentComponent,
    ModalFormComponent
],
  templateUrl: './novo-despesa.component.html',
  styleUrl: './novo-despesa.component.scss',
})
export class NovoDespesaComponent {
  dataInicio: Date | null = null;
  dataFinal: Date | null = null;
  numero: number | null = null;
  status: string | null = '';
  colaborador: string | null = '';

  statusOptions = [
    'Todos',
    'Redigido',
    'Autorizado coordenador',
    'Autorizado Gerência',
    'Autorizado Gerência regional',
    'Aprovado para pagamento',
    'Pago',
    'Reprovada',
  ];

  categoriaOptions =[
    'Administrativas',
    'Alimentação',
    'Aluguel',
    'Bancárias',
    'Luz',
    'Marketing',
    'Participação de lucro',
    'Patrimonial',
    'Pessoal',
    'Seguro/Previdência',
    'Serviços Extras',
    'Telefone',
    'Transporte',
    'Treinamentos',
    'Tributárias',
    'Viagens'
  ]

  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
