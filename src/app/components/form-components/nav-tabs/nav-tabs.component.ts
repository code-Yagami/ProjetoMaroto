import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Tab {
[x: string]: any;
  id: string;
  label: string;
  link: string;
}

@Component({
  selector: 'app-nav-tabs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-tabs.component.html',
  styleUrl: './nav-tabs.component.scss'
})
export class NavTabsComponent {

  @Input() tabs: Tab[] = [];
  activeTab: string = '';

  ngOnInit() {
    if (this.tabs.length > 0) {
      this.activeTab = this.tabs[0].id; // Define o primeiro tab como ativo por padrão
    }
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
