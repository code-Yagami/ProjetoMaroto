import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SenhaComponent } from '../../router/administracao-acesso/senha/senha.component';

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
      submenu: [{ label: 'Alterar Senha', link: '/pderp/acesso/senha',  action: () => this.openSenhaModal() }],
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
        { label: 'Empréstimos', link: '#' },
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
        { label: 'Holerites', link: 'pderp/colaboradores/holerites' },
      ],
    },
    {
      label: 'Biblioteca',
      icon: 'assets/img-menu/livro.png',
      submenu: [
        { label: 'Livros', link: 'pderp/biblioteca/livros' },
        { label: 'CD', link: 'pderp/biblioteca/cd' },
      ],
    },
  ];
  dialog: any;

  // Alterna o estado de visibilidade de um submenu
  toggleDropdown(index: number): void {
    this.openDropdowns[index] = !this.openDropdowns[index];
  }

  // Inicializa os submenus como fechados
  constructor() {
    this.openDropdowns = Array(this.menuItems.length).fill(false);
  }


  openSenhaModal(): void {
    this.dialog.open(SenhaComponent, {
      width: '400px',
      data: {} // Enviar dados se necessário
    });}
}
