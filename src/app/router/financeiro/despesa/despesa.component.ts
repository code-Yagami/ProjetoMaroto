import { Component, input } from '@angular/core';
import { LayoutComponent } from "../../../components/layout/layout.component";
import { RouterLink } from '@angular/router';
import { CardComponent } from "../../../components/form-components/card/card.component";
import { TableComponent } from '../../../components/form-components/table/table.component';

@Component({
  selector: 'app-despesa',
  standalone: true,
  imports: [LayoutComponent, RouterLink, CardComponent, TableComponent],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.scss'
})
export class DespesaComponent {

}
