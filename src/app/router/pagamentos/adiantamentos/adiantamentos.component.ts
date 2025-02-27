import { Component } from '@angular/core';
import { CardComponent } from '../../../components/form-components/card/card.component';
import { ButtonComponentComponent } from '../../../components/form-components/button-component/button-component.component';
import { ModalFormComponent } from '../../../components/form-components/modal-form/modal-form.component';
import { InputComponentComponent } from '../../../components/form-components/input-component/input-component.component';
import { TextareaComponentComponent } from '../../../components/form-components/textarea-component/textarea-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adiantamentos',
  standalone: true,
  imports: [CardComponent,ButtonComponentComponent, ModalFormComponent, InputComponentComponent, TextareaComponentComponent, CommonModule,],
  templateUrl: './adiantamentos.component.html',
  styleUrl: './adiantamentos.component.scss',
})
export class AdiantamentosComponent {
  mostrarMensagem: boolean = false;
  tipoAlerta!: string;
  textoMensagem!: string;
  testeAlerta: number = 1;

  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  onModalConfirm() {
    console.log('Modal confirmado!');

    // teste da mensagem de alerta
    if (this.testeAlerta == 1) {

      this.tipoAlerta = 'sucesso';
      this.textoMensagem = 'Salvo com sucesso!';
    } else {
      this.tipoAlerta = 'erro';
      this.textoMensagem = 'Erro ao salvar!';
    }

    this.mostrarMensagem = true;
    setTimeout(() => {
      this.mostrarMensagem = false;
    }, 5000);
  }
}
