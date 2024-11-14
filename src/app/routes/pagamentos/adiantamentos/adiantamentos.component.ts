import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { ButtonComponentComponent } from '../../../components/form-components/button-component/button-component.component';
import { ModalFormComponent } from '../../../components/form-components/modal-form/modal-form.component';
import { InputComponentComponent } from '../../../components/form-components/input-component/input-component.component';
import { TextareaComponentComponent } from '../../../components/form-components/textarea-component/textarea-component.component';
import { CommonModule } from '@angular/common';
import { AlertComponent } from "../../../components/alert/alert.component";

@Component({
  selector: 'app-adiantamentos',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonComponentComponent,
    ModalFormComponent,
    InputComponentComponent,
    TextareaComponentComponent,
    CommonModule,
    AlertComponent
],
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

      /*
      sfddsfdsofdsf
      sdfpdsklfpkldspfldsf
      sgofkgokfdgkofdg
      sdfkdsfokdsfsdf
      */

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
