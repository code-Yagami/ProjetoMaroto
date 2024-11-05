import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Meu App Angular';
  description = 'Este é um exemplo de componente Angular.';

  showMessage(): void {
    alert('Bem-vindo ao meu app Angular!');
  }
}

