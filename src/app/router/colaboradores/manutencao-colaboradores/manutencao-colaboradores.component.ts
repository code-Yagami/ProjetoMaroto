import { Component } from '@angular/core';
import { CardComponent } from '../../../components/form-components/card/card.component';
import { InputComponentComponent } from '../../../components/form-components/input-component/input-component.component';

@Component({
  selector: 'app-manutencao-colaboradores',
  standalone: true,
  imports: [CardComponent,InputComponentComponent],
  templateUrl: './manutencao-colaboradores.component.html',
  styleUrl: './manutencao-colaboradores.component.scss'
})
export class ManutencaoColaboradoresComponent {

}
