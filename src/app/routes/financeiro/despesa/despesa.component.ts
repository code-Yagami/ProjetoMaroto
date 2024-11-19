import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../components/header/header.component';
import { ButtonComponentComponent } from '../../../components/form-components/button-component/button-component.component';
import { InputComponentComponent } from '../../../components/form-components/input-component/input-component.component';
import { DataComponentComponent } from '../../../components/form-components/data-component/data-component.component';
import { NumberComponentComponent } from '../../../components/form-components/number-component/number-component.component';
import { SelectComponentComponent } from '../../../components/form-components/select-component/select-component.component';
import { TableComponentComponent } from '../../../components/form-components/table-component/table-component.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-despesa',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule, ButtonComponentComponent,InputComponentComponent,DataComponentComponent,NumberComponentComponent, SelectComponentComponent,TableComponentComponent, RouterLink],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.scss'
})
export class DespesaComponent {
  dataInicio: Date | null = null;
  dataFinal: Date | null = null;
  numero: number | null = null;
  status: string | null = '';
  colaborador: string | null = '';
  selectedDate: string | null = null;

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
  router: any;

    dadosTabela = [
    { numero: 12345, datainicial: '2024-11-01', colaborador: 'João Silva', clienteProjeto: 'Cliente A - Projeto X', centroCusto: 'Financeiro', status: 'Autorizado coordenador' },
    { numero: 67890, datainicial: '2024-10-15', colaborador: 'Maria Souza', clienteProjeto: 'Cliente B - Projeto Y', centroCusto: 'Marketing', status: 'Aprovado para pagamento' },
    { numero: 11223, datainicial: '2024-09-20', colaborador: 'Carlos Pereira', clienteProjeto: 'Cliente C - Projeto Z', centroCusto: 'TI', status: 'Pago' },
    { numero: 33445, datainicial: '2024-08-05', colaborador: 'Juliana Costa', clienteProjeto: 'Cliente D - Projeto W', centroCusto: 'Recursos Humanos', status: 'Reprovada' },
    { numero: 55667, datainicial: '2024-07-10', colaborador: 'Ricardo Almeida', clienteProjeto: 'Cliente E - Projeto V', centroCusto: 'Financeiro', status: 'Redigido' },
    { numero: 88990, datainicial: '2024-06-30', colaborador: 'Ana Lima', clienteProjeto: 'Cliente F - Projeto U', centroCusto: 'TI', status: 'Autorizado Gerência' },
    { numero: 22334, datainicial: '2024-05-25', colaborador: 'Felipe Oliveira', clienteProjeto: 'Cliente G - Projeto T', centroCusto: 'Marketing', status: 'Autorizado Gerência regional' },
    { numero: 77899, datainicial: '2024-04-12', colaborador: 'Beatriz Martins', clienteProjeto: 'Cliente H - Projeto S', centroCusto: 'Jurídico', status: 'Aprovado para pagamento' },
    { numero: 44556, datainicial: '2024-03-18', colaborador: 'Lucas Ribeiro', clienteProjeto: 'Cliente I - Projeto R', centroCusto: 'Financeiro', status: 'Autorizado coordenador' },
    { numero: 99887, datainicial: '2024-02-02', colaborador: 'Mariana Costa', clienteProjeto: 'Cliente J - Projeto Q', centroCusto: 'Recursos Humanos', status: 'Reprovada' },
    { numero: 66778, datainicial: '2024-01-10', colaborador: 'Rodrigo Pereira', clienteProjeto: 'Cliente K - Projeto P', centroCusto: 'TI', status: 'Pago' }
];


  open(){

  }

  handleDateChange(newDate: string) {
    console.log('Selected date:', newDate);
    this.selectedDate = newDate;
  }

  onValueChange(newValue: number) {
    console.log('Número do registro:', newValue);
    this.numero = newValue;
  }

  selecionaStatus(valor: string) {
    this.status = valor;
    console.log("Valor atualizado no componente pai:", this.status);
  }

}
