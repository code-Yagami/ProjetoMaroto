import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meu App Angular';

  description = 'Este é um exemplo de componente Angular.';

  showMessage(): void {
    alert('Bem-vindo ao meu app Angular!');
  }
}
