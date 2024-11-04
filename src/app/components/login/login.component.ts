import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    const validEmail = 'user';
    const validPassword = '123';

    if (this.email === validEmail && this.password === validPassword) {
      this.router.navigate(['/pderp/inicio']);
    } else {
      this.errorMessage = 'E-mail ou senha inválidos!';
    }
  }
}
