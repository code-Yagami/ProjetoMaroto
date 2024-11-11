import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { ButtonComponentComponent } from "../../../components/form-components/button-component/button-component.component";
import { InputComponentComponent } from "../../../components/form-components/input-component/input-component.component";

@Component({
  selector: 'app-senha',
  standalone: true,
  imports: [HeaderComponent, ButtonComponentComponent, InputComponentComponent],
  templateUrl: './senha.component.html',
  styleUrl: './senha.component.scss'
})
export class SenhaComponent {
  acaoBt(){
    console.log("teste")
  }
}
