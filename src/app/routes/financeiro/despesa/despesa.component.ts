import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../components/header/header.component';
import { ButtonComponentComponent } from '../../../components/form-components/button-component/button-component.component';

@Component({
  selector: 'app-despesa',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule, ButtonComponentComponent],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.scss'
})
export class DespesaComponent {
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
    'Reprovada'
  ];

  open(){

  }

}
