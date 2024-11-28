import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  // Controla o estado de cada submenu (true = aberto, false = fechado)
  openDropdowns: boolean[] = [];

  // Estrutura dos menus
  menuItems = [
    {
      label: 'Administração de Acesso',
      icon: 'assets/img-menu/administracao.png',
      submenu: [{ label: 'Alterar Senha', link: '/pderp/acesso/senha' }],
    },
    {
      label: 'Financeiro',
      icon: 'assets/img-menu/pagamento.png',
      submenu: [{ label: 'Despesas', link: '/pderp/financeiro/despesas' }],
    },
    {
      label: 'Pagamentos',
      icon: 'assets/img-menu/despesa.png',
      submenu: [
        { label: 'Adiantamentos', link: '/pderp/pagamentos/adiantamentos' },
        { label: 'Empréstimos', link: '/pderp/pagamentos/emprestimos' },
      ],
    },
    {
      label: 'Relatórios',
      icon: 'assets/img-menu/relatorio.png',
      submenu: [{ label: 'Aniversários', link: '/pderp/relatorios/aniversarios' }],
    },
    {
      label: 'Colaboradores',
      icon: 'assets/img-menu/funcionario.png',
      submenu: [
        { label: 'Aniversariantes', link: '/pderp/colaboradores/aniversariantes' },
        { label: 'Manutenção Colaboradores', link: '#' },
        { label: 'Férias', link: '#' },
        { label: 'Holerites', link: '#' },
      ],
    },
    {
      label: 'Biblioteca',
      icon: 'assets/img-menu/livro.png',
      submenu: [
        { label: 'Livros', link: '#' },
        { label: 'CD', link: '#' },
      ],
    },
  ];

  // Alterna o estado de visibilidade de um submenu
  toggleDropdown(index: number): void {
    this.openDropdowns[index] = !this.openDropdowns[index];
  }

  // Inicializa os submenus como fechados
  constructor() {
    this.openDropdowns = Array(this.menuItems.length).fill(false);
  }
}
