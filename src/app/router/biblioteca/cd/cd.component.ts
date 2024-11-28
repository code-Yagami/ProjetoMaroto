import { Component } from '@angular/core';
import { TableComponent } from "../../../components/form-components/table/table.component";
import { CardComponent } from "../../../components/form-components/card/card.component";

@Component({
  selector: 'app-cd',
  standalone: true,
  imports: [TableComponent, CardComponent],
  templateUrl: './cd.component.html',
  styleUrl: './cd.component.scss'
})
export class CdComponent {

}
