import { Component } from '@angular/core';
import { CardComponent } from "../../../../../components/form-components/card/card.component";
import { NavTabsComponent } from "../../../../../components/form-components/nav-tabs/nav-tabs.component";

@Component({
  selector: 'app-dados-financeiros',
  standalone: true,
  imports: [CardComponent, NavTabsComponent],
  templateUrl: './dados-financeiros.component.html',
  styleUrl: './dados-financeiros.component.scss'
})
export class DadosFinanceirosComponent {

}
