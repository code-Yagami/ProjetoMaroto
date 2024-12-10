import { Component } from '@angular/core';
import { CardComponent } from "../../../components/form-components/card/card.component";
@Component({
  selector: 'app-aniversarios',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './aniversariantes.component.html',
  styleUrls: ['./aniversariantes.component.scss']
})
export class AniversariantesComponent {
openNovo() {
throw new Error('Method not implemented.');
}
  selectedCity: string = '';
  selectedMonth: string = '';

  cidades: string[] = [
    'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Porto Alegre',
    'Curitiba', 'Fortaleza', 'Recife', 'Manaus', 'Brasília', 'Belém', 'Goiânia'
  ];

  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
}
