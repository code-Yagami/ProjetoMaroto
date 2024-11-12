import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';
import { InputComponentComponent } from "../../../../../components/form-components/input-component/input-component.component";
import { ButtonComponentComponent } from "../../../../../components/form-components/button-component/button-component.component";

@Component({
  selector: 'app-novo-despesa',
  standalone: true,
  imports: [HeaderComponent, SharedModule, FormsModule, CommonModule, RouterLink, NovoDespesaComponent, InputComponentComponent, ButtonComponentComponent],
  templateUrl: './novo-despesa.component.html',
  styleUrl: './novo-despesa.component.scss'
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
    'Reprovada'
  ];
}
