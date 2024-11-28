import { Component } from '@angular/core';
import { ButtonComponentComponent } from "../../../components/form-components/button-component/button-component.component";
import { TextareaComponentComponent } from "../../../components/form-components/textarea-component/textarea-component.component";
import { ModalFormComponent } from '../../../components/form-components/modal-form/modal-form.component'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { InputComponentComponent } from '../../../components/form-components/input-component/input-component.component';
import { SelectComponentComponent } from '../../../components/form-components/select-component/select-component.component';
import { CardComponent } from '../../../components/form-components/card/card.component';


@Component({
  selector: 'app-emprestimos',
  standalone: true,
  imports: [ButtonComponentComponent,TextareaComponentComponent,ModalFormComponent,CommonModule,FormsModule,InputComponentComponent, SelectComponentComponent,CardComponent],
  templateUrl: './emprestimos.component.html',
  styleUrl: './emprestimos.component.scss'
})
export class EmprestimosComponent {
  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalVisible = false;
     document.body.style.overflow = ''
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

  dadosTabelaEmprestimo = [
    { nParcelas: 6, valorTotal: '2.500', status: 'Pendente de pagamento'}
  ];

  dadosTabelaDetalhamento = [
    { parcela: 1, valor: '416.00', mesAnoRef: '01/2023', status: 'Pago' },
    { parcela: 2, valor: '416.00', mesAnoRef: '02/2023', status: 'Pago' },
    { parcela: 3, valor: '416.00', mesAnoRef: '03/2023', status: 'Pago' },
    { parcela: 4, valor: '416.00', mesAnoRef: '04/2023', status: 'Pago' },
    { parcela: 5, valor: '416.00', mesAnoRef: '05/2023', status: 'Pago' },
    { parcela: 6, valor: '416.00', mesAnoRef: '06/2023', status: 'Pendente de pagamento' }
  ];
  

  selecionaTipoDePagamento(valor: string) {
    this.tipoDePagamento = valor;
    console.log("Valor atualizado no componente pai:", this.tipoDePagamento);
  }

  selecionaParcela(valor: number): void {
    this.parcela = valor;
    console.log("Valor atualizado no componente pai:", this.parcela);
  }

  selecionaMotivo(valor: string) {
    this.motivo = valor;
    console.log("Valor atualizado no componente pai:", this.motivo);
  }

}
