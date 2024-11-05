import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: 'app-despesa',
  standalone: true,
  imports: [HeaderComponent, SharedModule],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.scss'
})
export class DespesaComponent {

}
