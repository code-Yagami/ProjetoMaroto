import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isDropdownVisible: any = {};

  toggleSubmenu(index: number) {
    const submenu = document.getElementsByClassName('submenu')[index] as HTMLElement;
    submenu.classList.toggle('open');
  }
}
