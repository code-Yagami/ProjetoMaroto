import { Component } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
