import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      senhaAtual: ['', Validators.required],
      novaSenha: ['', Validators.required],
      confirmarNovaSenha: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
        console.log(this.loginForm.value);
        console.log('Dados do Formulário:', formData);

    } else {

      this.loginForm.markAllAsTouched();
    }
  }
}

