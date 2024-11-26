import { Component } from '@angular/core';

import { ButtonComponentComponent } from '../../../components/form-components/button-component/button-component.component';
import { InputComponentComponent } from '../../../components/form-components/input-component/input-component.component';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { CardComponent } from "../../../components/form-components/card/card.component";
import { NgForm } from '@angular/forms';
import { ModalFormComponent } from "../../../components/form-components/modal-form/modal-form.component";

@Component({
  selector: 'app-senha',
  standalone: true,
  imports: [ButtonComponentComponent, InputComponentComponent, LayoutComponent, CardComponent, ModalFormComponent],
  templateUrl: './senha.component.html',
  styleUrl: './senha.component.scss',
})
export class SenhaComponent {
  // Variáveis para armazenar os valores dos campos
  login: string = '';
  currentPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  // Função para lidar com o envio do formulário
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Lógica para envio do formulário ou chamada para o serviço
      console.log('Formulário enviado com sucesso!');
      console.log('Dados:', {
        login: this.login,
        currentPassword: this.currentPassword,
        newPassword: this.newPassword,
        confirmNewPassword: this.confirmNewPassword
      });

      // Aqui você pode chamar um serviço para alterar a senha, por exemplo:
      // this.authService.alterarSenha(this.login, this.currentPassword, this.newPassword).subscribe(response => {
      //   console.log(response);
      // });
    } else {
      console.log('Formulário inválido!');
    }
  }

  // Função para comparar a nova senha e a confirmação da nova senha
  isPasswordMatch(): boolean {
    return this.newPassword === this.confirmNewPassword;
  }
}
