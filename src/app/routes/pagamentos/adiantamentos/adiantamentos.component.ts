import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { ButtonComponentComponent } from "../../../components/form-components/button-component/button-component.component";

@Component({
  selector: 'app-adiantamentos',
  standalone: true,
  imports: [HeaderComponent, ButtonComponentComponent],
  templateUrl: './adiantamentos.component.html',
  styleUrl: './adiantamentos.component.scss'
})
export class AdiantamentosComponent {

}
