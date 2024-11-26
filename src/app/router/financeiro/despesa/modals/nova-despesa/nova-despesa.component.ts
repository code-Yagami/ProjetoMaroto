import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../../components/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InputComponentComponent } from '../../../../../components/form-components/input-component/input-component.component';
import { ButtonComponentComponent } from '../../../../../components/form-components/button-component/button-component.component';
import { ModalFormComponent } from '../../../../../components/form-components/modal-form/modal-form.component';
import { DespesaComponent } from '../../despesa.component';
import { CardComponent } from '../../../../../components/form-components/card/card.component';

@Component({
  selector: 'app-nova-despesa',
  standalone: true,
  imports: [LayoutComponent, FormsModule, CommonModule, RouterLink, InputComponentComponent, ButtonComponentComponent,ModalFormComponent, DespesaComponent, CardComponent ],
  templateUrl: './nova-despesa.component.html',
  styleUrl: './nova-despesa.component.scss'
})
export class NovaDespesaComponent {

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



  closeModal() {
    this.isModalVisible = false;
  }
  openModal() {
    this.isModalVisible = true;
  }
}
