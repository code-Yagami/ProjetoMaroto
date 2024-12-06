import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTabsComponent, Tab } from '../../../../../components/form-components/nav-tabs/nav-tabs.component';
import { ButtonComponentComponent } from "../../../../../components/form-components/button-component/button-component.component";

@Component({
  selector: 'app-cargos-pretendidos',
  standalone: true,
  imports: [CommonModule, NavTabsComponent, ButtonComponentComponent],
  templateUrl:'./cargos-pretendidos.component.html',
  styleUrls: ['./cargos-pretendidos.component.scss'],
})
export class CargosPretendidosComponent {
acaoBt() {
throw new Error('Method not implemented.');
}

  tabs: Tab[] = [
    { id: 'personal-data', label: 'Dados Pessoais', link: '/dados-pessoais' },
    { id: 'financial-data', label: 'Dados Financeiros', link: 'dados-financeiros'  },
    { id: 'languages', label: 'Idiomas', link: ''  },
    { id: 'positions', label: 'Cargos Pretendidos', link: 'cargos'  },
    { id: 'previous-employment', label: 'Emprego Anteriores', link: ''  },
    { id: 'skills', label: 'Conhecimentos Específicos', link: ''  },
    { id: 'search-employees', label: 'Pesquisar Colaboradores', link: ''  },
    { id: 'education', label: 'Escolaridade', link: ''  },
    { id: 'courses', label: 'Cursos', link: ''  },
    { id: 'mini-cv', label: 'Mini-Currículo', link: ''  },
    { id: 'certifications', label: 'Certificações' , link: '' },
    { id: 'upload-cv', label: 'Anexar Currículo', link: ''  }
  ];

  selectedRoles: string[] = [];
  otherRoles: string = '';

  save(): void {
    const allRoles = [...this.selectedRoles];
    if (this.otherRoles.trim()) {
      allRoles.push(...this.otherRoles.split(',').map((role) => role.trim()));
    }

    console.log('Cargos selecionados:', allRoles);
    alert('Cargos salvos com sucesso!');
  }
}
