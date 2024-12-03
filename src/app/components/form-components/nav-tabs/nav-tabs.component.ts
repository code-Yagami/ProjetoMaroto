import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Tab {
  id: string;
  label: string;
}

@Component({
  selector: 'app-nav-tabs',
  standalone: true,
  imports: [CommonModule],
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
